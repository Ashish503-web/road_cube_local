export default {
    path: "",
    name: "StoreHome",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "storeHome" */ "@/views/storePanel/Home.vue"
            )
    }
};
