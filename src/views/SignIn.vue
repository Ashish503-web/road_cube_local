<template>
    <v-container fluid style="height: 100%">
        <v-row class="fill-height" justify="center" align="center">
            <v-card outlined tile width="500">
                <v-col class="secondary py-5">
                    <router-link to="/">
                        <v-img
                            src="@/assets/loyalty-logo.png"
                            width="50%"
                            style="margin: auto"
                        ></v-img>
                    </router-link>
                </v-col>

                <v-card>
                    <v-card-title class="justify-center">
                        Sign in to Roadcube
                    </v-card-title>

                    <v-form
                        v-model="valid"
                        class="px-5"
                        @submit.prevent="signIn"
                    >
                        <v-text-field
                            v-model="mobile"
                            v-mask="'##########'"
                            type="number"
                            label="Mobile Phone"
                            color="secondary"
                            outlined
                            clearable
                            :success="success.mobile"
                            :rules="rules.mobile"
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
                            :success="success.password"
                            :rules="rules.password"
                            @click:append="showPassword = !showPassword"
                        >
                        </v-text-field>

                        <v-alert v-if="errorMessage" type="error">{{
                            errorMessage
                        }}</v-alert>

                        <v-card-actions class="px-0">
                            <a
                                class="text-decoration-none"
                                @click="forgotPassword()"
                                >Forgot your password?</a
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                type="submit"
                                color="secondary"
                                tile
                                class="px-5"
                                :loading="loading"
                                :disabled="disabled"
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
    name: "SignIn",

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
            valid: false,
            disabled: true,
            loading: false,
            errorMessage: "",
            mobile: "6904242424",
            password: "secret",
            showPassword: false,
            success: {
                mobile: false,
                password: false
            },
            rules: {
                mobile: [
                    v => {
                        if (v) {
                            this.success.mobile = true;
                            return true;
                        } else {
                            return "Mobile Phone is required";
                        }
                    },
                    v =>
                        (v || "").length === 10 ||
                        "Mobile Phone must be 10 characters long"
                ],
                password: [
                    v => {
                        if (v) {
                            this.success.password = true;
                            return true;
                        } else {
                            return "Password is required";
                        }
                    },
                    v =>
                        (v || "").length >= 5 ||
                        "Password must be 6 characters long"
                ]
            }
        };
    },

    methods: {
        ...mapMutations(["setAccessToken", "setUser"]),

        async signIn() {
            try {
                this.loading = true;

                const { data } = await axios.post(
                    "https://api.roadcube.tk/v1/users/login",
                    {
                        app_provider_id: 1,
                        mobile: this.mobile,
                        password: this.password
                    }
                );

                localStorage.setItem("accessToken", data.access_token);
                this.setAccessToken(data.access_token);
                this.setUser(data.extra_data.user);
                this.$router.push("/user-stores");
            } catch (ex) {
                this.loading = false;
                this.errorMessage = ex.response.data.message;
                setTimeout(() => (this.errorMessage = ""), 5000);
            }
        },

        forgotPassword() {
            this.$router.push("/password-recovery");
        }
    },

    watch: {
        valid(val) {
            if (val) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        }
    }
};
</script>
