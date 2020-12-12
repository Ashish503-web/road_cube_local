import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = process.env.VUE_APP_DEFAULT_API_URL;

export default class Transaction {
    constructor(item = {}) {
        this.transaction_id = item.transaction_id || null;
        this.user = item.user || null;
        this.receipt_number = item.receipt_number || null;
        this.voucher = item.voucher || null;
        this.amount = item.amount || null;
        this.is_online_transaction = item.is_online_transaction || false;
        this.products = item.products || [];
        this.product_coupon_claims_for_use =
            item.product_coupon_claims_for_use || [];
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
        axios.get(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/products${query}`
        );

    static getTransactionPreview = item =>
        axios.post(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/transaction-preview`,
            item
        );

    static getTransactionStatuses = () =>
        axios.get(`${ApiEndpoint}/common/transaction-statuses`);

    static getTransactionTypes = () =>
        axios.get(`${ApiEndpoint}/common/transaction-types`);

    static get = query =>
        axios.get(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions${query}`
        );

    static getItem = id =>
        axios.get(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/${id}`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/create-store-staff-user-transaction`,
            item
        );

    static updateMobilePayments = item =>
        axios.put(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/flags/reward`,
            item
        );

    static changeStatus = item =>
        axios.put(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/${item.transaction_id}/change-status`,
            { transaction_status_id: item.transaction_status_id }
        );

    static refundTransaction = item =>
        axios.delete(
            `${ApiEndpoint}/stores/${localStorage.getItem(
                "storeId"
            )}/transactions/cancel-transaction`,
            item
        );
}
