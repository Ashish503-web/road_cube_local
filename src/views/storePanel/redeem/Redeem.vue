<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-tabs v-model="tab">
                        <v-tab class="text-capitalize">redeem voucher</v-tab>
                        <v-tab class="text-capitalize">coupons overview</v-tab>
                        <v-tab class="text-capitalize">multiple coupons</v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="12">
                    <v-tabs-items v-model="tab">
                        <RedeemVoucher />
                        <CouponsOverview />
                        <MultipleCoupons />
                    </v-tabs-items>
                </v-col>
            </v-row>
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
