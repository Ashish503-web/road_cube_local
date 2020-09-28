export default {
    path: "view-participant-answer",
    name: "StoreViewParticipantAnswer",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "viewParticipantAnswer" */ "@/views/storePanel/ViewParticipantAnswer.vue"
            )
    }
};
