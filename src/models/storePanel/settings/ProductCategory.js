import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;
const storeId = localStorage.getItem("storeId");

export default class ProductCategory {
    constructor(item = {}) {
        this.store_id = item.store_id || null;
        this.product_category_id = item.product_category_id || null;
        this.name = item.name || {
            el: "",
            en: "",
            it: ""
        };
    }

    static get = query =>
        axios.get(`${ApiEndpoint}/${storeId}/product-categories${query}`);

    static create = item =>
        axios.post(`${ApiEndpoint}/${storeId}/product-categories`, item);

    static update = item =>
        axios.put(
            `${ApiEndpoint}/${storeId}/product-categories/${item.product_category_id}`,
            item
        );

    static delete = id =>
        axios.delete(`${ApiEndpoint}/${storeId}/product-categories/${id}`);
}
