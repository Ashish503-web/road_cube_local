import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

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

    static get = () =>
        axios.get(`https://api.roadcube.tk/v1/admin/bank-providers`);

    static getStoreProviders = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers`
        );

    static createItem = item =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers`,
            item
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

    static updateProvider = item =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers`,
            item
        );

    static removeProvider = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/settings/bank-providers/${id}`
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem("storeId")}/products/${id}`
        );

    static uploadImage = (id, image) =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem(
                "storeId"
            )}/products/${id}/images`,
            image
        );
}
