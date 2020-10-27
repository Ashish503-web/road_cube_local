import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = "https://api.roadcube.tk/v1";
const storeId = localStorage.getItem("storeId");

export default class Transaction {
    constructor(item = {}) {
        this.transaction_id = item.transaction_id || null;
    }

    static getTransactionStatuses = () =>
        axios.get(`${ApiEndpoint}/common/transaction-statuses`);

    static getTransactionTypes = () =>
        axios.get(`${ApiEndpoint}/common/transaction-types`);

    static get = query =>
        axios.get(`${ApiEndpoint}/stores/${storeId}/transactions${query}`);

    static create = item =>
        axios.post(`${ApiEndpoint}/stores/${storeId}/transactions`, item);

    static update = item =>
        axios.put(
            `${ApiEndpoint}/stores/${storeId}/transactions/${item.transaction_id}`,
            item
        );

    static delete = id =>
        axios.delete(`${ApiEndpoint}/stores/${storeId}/transactions/${id}`);
}
