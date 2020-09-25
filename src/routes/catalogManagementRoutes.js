export default  {
    path: "catalog-management",
    name: "Catalog Management",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "catalogManagement" */ "@/views/loyaltyPanel/CatalogManagement.vue"
                )
    }
}