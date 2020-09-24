<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs v-model="tab" color="black" show-arrows>
                <v-tab
                    v-for="tab in tabs"
                    :key="tab"
                    v-text="tab"
                    class="text-capitalize"
                ></v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <Profile />

                <Reward />

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
import Profile from "./Profile";
import Reward from "./Reward";
import ProductPoints from "./ProductPoints";
import Users from "./Users";
import CleanerManagement from "./CleanerManagement";
import PaymentsDirection from "./PaymentsDirection";
import Cards from "./Cards";
import PaymentHistory from "./PaymentHistory";
import PaymentMethods from "./PaymentMethods";

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

.map-new-pin {
    width: 50px;
    position: absolute;
    top: 37px;
    left: 14px;
}

.category-number {
    position: absolute;
    top: 7px;
    left: -5px;
}

.category-remove {
    position: absolute;
    top: -10px;
    right: -10px;
    cursor: pointer;
}
</style>
