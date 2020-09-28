export default {
    path: "contests",
    name: "StoreContestAndSurvey",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "contests" */ "@/views/storePanel/Contests.vue"
            )
    }
};
