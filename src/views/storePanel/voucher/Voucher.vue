<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                color="black"
                active-class="b-tab-active"
                show-arrows
                hide-slider
                :ripple="false"
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab"
                    v-text="tab"
                    class="text-capitalize"
                    :ripple="false"
                ></v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <CouponsWithTransactions />

                <CouponsWithCode />

                <CouponsOnProducts />

                <CouponsWithVisits />

                <CouponsWithDiscount />
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import CouponsWithTransactions from "./CouponsWithTransactions";
import CouponsWithCode from "./CouponsWithCode";
import CouponsOnProducts from "./CouponsOnProducts";
import CouponsWithVisits from "./CouponsWithVisits";
import CouponsWithDiscount from "./CouponsWithDiscount";

export default {
    name: "Redeem",
    components: {
        CouponsWithTransactions,
        CouponsWithCode,
        CouponsOnProducts,
        CouponsWithVisits,
        CouponsWithDiscount
    },
    data: () => ({
        tab: 0,
        tabs: [
            "coupons with transactions",
            "coupons with code",
            "coupons on products",
            "coupons with visits",
            "coupons with discount"
        ]
    })
};
</script>

<style scoped>
.dashed {
    border: 1px dashed grey;
    border-radius: 10px;
}

.b-tab-active {
    border-radius: 4px;
    background-color: #2a3042;
    color: white;
}
</style>
