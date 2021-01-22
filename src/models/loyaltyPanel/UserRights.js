import API from "@/models/API";

export default class UserRights {
    constructor(item = {}) {
        this.user_id = item.user_id || null;
        this.mobile = item.mobile || "";
        this.password = item.password || "";
        this.permissions = item.permissions || {};
    }

    static get = (query) =>
        API().get(`/companies/${localStorage.getItem("storeId")}/users${query}`);

    static getModeratorPermissions = () =>
        API().get(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/users/default-company-moderator-permissions`
        );
    
    static create = item =>
        API().post(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/users`,
            item
        );
}
