import API from "@/models/API";

export default class Payment {
    constructor(item = {}) {
        this.bank_provider_id = item.bank_provider_id || null;
        this.store_bank_clearer_id = item.bank_provider_id || null;
    }

    static get = () =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/settings/subscription`
        );

    static create = item =>
        API().post(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/settings/payment-routings`,
            item
        );
}
