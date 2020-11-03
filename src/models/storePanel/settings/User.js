import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

import Permissions from "./Permissions";

export default class User {
    constructor(item = {}) {
        this.mobile = item.mobile || "";
        this.password = item.password || "";
        this.permissions =
            new Permissions(item.permissions) || new Permissions();
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

    static enablePermissions = id =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/${id}/enable-permissions`
        );

    static disablePermissions = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/users/${id}/disable-permissions`
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
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/products/${id}`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/products/${id}`
        );
}
