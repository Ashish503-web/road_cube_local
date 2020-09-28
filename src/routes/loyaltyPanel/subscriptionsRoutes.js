export default {
    path: "subscriptions",
    name: "Subscriptions",
    component: () =>
        import(
            /* webpackChunkName: "subscriptions" */ "@/views/loyaltyPanel/subscriptions/Subscriptions.vue"
        )
};
