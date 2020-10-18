export default [
    {
        path: "pending",
        name: "LoyaltyPending",
        component: () =>
            import(
                /* webpackChunkName: "pending" */ "@/views/loyaltyPanel/giftStatus/tabs/Pending.vue"
            )
    },

    {
        path: "paid",
        name: "LoyaltyPaid",
        component: () =>
            import(
                /* webpackChunkName: "paid" */ "@/views/loyaltyPanel/giftStatus/tabs/Paid.vue"
            )
    }
];
