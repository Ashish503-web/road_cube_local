<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                color="secondary"
                :vertical="$vuetify.breakpoint.mdAndDown"
                show-arrows
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab"
                    v-text="tab"
                    class="text-capitalize text-left text-md-center justify-start justify-md-center px-3"
                ></v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <Profile />

                <Reward :tab.sync="tab" />

                <ProductPoints />

                <Users />

                <CleanerManagement />

                <PaymentsDirection />

                <Cards />

                <PaymentHistory />

                <PaymentMethods />
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import Profile from "./tabs/Profile";
import Reward from "./tabs/Reward";
import ProductPoints from "./tabs/ProductPoints";
import Users from "./tabs/Users";
import CleanerManagement from "./tabs/CleanerManagement";
import PaymentsDirection from "./tabs/PaymentsDirection";
import Cards from "./tabs/Cards";
import PaymentHistory from "./tabs/PaymentHistory";
import PaymentMethods from "./tabs/PaymentMethods";

export default {
    name: "Settings",
    components: {
        Profile,
        Reward,
        ProductPoints,
        Users,
        CleanerManagement,
        PaymentsDirection,
        Cards,
        PaymentHistory,
        PaymentMethods
    },
    data: () => ({
        tab: 0,
        tabs: [
            "profile",
            "reward",
            "product points",
            "users",
            "cleaner management",
            "direction of payments",
            "cards",
            "payment history",
            "payment methods"
        ]
    })
};
</script>

<style>
.dashed {
    border: 1px dashed grey;
    border-radius: 10px;
}

.relative {
    position: relative;
}
</style>
