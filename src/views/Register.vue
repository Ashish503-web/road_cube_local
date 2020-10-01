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

                <v-stepper v-model="step" class="elevation-0">
                    <v-stepper-header class="elevation-0">
                        <v-stepper-step
                            step="1"
                            :complete="step > 1"
                            :color="step > 1 ? 'success' : 'secondary'"
                        ></v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            step="2"
                            :complete="step > 2"
                            :color="step > 2 ? 'success' : 'secondary'"
                        ></v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            step="3"
                            :complete="step > 3"
                            :color="step > 3 ? 'success' : 'secondary'"
                        ></v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            :complete="!!successMessage"
                            step="4"
                            :color="!!successMessage ? 'success' : 'secondary'"
                        ></v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1" class="pa-0">
                            <v-card-title class="pt-0 justify-center">
                                Create an account
                            </v-card-title>

                            <v-form
                                v-model="valid"
                                class="px-5"
                                @submit.prevent="register"
                            >
                                <v-text-field
                                    v-model="mobile"
                                    v-mask="'##########'"
                                    type="number"
                                    label="Mobile Phone"
                                    color="secondary"
                                    outlined
                                    clearable
                                    :rules="mobileRules"
                                    :success="mobileSuccess"
                                ></v-text-field>

                                <!-- 

                                <v-text-field
                                    v-model="password"
                                    ref="password"
                                    :type="showPassword ? 'text' : 'password'"
                                    class="mt-1"
                                    label="Password"
                                    color="secondary"
                                    outlined
                                    clearable
                                    append-icon="mdi-eye"
                                    :rules="passwordRules"
                                    :success="passwordSuccess"
                                    @click:append="showPassword = !showPassword"
                                >
                                </v-text-field>

                                <v-text-field
                                    v-model="confirmPassword"
                                    ref="confirmPassword"
                                    :type="
                                        showConfirmPassword
                                            ? 'text'
                                            : 'password'
                                    "
                                    class="mt-1"
                                    label="Confirm Password"
                                    color="secondary"
                                    outlined
                                    clearable
                                    append-icon="mdi-eye"
                                    :rules="confirmPasswordRules"
                                    :success="confirmPasswordSuccess"
                                    @click:append="
                                        showConfirmPassword = !showConfirmPassword
                                    "
                                ></v-text-field> -->

                                <v-alert v-if="serverError" type="error">{{
                                    serverError
                                }}</v-alert>

                                <v-card-actions class="px-0">
                                    Already have an account?
                                    <router-link
                                        to="/sign-in"
                                        class="blue--text mx-1"
                                        >Sign In</router-link
                                    >
                                    here.
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        type="submit"
                                        color="secondary"
                                        tile
                                        class="px-5"
                                        :disabled="disabled"
                                        :loading="loading"
                                        >register</v-btn
                                    >
                                </v-card-actions>
                            </v-form>
                        </v-stepper-content>

                        <v-stepper-content step="2" class="pa-0">
                            <v-card-title class="pt-0 justify-center">
                                Enter Mobile Code
                            </v-card-title>
                            <v-card-subtitle
                                class="text-center font-weight-bold"
                                >We have sent a 4 digit code to mobile number
                                you entered</v-card-subtitle
                            >

                            <v-form
                                v-model="valid"
                                class="px-5"
                                @submit.prevent="verifyMobile"
                            >
                                <v-text-field
                                    v-model="code"
                                    v-mask="'####'"
                                    type="number"
                                    label="Mobile Code"
                                    color="secondary"
                                    outlined
                                    clearable
                                    :rules="codeRules"
                                    :success="codeSuccess"
                                ></v-text-field>

                                <v-alert v-if="serverError" type="error">{{
                                    serverError
                                }}</v-alert>

                                <v-card-actions class="px-0">
                                    Didn't receive code?
                                    <router-link
                                        to="/register"
                                        class="blue--text mx-1"
                                        >Resend</router-link
                                    >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        type="submit"
                                        color="secondary"
                                        tile
                                        class="px-5"
                                        :disabled="disabled"
                                        :loading="loading"
                                        >verify</v-btn
                                    >
                                </v-card-actions>
                            </v-form>
                        </v-stepper-content>

                        <v-stepper-content step="3" class="pa-0">
                            <v-card-title class="pt-0 justify-center">
                                Create a Company / Store
                            </v-card-title>

                            <v-tabs v-model="tab" color="secondary" centered>
                                <v-tab class="text-capitalize">company</v-tab>
                                <v-tab class="text-capitalize">store</v-tab>
                            </v-tabs>

                            <v-tabs-items v-model="tab">
                                <v-tab-item>
                                    <v-card>
                                        <v-card-title class="justify-center">
                                            Create a {{ mode }}
                                        </v-card-title>

                                        <v-form
                                            v-model="valid"
                                            @submit.prevent="createCompany"
                                        >
                                            <v-card-text class="pt-5">
                                                <v-row no-gutters>
                                                    <v-col cols="12">
                                                        <v-text-field
                                                            v-model="
                                                                company.name
                                                            "
                                                            label="Name"
                                                            color="secondary"
                                                            outlined
                                                            dense
                                                            clearable
                                                            :rules="nameRules"
                                                            :success="
                                                                nameSuccess
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12">
                                                        <v-text-field
                                                            v-model="
                                                                company.email
                                                            "
                                                            type="email"
                                                            label="Email"
                                                            color="secondary"
                                                            outlined
                                                            dense
                                                            clearable
                                                            :rules="emailRules"
                                                            :success="
                                                                emailSuccess
                                                            "
                                                        ></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>

                                            <v-alert
                                                v-if="serverError"
                                                type="error"
                                                >{{ serverError }}</v-alert
                                            >

                                            <v-divider></v-divider>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>

                                                <v-btn
                                                    text
                                                    @click="shopDialog = false"
                                                    >cancel</v-btn
                                                >
                                                <v-btn
                                                    type="submit"
                                                    color="secondary"
                                                    class="px-5"
                                                    depressed
                                                    :disabled="disabled"
                                                    :loading="loading"
                                                >
                                                    save
                                                </v-btn>
                                            </v-card-actions>
                                        </v-form>
                                    </v-card>
                                </v-tab-item>

                                <v-tab-item>
                                    <v-card>
                                        <v-card-title class="justify-center">
                                            Create a {{ mode }}
                                        </v-card-title>

                                        <v-form
                                            v-model="valid"
                                            @submit.prevent="createStore"
                                        >
                                            <v-card-text class="pt-5">
                                                <v-row no-gutters>
                                                    <v-col cols="12">
                                                        <v-text-field
                                                            v-model="store.name"
                                                            label="Name"
                                                            color="secondary"
                                                            outlined
                                                            dense
                                                            clearable
                                                            :rules="nameRules"
                                                            :success="
                                                                nameSuccess
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12">
                                                        <v-text-field
                                                            v-model="
                                                                store.address
                                                            "
                                                            label="Address"
                                                            color="secondary"
                                                            outlined
                                                            dense
                                                            clearable
                                                            :rules="
                                                                addressRules
                                                            "
                                                            :success="
                                                                addressSuccess
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12">
                                                        <v-text-field
                                                            v-model="store.zip"
                                                            v-mask="'#####'"
                                                            label="Zip Code"
                                                            color="secondary"
                                                            outlined
                                                            dense
                                                            clearable
                                                            :rules="zipRules"
                                                            :success="
                                                                zipSuccess
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col cols="12">
                                                        <v-text-field
                                                            v-model="
                                                                store.email
                                                            "
                                                            type="email"
                                                            label="Email"
                                                            color="secondary"
                                                            outlined
                                                            dense
                                                            clearable
                                                            :rules="emailRules"
                                                            :success="
                                                                emailSuccess
                                                            "
                                                        ></v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-card-text>

                                            <v-alert
                                                v-if="serverError"
                                                type="error"
                                                >{{ serverError }}</v-alert
                                            >

                                            <v-divider></v-divider>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>

                                                <v-btn
                                                    text
                                                    @click="shopDialog = false"
                                                    >cancel</v-btn
                                                >
                                                <v-btn
                                                    type="submit"
                                                    color="secondary"
                                                    class="px-5"
                                                    depressed
                                                    :disabled="disabled"
                                                    :loading="loading"
                                                >
                                                    save
                                                </v-btn>
                                            </v-card-actions>
                                        </v-form>
                                    </v-card>
                                </v-tab-item>
                            </v-tabs-items>
                        </v-stepper-content>

                        <v-stepper-content step="4" class="pa-0">
                            <v-card v-if="!successMessage">
                                <v-card-title class="pt-0 justify-center">
                                    Sign in to a {{ mode }}
                                </v-card-title>

                                <v-form
                                    v-model="valid"
                                    class="px-5"
                                    @submit.prevent="
                                        mode === 'Company'
                                            ? companySignIn()
                                            : storeSignIn()
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
                                        :type="
                                            showPassword ? 'text' : 'password'
                                        "
                                        class="mt-1"
                                        label="Password"
                                        color="secondary"
                                        outlined
                                        clearable
                                        :append-icon="icons.mdiEye"
                                        :rules="passwordRules"
                                        :success="passwordSuccess"
                                        @click:append="
                                            showPassword = !showPassword
                                        "
                                    >
                                    </v-text-field>

                                    <v-alert v-if="serverError" type="error">{{
                                        serverError
                                    }}</v-alert>

                                    <v-card-actions class="px-0">
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

                            <v-card v-else>
                                <v-card-title
                                    class="success white--text justify-center pb-0"
                                >
                                    Congratulations!
                                </v-card-title>
                                <v-row
                                    no-gutters
                                    justify="center"
                                    class="success"
                                >
                                    <v-col cols="auto">
                                        <v-alert
                                            type="success"
                                            class="bb"
                                            dense
                                            >{{ successMessage }}</v-alert
                                        >
                                    </v-col>
                                </v-row>

                                <div class="text-center py-5">
                                    <v-btn
                                        color="secondary"
                                        class="px-10"
                                        outlined
                                        tile
                                        :to="
                                            mode === 'Company'
                                                ? 'loyaltyPanel'
                                                : '/storePanel'
                                        "
                                        >go to {{ mode }}</v-btn
                                    >
                                </div>
                            </v-card>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import { mdiEye } from "@mdi/js";
