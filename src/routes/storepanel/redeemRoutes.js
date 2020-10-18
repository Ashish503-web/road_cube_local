export default [
    {
        path: "redeem-voucher",
        name: "RedeemVoucher",
        component: () =>
            import(
                /* webpackChunkName: "redeemVoucher" */ "@/views/storePanel/redeem/tabs/RedeemVoucher.vue"
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
