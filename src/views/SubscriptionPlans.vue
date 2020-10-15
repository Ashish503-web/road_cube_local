<template>
    <v-container fluid class="b-container">
        <v-card-title class="text-h4 font-weight-bold justify-center"
            >Choose Subscription Plan</v-card-title
        >

        <v-row justify="center">
            <v-col
                v-for="plan in subscriptionPlans"
                :key="plan.store_subscription_plan_id"
                cols="3"
            >
                <v-card height="100%" outlined>
                    <v-row
                        no-gutters
                        class="fill-height"
                        align-content="space-between"
                    >
                        <v-col cols="12">
                            <v-card-title
                                class="text--secondary font-weight-medium justify-center"
                                v-text="plan.plan_name"
                            ></v-card-title>
                            <v-card-subtitle
                                class="text-center"
                                v-text="plan.plan_type.en"
                            ></v-card-subtitle>
                        </v-col>

                        <v-col cols="12">
                            <v-card-text>
                                <v-row no-gutters>
                                    <v-col cols="5">Currency:</v-col>

                                    <v-col cols="7">
                                        {{ plan.currency }}
                                    </v-col>

                                    <v-col cols="5">Description:</v-col>

                                    <v-col cols="7">
                                        {{ plan.plan_description }}
                                    </v-col>

                                    <v-col cols="5">Duration:</v-col>

                                    <v-col cols="7">
                                        {{ plan.plan_duration }}
                                    </v-col>

                                    <v-col cols="5">Price:</v-col>

                                    <v-col cols="7">
                                        {{ plan.plan_price }}
                                    </v-col>

                                    <v-col cols="5">Reward Points:</v-col>

                                    <v-col cols="7">
                                        {{ plan.reward_points }}
                                    </v-col>

                                    <v-col cols="5">Vat:</v-col>

                                    <v-col cols="7">
                                        {{ plan.vat }}
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-col>

                        <v-col cols="12">
                            <v-card-actions>
                                <v-btn
                                    color="secondary"
                                    class="text-capitalize"
                                    depressed
                                    block
                                    large
                                    style="font-size: 20px"
                                    @click="
                                        setSubscriptionPlan(
                                            plan.store_subscription_plan_id
                                        )
                                    "
                                    >start now</v-btn
                                >
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
    name: "SubscriptionPlans",

    computed: {
        subscriptionPlans() {
            return this.$store.state.register.subscriptionPlans;
        },
    },

    methods: {
        ...mapMutations("register", ["setAppProvider"]),
        ...mapActions("register", ["getSubscriptionPlans"]),

        setSubscriptionPlan(planId) {
            localStorage.setItem("subscriptionPlan", planId);
            this.$router.push("/create-account");
        },
    },

    mounted() {
        const app_provider_id = localStorage.getItem("appProvider");
        const store_id = localStorage.getItem("providerStoreId");

        this.setAppProvider({ app_provider_id, store_id });

        this.getSubscriptionPlans();
    },
};
</script>

<style scoped>
.b-container {
    height: 100%;
    background-image: linear-gradient(
        147deg,
        rgba(141, 141, 236, 0.17) 0%,
        rgba(84, 84, 212, 0) 100%
    );
}
</style>