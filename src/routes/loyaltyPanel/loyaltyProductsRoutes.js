export default   {
    path: "products",
    name: "LoyaltyProducts",
    component: () =>
        import(
            /* webpackChunkName: "products" */ "@/views/loyaltyPanel/Products/Products.vue"
            )
}