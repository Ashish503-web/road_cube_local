import API from "@/models/API";

export default class Profile {
    static uploadImage = image =>
        API().post(`/stores/${localStorage.getItem("storeId")}/images`, image);

    static getCountries = () => API().get(`/common/countries`);

    static updateBusinessInformation = item =>
        API().put(`/stores/${localStorage.getItem("storeId")}`, item);

    static updateTimetable = item =>
        API().put(`/stores/${localStorage.getItem("storeId")}/timetable`, item);

    static updateInvoicing = item =>
        API().put(
            `/stores/${localStorage.getItem("storeId")}/billing-details`,
            item
        );

    static updateFastPayment = item =>
        API().put(`/stores/${localStorage.getItem("storeId")}/flags`, item);

    static updateShoppingCart = item =>
        API().put(`/stores/${localStorage.getItem("storeId")}`, item);

    static updatePassword = item =>
        API().post(
            `/stores/${localStorage.getItem("storeId")}/settings/password`,
            item
        );

    static updateRedemption = item =>
        API().put(
            `/stores/${localStorage.getItem("storeId")}/redemption-types`,
            item
        );

    static updateDeliverySettings = item =>
        API().put(
            `/stores/${localStorage.getItem("storeId")}/settings/delivery`,
            item
        );
}
