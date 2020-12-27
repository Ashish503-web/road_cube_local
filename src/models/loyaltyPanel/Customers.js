import API from "@/models/API";

export default class Customers {
    constructor(item = {}) {}

    static get = () =>
        API().get(`/companies/${localStorage.getItem("companyId")}/customers`);
}
