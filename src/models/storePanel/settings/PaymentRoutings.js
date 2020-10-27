import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;
const storeId = localStorage.getItem("storeId");

export default class PaymentRoutings {
    static get = query =>
        axios.get(
            `${ApiEndpoint}/${storeId}/settings/payment-routings${query}`
        );
}
