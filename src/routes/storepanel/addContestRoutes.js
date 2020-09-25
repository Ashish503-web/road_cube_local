export default    {
    path: "add-contest",
    name: "Add Contest",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "viewContests" */ "@/views/storePanel/AddContest.vue"
                )
    }
}