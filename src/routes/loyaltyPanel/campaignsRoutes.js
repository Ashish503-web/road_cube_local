export default   {
    path: "view-campaigns",
    name: "Campaigns",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "viewCampaigns" */ "@/views/loyaltyPanel/ViewCampaigns.vue"
                )
    }
}