import API from "@/models/API";

export default class Debts {
    constructor(item = {}) {}

    static get = () =>
        API().get(`/companies/${localStorage.getItem("storeId")}/store-debts/monthly-analysis?date=2021-01&paid=false`);
}
