export default [
    {
        path: "pending",
        name: "StorePending",
        component: () =>
            import(
                /* webpackChunkName: "pending" */ "@/views/storePanel/transactions/tabs/Pending.vue"
            )
    },

    {
        path: "paid",
        name: "StorePaid",
        component: () =>
            import(
                /* webpackChunkName: "paid" */ "@/views/storePanel/transactions/tabs/Paid.vue"
            )
    }
];
