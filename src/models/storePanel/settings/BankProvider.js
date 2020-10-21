import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores/`;

export default class BankProvider {
    constructor(item = {}) {
        this.bank_provider = item.bank_provider || {
            bank_provider_id: null,
            logo: "",
            name: {
                el: "",
                en: "",
                it: ""
            }
        };
        this.credentials = item.credentials || { mid: "", key: "" };
    }

    static get = (token, storeId, query) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(
            `${ApiEndpoint}${storeId}/settings/bank-providers${query}`
        );
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
