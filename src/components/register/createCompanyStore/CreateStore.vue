<template>
    <v-tab-item>
        <v-card-title class="justify-center"> Create a Store </v-card-title>

        <v-form autocomplete="off" @submit.prevent="createStore">
            <v-card-text class="pt-0">
                <v-row
                    v-if="storeDetails.store_subscription_plan_id"
                    no-gutters
                >
                    <v-col cols="12">
                        <h4 class="subtitle-1 font-weight-bold mt-3">
                            User Details
                        </h4>

                        <v-text-field
                            v-model="fullname"
                            label="Full Name"
                            color="secondary"
                            clearable
                            :prepend-inner-icon="icons.mdiAccount"
                            :success="success.fullname"
                            :error-messages="error.fullname"
                            @focus="error.fullname = ''"
                            @blur="validateFullname"
                        ></v-text-field>

                        <v-text-field
                            v-model="password"
                            ref="password"
                            :type="show.password ? 'text' : 'password'"
                            label="Password"
                            color="secondary"
                            clearable
                            :prepend-inner-icon="icons.mdiLock"
                            :append-icon="icons.mdiEye"
                            :success="success.password"
                            :error-messages="error.password"
                            @focus="error.password = ''"
                            @blur="validatePassword"
                            @click:append="show.password = !show.password"
                        >
                        </v-text-field>

                        <v-text-field
                            v-model="confirmPassword"
                            ref="confirmPassword"
                            :type="show.confirmPassword ? 'text' : 'password'"
                            label="Confirm Password"
                            color="secondary"
                            clearable
                            :prepend-inner-icon="icons.mdiLockOutline"
                            :append-icon="icons.mdiEye"
                            :success="success.confirmPassword"
                            :error-messages="error.confirmPassword"
                            @focus="error.confirmPassword = ''"
                            @blur="validateConfirmPassword"
                            @click:append="
                                show.confirmPassword = !show.confirmPassword
                            "
                        >
                        </v-text-field>

                        <v-row no-gutters align="center">
                            <v-col cols="auto">
                                <v-checkbox
                                    color="secondary"
                                    class="mt-3 pt-0"
                                    hide-details="auto"
                                ></v-checkbox>
                            </v-col>
                            <v-col
                                cols="11"
                                class="mt-3 subtitle-1 font-weight-medium"
                            >
                                I accept
                                <router-link
                                    class="blue--text"
                                    to="/terms-of-service"
                                    >Terms of Services</router-link
                                >
                                and
                                <router-link
                                    class="blue--text"
                                    to="/privacy-policy"
                                    >Privacy Policy</router-link
                                >
                            </v-col>
                            <v-col cols="auto">
                                <v-checkbox
                                    color="secondary"
                                    class="mt-3 pt-0"
                                    hide-details="auto"
                                ></v-checkbox>
                            </v-col>
                            <v-col
                                cols="11"
                                class="mt-3 subtitle-1 font-weight-medium"
                            >
                                I accept
                                <router-link
                                    class="blue--text"
                                    to="/direct-marketing"
                                >
                                    Direct Marketing
                                </router-link>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12">
                        <h4 class="subtitle-1 font-weight-bold mt-7">
                            Store Details
                        </h4>

                        <v-text-field
                            v-model="storeDetails.name"
                            label="Store Name"
                            color="secondary"
                            clearable
                            :success="success.name"
                            :error-messages="error.name"
                            @focus="error.name = ''"
                            @blur="validateName"
                        ></v-text-field>

                        <Places />

                        <v-text-field
                            v-model="storeDetails.address"
                            label="Address"
                            color="secondary"
                            clearable
                            :success="success.address"
                            :error-messages="error.address"
                            @focus="error.address = ''"
                            @blur="validateAddress"
                        ></v-text-field>

                        <v-text-field
                            v-model="storeDetails.zip"
                            v-mask="'#####'"
                            label="Zip Code"
                            color="secondary"
                            clearable
                            :success="success.zip"
                            :error-messages="error.zip"
                            @focus="error.zip = ''"
                            @blur="validateZip"
                        ></v-text-field>

                        <v-text-field
                            v-model="storeDetails.vat_number"
                            v-mask="'#########'"
                            label="Vat Number"
                            color="secondary"
                            clearable
                            :success="success.vatNumber"
                            :error-messages="error.vatNumber"
                            @focus="error.vatNumber = ''"
                            @blur="validateVatNumber"
                        ></v-text-field>

                        <v-text-field
                            v-model="storeDetails.email"
                            type="email"
                            label="Email"
                            color="secondary"
                            clearable
                            :success="success.email"
                            :error-messages="error.email"
                            @focus="error.email = ''"
                            @blur="validateEmail"
                        ></v-text-field>

                        <v-text-field
                            v-model="storeDetails.primary_phone"
                            v-mask="'##########'"
                            label="Primary Phone"
                            color="secondary"
                            clearable
                            autocomplete="off"
                            :success="success.primaryPhone"
                            :error-messages="error.primaryPhone"
                            @focus="error.primaryPhone = ''"
                            @blur="validatePrimaryPhone"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-alert v-if="errorMessage" type="error">{{
                errorMessage
            }}</v-alert>

            <v-card-actions>
                <v-btn
                    type="submit"
                    color="secondary"
                    class="text-capitalize"
                    style="font-size: 1rem"
                    block
                    depressed
                    :disabled="!valid"
                    :loading="loading"
                >
                    create store
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-tab-item>
</template>

<script>
import { mdiAccount, mdiLock, mdiLockOutline, mdiEye } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

import axios from "axios";

import Places from "./Places.vue";
import validators from "@/utils/validators/storePanel/createStore";

export default {
    name: "CreateStore",

    components: { Places },

    mixins: [validators],

    data() {
        return {
            icons: { mdiAccount, mdiLock, mdiLockOutline, mdiEye },
            show: {
                password: false,
                confirmPassword: false
            }
        };
    },

    computed: {
        ...mapState("register", ["loading", "errorMessage", "storeDetails"]),

        lang() {
            return this.$route.params.lang;
        },

        appProvider: {
            get() {
                return this.$store.state.register.appProvider;
            },

            set(val) {
                this.setAppProvider(val);
            }
        },

        fullname: {
            get() {
                return this.$store.state.register.fullname;
            },

            set(val) {
                this.setFullname(val);
            }
        },

        password: {
            get() {
                return this.$store.state.register.password;
            },

            set(val) {
                this.setPassword(val);
            }
        },

        confirmPassword: {
            get() {
                return this.$store.state.register.confirmPassword;
            },

            set(val) {
                this.setConfirmPassword(val);
            }
        }
    },

    methods: {
        ...mapMutations("register", [
            "setAppProvider",
            "setFullname",
            "setPassword",
            "setConfirmPassword"
        ]),
        ...mapActions("register", ["createStore"])
    },

    mounted() {
        this.$clearFocus();
    }
};
</script>
