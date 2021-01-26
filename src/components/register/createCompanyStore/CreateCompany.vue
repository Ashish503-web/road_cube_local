<template>
    <v-tab-item>
        <v-card>
            <v-card-title class="justify-center">
                Create a Company
            </v-card-title>

            <v-form v-model="valid" @submit.prevent="createCompany">
                <v-card-text class="pt-5">
                    <v-row no-gutters>
                        <v-col cols="12">
                            <v-text-field
                                v-model="company.name"
                                label="Name"
                                color="secondary"
                                outlined
                                dense
                                clearable
                                disabled
                                :rules="nameRules"
                                :success="nameSuccess"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field
                                v-model="company.email"
                                type="email"
                                label="Email"
                                color="secondary"
                                outlined
                                dense
                                clearable
                                disabled
                                :rules="emailRules"
                                :success="emailSuccess"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-alert v-if="errorMessage" type="error">{{
                    errorMessage
                }}</v-alert>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text>cancel</v-btn>
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
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

export default {
    name: "CreateCompany",

    data() {
        return {
            valid: false,
            disabled: true,
            nameSuccess: false,
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
            emailSuccess: false,
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
            company: {
                name: "",
                email: "",
                store_category_id: 1,
                store_subscription_plan_id: 2,
                country_id: 1,
                vat_country_id: 1,
                vat_number: "212121",
                primary_phone: "2101010100"
            }
        };
    },

    computed: {
        ...mapState("register", ["loading", "errorMessage"])
    },

    methods: {
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
        }
    }
};
</script>
