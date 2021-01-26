import API from "@/models/API";

export default class PaymentProvider {
    constructor(item = {}) {
        this.bank_provider_id = item.bank_provider_id || null;
        this.name = item.name || {};
        this.store_bank_provider_id = item.store_bank_provider_id || null;
        this.fields = item.fields || {};
        this.credentials = item.credentials || {
            [this.fields[0]]: "",
            [this.fields[1]]: ""
        };
    }

    static get = () =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/settings/bank-providers`
        );

    static create = item =>
        API().post(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers`,
            item
        );

    static update = item =>
        API().put(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers`,
            item
        );

    static delete = id =>
        API().delete(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers/${id}`
        );
}
