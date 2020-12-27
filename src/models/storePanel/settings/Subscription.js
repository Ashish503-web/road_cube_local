import API from "@/models/API";

export default class Subscription {
    static get = () =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/settings/subscription`
        );

    static getPaymentMethods = () =>
        API().get(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/settings/subscription/payment-methods`
        );

    static attachPaymentMethod = item =>
        API().put(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/settings/subscription/attach-payment-method`,
            item
        );

    static getRedirectForm = () =>
        API().get(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/settings/subscription/redirect-form`
        );
}
