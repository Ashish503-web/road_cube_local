export default [
    {
        path: "products-tab",
        name: "LoyaltyProductsTab",
        component: () =>
            import(
                /* webpackChunkName: "productsTab" */ "@/views/loyaltyPanel/products/tabs/ProductsTab.vue"
            )
    },

    {
        path: "products-per-store",
        name: "ProductsPerStore",
        component: () =>
            import(
                /* webpackChunkName: "productsPerStore" */ "@/views/loyaltyPanel/products/tabs/ProductsPerStore.vue"
            )
    },

    {
        path: "products-series",
        name: "ProductsSeries",
        component: () =>
            import(
                /* webpackChunkName: "productsSeries" */ "@/views/loyaltyPanel/products/tabs/ProductsSeries.vue"
            )
    }
];
