export default  {
    path: "multiple-coupons",
    name: "Multiple Coupons",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "multipleCoupons" */ "@/views/loyaltyPanel/MultipleCoupons.vue"
                )
    }
}