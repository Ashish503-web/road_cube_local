import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

export default class Subscription {
    static get = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/subscription`
        );

    static getPaymentMethods = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/subscription/payment-methods`
        );

    static attachPaymentMethod = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/subscription/attach-payment-method`,
            item
        );

    static getRedirectForm = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/subscription/redirect-form`
        );
}
