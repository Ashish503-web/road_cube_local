import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = process.env.VUE_APP_DEFAULT_API_URL;

export default class Store {
    constructor(item = {}) {
        this.store_id = item.store_id || 53;
        this.name = item.name || "";
        this.address = item.address || "";
        this.zip = item.zip || null;
        this.lat = item.lat || 35.124233;
        this.lon = item.lon || 11.432112;
        this.vat_number = item.vat_number || null;
        this.email = item.email || "";
        this.primary_phone = item.primary_phone || null;
        this.parent_id = item.parent_id || 1;
        this.store_subscription_plan_id =
            item.store_subscription_plan_id || null;
        this.country_id = item.country_id || null;
        this.bank_providers = item.bank_providers || [];
        this.registration_date = item.registration_date || "";
    }

    static getSubscriptionPlans = () =>
        axios.get(
            `${ApiEndpoint}/common/companies/${localStorage.getItem(
                "storeId"
            )}/subscription-plans`
        );

    static getCountries = () => axios.get(`${ApiEndpoint}/common/countries`);

    static get = query =>
        axios.get(
            `${ApiEndpoint}/companies/${localStorage.getItem(
                "storeId"
            )}/stores${query}`
        );

    static getItem = id =>
        axios.get(
            `${ApiEndpoint}/companies/${localStorage.getItem(
                "storeId"
            )}/stores/${id}`
        );

    static getFinancialData = query =>
        axios.get(
            `${ApiEndpoint}/companies/${localStorage.getItem(
                "storeId"
            )}/stores-summaries${query}`
        );

    static getDailyLimits = query =>
        axios.get(
            `${ApiEndpoint}/companies/${localStorage.getItem(
                "storeId"
            )}/stores/daily-limits${query}`
        );

    static create = item =>
        axios.post(
            `${ApiEndpoint}/companies/${localStorage.getItem(
                "storeId"
            )}/stores/create`,
            item
        );

    static update = item =>
        axios.put(
            `${ApiEndpoint}/companies/${localStorage.getItem(
                "storeId"
            )}/stores/${item.store_id}`,
            item
        );

    static delete = id =>
        axios.delete(
            `${ApiEndpoint}/companies/${localStorage.getItem(
                "storeId"
            )}/stores/${id}`
        );

    static uploadImage = (id, image) =>
        axios.post(
            `${ApiEndpoint}${localStorage.getItem(
                "storeId"
            )}/products/${id}/images`,
            image
        );
}
