export default {
    path: "settings",
    name: "Settings",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "settings" */ "@/views/storePanel/settings/Settings.vue"
            )
    }
};
