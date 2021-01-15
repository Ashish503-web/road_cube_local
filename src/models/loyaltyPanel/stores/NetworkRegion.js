import API from "@/models/API";

export default class NetworkRegion {
    constructor(item = {}) {
        this.store_company_network_region_id =
            item.store_company_network_region_id || null;
        this.name = item.name || "";
    }

    static get = query =>
        API().get(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/network-regions${query}`
        );

    static create = item =>
        API().post(
            `/companies/${localStorage.getItem("storeId")}/network-regions`,
            item
        );

    static update = item =>
        API().put(
            `/companies/${localStorage.getItem("storeId")}/network-regions/${
                item.store_company_network_region_id
            }`,
            item
        );

    static delete = id =>
        API().delete(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/network-regions/${id}`
        );
}
