import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default class CouponWithDiscount {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.discount_product_name = item.discount_product_name || "";
        this.product_discount_id = item.product_discount_id || null;
        this.discount_percentage = item.discount_percentage || null;
    }

    static get = query =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/discounts${query}`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/discounts`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/discounts/${id}`
        );
}
