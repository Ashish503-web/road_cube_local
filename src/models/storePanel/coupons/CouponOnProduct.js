import API from "@/models/API";

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
        API().get(
            `/common/companies/${localStorage.getItem(
                "companyId"
            )}/gift-categories`
        );

    static getProducts = () =>
        API().get(`/stores/${localStorage.getItem("storeId")}/products`);

    static get = query =>
        API().get(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/coupons/products${query}`
        );

    static create = item =>
        API().post(
            `/stores/${localStorage.getItem("storeId")}/coupons/products`,
            item
        );

    static update = item =>
        API().put(
            `/stores/${localStorage.getItem("storeId")}/coupons/products/${
                item.coupon_id
            }`,
            item
        );

    static delete = id =>
        API().delete(
            `/stores/${localStorage.getItem("storeId")}/coupons/products/${id}`
        );
}
