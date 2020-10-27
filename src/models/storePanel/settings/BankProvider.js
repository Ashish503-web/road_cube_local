import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;
const storeId = localStorage.getItem("storeId");

export default class BankProvider {
    constructor(item = {}) {
        this.bank_provider = item.bank_provider || {
            bank_provider_id: null,
            logo: "",
            name: {
                el: "",
                en: "",
                it: ""
            }
        };
        this.credentials = item.credentials || { mid: "", key: "" };
    }

    static get = query =>
        axios.get(`${ApiEndpoint}/${storeId}/settings/bank-providers${query}`);

    static create = item =>
        axios.post(`${ApiEndpoint}/${storeId}/products`, item);

    static update = item =>
        axios.put(
            `${ApiEndpoint}/${storeId}/products/${item.product_id}`,
            item
        );

    static delete = id =>
        axios.delete(`${ApiEndpoint}/${storeId}/products/${id}`);

    static uploadImage = (id, image) =>
        axios.post(`${ApiEndpoint}/${storeId}/products/${id}/images`, image);
}
