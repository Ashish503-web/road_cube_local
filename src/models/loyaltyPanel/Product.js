import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = process.env.VUE_APP_DEFAULT_API_URL;

export default class Product {
    constructor(item = {}) {
        this.product_id = item.product_id || null;
        this.store_id = item.store_id || null;
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
        this.shipping_cost = item.shipping_cost || null;
        this.delivery_cost = item.delivery_cost || null;
        this.product_category_id = item.product_category_id || null;
        this.reward_points = item.reward_points || 30;
        this.reward_type_id = item.reward_type_id || 1;
        this.product_identifier =
            item.product_identifier || "product_identifier";
        this.add_to_stores = item.add_to_stores || true;
        this.availability_days = item.availability_days || [];
        this.image = item.image || "";
        this.group_product = false;
    }

    static getCategories = () =>
        axios.get(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/product-categories`
        );

    static get = query =>
        axios.get(
            `${ApiEndpoint}/companies/${localStorage.getItem(
                "storeId"
            )}/products${query}`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/companies/${localStorage.getItem(
                "storeId"
            )}/products`,
            item
        );

    static update = item =>
        axios.put(
            `${ApiEndpoint}/companies/${localStorage.getItem(
                "storeId"
            )}/products/${item.product_id}`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/companies/${localStorage.getItem(
                "storeId"
            )}/products/${id}`
        );

    static uploadImage = (id, image) =>
        axios.post(
            `${ApiEndpoint}/companies${localStorage.getItem(
                "storeId"
            )}/products/${id}/images`,
            image
        );
}
