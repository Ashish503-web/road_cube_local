export default  {
    path: "roadcodes",
    name: "Roadcodes",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "roadcodes" */ "@/views/loyaltyPanel/Roadcodes.vue"
                )
    }
}