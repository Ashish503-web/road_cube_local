import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores/`;

export default class PaymentRoutings {
    static get = (token, storeId, query) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(
            `${ApiEndpoint}${storeId}/settings/payment-routings${query}`
        );
    };
}
