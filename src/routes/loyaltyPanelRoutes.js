export default {
    path: "",
    name: "LoyaltyPanel",
    component: () =>
        import(
            /* webpackChunkName: "dashboard" */ "@/views/loyaltyPanel/Dashboard.vue"
            )
}