import axios from "axios";
const ApiEndpoint = "https://api.roadcube.tk/v1/stores/";

export default class Transaction {
    constructor(item = {}) {
        this.transaction_id = item.transaction_id || null;
    }

    static get = (token, storeId, query) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(`${ApiEndpoint}${storeId}/transactions${query}`);
    };

    static create = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(`${ApiEndpoint}${storeId}/transactions`, item);
    };

    static update = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(
            `${ApiEndpoint}${storeId}/transactions/${item.transaction_id}`,
            item
        );
    };

    static delete = (token, storeId, id) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.delete(`${ApiEndpoint}${storeId}/transactions/${id}`);
    };
}
