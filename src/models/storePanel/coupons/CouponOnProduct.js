import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default class CouponOnProduct {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.action = item.action || "1p1";
        this.gift_category_id = item.gift_category_id || null;
        this.product_buy_id = item.product_buy_id || null;
        this.product_free_id = item.product_free_id || null;
        this.maximum = item.maximum || null;
    }

    static getGiftCategories = () =>
        axios.get(
            `https://api.roadcube.tk/v1/common/companies/${localStorage.getItem(
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
            )}/coupons/products/${item.product_id}`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/products/${id}`
        );
}
