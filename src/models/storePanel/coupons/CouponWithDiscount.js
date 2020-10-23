import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default class CouponWithDiscount {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.discount_product_name = item.discount_product_name || "";
        this.product_discount_id = item.product_discount_id || null;
        this.discount_percentage = item.discount_percentage || null;
    }

    static get = (token, storeId, query) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(`${ApiEndpoint}/${storeId}/coupons/discounts${query}`);
    };

    static create = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(`${ApiEndpoint}/${storeId}/coupons/discounts`, item);
    };

    static delete = (token, storeId, id) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.delete(
            `${ApiEndpoint}/${storeId}/coupons/discounts/${id}`
        );
    };
}
