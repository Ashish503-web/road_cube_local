export default {
    path: "coupons",
    name: "Coupons",
    components: {
        default: () =>
            import(
                /* webpackChunkName: "voucher" */ "@/views/storePanel/coupons/Coupons.vue"
            )
    }
};
