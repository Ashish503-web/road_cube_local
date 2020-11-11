import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1`;

export default class PaymentProcessing {
    constructor(item = {}) {
        this.bank_provider_id = item.bank_provider_id || null;
        this.store_bank_clearer_id = item.bankProvider.bank_provider_id || null;
    }

    static getAllBankProviders = () =>
        axios.get(`${ApiEndpoint}/admin/bank-providers`);

    static getStoreBankProviders = () =>
        axios.get(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers`
        );

    static get = () =>
        axios.get(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/settings/payment-routings`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/settings/payment-routings`,
            item
        );
}
