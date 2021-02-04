import API from "@/models/API";

export default class CatalogManagement {
    constructor(item = {}) {}

    static get = () =>
        API().get(`/companies/${localStorage.getItem("companyId")}/gifts`);

    static getCategories = () =>
        API().get(
            `/companies/${localStorage.getItem("storeId")}/gift-categories`
            // `/companies/1/gift-categories`
        );

    static getGift = id =>
        API().get(
            `/companies/${localStorage.getItem("companyId")}/gifts/${id}`
        );

    static create = body =>
        API().post(
            // `/companies/${localStorage.getItem("companyId")}/gifts`,
            `/companies/${localStorage.getItem("storeId")}/gift-categories`,
            body
        );

    static update = (id, body) =>
        API().put(
            // `/companies/${localStorage.getItem("companyId")}/gifts/${id}`,
            `/companies/1/gift-categories/${id}`,
            body
        );

    static delete = id =>
        API().delete(
            // `/companies/${localStorage.getItem("companyId")}/gifts/${id}`
            `/companies/1/gift-categories/${id}`
        );

    static uploadImage = (id, image) =>
        API().post(
            // `/companies/${localStorage.getItem("companyId")}/gifts/${id}/images`
            `/companies/1/gift-categories/${id}/images`,
            image
        );
}
