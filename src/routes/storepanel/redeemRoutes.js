export default  {
    path: "redeem",
    name: "Redeem",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "redeem" */ "@/views/storePanel/redeem/Redeem.vue"
                )
    }
}