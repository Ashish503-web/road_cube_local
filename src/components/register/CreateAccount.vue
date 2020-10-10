<template>
    <v-stepper-content step="1" class="pa-0">
        <v-card-title class="pt-0 justify-center">
            Create an account
        </v-card-title>

        <v-form v-model="valid" class="px-5" @submit.prevent="createAccount">
            <v-autocomplete
                v-model="country"
                :items="countries"
                item-text="name"
                item-value="country_id"
                label="Country"
                color="secondary"
                item-color="secondary"
                outlined
                :success="success.country"
                :rules="rules.country"
            ></v-autocomplete>

            <v-text-field
                v-model="mobile"
                v-mask="'##########'"
                label="Mobile Phone"
                color="secondary"
                outlined
                clearable
                :success="success.mobile"
                :rules="rules.mobile"
            ></v-text-field>

            <v-alert v-if="errorMessage" type="error">{{
                errorMessage
            }}</v-alert>

            <v-card-actions class="px-0">
                Already have an account?
                <router-link to="/sign-in" class="blue--text mx-1"
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
    </v-stepper-content>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "CreateAccount",

    data() {
        return {
            valid: false,
            disabled: true,
            success: {
                country: false,
                mobile: false
            },
            rules: {
                country: [
                    v => {
                        if (v) {
                            this.success.country = true;
                            return true;
                        } else {
                            return "Mobile Phone is required";
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
                ]
            }
        };
    },

    computed: {
        ...mapState("register", ["loading", "errorMessage", "countries"]),

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
        }
    },

    methods: {
        ...mapMutations("register", ["setCountry", "setMobile"]),
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
        // this.getCountries();
    }
};
</script>
