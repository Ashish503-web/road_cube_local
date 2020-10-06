import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores/`;

export default class Invoice {
    constructor(item = {}) {
        this.country_id = item.country_id || null;
        this.comp_name = item.comp_name || "";
        this.vat_number = item.vat_number || "";
        this.city = item.city || "";
        this.occupation = item.occupation || "";
        this.tax_office = item.tax_office || "";
        this.receipt_comp_name = item.receipt_comp_name || "";
    }

    static uploadImage = (token, storeId, image) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(`${ApiEndpoint}${storeId}/images`, image);
    };

    static updateQuickPayment = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(`${ApiEndpoint}${storeId}/flags`, item);
    };

    static updateTimetable = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(`${ApiEndpoint}${storeId}/timetable`, item);
    };

    static updateInvoicing = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(`${ApiEndpoint}${storeId}/billing-details`, item);
    };

    static updateRedemption = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(`${ApiEndpoint}${storeId}/redemption-types`, item);
    };
}
