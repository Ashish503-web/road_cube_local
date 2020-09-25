export default {
    path: "receipt-scanning",
    name: "Receipt Scanning",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "receiptScanning" */ "@/views/loyaltyPanel/ReceiptScanning.vue"
                )
    }
}