import API from "@/models/API";

export default class UserRights {
    constructor(item = {}) {}

    static get = (query) =>
        API().get(`/companies/${localStorage.getItem("storeId")}/users${query}`);
}
