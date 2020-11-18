export default [
    {
        path: "profile",
        name: "Profile",
        component: () =>
            import(
                /* webpackChunkName: "profile" */ "@/views/storePanel/settings/tabs/Profile.vue"
            )
    },

    {
        path: "reward",
        name: "Reward",
        component: () =>
            import(
                /* webpackChunkName: "reward" */ "@/views/storePanel/settings/tabs/Reward.vue"
            )
    },

    {
        path: "product-points",
        name: "ProductPoints",
        component: () =>
            import(
                /* webpackChunkName: "productPoints" */ "@/views/storePanel/settings/tabs/ProductPoints.vue"
            )
    },

    {
        path: "users",
        name: "Users",
        component: () =>
            import(
                /* webpackChunkName: "users" */ "@/views/storePanel/settings/tabs/Users.vue"
            )
    },

    {
        path: "payment-providers",
        name: "PaymentProviders",
        component: () =>
            import(
                /* webpackChunkName: "cleanerManagement" */ "@/views/storePanel/settings/tabs/PaymentProviders.vue"
            )
    },

    {
        path: "payment-processing",
        name: "PaymentProcessing",
        component: () =>
            import(
                /* webpackChunkName: "paymentsDirection" */ "@/views/storePanel/settings/tabs/PaymentProcessing.vue"
            )
    },

    {
        path: "cards",
        name: "Cards",
        component: () =>
            import(
                /* webpackChunkName: "cards" */ "@/views/storePanel/settings/tabs/Cards.vue"
            )
    },

    {
        path: "subscription",
        name: "Subscription",
        component: () =>
            import(
                /* webpackChunkName: "subscription" */ "@/views/storePanel/settings/tabs/Subscription.vue"
            )
    }

    // {
    //     path: "payment-history",
    //     name: "PaymentHistory",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "paymentHistory" */ "@/views/storePanel/settings/tabs/PaymentHistory.vue"
    //         )
    // },

    // {
    //     path: "payment-methods",
    //     name: "PaymentMethods",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "paymentMethods" */ "@/views/storePanel/settings/tabs/PaymentMethods.vue"
    //         )
    // }
];
