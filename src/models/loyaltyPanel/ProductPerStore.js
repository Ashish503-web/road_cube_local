import API from "@/models/API";

export default class ProductPerStore {
    constructor(item = {}) {
        
    }

    static get = () =>
        API().get(
            `/companies/${localStorage.getItem("storeId")}/stores/products?page=5`
        );
}
