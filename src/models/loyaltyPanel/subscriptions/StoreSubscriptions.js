import API from "@/models/API";

export default class StoreSubscriptions {
    constructor(item = {}) {
        
    }

    static get = (query) =>
        API().get(`/companies/${localStorage.getItem("storeId")}/subscriptions${query}`);

}
