import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores/`;

export default class Profile {
    static uploadImage = (token, storeId, image) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.post(`${ApiEndpoint}${storeId}/images`, image);
    };

    static updateQuickPayment = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(`${ApiEndpoint}${storeId}/flags`, item);
    };

    static updateOrdersData = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(`${ApiEndpoint}${storeId}/settings/orders`, item);
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

    static getStoreCategories = () => {
        return axios.get(`https://api.roadcube.tk/v1/common/store-categories`);
    };

    static getCountries = () => {
        return axios.get(`https://api.roadcube.tk/v1/common/countries`);
    };

    static updateBusinessInformation = (token, storeId, item) => {
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        return axios.put(`${ApiEndpoint}${storeId}`, item);
    };
}
