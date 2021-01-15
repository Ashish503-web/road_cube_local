import API from "@/models/API";

export default class ProductTag {
    constructor(item = {}) {
        this.product_tag_id = item.product_tag_id || null;
        this.name = item.name || "";
        this.code = item.code || "";
    }

    static get = query =>
        API().get(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/products/tags${query}`
        );

    static create = item =>
        API().post(
            `/companies/${localStorage.getItem("storeId")}/products/tag`,
            item
        );

    static update = item =>
        API().put(
            `/companies/${localStorage.getItem("storeId")}/products/tags/${
                item.product_tag_id
            }`,
            item
        );

    static delete = id =>
        API().delete(
            `/companies/${localStorage.getItem("storeId")}/products/tags/${id}`
        );
}
