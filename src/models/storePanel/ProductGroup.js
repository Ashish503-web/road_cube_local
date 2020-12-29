import API from "@/models/API";

export default class ProductGroup {
    constructor(item = {}) {
        this.product_id = item.product_id || null;
        this.product_category_id = item.product_category_id || null;
        this.name = item.name || {
            el: "",
            en: "",
            it: ""
        };
        this.description = item.description || {
            el: "",
            en: "",
            it: ""
        };
        this.retail_price = item.retail_price || null;
        this.wholesale_price = item.wholesale_price || null;
        this.availability_days = item.availability_days || [];
        this.published = item.published || true;
        this.group_product = true;
        this.image = item.image || "";
    }

    static getCategories = () =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/product-categories`
        );

    static get = query =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/group-products${query}`
        );

    static create = item =>
        API().post(`/stores/${localStorage.getItem("storeId")}/products`, item);

    static update = item =>
        API().put(
            `/stores/${localStorage.getItem("storeId")}/group-products/${
                item.product_id
            }`,
            item
        );

    static delete = id =>
        API().delete(
            `/stores/${localStorage.getItem("storeId")}/group-products/${id}`
        );

    static uploadImage = (id, image) =>
        API().post(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/group-products/${id}/images`,
            image
        );
}
