import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default class CouponWithTransactions {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
    }

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/redeems`,
            item
        );
}
