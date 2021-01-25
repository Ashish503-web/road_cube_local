import API from "@/models/API";

export default class Debts {
    constructor(item = {}) {}

    static get = (date) =>
        API().get(`/companies/${localStorage.getItem("storeId")}/store-debts/monthly-analysis?date=${date}&paid=false`);

    static getRedemptionInvoice = (date) =>
        API().get(`/companies/${localStorage.getItem("storeId")}/store-debts/monthly-analysis-redemption?date=${date}&paid=false`);
}
