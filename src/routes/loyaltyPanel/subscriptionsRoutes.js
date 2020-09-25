export default    {
    path: "subscriptions",
    name: "Subscriptions",
    component: () =>
        import(
            /* webpackChunkName: "subscriptions" */ "@/views/loyaltyPanel/Subscriptions.vue"
            )
}