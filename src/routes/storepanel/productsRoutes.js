export default  {
    path: "products",
    name: "Products",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "products" */ "@/views/storePanel/products/Products.vue"
                )
    }
}