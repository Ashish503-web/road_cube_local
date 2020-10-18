export default [
    {
        path: "with-transactions",
        name: "WithTransactions",
        component: () =>
            import(
                /* webpackChunkName: "withTransactions" */ "@/views/storePanel/coupons/tabs/CouponsWithTransactions.vue"
            )
    },

    {
        path: "with-code",
        name: "WithCode",
        component: () =>
            import(
                /* webpackChunkName: "withCode" */ "@/views/storePanel/coupons/tabs/CouponsWithCode.vue"
            )
    },

    {
        path: "on-products",
        name: "OnProducts",
        component: () =>
            import(
                /* webpackChunkName: "onProducts" */ "@/views/storePanel/coupons/tabs/CouponsOnProducts.vue"
            )
    },

    {
        path: "with-visits",
        name: "WithVisits",
        component: () =>
            import(
                /* webpackChunkName: "withVisits" */ "@/views/storePanel/coupons/tabs/CouponsWithVisits.vue"
            )
    },

    {
        path: "with-discount",
        name: "WithDiscount",
        component: () =>
            import(
                /* webpackChunkName: "withDiscount" */ "@/views/storePanel/coupons/tabs/CouponsWithDiscount.vue"
            )
    }
];
