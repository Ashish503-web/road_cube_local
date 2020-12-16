import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

export default class CouponWithTransactions {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.gift_category_id = item.gift_category_id || null;
        this.goal_sequence = item.goal_sequence || null;
        this.goal_minimum_amount = item.goal_minimum_amount || null;
        this.goal_max_days = item.goal_max_days || null;
        this.gift_title = item.gift_title || "";
        this.gift_description = item.gift_description || "";
        this.available = item.available || null;
        this.maximum = item.maximum || null;
        this.image = item.image || "";
    }

    static getGiftCategories = () =>
        axios.get(
            `${
                process.env.VUE_APP_DEFAULT_API_URL
            }/common/companies/${localStorage.getItem(
                "companyId"
            )}/gift-categories`
        );

    static getItem = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/coupons/goals`
        );

    static getItemUsers = (id, query) =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/goals/${id}/user-statistics${query}`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/coupons/goals`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/goals/${id}`
        );

    static uploadImage = (id, image) =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/goals/${id}/images`,
            image
        );
}
