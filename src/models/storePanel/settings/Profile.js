import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default class Profile {
    static uploadImage = image =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/images`,
            image
        );

    static updateQuickPayment = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/flags`,
            item
        );

    static updateTimetable = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/timetable`,
            item
        );

    static updateInvoicing = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/billing-details`,
            item
        );

    static updateRedemption = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/redemption-types`,
            item
        );

    static getStoreCategories = () =>
        axios.get(`https://api.roadcube.tk/v1/common/store-categories`);

    static getCountries = () =>
        axios.get(`https://api.roadcube.tk/v1/common/countries`);

    static updateBusinessInformation = item =>
        axios.put(`${ApiEndpoint}/${localStorage.getItem("storeId")}`, item);

    static updateOrders = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/settings/orders`,
            item
        );
}
