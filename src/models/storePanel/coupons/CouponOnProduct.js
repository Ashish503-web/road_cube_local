import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default class CouponOnProduct {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.action = item.action || "1p1";
        this.product_buy_id = item.product_buy_id || null;
        this.product_free_id = item.product_free_id || null;
        this.maximum = item.maximum || null;
    }

    static getProducts = (token, storeId) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(`${ApiEndpoint}/${storeId}/products`);
    };

    static get = (token, storeId, query) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(`${ApiEndpoint}/${storeId}/coupons/products${query}`);
    };

    static create = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(`${ApiEndpoint}/${storeId}/coupons/products`, item);
    };

    static update = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(
            `${ApiEndpoint}/${storeId}/coupons/products/${item.product_id}`,
            item
        );
    };

    static delete = (token, storeId, id) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.delete(`${ApiEndpoint}/${storeId}/coupons/products/${id}`);
    };
}
