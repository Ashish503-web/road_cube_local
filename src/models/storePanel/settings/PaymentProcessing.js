import API from "@/models/API";

export default class PaymentProcessing {
    constructor(item = {}) {
        this.store_payment_routing_id = item.store_payment_routing_id;
        this.bank_provider = item.bank_provider || {};
        this.bank_clearer = item.bank_clearer || {};
    }

    static getStoreBankProviders = () =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/settings/bank-providers`
        );

    static get = () =>
        API().get(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/settings/payment-routings`
        );

    static update = (id, item) =>
        API().put(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/settings/payment-routings/${id}`,
            item
        );
}
