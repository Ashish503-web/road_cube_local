<template>
    <v-tab-item>
        <v-card>
            <v-card-title class="justify-center">
                Create a Store
            </v-card-title>

            <v-form v-model="valid" @submit.prevent="createStore">
                <v-card-text class="pt-0">
                    <b-select
                        v-model="appProvider"
                        :items="appProviders"
                        item-text="title"
                        return-object
                        label="App Provider"
                        :success="success.appProvider"
                        :rules="rules.appProvider"
                    ></b-select>

                    <b-select
                        v-model="subscriptionPlan"
                        :items="subscriptionPlans"
                        label="Subscription Plan"
                        :success="success.subscriptionPlan"
                        :rules="rules.subscriptionPlan"
                    ></b-select>

                    <b-select
                        v-model="giftCategory"
                        :items="giftCategories"
                        item-text="name.el"
                        item-value="gift_category_id"
                        label="Gift Category"
                        :success="success.giftCategory"
                        :rules="rules.giftCategory"
                    ></b-select>

                    <b-select
                        v-model="storeCategory"
                        :items="storeCategories"
                        item-text="name.el"
                        item-value="store_category_id"
                        label="Store Category"
                        :success="success.storeCategory"
                        :rules="rules.storeCategory"
                    ></b-select>

                    <v-row no-gutters>
                        <v-col cols="6" class="pr-2">
                            <h4 class="subtitle-1 font-weight-bold mt-3">
                                Store Details
                            </h4>

                            <b-text-field
                                v-model="name"
                                label="Name"
                                :success="success.name"
                                :rules="rules.name"
                            ></b-text-field>

                            <b-text-field
                                v-model="address"
                                label="Address"
                                :success="success.address"
                                :rules="rules.address"
                            ></b-text-field>

                            <b-text-field
                                v-model="zip"
                                v-mask="'#####'"
                                label="Zip Code"
                                :success="success.zip"
                                :rules="rules.zip"
                            ></b-text-field>

                            <b-text-field
                                v-model="vatNumber"
                                label="Vat Number"
                                :success="success.vatNumber"
                                :rules="rules.vatNumber"
                            ></b-text-field>

                            <b-text-field
                                v-model="email"
                                type="email"
                                label="Email"
                                :success="success.email"
                                :rules="rules.email"
                            ></b-text-field>

                            <b-text-field
                                v-model="primaryPhone"
                                v-mask="'##########'"
                                label="Primary Phone"
                                :success="success.primaryPhone"
                                :rules="rules.primaryPhone"
                            ></b-text-field>
                        </v-col>

                        <v-col cols="6" class="pl-2">
                            <h4 class="subtitle-1 font-weight-bold mt-3">
                                User Details
                            </h4>

                            <b-text-field
                                v-model="fullname"
                                label="Full Name"
                                :success="success.fullname"
                                :rules="rules.fullname"
                            ></b-text-field>

                            <b-text-field
                                v-model="password"
                                ref="password"
                                :type="show.password ? 'text' : 'password'"
                                label="Password"
                                append-icon="mdiEye"
                                :success="success.password"
                                :rules="rules.password"
                                @click-append="show.password = !show.password"
                            >
                            </b-text-field>

                            <b-text-field
                                v-model="confirmPassword"
                                ref="confirmPassword"
                                :type="
                                    show.confirmPassword ? 'text' : 'password'
                                "
                                label="Password"
                                append-icon="mdiEye"
                                :success="success.confirmPassword"
                                :rules="rules.confirmPassword"
                                @click-append="
                                    show.confirmPassword = !show.confirmPassword
                                "
                            >
                            </b-text-field>
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
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "CreateStore",

    data() {
        return {
            valid: false,
            disabled: true,
            success: {
                appProvider: false,
                giftCategory: false,
                subscriptionPlan: false,
                storeCategory: false,
                name: false,
                address: false,
                zip: false,
                vatNumber: false,
                email: false,
                primaryPhone: false,
                fullname: false,
                password: false,
                confirmPassword: false
            },
            rules: {
                appProvider: [
                    v => {
                        if (v) {
                            this.success.appProvider = true;
                            return true;
                        } else {
                            return "App Provider is required";
                        }
                    }
                ],
                giftCategory: [
                    v => {
                        if (v) {
                            this.success.giftCategory = true;
                            return true;
                        } else {
                            return "Gift Category is required";
                        }
                    }
                ],
                subscriptionPlan: [
                    v => {
                        if (v) {
                            this.success.subscriptionPlan = true;
                            return true;
                        } else {
                            return "Subscription Plan is required";
                        }
                    }
                ],
                storeCategory: [
                    v => {
                        if (v) {
                            this.success.storeCategory = true;
                            return true;
                        } else {
                            return "Store Category Plan is required";
                        }
                    }
                ],
                name: [
                    v => {
                        if (v) {
                            this.success.name = true;
                            return true;
                        } else {
                            return "Store Name is required";
                        }
                    },
                    v =>
                        (v || "").length >= 5 ||
                        "Name must be at least 5 characters long"
                ],
                address: [
                    v => {
                        if (v) {
                            this.success.address = true;
                            return true;
                        } else {
                            return "Address is required";
                        }
                    },
                    v =>
                        (v || "").length >= 5 ||
                        "Address must be at least 5 characters long"
                ],
                zip: [
                    v => {
                        if (v) {
                            this.success.zip = true;
                            return true;
                        } else {
                            return "Zip Code is required";
                        }
                    },
                    v =>
                        (v || "").length === 5 ||
                        "Zip Code must be 5 characters long"
                ],
                vatNumber: [
                    v => {
                        if (v) {
                            this.success.vatNumber = true;
                            return true;
                        } else {
                            return "Vat Number is required";
                        }
                    }
                ],
                email: [
                    v => {
                        if (v) {
                            this.success.email = true;
                            return true;
                        } else {
                            return "E-mail is required";
                        }
                    },
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ],
                primaryPhone: [
                    v => {
                        if (v) {
                            this.success.primaryPhone = true;
                            return true;
                        } else {
                            return "Primary Phone is required";
                        }
                    },
                    v =>
                        (v || "").length === 10 ||
                        "Primary Phone must be 10 characters long"
                ],
                fullName: [
                    v => {
                        if (v) {
                            this.success.fullName = true;
                            return true;
                        } else {
                            return "Full Name is required";
                        }
                    }
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
                ],
                confirmPassword: [
                    v => {
                        if (v) {
                            this.success.confirmPassword = true;
                            return true;
                        } else {
                            return "Must match password";
                        }
                    },
                    v => v === this.password || "Must match password"
                ]
            },
            show: {
                password: false,
                confirmPassword: false
            }
        };
    },

    computed: {
        ...mapState("register", [
            "loading",
            "errorMessage",
            "appProviders",
            "subscriptionPlans",
            "giftCategories",
            "storeCategories"
        ]),

        appProvider: {
            get() {
                return this.$store.state.register.appProvider;
            },

            set(val) {
                this.setAppProvider(val);
            }
        },

        subscriptionPlan: {
            get() {
                return this.$store.state.register.subscriptionPlan;
            },

            set(val) {
                this.setSubscriptionPlan(val);
            }
        },

        giftCategory: {
            get() {
                return this.$store.state.register.giftCategory;
            },

            set(val) {
                this.setGiftCategory(val);
            }
        },

        storeCategory: {
            get() {
                return this.$store.state.register.storeCategory;
            },

            set(val) {
                this.setStoreCategory(val);
            }
        },

        name: {
            get() {
                return this.$store.state.register.name;
            },

            set(val) {
                this.setName(val);
            }
        },

        address: {
            get() {
                return this.$store.state.register.address;
            },

            set(val) {
                this.setAddress(val);
            }
        },

        zip: {
            get() {
                return this.$store.state.register.zip;
            },

            set(val) {
                this.setZip(val);
            }
        },

        vatNumber: {
            get() {
                return this.$store.state.register.vatNumber;
            },

            set(val) {
                this.setVatNumber(val);
            }
        },

        email: {
            get() {
                return this.$store.state.register.email;
            },

            set(val) {
                this.setEmail(val);
            }
        },

        primaryPhone: {
            get() {
                return this.$store.state.register.primaryPhone;
            },

            set(val) {
                this.setPrimaryPhone(val);
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
            "setSubscriptionPlans",
            "setSubscriptionPlan",
            "setGiftCategories",
            "setGiftCategory",
            "setStoreCategory",
            "setName",
            "setAddress",
            "setZip",
            "setVatNumber",
            "setEmail",
            "setPrimaryPhone",
            "setFullname",
            "setPassword",
            "setConfirmPassword"
        ]),
        ...mapActions("register", [
            "getAppProviders",
            "getSubscriptionPlans",
            "getGiftCategories",
            "getStoreCategories",
            "createStore"
        ]),

        createStoreField(field) {
            let funcName = "set" + field[0].toUpperCase() + field.slice(1);

            return {
                get() {
                    return this.$store.state.register[field];
                },

                set(val) {
                    this[funcName](val);
                }
            };
        }
    },

    watch: {
        appProvider(val) {
            if (val) {
                this.getSubscriptionPlans();
                this.getGiftCategories();
            } else {
                this.setSubscriptionPlans([]);
                this.setGiftCategories([]);
            }
        }
    },

    mounted() {
        this.getAppProviders();
        this.getStoreCategories();
    }
};
</script>
