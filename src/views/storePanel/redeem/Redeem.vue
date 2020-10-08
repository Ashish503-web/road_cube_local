<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs v-model="tab" :vertical="$vuetify.breakpoint.smAndDown" color="black">
                <v-tab class="text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3">redeem voucher</v-tab>
                <v-tab class="text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3">coupons overview</v-tab>
                <v-tab class="text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3">multiple coupons</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <RedeemVoucher />
                <CouponsOverview />
                <MultipleCoupons />
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import RedeemVoucher from "./RedeemVoucher";
import CouponsOverview from "./CouponsOverview";
import MultipleCoupons from "./MultipleCoupons";

export default {
    name: "Redeem",
    components: { RedeemVoucher, CouponsOverview, MultipleCoupons },
    data: () => ({
        tab: 0
    })
};
</script>
