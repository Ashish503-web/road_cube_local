import API from "@/models/API";

export default class CatalogManagement {
    constructor(item = {}) {}

    static get = () =>
        API().get(`/companies/${localStorage.getItem("companyId")}/gifts`);

    static getCategories = () =>
        API().get(
            `/companies/${localStorage.getItem("companyId")}/gift-categories`
        );

    static getGift = id =>
        API().get(
            `/companies/${localStorage.getItem("companyId")}/gifts/${id}`
        );

    static create = body =>
        API().post(
            `/companies/${localStorage.getItem("companyId")}/gifts`,
            body
        );

    static update = (id, body) =>
        API().put(
            `/companies/${localStorage.getItem("companyId")}/gifts/${id}`,
            body
        );

    static delete = id =>
        API().delete(
            `/companies/${localStorage.getItem("companyId")}/gifts/${id}`
        );
}
