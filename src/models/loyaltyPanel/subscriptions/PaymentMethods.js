import API from "@/models/API";

export default class PaymentMethods {
    constructor(item = {}) {
        this.payment_method_id = item.payment_method_id || null;
        this.system_payment_method_id = item.system_payment_method_id || null;
        this.credentials = item.credentials || {
            name: "",
            iban: ""
        };
    }

    static getCompanyPaymentMethods = () =>
        API().get(`/companies/${localStorage.getItem("storeId")}/subscriptions/payment-methods`);

    static getSystemPaymentMethods = () =>
        API().get(`/companies/${localStorage.getItem("storeId")}/subscriptions/system-payment-methods`);

    static getPaymentMethodProfile = (id) =>
        API().get(`/companies/${localStorage.getItem("storeId")}/subscriptions/payment-methods/${id}`);

    static create = item =>
        API().post(
            `/companies/${localStorage.getItem("storeId")}/subscriptions/payment-method`,
            item
        );

}
