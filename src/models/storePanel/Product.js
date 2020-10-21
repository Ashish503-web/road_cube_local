import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores/`;

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

    static getCategories = (token, storeId) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(`${ApiEndpoint}${storeId}/product-categories`);
    };

    static get = (token, storeId, query) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(`${ApiEndpoint}${storeId}/products${query}`);
    };

    static create = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(`${ApiEndpoint}${storeId}/products`, item);
    };

    static update = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(
            `${ApiEndpoint}${storeId}/products/${item.product_id}`,
            item
        );
    };

    static delete = (token, storeId, id) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.delete(`${ApiEndpoint}${storeId}/products/${id}`);
    };

    static uploadImage = (token, storeId, id, image) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(
            `${ApiEndpoint}${storeId}/products/${id}/images`,
            image
        );
    };
}
