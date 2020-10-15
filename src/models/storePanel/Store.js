import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores/`;

export default class Product {
    constructor(item = {}) {
        this.billing_details = item.billing_details || {};
        this.company = item.company || {};
        this.flags = item.flags || {
            app_settings: {},
            general: {},
            reward: {}
        };
        this.notify_customers = item.notify_customers || {};
        this.category = item.category || {};
        this.country = item.country || {};
        this.timetable = [];
    }

    static get = (token, storeId) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.get(`${ApiEndpoint}${storeId}`);
    };

    static create = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(`${ApiEndpoint}${storeId}/products`, item);
    };
}
