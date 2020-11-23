export default [
    {
        path: "redeem-voucher-code",
        name: "RedeemVoucherCode",
        component: () =>
            import(
                /* webpackChunkName: "redeemVoucherCode" */ "@/views/storePanel/redeem/tabs/RedeemVoucherCode.vue"
            )
    },

    {
        path: "coupons-overview",
        name: "CouponsOverview",
        component: () =>
            import(
                /* webpackChunkName: "couponsOverview" */ "@/views/storePanel/redeem/tabs/CouponsOverview.vue"
            )
    },

    {
        path: "multiple-coupons",
        name: "MultipleCoupons",
        component: () =>
            import(
                /* webpackChunkName: "multipleCoupons" */ "@/views/storePanel/redeem/tabs/MultipleCoupons.vue"
            )
    }
];
