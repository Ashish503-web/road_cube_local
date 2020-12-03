import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = process.env.VUE_APP_DEFAULT_API_URL;

export default class Payment {
    constructor(item = {}) {
        this.bank_provider_id = item.bank_provider_id || null;
        this.store_bank_clearer_id = item.bank_provider_id || null;
    }

    static get = () =>
        axios.get(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/settings/subscription`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/settings/payment-routings`,
            item
        );
}
