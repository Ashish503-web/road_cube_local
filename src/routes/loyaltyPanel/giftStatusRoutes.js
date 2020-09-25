export default   {
    path: "gift-status",
    name: "Gift Status",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "giftStatus" */ "@/views/loyaltyPanel/GiftStatus.vue"
                )
    }
}