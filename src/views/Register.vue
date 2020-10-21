<template>
    <v-container fluid class="b-container">
        <v-row no-gutters class="fill-height" justify="center" align="center">
            <v-col cols="9">
                <v-card class="elevation-1 py-12">
                    <v-row no-gutters justify="center" align="center">
                        <v-col cols="6" class="pl-12 pr-2">
                            <v-window v-model="step">
                                <CreateAccount />
                                <VerifyMobile />
                                <CreateCompanyStore />
                                <SuccessMessage />
                            </v-window>
                        </v-col>
                        <v-col cols="5">
                            <v-img
                                src="@/assets/register-image.png"
                                width="300"
                                class="mx-auto"
                            ></v-img>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapMutations } from "vuex";
import CreateAccount from "@/components/register/CreateAccount.vue";
import VerifyMobile from "@/components/register/VerifyMobile.vue";
import CreateCompanyStore from "@/components/register/createCompanyStore";
import SuccessMessage from "@/components/register/SuccessMessage.vue";

export default {
    name: "Register",

    components: {
        CreateAccount,
        VerifyMobile,
        CreateCompanyStore,
        SuccessMessage
    },

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
            "setAppProvider",
            "setSubscriptionPlan",
            "setCountry",
            "setMobile",
            "setUserRegistrationIdentifier",
            "setMobileVerificationCode"
        ]),
        ...mapMutations("register", ["setStep"])
    },

    mounted() {
        this.$clearFocus();
        const registrationStep = +localStorage.getItem("registrationStep");

        if (registrationStep) {
            this.step = registrationStep;

            const country = localStorage.getItem("country");
            const mobile = localStorage.getItem("mobile");
            const userRegistrationIdentifier = localStorage.getItem(
                "userRegistrationIdentifier"
            );
            const mobileVerificationCode = localStorage.getItem(
                "mobileVerificationCode"
            );

            this.setCountry(country);
            this.setMobile(mobile);
            this.setUserRegistrationIdentifier(userRegistrationIdentifier);
            this.setMobileVerificationCode(mobileVerificationCode);
        }

        const app_provider_id = +localStorage.getItem("appProvider");
        const store_id = +localStorage.getItem("providerStoreId");
        const subscriptionPlan = +localStorage.getItem("subscriptionPlan");

        this.setAppProvider({ app_provider_id, store_id });
        this.setSubscriptionPlan(subscriptionPlan);
    }
};
</script>

<style scoped>
.b-container {
    height: 100%;
    background: #f8f8f8;
}
</style>
