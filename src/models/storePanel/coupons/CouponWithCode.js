import API from "@/models/API";

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
        API().get(
            `/common/companies/${localStorage.getItem(
                "companyId"
            )}/gift-categories`
        );

    static get = query =>
        API().get(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/coupons/vouchers${query}`
        );

    static create = item =>
        API().post(
            `/stores/${localStorage.getItem("storeId")}/coupons/vouchers`,
            item
        );

    static update = item =>
        API().put(
            `/stores/${localStorage.getItem("storeId")}/coupons/vouchers/${
                item.coupon_id
            }`,
            item
        );

    static delete = id =>
        API().delete(
            `/stores/${localStorage.getItem("storeId")}/coupons/vouchers/${id}`
        );

    static uploadImage = (id, image) =>
        API().post(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/coupons/vouchers/${id}/images`,
            image
        );
}
