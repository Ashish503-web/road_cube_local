export default {
    path: "history",
    name: "History",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "history" */ "@/views/storePanel/history/History.vue"
            )
    }
};
