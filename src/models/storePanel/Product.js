import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores/`;

export default class Product {
    constructor(product = {}) {
        this.product_id = product.product_id || null;
        this.published = product.published || false;
        this.name = product.name || "";
        this.description = product.description || "";
        this.retail_price = product.retail_price || null;
        this.wholesale_price = product.wholesale_price || null;
        this.shipping_cost = product.shipping_cost || null;
        this.delivery_cost = product.delivery_cost || null;
        this.product_category_id = product.product_category_id || null;
        this.image = product.image || "";
    }

    static get = (token, storeId, query) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(`${ApiEndpoint}${storeId}/products${query}`);
    };

    static post = (token, storeId, product) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(`${ApiEndpoint}${storeId}/products`, product);
    };

    static put = (token, storeId, product) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(
            `${ApiEndpoint}${storeId}/products/${product.product_id}`,
            product
        );
    };

    static delete = (token, storeId, productId) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.delete(`${ApiEndpoint}${storeId}/products/${productId}`);
    };

    static uploadImage = (token, storeId, productId, image) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(
            `${ApiEndpoint}${storeId}/products/${productId}/images`,
            image
        );
    };
}
