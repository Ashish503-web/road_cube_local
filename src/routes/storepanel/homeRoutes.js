export default  {
    path: "",
    name: "Home",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "storeHome" */ "@/views/storePanel/Home.vue"
                )
    }
}