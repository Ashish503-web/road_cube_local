import API from "@/models/API";

export default class Product {
    constructor(item = {}) {
        this.product_id = item.product_id || null;
        this.published = item.published || false;
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
        this.product_category_id = item.product_category_id || null;
        this.availability_days = item.availability_days || [];
        this.image = item.image || "";
        this.group_product = false;
    }

    static getClass(obj) {
        return {}.toString.call(obj).slice(8, -1);
    }

    static clearFalsyValues = obj => {
        for (let key in obj) {
            if (!obj[key]) delete obj[key];
            else if (this.getClass(obj[key]) === "Array") {
                if (!obj[key].length) delete obj[key];
            }
        }

        if (!obj.published) obj.published = false;
        if (!obj.group_product) obj.group_product = false;
    };

    static getCategories = () =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/product-categories`
        );

    static get = query =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/products${query}`
        );

    static create = item =>
        API().post(`/stores/${localStorage.getItem("storeId")}/products`, item);

    static update = item =>
        API().put(
            `/stores/${localStorage.getItem("storeId")}/products/${
                item.product_id
            }`,
            item
        );

    static delete = id =>
        API().delete(
            `/stores/${localStorage.getItem("storeId")}/products/${id}`
        );

    static uploadImage = (id, image) =>
        API().post(
            `/stores/${localStorage.getItem("storeId")}/products/${id}/images`,
            image
        );
}
