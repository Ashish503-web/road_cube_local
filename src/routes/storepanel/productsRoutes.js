export default [
    {
        path: "",
        name: "Products",
        component: () =>
            import(
                /* webpackChunkName: "productsTab" */ "@/views/storePanel/products/tabs/ProductsTab.vue"
            )
    },

    {
        path: "product-groups",
        name: "ProductGroups",
        component: () =>
            import(
                /* webpackChunkName: "productGroups" */ "@/views/storePanel/products/tabs/ProductGroups.vue"
            )
    }
];