import { mapMutations } from "vuex";
import axios from "axios";

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
            packages: ["Επιλέξτε..", "Single", "Brand", "Intro"],
            giftCategories: [
                "Auto - Moto",
                "Entertainment",
                "Sports, Fitness",
                "Travel, Leisure",
                "Food, Drink",
                "For the House",
                "Clothing, Footwear, Accessories",
                "Health, Care, Beauty",
                "Department Stores",
                "Others",
                "Technology"
            ],
            region: "",
            regions: ["Region 1", "Region 2", "Region 3"],
            step: 1,
            tab: 0,
            serverError: "",
            valid: false,
            disabled: true,
            loading: false,
            mobile: "",
            mobileSuccess: false,
            code: "",
            codeSuccess: false,
            email: "",
            emailSuccess: false,
            nameSuccess: false,
            addressSuccess: false,
            zipSuccess: false,
            password: "secret",
            showPassword: false,
            passwordSuccess: false,
            confirmPassword: "",
            showConfirmPassword: false,
            confirmPasswordSuccess: false,
            mobileRules: [
                v => {
                    if (v) {
                        this.mobileSuccess = true;
                        return true;
                    } else {
                        return "Mobile Phone is required";
                    }
                },
                v =>
                    (v || "").length === 10 ||
                    "Mobile Phone must be 10 characters long"
            ],
            codeRules: [
                v => {
                    if (v) {
                        this.codeSuccess = true;
                        return true;
                    } else {
                        return "Mobile Code is required";
                    }
                },
                v =>
                    (v || "").length === 4 ||
                    "Mobile Code must be 4 characters long"
            ],
            nameRules: [
                v => {
                    if (v) {
                        this.nameSuccess = true;
                        return true;
                    } else {
                        return "Name is required";
                    }
                },
                v =>
                    (v || "").length >= 5 ||
                    "Name must be at least 5 characters long"
            ],
            addressRules: [
                v => {
                    if (v) {
                        this.addressSuccess = true;
                        return true;
                    } else {
                        return "Address is required";
                    }
                },
                v =>
                    (v || "").length >= 5 ||
                    "Address must be at least 5 characters long"
            ],
            zipRules: [
                v => {
                    if (v) {
                        this.zipSuccess = true;
                        return true;
                    } else {
                        return "Zip Code is required";
                    }
                },
                v =>
                    (v || "").length === 5 ||
                    "Zip Code must be 5 characters long"
            ],
            emailRules: [
                v => {
                    if (v) {
                        this.emailSuccess = true;
                        return true;
                    } else {
                        return "E-mail is required";
                    }
                },
                v => /.+@.+/.test(v) || "E-mail must be valid"
            ],
            passwordRules: [
                v => {
                    if (v) {
                        this.passwordSuccess = true;
                        return true;
                    } else {
                        return "Password is required";
                    }
                },
                v =>
                    (v || "").length >= 5 ||
                    "Password must be 6 characters long"
            ],
            confirmPasswordRules: [
                v => {
                    if (v) {
                        this.confirmPasswordSuccess = true;
                        return true;
                    } else {
                        return "Must match password";
                    }
                },
                v => v === this.password || "Must match password"
            ],
            company: {
                name: "",
                email: "",
                store_category_id: 1,
                store_subscription_plan_id: 2,
                country_id: 1,
                vat_country_id: 1,
                vat_number: "212121",
                primary_phone: "2101010100"
            },
            store: {
                name: "",
                address: "",
                zip: "",
                email: "",
                lat: 35.124233,
                lon: 11.432112,
                vat_number: "132134120",
                primary_phone: "2109090890",
                store_category_id: 1,
                parent_id: 1,
                store_subscription_plan_id: 2,
                country_id: 1
            },
            mobileLogin: "",
            successMessage: ""
        };
    },

    computed: {
        user() {
            return this.$store.state.user;
        },

        mode() {
            return this.tab === 0 ? "Company" : "Store";
        }
    },

    methods: {
        ...mapMutations([
            "setStoreToken",
            "setStoreId",
            "setCompanyToken",
            "setCompanyId",
            "setUser"
        ]),

        register() {
            this.loading = true;

            axios
                .post("https://api.roadcube.tk/v1/users/registration/init", {
                    mobile: this.mobile,
                    country_id: 1,
                    tos: true
                })
                .then(res => {
                    this.loading = false;
                    this.step++;
                    this.setUser(res.data.data.user);
                    this.code = this.user.mobile_verification_code;
                })
                .catch(err => {
                    this.loading = false;
                    this.serverError = err.response.data.message;
                    setTimeout(() => (this.serverError = ""), 5000);
                });
        },

        verifyMobile() {
            this.loading = true;

            axios
                .post("https://api.roadcube.tk/v1/users/mobile/verification", {
                    user_registration_identifier: this.user
                        .user_registration_identifier,
                    mobile_verification_code: this.code
                })
                .then(res => {
                    this.loading = false;
                    this.step++;
                    this.mobileLogin = this.mobile;
                })
                .catch(err => {
                    this.loading = false;
                    this.serverError = err.response.data.message;
                    setTimeout(() => (this.serverError = ""), 5000);
                });
        },

        createCompany() {
            this.loading = true;

            axios
                .post("https://api.roadcube.tk/v1/companies/", {
                    company_details: this.company,
                    user_details: {
                        user_registration_identifier: this.user
                            .user_registration_identifier,
                        app_provider_id: 1,
                        full_name: "Bob Marsh",
                        password: "secret",
                        password_confirmation: "secret",
                        referral: "Facebook",
                        marketing: true,
                        birth_date: "1980-01-01",
                        tos: true
                    },
                    loyalty_details: {
                        country_id: 1,
                        name: {
                            el: "Test Loyalty Program",
                            en: "Test Loyalty Program"
                        },
                        points_label: "TT Points",
                        description: {
                            el: "Fake Loyalty Program",
                            en: "Fake Loyalty Program"
                        }
                    }
                })
                .then(res => {
                    this.loading = false;
                    this.step++;
                    localStorage.setItem("companyId", res.data.data.store_id);
                    this.setCompanyId(res.data.data.store_id);
                })
                .catch(err => {
                    this.loading = false;
                    this.serverError = err.response.data.message;
                    setTimeout(() => (this.serverError = ""), 5000);
                });
        },

        createStore() {
            this.loading = true;

            axios
                .post("https://api.roadcube.tk/v1/stores/", {
                    store_details: this.store,
                    user_details: {
                        user_registration_identifier: this.user
                            .user_registration_identifier,
                        app_provider_id: 1,
                        full_name: "Bob Marsh",
                        password: "secret",
                        password_confirmation: "secret",
                        referral: "Facebook",
                        marketing: true,
                        birth_date: "1980-01-01",
                        tos: true
                    }
                })
                .then(res => {
                    this.loading = false;
                    this.step++;
                    localStorage.setItem("storeId", res.data.data.store_id);
                    this.setStoreId(res.data.data.store_id);
                })
                .catch(err => {
                    this.loading = false;
                    this.serverError = err.response.data.message;
                    setTimeout(() => (this.serverError = ""), 5000);
                });
        },

        companySignIn() {
            this.loading = true;

            axios
                .post("https://api.roadcube.tk/v1/users/login", {
                    app_provider_id: 1,
                    mobile: this.mobileLogin,
                    password: this.password
                })
                .then(res => {
                    this.loading = false;
                    localStorage.setItem(
                        "companyAccessToken",
                        res.data.access_token
                    );
                    this.setCompanyToken(res.data.access_token);
                    this.successMessage =
                        "You have successfully created a company";
                })
                .catch(err => {
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
                    password: this.password
                })
                .then(res => {
                    this.loading = false;
                    localStorage.setItem(
                        "storeAccessToken",
                        res.data.access_token
                    );
                    this.setStoreToken(res.data.access_token);
                    this.successMessage =
                        "You have successfully created a store";
                })
                .catch(err => {
                    this.loading = false;
                    this.serverError = err.response.data.message;
                    setTimeout(() => (this.serverError = ""), 5000);
                });
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
