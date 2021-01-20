import API from "@/models/API";

export default class ProductSeries {
    constructor(item = {}) {
        
    }

    static get = () =>
        API().get(
            `/companies/${localStorage.getItem("storeId")}/products/sorted`
        );

    static update = (data) =>
        API().put(
            `/companies/${localStorage.getItem("storeId")}/products/order`,
            data
        );

}
