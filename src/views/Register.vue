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
                        <fragment v-for="n in 4" :key="n">
                            <v-stepper-step
                                :step="n"
                                :complete="step > n"
                                :color="step > n ? 'success' : 'secondary'"
                            ></v-stepper-step>

                            <v-divider></v-divider>
                        </fragment>
                    </v-stepper-header>

                    <v-stepper-items>
                        <CreateAccount />

                        <MobileCode />

                        <CreateCompanyStore />

                        <SuccessMessage />
                    </v-stepper-items>
                </v-stepper>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import { Fragment } from "vue-fragment";
import CreateAccount from "@/components/register/CreateAccount.vue";
import MobileCode from "@/components/register/MobileCode.vue";
import CreateCompanyStore from "@/components/register/createCompanyStore";
import SuccessMessage from "@/components/register/SuccessMessage.vue";

export default {
    name: "Register",

    components: {
        Fragment,
        CreateAccount,
        MobileCode,
        CreateCompanyStore,
        SuccessMessage
    },

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
            regions: ["Region 1", "Region 2", "Region 3"]
        };
    },

    computed: {
        step: {
            get() {
                return this.$store.state.register.step;
            },

            set(val) {
                this.setStep(val);
            }
        }
    },

    methods: {
        ...mapMutations("register", [
            "setMobile",
            "setUserRegistrationIdentifier",
            "setMobileVerificationCode"
        ]),
        ...mapMutations("register", ["setStep"])
    },

    mounted() {
        const registrationStep = localStorage.getItem("registrationStep");
        this.step = registrationStep;

        const userRegistrationIdentifier = localStorage.getItem(
            "userRegistrationIdentifier"
        );
        const mobile = localStorage.getItem("mobile");
        const mobileVerificationCode = localStorage.getItem(
            "mobileVerificationCode"
        );

        this.setMobile(mobile);
        this.setUserRegistrationIdentifier(userRegistrationIdentifier);
        this.setMobileVerificationCode(mobileVerificationCode);
    }
};
</script>
