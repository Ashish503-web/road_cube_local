import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

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
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/default-store-moderator-permissions`
        );

    static get = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/users/all`
        );

    static getItem = id =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/${id}/profile`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/create-store-moderator`,
            item
        );

    static update = (id, item) =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/${id}/permissions`,
            item
        );
}
