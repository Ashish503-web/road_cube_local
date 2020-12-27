import API from "@/models/API";

export default class User {
    constructor(item = {}) {
        this.user_id = item.user_id || null;
        this.mobile = item.mobile || "";
        this.password = item.password || "";
        this.permissions = item.permissions || {};
    }

    static checkPermissionsStatus(permissions) {
        for (let key in permissions) {
            if (typeof permissions[key] !== "object") {
                if (permissions[key]) {
                    return true;
                }
            } else {
                let subPermissions = permissions[key];

                for (let key in subPermissions) {
                    if (typeof subPermissions[key] !== "object") {
                        if (subPermissions[key]) {
                            return true;
                        }
                    } else {
                        for (let subKey in subPermissions[key]) {
                            if (subPermissions[key][subKey]) {
                                return true;
                            }
                        }
                    }
                }
            }
        }

        return false;
    }

    static getModeratorPermissions = () =>
        API().get(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/users/default-store-moderator-permissions`
        );

    static get = () =>
        API().get(`/stores/${localStorage.getItem("storeId")}/users/all`);

    static getItem = id =>
        API().get(
            `/stores/${localStorage.getItem("storeId")}/users/${id}/profile`
        );

    static create = item =>
        API().post(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/users/create-store-moderator`,
            item
        );

    static update = (id, item) =>
        API().put(
            `/stores/${localStorage.getItem(
                "storeId"
            )}/users/${id}/permissions`,
            item
        );
}
