import API from "@/models/API";

export default class CouponWithDiscount {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
        this.gift_category_id = item.gift_category_id || null;
        this.product_discount_id = item.product_discount_id || null;
        this.discount_product_name = item.discount_product_name || "";
        this.discount_value = item.discount_value || null;
        this.discount_percentage = item.discount_percentage || null;
    }

    static clearFalsyValues = obj => {
        for (let key in obj) {
            if (!obj[key]) delete obj[key];
        }
    };

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
            )}/coupons/discounts${query}`
        );

    static create = item =>
        API().post(
            `/stores/${localStorage.getItem("storeId")}/coupons/discounts`,
            item
        );

    static delete = id =>
        API().delete(
            `/stores/${localStorage.getItem("storeId")}/coupons/discounts/${id}`
        );
}
