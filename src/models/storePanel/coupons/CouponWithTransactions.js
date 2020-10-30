import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default class CouponWithTransactions {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
    }

    static get = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/goals`
        );

    static getGiftCategories = () =>
        axios.get(
            `https://api.roadcube.tk/v1/common/companies/${localStorage.getItem(
                "companyId"
            )}/gift-categories`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/goals`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/goals/${id}`
        );
}
