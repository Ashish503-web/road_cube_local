export default {
    path: "view-contest",
    name: "View Contest",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "viewContests" */ "@/views/storePanel/ViewContest.vue"
                )
    }
}