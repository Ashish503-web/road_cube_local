import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

export default class CouponWithCode {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.gift_category_id = item.gift_category_id || null;
        this.code = item.code || "";
        this.points = item.points || null;
        this.maximum = item.maximum || null;
        this.gift_title = item.gift_title || "";
        this.gift_description = item.gift_description || "";
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
