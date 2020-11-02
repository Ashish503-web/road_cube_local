import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default class CouponWithCode {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.gift_category_id = item.gift_category_id || null;
        this.gift_title = item.gift_title || "";
        this.gift_description = item.gift_description || "";
        this.maximum = item.maximum || null;
        this.image = item.image || "";
    }

    static getGiftCategories = () =>
        axios.get(
            `https://api.roadcube.tk/v1/common/companies/${localStorage.getItem(
                "companyId"
            )}/gift-categories`
        );

    static get = query =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/visits${query}`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/coupons/visits`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/visits/${id}`
        );

    static uploadImage = (id, image) =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/coupons/visits/${id}/images`,
            image
        );
}
