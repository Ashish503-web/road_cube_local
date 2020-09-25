export default  {
    path: "category-management",
    name: "Category Management",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "categoryManagement" */ "@/views/loyaltyPanel/CategoryManagement.vue"
                )
    }
}