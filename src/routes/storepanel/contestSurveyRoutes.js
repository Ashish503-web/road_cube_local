export default {
    path: "contests",
    name: "Contest & Survey",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "contests" */ "@/views/storePanel/Contests.vue"
                )
    }
}