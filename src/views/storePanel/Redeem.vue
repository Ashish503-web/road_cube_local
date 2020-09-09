<template>
    <v-container class="px-4">
        <v-sheet color="#eaedf1" class="pa-4">
            <v-row class="mt-12 bb" no-gutters>
                <v-col cols="auto">
                    <v-tabs v-model="tab" color="accent">
                        <v-tab class="text-capitalize">redeem voucher</v-tab>
                        <v-tab class="text-capitalize">coupons overview</v-tab>
                        <v-tab class="text-capitalize">multiple coupons</v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="12">
                    <v-card tile outlined>
                        <v-tabs-items v-model="tab">
                            <v-tab-item>
                                <v-card-text>
                                    When the customer wins a discount or a gift our system will
                                    generate a voucher which will have a code. This voucher will
                                    be sended in the user account. Type the voucher code below
                                </v-card-text>
                                <v-card-title class="subtitle-1 font-weight-medium bb">
                                    <v-col cols="auto">Coupon Code</v-col>
                                    <v-col cols="auto">
                                        <v-text-field color="accent" hide-details outlined dense></v-text-field>
                                    </v-col>
                                </v-card-title>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    name: "Redeem",

    data: () => ({
        tab: 0,
    }),
};
</script>