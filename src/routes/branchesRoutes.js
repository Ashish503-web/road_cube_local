export default   {
    path: "branches",
    name: "Branches",
    component: () =>
        import(
            /* webpackChunkName: "branches" */ "@/views/loyaltyPanel/Branches.vue"
            )
}