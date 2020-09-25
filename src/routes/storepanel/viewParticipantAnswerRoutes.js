export default {
    path: "view-participant-answer",
    name: "View Participant Answer",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "viewParticipantAnswer" */ "@/views/storePanel/ViewParticipantAnswer.vue"
                )
    }
}