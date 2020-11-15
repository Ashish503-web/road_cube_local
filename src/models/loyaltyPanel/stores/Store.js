import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/companies`;

export default class Store {
    constructor(item = {}) {
        this.coupon_id = item.coupon_id || null;
    }

    static get = query =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/stores${query}`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/products`,
            item
        );

    static update = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/products/${
                item.product_id
            }`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/products/${id}`
        );

    static uploadImage = (id, image) =>
        axios.post(
            `${ApiEndpoint}${localStorage.getItem(
                "storeId"
            )}/products/${id}/images`,
            image
        );
}
