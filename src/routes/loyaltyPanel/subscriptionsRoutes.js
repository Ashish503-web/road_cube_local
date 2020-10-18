export default [
    {
        path: "stores",
        name: "Stores",
        component: () =>
            import(
                /* webpackChunkName: "stores" */ "@/views/loyaltyPanel/subscriptions/tabs/Stores.vue"
            )
    },

    {
        path: "registration-plans",
        name: "RegistrationPlans",
        component: () =>
            import(
                /* webpackChunkName: "registrationPlans" */ "@/views/loyaltyPanel/subscriptions/tabs/RegistrationPlans.vue"
            )
    },

    {
        path: "payment-methods",
        name: "PaymentMethods",
        component: () =>
            import(
                /* webpackChunkName: "paymentMethods" */ "@/views/loyaltyPanel/subscriptions/tabs/PaymentMethods.vue"
            )
    }
];
