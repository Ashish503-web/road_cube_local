export default    {
    path: "voucher",
    name: "Voucher",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "voucher" */ "@/views/storePanel/voucher/Voucher.vue"
                )
    }
}