<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs v-model="tab" :vertical="$vuetify.breakpoint.smAndDown" color="secondary" :ripple="false">
                <v-tab
                    v-for="tab in tabs"
                    :key="tab"
                    v-text="tab"
                    class="text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3"
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
import CouponsWithTransactions from "./tabs/CouponsWithTransactions";
import CouponsWithCode from "./tabs/CouponsWithCode";
import CouponsOnProducts from "./tabs/CouponsOnProducts";
import CouponsWithVisits from "./tabs/CouponsWithVisits";
import CouponsWithDiscount from "./tabs/CouponsWithDiscount";

export default {
    name: "Coupons",
    components: {
        CouponsWithTransactions,
        CouponsWithCode,
        CouponsOnProducts,
        CouponsWithVisits,
        CouponsWithDiscount,
    },
    data: () => ({
        tab: 0,
        tabs: [
            "coupons with transactions",
            "coupons with code",
            "coupons on products",
            "coupons with visits",
            "coupons with discount",
        ],
    }),
};
</script>

<style scoped>
.dashed {
    border: 1px dashed grey;
    border-radius: 10px;
}
</style>
