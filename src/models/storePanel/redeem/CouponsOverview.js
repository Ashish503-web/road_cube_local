import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

export default class CouponsOverview {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
    }

    static get = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/coupons/redeemed`
        );
}
