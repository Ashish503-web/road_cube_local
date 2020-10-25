import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;
const storeId = localStorage.getItem("storeId");

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
        this.shipping_cost = item.shipping_cost || null;
        this.delivery_cost = item.delivery_cost || null;
        this.product_category_id = item.product_category_id || null;
        this.availability_days = item.availability_days || [];
        this.image = item.image || "";
        this.group_product = false;
    }

    static getCategories = () =>
        axios.get(`${ApiEndpoint}/${storeId}/product-categories`);

    static get = query =>
        axios.get(`${ApiEndpoint}/${storeId}/products${query}`);

    static create = item =>
        axios.post(`${ApiEndpoint}/${storeId}/products`, item);

    static update = item =>
        axios.put(
            `${ApiEndpoint}/${storeId}/products/${item.product_id}`,
            item
        );

    static delete = id =>
        axios.delete(`${ApiEndpoint}/${storeId}/products/${id}`);

    static uploadImage = (id, image) =>
        axios.post(`${ApiEndpoint}${storeId}/products/${id}/images`, image);
}
