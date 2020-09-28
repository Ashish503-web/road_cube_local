export default {
    path: "new-transaction",
    name: "NewTransaction",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "newTransaction" */ "@/views/storePanel/NewTransaction.vue"
            )
    }
};
