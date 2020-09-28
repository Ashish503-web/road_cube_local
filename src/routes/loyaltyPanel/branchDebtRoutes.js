export default {
    path: "branch-debt",
    name: "BranchDebt",
    component: () =>
        import(
            /* webpackChunkName: "branchDebt" */ "@/views/loyaltyPanel/branchDebt/BranchDebt.vue"
        )
};
