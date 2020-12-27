import API from "@/models/API";

export default class MultipleCoupons {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
    }

    static get = () =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/coupons/redeemed`
        );
}
