export default {
    path: "supplier-management",
    name: "Supplier Management",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "supplierManagement" */ "@/views/loyaltyPanel/SupplierManagement.vue"
                )
    }
}