import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = "https://api.roadcube.tk/v1";

export default class Transaction {
    constructor(item = {}) {
        this.transaction_id = item.transaction_id || null;
        this.user = item.user || "";
        this.receipt_number = item.receipt_number || "";
        this.products = item.products || [];
        this.amount = item.amount || null;
    }

    static getProducts = query =>
        axios.get(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/products${query}`
        );

    static getTransactionPreview = item => {
        axios.post(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/transaction-preview`,
            item
        );
    };

    static getTransactionStatuses = () =>
        axios.get(`${ApiEndpoint}/common/transaction-statuses`);

    static getTransactionTypes = () =>
        axios.get(`${ApiEndpoint}/common/transaction-types`);

    static get = query =>
        axios.get(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions${query}`
        );

    static getItem = id =>
        axios.get(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/${id}`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/create-store-staff-user-transaction`,
            item
        );

    static updateMobilePayments = item =>
        axios.put(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/flags/reward`,
            item
        );

    static changeStatus = item =>
        axios.put(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/${item.transaction_id}/change-status`,
            { transaction_status_id: item.transaction_status_id }
        );

    static update = item =>
        axios.put(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/${item.transaction_id}`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/${id}`
        );
}
