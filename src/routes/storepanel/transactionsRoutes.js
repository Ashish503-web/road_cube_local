export default {
    path: "transactions",
    name: "Transactions",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "transactions" */ "@/views/storePanel//transactions/Transactions.vue"
                )
    }
}