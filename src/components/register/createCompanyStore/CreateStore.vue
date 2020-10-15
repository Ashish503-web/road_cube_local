<template>
    <v-tab-item>
        <v-card-title class="justify-center"> Create a Store </v-card-title>

        <v-form v-model="valid" @submit.prevent="createStore">
            <v-card-text class="pt-0">
                <v-row v-if="subscriptionPlan" no-gutters>
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
                            :rules="rules.fullname"
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
                            :rules="rules.password"
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
                            :rules="rules.confirmPassword"
                            @click:append="
                                show.confirmPassword = !show.confirmPassword
                            "
                        >
                        </v-text-field>
                    </v-col>

                    <v-col cols="12">
                        <h4 class="subtitle-1 font-weight-bold mt-3">
                            Store Details
                        </h4>

                        <v-select
                            v-model="giftCategory"
                            :items="giftCategories"
                            item-text="name.el"
                            item-value="gift_category_id"
                            menu-props="offsetY"
                            label="Gift Category"
                            color="secondary"
                            item-color="secondary"
                            clearable
                            :success="success.giftCategory"
                            :rules="rules.giftCategory"
                        ></v-select>

                        <v-select
                            v-model="storeCategory"
                            :items="storeCategories"
                            item-text="name.en"
                            item-value="store_category_id"
                            menu-props="offsetY"
                            label="Store Category"
                            color="secondary"
                            item-color="secondary"
                            clearable
                            :success="success.storeCategory"
                            :rules="rules.storeCategory"
                        ></v-select>

                        <v-text-field
                            v-model="name"
                            label="Store Name"
                            color="secondary"
                            clearable
                            :success="success.name"
                            :rules="rules.name"
                        ></v-text-field>

                        <v-text-field
                            v-model="address"
                            label="Address"
                            color="secondary"
                            clearable
                            :success="success.address"
                            :rules="rules.address"
                        ></v-text-field>

                        <v-text-field
                            v-model="zip"
                            v-mask="'#####'"
                            label="Zip Code"
                            color="secondary"
                            clearable
                            :success="success.zip"
                            :rules="rules.zip"
                        ></v-text-field>

                        <v-text-field
                            v-model="vatNumber"
                            v-mask="'#########'"
                            label="Vat Number"
                            color="secondary"
                            clearable
                            :success="success.vatNumber"
                            :rules="rules.vatNumber"
                        ></v-text-field>

                        <v-text-field
                            v-model="email"
                            type="email"
                            label="Email"
                            color="secondary"
                            clearable
                            :success="success.email"
                            :rules="rules.email"
                        ></v-text-field>

                        <v-text-field
                            v-model="primaryPhone"
                            v-mask="'##########'"
                            label="Primary Phone"
                            color="secondary"
                            clearable
                            :success="success.primaryPhone"
                            :rules="rules.primaryPhone"
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
    </v-tab-item>
</template>

<script>
import axios from "axios";
import { mdiAccount, mdiLock, mdiLockOutline, mdiEye } from "@mdi/js";
import validators from "./storeValidators";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "CreateStore",
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
        ...mapState("register", [
            "loading",
            "errorMessage",
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
            "getGiftCategories",
            "getStoreCategories",
            "createStore"
        ])
    },

    watch: {
        valid(val) {
            if (val) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        }
    },

    mounted() {
        this.$clearFocus();
        this.getGiftCategories();
        this.getStoreCategories();

        // axios
        //     .post(
        //         `https://maps.googleapis.com/maps/api/js?key=AIzaSyBO7NVvj3D2unctftPpj-O0n3aoS0MbUEQ&libraries=places&callback=initMap`
        //     )
        //     .then(res => console.log(res))
        //     .catch(err => console.error(err));
    }
};
</script>
