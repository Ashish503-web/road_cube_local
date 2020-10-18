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
        path: "cleaner-management",
        name: "Cleanermanagement",
        component: () =>
            import(
                /* webpackChunkName: "cleanerManagement" */ "@/views/storePanel/settings/tabs/CleanerManagement.vue"
            )
    },

    {
        path: "payments-direction",
        name: "PaymentsDirection",
        component: () =>
            import(
                /* webpackChunkName: "paymentsDirection" */ "@/views/storePanel/settings/tabs/PaymentsDirection.vue"
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
        path: "payment-history",
        name: "PaymentHistory",
        component: () =>
            import(
                /* webpackChunkName: "paymentHistory" */ "@/views/storePanel/settings/tabs/PaymentHistory.vue"
            )
    },

    {
        path: "payment-methods",
        name: "PaymentMethods",
        component: () =>
            import(
                /* webpackChunkName: "paymentMethods" */ "@/views/storePanel/settings/tabs/PaymentMethods.vue"
            )
    }
];
