export default {
    path: "new-campaign",
    name: "New Campaign",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "newCampaign" */ "@/views/loyaltyPanel/NewCampaign.vue"
                )
    }
}