import API from "@/models/API";

export default class Store {
    constructor(item = {}) {
        this.store_id = item.store_id || 53;
        this.store_subscription_plan_id =
            item.store_subscription_plan_id || null;
        this.country_id = item.country_id || null;
        this.name = item.name || "";
        this.address = item.address || "";
        this.zip = item.zip || null;
        this.lat = item.lat || 35.124233;
        this.lon = item.lon || 11.432112;
        this.vat_number = item.vat_number || null;
        this.email = item.email || "";
        this.primary_phone = item.primary_phone || null;
        this.parent_id = item.parent_id || 1;
        this.store_company_network_region_id =
            item.store_company_network_region_id || null;
        this.bank_providers = item.bank_providers || [];
    }

    static getSubscriptionPlans = () =>
        API().get(
            `/common/companies/${localStorage.getItem(
                "storeId"
            )}/subscription-plans`
        );

    static getCountries = () => API().get(`/common/countries`);

    static get = query =>
        API().get(
            `/companies/${localStorage.getItem("storeId")}/stores${query}`
        );

    static getFinancialData = query =>
        API().get(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/stores-summaries${query}`
        );

    static getDailyLimits = query =>
        API().get(
            `/companies/${localStorage.getItem(
                "storeId"
            )}/stores/daily-limits${query}`
        );

    static create = item =>
        API().post(
            `/companies/${localStorage.getItem("storeId")}/stores/create`,
            item
        );

    static update = item =>
        API().put(
            `/companies/${localStorage.getItem("storeId")}/stores/${
                item.store_id
            }`,
            item
        );

    static delete = id =>
        API().delete(
            `/companies/${localStorage.getItem("storeId")}/stores/${id}`
        );
}
