<template>
    <v-window-item :value="1">
        <v-card-title class="pl-0">Create Account</v-card-title>

        <v-form @submit.prevent="createAccount">
            <v-row no-gutters>
                <v-col cols="4">
                    <v-select
                        v-model="storeDetails.country_id"
                        :items="countries"
                        item-value="country_id"
                        menu-props="offsetY"
                        label="Country"
                        color="secondary"
                        item-color="secondary"
                        :success="success.country"
                        :error-messages="error.country"
                        @focus="error.country = ''"
                        @blur="validateCountry"
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
                        validate-on-blur
                        :prepend-inner-icon="icons.mdiCellphoneIphone"
                        :success="success.mobile"
                        :error-messages="error.mobile"
                        @focus="error.mobile = ''"
                        @blur="validateMobile"
                    ></v-text-field>
                </v-col>

                <v-col cols="12">
                    <v-checkbox
                        v-model="tos"
                        color="secondary"
                        :success="success.tos"
                        :error-messages="error.tos"
                        @click="validateTos"
                    >
                        <template v-slot:label>
                            <h4 class="subtitle-1 font-weight-medium">
                                I accept terms of services
                            </h4>
                        </template>
                    </v-checkbox>
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
                    :disabled="!valid"
                    >register</v-btn
                >
            </v-card-actions>
        </v-form>
    </v-window-item>
</template>

<script>
import { mdiMenuDown, mdiMenuUp, mdiCellphoneIphone } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import validators from "@/utils/validators/storePanel/createAccount";

export default {
    name: "CreateAccount",

    mixins: [validators],

    data() {
        return {
            icons: { mdiMenuDown, mdiMenuUp, mdiCellphoneIphone },
            menu: false
        };
    },

    computed: {
        ...mapState("register", [
            "loading",
            "errorMessage",
            "countries",
            "storeDetails"
        ]),

        lang() {
            return this.$route.params.lang;
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
        ...mapMutations("register", ["setMobile", "setTos"]),
        ...mapActions("register", ["getCountries", "createAccount"])
    },

    mounted() {
        this.getCountries();
    }
};
</script>
