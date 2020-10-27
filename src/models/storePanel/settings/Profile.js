import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;
const storeId = localStorage.getItem("storeId");

export default class Profile {
    static uploadImage = image =>
        axios.post(`${ApiEndpoint}/${storeId}/images`, image);

    static updateQuickPayment = item =>
        axios.put(`${ApiEndpoint}/${storeId}/flags`, item);

    static updateTimetable = item =>
        axios.put(`${ApiEndpoint}/${storeId}/timetable`, item);

    static updateInvoicing = item =>
        axios.put(`${ApiEndpoint}/${storeId}/billing-details`, item);

    static updateRedemption = item =>
        axios.put(`${ApiEndpoint}/${storeId}/redemption-types`, item);

    static getStoreCategories = () =>
        axios.get(`https://api.roadcube.tk/v1/common/store-categories`);

    static getCountries = () =>
        axios.get(`https://api.roadcube.tk/v1/common/countries`);

    static updateBusinessInformation = item =>
        axios.put(`${ApiEndpoint}/${storeId}`, item);

    static updateOrders = item =>
        axios.put(`${ApiEndpoint}/${storeId}/settings/orders`, item);
}
