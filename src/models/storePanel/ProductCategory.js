import API from "@/models/API";

export default class ProductCategory {
    constructor(item = {}) {
        this.store_id = item.store_id || localStorage.getItem("storeId");
        this.product_category_id = item.product_category_id || null;
        this.name = item.name || {
            el: "",
            en: "",
            it: ""
        };
    }

    static get = query =>
        API().get(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/product-categories${query}`
        );

    static create = item =>
        API().post(
            `/stores/${localStorage.getItem("storeId")}/product-categories`,
            item
        );

    static update = item =>
        API().put(
            `/stores/${localStorage.getItem("storeId")}/product-categories/${
                item.product_category_id
            }`,
            item
        );

    static delete = id =>
        API().delete(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/product-categories/${id}`
        );
}
