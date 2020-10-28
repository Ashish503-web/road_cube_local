import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

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

    static get = query =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/vouchers${query}`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/vouchers`,
            item
        );

    static update = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/vouchers/${item.coupon_id}`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/vouchers/${id}`
        );

    static uploadImage = (id, image) =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/vouchers/${id}/images`,
            image
        );
}
