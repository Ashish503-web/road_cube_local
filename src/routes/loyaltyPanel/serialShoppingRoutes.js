export default  {
    path: "serial-shopping",
    name: "Serial Shopping",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "serialShopping" */ "@/views/loyaltyPanel/SerialShopping.vue"
                )
    }
}