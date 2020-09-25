
export default  {
    path: "new-transaction",
    name: "New Transaction",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "newTransaction" */ "@/views/storePanel/NewTransaction.vue"
                )
    }
}