import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;
const storeId = localStorage.getItem("storeId");

export default class CouponOnProduct {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.action = item.action || "1p1";
        this.product_buy_id = item.product_buy_id || null;
        this.product_free_id = item.product_free_id || null;
        this.maximum = item.maximum || null;
    }

    static getProducts = () => axios.get(`${ApiEndpoint}/${storeId}/products`);

    static get = query =>
        axios.get(`${ApiEndpoint}/${storeId}/coupons/products${query}`);

    static create = item =>
        axios.post(`${ApiEndpoint}/${storeId}/coupons/products`, item);

    static update = item =>
        axios.put(
            `${ApiEndpoint}/${storeId}/coupons/products/${item.product_id}`,
            item
        );

    static delete = id =>
        axios.delete(`${ApiEndpoint}/${storeId}/coupons/products/${id}`);
}
