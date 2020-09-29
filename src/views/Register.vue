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
                            step="4"
                            color="secondary"
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
                                @submit.prevent
                            >
                                <v-text-field
                                    v-model="mobilePhone"
                                    v-mask="'##########'"
                                    type="number"
                                    label="Mobile Phone"
                                    color="secondary"
                                    outlined
                                    clearable
                                    :rules="mobilePhoneRules"
                                    :success="mobilePhoneSuccess"
                                ></v-text-field>

                                <!-- <v-text-field
                                    v-model="email"
                                    type="email"
                                    label="Email"
                                    color="secondary"
                                    outlined
                                    clearable
                                    :rules="emailRules"
                                    :success="emailSuccess"
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
                                        @click="step++"
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
                                @submit.prevent
                            >
                                <v-text-field
                                    v-model="mobileCode"
                                    v-mask="'####'"
                                    type="number"
                                    label="Mobile Code"
                                    color="secondary"
                                    outlined
                                    clearable
                                    :rules="mobileCodeRules"
                                    :success="mobileCodeSuccess"
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
                                        @click="step++"
                                        >verify</v-btn
                                    >
                                </v-card-actions>
                            </v-form>
                        </v-stepper-content>

                        <v-stepper-content step="3" class="pa-0">
                            <v-card-title class="pt-0 justify-center">
                                Create a Company / Store
                            </v-card-title>

                            <div class="text-center">
                                <v-btn
                                    color="secondary"
                                    width="250"
                                    outlined
                                    tile
                                    @click="
                                        () => {
                                            mode = 'Company';
                                            step++;
                                        }
                                    "
                                    >create company</v-btn
                                >
                            </div>

                            <div class="text-center mt-3 mb-5">
                                <v-btn
                                    color="secondary"
                                    width="250"
                                    outlined
                                    tile
                                    @click="
                                        () => {
                                            mode = 'Store';
                                            step++;
                                        }
                                    "
                                    >create store</v-btn
                                >
                            </div>
                        </v-stepper-content>

                        <v-stepper-content step="4" class="pa-0">
                            <v-card>
                                <v-card-title class="pt-0 justify-center">
                                    Create a {{ mode }}
                                </v-card-title>

                                <v-divider></v-divider>

                                <v-card-text class="pt-5">
                                    <v-form>
                                        <v-row no-gutters>
                                            <v-col cols="6" class="pr-2">
                                                <v-select
                                                    :items="packages"
                                                    menu-props="offsetY"
                                                    label="Select Package"
                                                    color="secondary"
                                                    item-color="secondary"
                                                    outlined
                                                    dense
                                                    hide-details
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="6" class="pl-2">
                                                <v-select
                                                    :items="giftCategories"
                                                    menu-props="offsetY"
                                                    label="Choose Gift Category"
                                                    color="secondary"
                                                    item-color="secondary"
                                                    outlined
                                                    dense
                                                    hide-details
                                                ></v-select>
                                            </v-col>

                                            <v-col cols="6" class="pr-2">
                                                <v-text-field
                                                    label="Name of Shop"
                                                    color="secondary"
                                                    class="mt-3"
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="pl-2">
                                                <v-text-field
                                                    label="Name of Shop (in app)"
                                                    color="secondary"
                                                    class="mt-3"
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="6" class="pr-2">
                                                <v-select
                                                    :items="regions"
                                                    menu-props="offsetY"
                                                    label="Select Region"
                                                    color="secondary"
                                                    item-color="secondary"
                                                    class="mt-3"
                                                    outlined
                                                    dense
                                                    hide-details
                                                ></v-select>
                                            </v-col>
                                            <v-col cols="6" class="pl-2">
                                                <v-form
                                                    @submit.prevent="addRegion"
                                                >
                                                    <v-row no-gutters>
                                                        <v-col cols="8">
                                                            <v-text-field
                                                                v-model="region"
                                                                label="Add Region"
                                                                color="secondary"
                                                                class="mt-3"
                                                                outlined
                                                                dense
                                                                clearable
                                                                hide-details
                                                                :prepend-inner-icon="
                                                                    icons.mdiPlus
                                                                "
                                                            ></v-text-field>
                                                        </v-col>

                                                        <v-col
                                                            cols="4"
                                                            class="pl-3"
                                                        >
                                                            <v-btn
                                                                type="submit"
                                                                color="secondary"
                                                                class="text-capitalize mt-3"
                                                                height="40"
                                                                depressed
                                                                >add</v-btn
                                                            >
                                                        </v-col>
                                                    </v-row>
                                                </v-form>
                                            </v-col>

                                            <v-col cols="6" class="pr-2">
                                                <v-text-field
                                                    type="email"
                                                    label="Email of Shop"
                                                    color="secondary"
                                                    class="mt-3"
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="pl-2">
                                                <v-text-field
                                                    type="password"
                                                    label="Password of Shop"
                                                    color="secondary"
                                                    class="mt-3"
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="6" class="pr-2">
                                                <v-autocomplete
                                                    label="Address of Shop"
                                                    color="secondary"
                                                    item-color="secondary"
                                                    class="mt-3"
                                                    outlined
                                                    dense
                                                    clearable
                                                    open-on-clear
                                                    hide-details
                                                ></v-autocomplete>
                                            </v-col>
                                            <v-col cols="6" class="pl-2">
                                                <v-text-field
                                                    label="T.K"
                                                    color="secondary"
                                                    class="mt-3"
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="6" class="pr-2">
                                                <v-text-field
                                                    type="number"
                                                    label="Number of Shop"
                                                    color="secondary"
                                                    class="mt-3"
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="pl-2">
                                                <v-text-field
                                                    label="ID"
                                                    color="secondary"
                                                    class="mt-3"
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details
                                                ></v-text-field>
                                            </v-col>

                                            <v-col cols="6" class="pr-2">
                                                <v-text-field
                                                    type="number"
                                                    label="Longitude(x)"
                                                    color="secondary"
                                                    class="mt-3"
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="pl-2">
                                                <v-text-field
                                                    type="number"
                                                    label="Latitude(y)"
                                                    color="secondary"
                                                    class="mt-3"
                                                    outlined
                                                    dense
                                                    clearable
                                                    hide-details
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-card-text>

                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn text @click="shopDialog = false"
                                        >cancel</v-btn
                                    >
                                    <v-btn
                                        color="secondary"
                                        class="px-5"
                                        depressed
                                    >
                                        save
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import { mdiPlus, mdiPencilOutline } from "@mdi/js";
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
            icons: { mdiPlus, mdiPencilOutline },
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
            mode: "",
            serverError: "",
            valid: false,
            disabled: true,
            showPassword: false,
            showConfirmPassword: false,
            mobilePhone: "",
            mobilePhoneSuccess: false,
            mobileCode: "",
            mobileCodeSuccess: false,
            email: "",
            emailSuccess: false,
            password: "",
            passwordSuccess: false,
            confirmPassword: "",
            confirmPasswordSuccess: false,
            mobilePhoneRules: [
                v => {
                    if (v) {
                        this.mobilePhoneSuccess = true;
                        return true;
                    } else {
                        return "Mobile Phone is required";
                    }
                },
                v =>
                    (v || "").length === 10 ||
                    "Mobile Phone must be 10 characters long"
            ],
            mobileCodeRules: [
                v => {
                    if (v) {
                        this.mobileCodeSuccess = true;
                        return true;
                    } else {
                        return "Mobile Code is required";
                    }
                },
                v =>
                    (v || "").length === 4 ||
                    "Mobile Code must be 4 characters long"
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
                    "Password must be at least 5 characters long"
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
            store_details: {
                name: "Demo aaa",
                address: "Test Address 42",
                zip: "12345",
                lat: 35.124233,
                lon: 11.432112,
                vat_number: "132134120",
                email: "email_of_store@example.com",
                primary_phone: "2109090890",
                store_category_id: 1,
                parent_id: 1,
                store_subscription_plan_id: 2,
                country_id: 1
            },
            user_details: {
                user_registration_identifier: "BZKRBK-ZZ43-6MK7WR-014020",
                app_provider_id: 1,
                full_name: "Bob Marsh",
                password: "secret",
                password_confirmation: "secret",
                referral: "Facebook",
                marketing: true,
                birth_date: "1980-01-01",
                tos: true
            }
        };
    },

    methods: {
        ...mapMutations(["setToken", "setUser"]),

        register() {
            this.disabled = true;
            this.$axios
                .post(
                    "https://evening-headland-21583.herokuapp.com/api/users",
                    {
                        username: this.username,
                        email: this.email,
                        password: this.password
                    }
                )
                .then(res => {
                    localStorage.setItem("token", res.headers["x-auth-token"]);
                    this.setToken(res.headers["x-auth-token"]);
                    this.setUser(res.data);
                    this.$router.replace("/");
                })
                .catch(err => {
                    this.serverError = err.response.data;
                    setTimeout(() => (this.serverError = ""), 5000);
                    this.disabled = false;
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

    // mounted() {
    //     axios
    //         .post("https://api.roadcube.tk/v1/users/registration/init", {
    //             mobile: "6988361172",
    //             country_id: 1,
    //             tos: true
    //         })
    //         .then(res => console.log(res))
    //         .catch(err => console.error(err));
    // }
};
</script>
