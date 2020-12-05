import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

export default class PaymentProvider {
    constructor(item = {}) {
        this.bank_provider_id = item.bank_provider_id || null;
        this.name = item.name || {};
        this.store_bank_provider_id = item.store_bank_provider_id || null;
        this.fields = item.fields || {};
        this.credentials = item.credentials || {
            [this.fields[0]]: "",
            [this.fields[1]]: ""
        };
    }

    static get = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers`,
            item
        );

    static update = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers/${id}`
        );
}
