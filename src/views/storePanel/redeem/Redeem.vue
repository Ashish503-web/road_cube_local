<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                :vertical="$vuetify.breakpoint.smAndDown"
                color="secondary"
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab.name"
                    v-text="tab.name"
                    :to="tab.to"
                    class="text-capitalize text-left text-sm-center d-flex justify-start justify-sm-center px-3"
                    >redeem voucher</v-tab
                >
            </v-tabs>

            <v-tabs-items v-model="tab">
                <router-view></router-view>
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
export default {
    name: "Redeem",

    data: () => ({
        tab: "storePanel/redeem/redeem-voucher",
        tabs: [
            { to: "/storePanel/redeem/redeem-voucher", name: "Redeem Voucher" },
            {
                to: "/storePanel/redeem/coupons-overview",
                name: "Coupons Overview"
            },
            {
                to: "/storePanel/redeem/multiple-coupons",
                name: "Multiple Coupons"
            }
        ]
    })
};
</script>
