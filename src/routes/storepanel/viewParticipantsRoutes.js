export default {
    path: "view-participants",
    name: "StoreViewParticipants",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "viewParticipants" */ "@/views/storePanel/ViewParticipants.vue"
            )
    }
};
