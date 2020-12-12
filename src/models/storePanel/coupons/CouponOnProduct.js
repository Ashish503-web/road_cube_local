import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

export default class CouponOnProduct {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.code = item.code || null;
        this.action = item.action || "1p1";
        this.gift_category_id = item.gift_category_id || null;
        this.product_buy_id = item.product_buy_id || null;
        this.product_free_id = item.product_free_id || null;
        this.maximum = item.maximum || null;
    }

    static getGiftCategories = () =>
        axios.get(
            `${
                process.env.VUE_APP_DEFAULT_API_URL
            }/common/companies/${localStorage.getItem(
                "companyId"
            )}/gift-categories`
        );

    static getProducts = () =>
        axios.get(`${ApiEndpoint}/${localStorage.getItem("storeId")}/products`);

    static get = query =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/products${query}`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/products`,
            item
        );

    static update = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/products/${item.coupon_id}`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/products/${id}`
        );
}
