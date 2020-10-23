<template>
    <v-container style="height: 100%">
        <v-row class="fill-height" justify="center" align="center">
            <v-card outlined width="500" tile>
                <v-col class="secondary py-5">
                    <router-link to="/">
                        <v-img
                            src="@/assets/loyalty-logo.png"
                            width="50%"
                            style="margin: auto"
                        ></v-img>
                    </router-link>
                </v-col>

                <v-tabs v-model="tab" color="secondary" centered>
                    <v-tab class="text-capitalize">company</v-tab>
                    <v-tab class="text-capitalize">store</v-tab>
                </v-tabs>

                <v-card>
                    <v-card-title class="justify-center">
                        Sign in to a {{ mode }}
                    </v-card-title>

                    <v-form
                        v-model="valid"
                        class="px-5"
                        @submit.prevent="
                            mode === 'Company' ? companySignIn() : storeSignIn()
                        "
                    >
                        <v-text-field
                            v-model="mobileLogin"
                            v-mask="'##########'"
                            type="number"
                            label="Mobile Phone"
                            color="secondary"
                            outlined
                            clearable
                            :rules="mobileRules"
                            :success="mobileSuccess"
                        ></v-text-field>

                        <v-text-field
                            v-model="password"
                            ref="password"
                            :type="showPassword ? 'text' : 'password'"
                            class="mt-1"
                            label="Password"
                            color="secondary"
                            outlined
                            clearable
                            :append-icon="icons.mdiEye"
                            :rules="passwordRules"
                            :success="passwordSuccess"
                            @click:append="showPassword = !showPassword"
                        >
                        </v-text-field>

                        <v-alert v-if="serverError" type="error">{{
                            serverError
                        }}</v-alert>

                        <v-card-actions class="px-0">
                            <a class="text-decoration-none">Forgot your password?</a>
                            <v-spacer></v-spacer>
                            <v-btn
                                type="submit"
                                color="secondary"
                                tile
                                class="px-5"
                                :disabled="disabled"
                                :loading="loading"
                                >sign in</v-btn
                            >
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import { mdiEye } from "@mdi/js";
import axios from "axios";
import { mapMutations } from "vuex";

export default {
    // beforeRouteEnter(to, from, next) {
    //     next(vm => {
    //         setTimeout(() => {
    //             if (vm.$store.state.auth.user._id) {
    //                 vm.$router.push("/");
    //             }
    //         }, 300);
    //     });
    // },

    data() {
        return {
            icons: { mdiEye },
            tab: 0,
            valid: false,
            disabled: true,
            loading: false,
            mobileLogin: "6904242424",
            mobileSuccess: false,
            showPassword: false,
            password: "secret",
            passwordSuccess: false,
            mobileRules: [
                (v) => {
                    if (v) {
                        this.mobileSuccess = true;
                        return true;
                    } else {
                        return "Mobile Phone is required";
                    }
                },
                (v) =>
                    (v || "").length === 10 ||
                    "Mobile Phone must be 10 characters long",
            ],
            passwordRules: [
                (v) => {
                    if (v) {
                        this.passwordSuccess = true;
                        return true;
                    } else {
                        return "Password is required";
                    }
                },
                (v) =>
                    (v || "").length >= 5 ||
                    "Password must be 6 characters long",
            ],
            serverError: "",
        };
    },

    computed: {
        mode() {
            return this.tab === 0 ? "Company" : "Store";
        },
    },

    methods: {
        ...mapMutations([
            "setStoreToken",
            "setStoreId",
            "setCompanyToken",
            "setCompanyId",
        ]),

        companySignIn() {
            this.loading = true;

            axios
                .post("https://api.roadcube.tk/v1/users/login", {
                    app_provider_id: 1,
                    mobile: this.mobileLogin,
                    password: this.password,
                })
                .then((res) => {
                    this.loading = false;
                    localStorage.setItem("companyId", 2);
                    this.setCompanyId(2);
                    localStorage.setItem("companyToken", res.data.access_token);
                    this.setCompanyToken(res.data.access_token);
                    this.$router.push("/loyaltyPanel");
                })
                .catch((err) => {
                    this.loading = false;
                    this.serverError = err.response.data.message;
                    setTimeout(() => (this.serverError = ""), 5000);
                });
        },

        storeSignIn() {
            this.loading = true;

            axios
                .post("https://api.roadcube.tk/v1/users/login", {
                    app_provider_id: 1,
                    mobile: this.mobileLogin,
                    password: this.password,
                })
                .then((res) => {
                    this.loading = false;
                    localStorage.setItem("storeId", 2);
                    this.setStoreId(2);
                    localStorage.setItem("storeToken", res.data.access_token);
                    this.setStoreToken(res.data.access_token);
                    this.$router.push("/storePanel");
                })
                .catch((err) => {
                    this.loading = false;
                    this.serverError = err.response.data.message;
                    setTimeout(() => (this.serverError = ""), 5000);
                });
        },
    },

    watch: {
        valid(val) {
            if (val) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        },
    },
};
</script>
