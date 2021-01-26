import API from "@/models/API";

export default class CouponsOverview {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
    }

    static get = () =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/coupons/redeemed`
        );
}
