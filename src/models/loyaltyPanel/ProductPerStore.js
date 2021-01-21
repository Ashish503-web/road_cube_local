import API from "@/models/API";

export default class ProductPerStore {
    constructor(item = {}) {
        
    }

    static get = (query) =>
        API().get(
            `/companies/${localStorage.getItem("storeId")}/stores/products${query}`
        );
}
