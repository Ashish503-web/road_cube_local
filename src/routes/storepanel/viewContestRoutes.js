export default {
    path: "view-contest",
    name: "StoreViewContest",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "viewContests" */ "@/views/storePanel/ViewContest.vue"
            )
    }
};
