export default {
    path: "add-contest",
    name: "Add Contest",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "addContest" */ "@/views/loyaltyPanel/AddContest.vue"
                )
    }
}