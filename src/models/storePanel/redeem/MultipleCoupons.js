import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/companies`;

export default class MultipleCoupons {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
    }

    static get = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "companyId"
            )}/coupons/multiple?order=gift_title,desc`
        );
}
