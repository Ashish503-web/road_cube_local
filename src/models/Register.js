import axios from "axios";
const ApiEndpoint = "https://api.roadcube.tk/v1";

export default class Product {
    constructor(item = {}) {
        this.product_id = item.product_id || null;
        this.published = item.published || false;
        this.name = item.name || "";
        this.description = item.description || "";
        this.retail_price = item.retail_price || null;
        this.wholesale_price = item.wholesale_price || null;
        this.shipping_cost = item.shipping_cost || null;
        this.delivery_cost = item.delivery_cost || null;
        this.product_category_id = item.product_category_id || null;
        this.availability_days = item.availability_days || [];
        this.image = item.image || "";
    }

    static getCountries = () => {
        return axios.get(`${ApiEndpoint}/common/countries`);
    };

    static createAccount = item => {
        return axios.post(`${ApiEndpoint}/users/registration/init`, item);
    };

    static resendCode = item => {
        return axios.post(`${ApiEndpoint}/users/resend-password`, item);
    };

    static verifyMobile = item => {
        return axios.post(`${ApiEndpoint}/users/mobile/verification`, item);
    };

    static getAppProviders = () => {
        return axios.get(`${ApiEndpoint}/common/app-providers`);
    };

    static getSubscriptionPlans = companyId => {
        return axios.get(
            `${ApiEndpoint}/common/companies/${companyId}/subscription-plans`
        );
    };

    static getGiftCategories = companyId => {
        return axios.get(
            `${ApiEndpoint}/common/companies/${companyId}/gift-categories`
        );
    };

    static getStoreCategories = () => {
        return axios.get(`${ApiEndpoint}/common/store-categories`);
    };

    static createStore = item => {
        return axios.post(`${ApiEndpoint}/stores`, item);
    };

    static storeSignIn = item => {
        return axios.post(`${ApiEndpoint}/users/login`, item);
    };
}
