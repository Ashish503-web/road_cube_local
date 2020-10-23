import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default class CouponWithCode {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.code = item.code || "";
        this.points = item.points || null;
        this.gift_title = item.gift_title || "";
        this.gift_description = item.gift_description || "";
        this.maximum = item.maximum || null;
        this.image = item.image || "";
    }

    static get = (token, storeId, query) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(`${ApiEndpoint}/${storeId}/coupons/vouchers${query}`);
    };

    static create = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(`${ApiEndpoint}/${storeId}/coupons/vouchers`, item);
    };

    static update = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(
            `${ApiEndpoint}/${storeId}/coupons/vouchers/${item.coupon_id}`,
            item
        );
    };

    static delete = (token, storeId, id) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.delete(`${ApiEndpoint}/${storeId}/coupons/vouchers/${id}`);
    };

    static uploadImage = (token, storeId, id, image) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(
            `${ApiEndpoint}/${storeId}/coupons/vouchers/${id}/images`,
            image
        );
    };
}
