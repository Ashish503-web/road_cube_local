import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = process.env.VUE_APP_DEFAULT_API_URL;

export default class PaymentProcessing {
    constructor(item = {}) {
        this.store_payment_routing_id = item.store_payment_routing_id;
        this.bank_provider = item.bank_provider || {};
        this.bank_clearer = item.bank_clearer || {};
    }

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

    static update = (id, item) =>
        axios.put(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/settings/payment-routings/${id}`,
            item
        );
}
