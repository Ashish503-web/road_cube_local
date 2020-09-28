export default {
    path: "add-contest",
    name: "AddContest",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "viewContests" */ "@/views/storePanel/AddContest.vue"
            )
    }
};
