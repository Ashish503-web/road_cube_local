import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores/`;

export default class Product {
    constructor(item = {}) {
        this.billing_details = item.billing_details || {};
        this.company = item.company || {};
        this.flags = item.flags || {
            app_settings: {},
            general: {},
            reward: {}
        };
        this.timetable = [];
        this.published = item.published || false;
        this.name = item.name || "";
        this.description = item.description || "";
        this.retail_price = item.retail_price || null;
        this.wholesale_price = item.wholesale_price || null;
        this.shipping_cost = item.shipping_cost || null;
        this.delivery_cost = item.delivery_cost || null;
        this.product_category_id = item.product_category_id || null;
        this.image = item.image || "";
    }

    static get = (token, storeId) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(`${ApiEndpoint}${storeId}`);
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
