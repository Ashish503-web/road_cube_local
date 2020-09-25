export default   {
    path: "view-participants",
    name: "View Participants",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "viewParticipants" */ "@/views/loyaltyPanel/ViewParticipants.vue"
                )
    }
}