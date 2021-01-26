import API from "@/models/API";

export default class CouponWithCode {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.code = item.code || null;
        this.gift_category_id = item.gift_category_id || null;
        this.gift_title = item.gift_title || "";
        this.gift_description = item.gift_description || "";
        this.maximum = item.maximum || null;
        this.image = item.image || "";
    }

    static getGiftCategories = () =>
        API().get(
            `/common/companies/${localStorage.getItem(
                "companyId"
            )}/gift-categories`
        );

    static get = query =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/coupons/visits${query}`
        );

    static create = item =>
        API().post(
            `/stores/${localStorage.getItem("storeId")}/coupons/visits`,
            item
        );

    static delete = id =>
        API().delete(
            `/stores/${localStorage.getItem("storeId")}/coupons/visits/${id}`
        );

    static uploadImage = (id, image) =>
        API().post(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/coupons/visits/${id}/images`,
            image
        );
}
