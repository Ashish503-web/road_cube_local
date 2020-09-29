export default {
    path: "branches",
    name: "Branches",
    component: () =>
        import(
            /* webpackChunkName: "Branches" */ "@/views/loyaltyPanel/branches/Branches.vue"
        )
};
