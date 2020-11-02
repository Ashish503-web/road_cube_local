import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/companies`;

export default class Branches {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
    }

    static get = (query) =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/stores${query}`
        );
}
