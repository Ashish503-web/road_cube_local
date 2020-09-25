export default {
    path: "sampling",
    name: "1 + 1 and Sampling",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "1+1sampling" */ "@/views/loyaltyPanel/Sampling.vue"
                )
    }
}