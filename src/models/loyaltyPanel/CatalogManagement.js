import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/companies`;

export default class CatalogManagement {
    constructor(item = {}) {}

    static get = () =>
        axios.get(`${ApiEndpoint}/${localStorage.getItem("companyId")}/gifts`);

    static getCategories = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem(
                "companyId"
            )}/gift-categories`
        );

    static getGift = id =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem("companyId")}/gifts/${id}`
        );

    static create = body =>
        axios.post(
            `${ApiEndpoint}/${localStorage.getItem("companyId")}/gifts`,
            body
        );

    static update = (id, body) =>
        axios.put(
            `${ApiEndpoint}/${localStorage.getItem("companyId")}/gifts/${id}`,
            body
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/${localStorage.getItem("companyId")}/gifts/${id}`
        );
}
