export default  {
    path: "contest-survey",
    name: "Contest & Survey",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "contestSurvey" */ "@/views/loyaltyPanel/ContestSurvey.vue"
                )
    }
}