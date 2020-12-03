import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

export default class Profile {
    static uploadImage = image =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/images`,
            image
        );

    static getCountries = () =>
        axios.get(`https://api.roadcube.tk/v1/common/countries`);

    static updateBusinessInformation = item =>
        axios.put(`${ApiEndpoint}/${localStorage.getItem("storeId")}`, item);

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

    static updateFastPayment = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/flags`,
            item
        );

    static updateShoppingCart = item =>
        axios.put(`${ApiEndpoint}/${localStorage.getItem("storeId")}`, item);

    static updatePassword = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/password`,
            item
        );

    static updateRedemption = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/redemption-types`,
            item
        );

    static updateDeliverySettings = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/delivery`,
            item
        );
}
