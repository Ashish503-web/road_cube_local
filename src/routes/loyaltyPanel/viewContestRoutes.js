export default {
    path: "view-contest",
    name: "View Contest",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "viewContest" */ "@/views/loyaltyPanel/ViewContest.vue"
                )
    }
}