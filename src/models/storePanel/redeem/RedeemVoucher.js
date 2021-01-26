import API from "@/models/API";

export default class RedeemVoucher {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
    }

    static create = item =>
        API().post(
            `/stores/${localStorage.getItem("storeId")}/coupons/redeems`,
            item
        );
}
