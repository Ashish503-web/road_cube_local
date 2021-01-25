import API from "@/models/API";

export default class Debts {
    constructor(item = {}) {}

    static get = (query) =>
        API().get(`/companies/${localStorage.getItem("storeId")}/store-debts/monthly-analysis?page=${query.page}&date=${query.date}&paid=${query.paid}`);

    static getRedemptionInvoice = (query) =>
        API().get(`/companies/${localStorage.getItem("storeId")}/store-debts/monthly-analysis-redemption?page=${query.page}&date=${query.date}&paid=${query.paid}`);
}
