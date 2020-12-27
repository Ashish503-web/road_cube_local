import API from "@/models/API";

export default class Transaction {
    constructor(item = {}) {
        this.transaction_id = item.transaction_id || null;
        this.user = item.user || null;
        this.receipt_number = item.receipt_number || null;
        this.voucher = item.voucher || null;
        this.amount = item.amount || null;
        this.is_online_transaction = item.is_online_transaction || false;
        this.products = item.products || [];
        this.general_coupon_claims_for_use =
            item.general_coupon_claims_for_use || [];
        this.sampling_coupons_for_use = item.sampling_coupons_for_use || [];
    }

    static clearFalsyValues = obj => {
        for (let key in obj) {
            if (!obj[key]) delete obj[key];
            else if (typeof obj[key] === "object") {
                if (!obj[key].length) delete obj[key];
            }
        }
    };

    static getProducts = query =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/products${query}`
        );

    static getTransactionPreview = item =>
        API().post(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/transaction-preview`,
            item
        );

    static getTransactionStatuses = () =>
        API().get(`/common/transaction-statuses`);

    static getTransactionTypes = () => API().get(`/common/transaction-types`);

    static get = query =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/transactions${query}`
        );

    static getItem = id =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/transactions/${id}`
        );

    static create = item =>
        API().post(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/create-store-staff-user-transaction`,
            item
        );

    static updateMobilePayments = item =>
        API().put(
            `/stores/${localStorage.getItem("storeId")}/flags/reward`,
            item
        );

    static changeStatus = item =>
        API().put(
            `/stores/${localStorage.getItem("storeId")}/transactions/${
                item.transaction_id
            }/change-status`,
            { transaction_status_id: item.transaction_status_id }
        );

    static refundTransaction = item =>
        API().post(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/cancel-transaction`,
            item
        );
}
