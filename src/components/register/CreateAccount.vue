<template>
    <v-window-item :value="1">
        <v-card-title class="pl-0">Create Account</v-card-title>

        <v-form v-model="valid" @submit.prevent="createAccount">
            <v-row no-gutters>
                <v-col cols="4">
                    <v-select
                        v-model="country"
                        :items="countries"
                        item-value="country_id"
                        menu-props="offsetY"
                        label="Country"
                        color="secondary"
                        item-color="secondary"
                        :success="success.country"
                        :rules="rules.country"
                    >
                        <template v-slot:selection="{ item }">
                            <v-row
                                no-gutters
                                justify="space-between"
                                align="center"
                                style="width: 100%"
                            >
                                <v-col cols="auto">
                                    <v-img :src="item.flag" width="25"></v-img>
                                </v-col>

                                <v-col cols="auto">
                                    {{ item.code }}
                                </v-col>

                                <v-col cols="auto">
                                    +{{ item.phone_code }}
                                </v-col>
                            </v-row>
                        </template>
                        <template v-slot:item="{ item }">
                            <v-row no-gutters>
                                <v-col class="mr-3">
                                    <img
                                        :src="item.flag"
                                        width="25"
                                        style="vertical-align: middle"
                                        class="mr-3"
                                    />
                                    {{ item.name }} ({{ item.code }})
                                </v-col>

                                <v-col cols="auto"
                                    >+{{ item.phone_code }}</v-col
                                >
                            </v-row>
                        </template>
                    </v-select>
                </v-col>

                <v-col class="pl-3">
                    <v-text-field
                        v-model="mobile"
                        v-mask="'##########'"
                        label="Mobile Phone"
                        color="secondary"
                        clearable
                        :prepend-inner-icon="icons.mdiCellphoneIphone"
                        :success="success.mobile"
                        :rules="rules.mobile"
                    ></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-checkbox
                        v-model="tos"
                        color="secondary"
                        label="I accept terms of services"
                        :success="success.tos"
                        :rules="rules.tos"
                    ></v-checkbox>
                </v-col>
            </v-row>

            <v-alert v-if="errorMessage" type="error">{{
                errorMessage
            }}</v-alert>

            <v-card-actions class="px-0">
                Already have an account?
                <router-link :to="`/${lang}/sign-in`" class="blue--text mx-1"
                    >Sign In</router-link
                >
                here.
                <v-spacer></v-spacer>
                <v-btn
                    type="submit"
                    color="secondary"
                    tile
                    class="px-5"
                    :loading="loading"
                    :disabled="disabled"
                    >register</v-btn
                >
            </v-card-actions>
        </v-form>
    </v-window-item>
</template>

<script>
import { mdiMenuDown, mdiMenuUp, mdiCellphoneIphone } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "CreateAccount",

    data() {
        return {
            icons: { mdiMenuDown, mdiMenuUp, mdiCellphoneIphone },
            menu: false,
            valid: false,
            disabled: true,
            success: {
                country: false,
                mobile: false,
                tos: false
            },
            rules: {
                country: [
                    v => {
                        if (v) {
                            this.success.country = true;
                            return true;
                        } else {
                            return "Country is required";
                        }
                    }
                ],

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

                tos: [
                    v => {
                        if (v) {
                            this.success.tos = true;
                            return true;
                        } else {
                            return "You must accept terms of services to proceed";
                        }
                    }
                ]
            }
        };
    },

    computed: {
        ...mapState("register", ["loading", "errorMessage", "countries"]),

        lang() {
            return this.$route.params.lang;
        },

        country: {
            get() {
                return this.$store.state.register.country;
            },

            set(val) {
                this.setCountry(val);
            }
        },

        mobile: {
            get() {
                return this.$store.state.register.mobile;
            },

            set(val) {
                this.setMobile(val);
            }
        },

        tos: {
            get() {
                return this.$store.state.register.tos;
            },

            set(val) {
                this.setTos(val);
            }
        }
    },

    methods: {
        ...mapMutations("register", ["setCountry", "setMobile", "setTos"]),
        ...mapActions("register", ["getCountries", "createAccount"])
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
        this.getCountries();
    }
};
</script>
