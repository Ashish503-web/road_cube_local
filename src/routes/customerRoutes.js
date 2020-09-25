export default {
    path: "customer",
    name: "Customer",
    component: () =>
        import(
            /* webpackChunkName: "customer" */ "@/views/loyaltyPanel/Customer.vue"
            )
}