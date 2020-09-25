export default {
    path: "check-in",
    name: "Check In",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "checkin" */ "@/views/loyaltyPanel/CheckIn.vue"
                )
    }
}