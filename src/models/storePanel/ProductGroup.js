import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;
const storeId = localStorage.getItem("storeId");

export default class ProductGroup {
    constructor(item = {}) {
        this.product_id = item.product_id || null;
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
        this.average_price = item.average_price || null;
        this.product_category_id = item.product_category_id || null;
        this.availability_days = item.availability_days || [];
        this.published = item.published || false;
        this.image = item.image || "";
        this.group_product = true;
    }

    static getCategories = () =>
        axios.get(`${ApiEndpoint}/${storeId}/product-categories`);

    static get = query =>
        axios.get(`${ApiEndpoint}/${storeId}/group-products${query}`);

    static create = item =>
        axios.post(`${ApiEndpoint}/${storeId}/group-products`, item);

    static update = item =>
        axios.put(
            `${ApiEndpoint}/${storeId}/group-products/${item.product_id}`,
            item
        );

    static delete = id =>
        axios.delete(`${ApiEndpoint}/${storeId}/group-products/${id}`);

    static uploadImage = (id, image) =>
        axios.post(
            `${ApiEndpoint}/${storeId}/group-products/${id}/images`,
            image
        );
}
