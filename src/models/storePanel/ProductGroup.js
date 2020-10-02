import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores/`;

export default class ProductGroup {
    constructor(productGroup = {}) {
        this.product_id = productGroup.product_id || null;
        this.name = productGroup.name || "";
        this.description = productGroup.description || "";
        this.average_price = productGroup.average_price || null;
        this.product_category_id = productGroup.product_category_id || null;
        this.availability_days = productGroup.availability_days || [];
        this.published = productGroup.published || false;
        this.image = productGroup.image || "";
    }

    static get = (token, storeId, query) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(`${ApiEndpoint}${storeId}/group-products${query}`);
    };

    static post = (token, storeId, productGroup) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(
            `${ApiEndpoint}${storeId}/group-products`,
            productGroup
        );
    };

    static put = (token, storeId, productGroup) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(
            `${ApiEndpoint}${storeId}/group-products/${productGroup.product_id}`,
            productGroup
        );
    };

    static delete = (token, storeId, productId) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.delete(
            `${ApiEndpoint}${storeId}/group-products/${productId}`
        );
    };

    static uploadImage = (token, storeId, productId, image) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(
            `${ApiEndpoint}${storeId}/group-products/${productId}/images`,
            image
        );
    };
}
