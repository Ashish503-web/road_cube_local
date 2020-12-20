import axios from "axios";
const ApiEndpoint = process.env.VUE_APP_DEFAULT_API_URL;

export default class User {
    constructor(item = {}) {
        this.user_registration_identifier =
            item.user_registration_identifier || null;
        this.app_provider_id = item.app_provider_id || null;
        this.full_name = item.full_name || "";
        this.password = item.password || "";
        this.password_confirmation = item.password_confirmation || "";
        this.referral = item.referral || "Facebook";
        this.tos = item.tos || true;
        this.marketing = item.marketing || true;
    }

    static getAppProviders = () =>
        axios.get(`${ApiEndpoint}/common/app-providers`);

    static getSubscriptionPlans = companyId =>
        axios.get(
            `${ApiEndpoint}/common/companies/${companyId}/subscription-plans`
        );

    static getCountries = () => axios.get(`${ApiEndpoint}/common/countries`);

    static createAccount = item =>
        axios.post(`${ApiEndpoint}/users/registration/init`, item);

    static resendCode = item =>
        axios.post(`${ApiEndpoint}/users/resend-password`, item);

    static verifyMobile = item => {
        return axios.post(`${ApiEndpoint}/users/mobile/verification`, item);
    };

    static getGiftCategories = companyId =>
        axios.get(
            `${ApiEndpoint}/common/companies/${companyId}/gift-categories`
        );

    static getStoreCategories = () =>
        axios.get(`${ApiEndpoint}/common/store-categories`);

    static createStore = item => axios.post(`${ApiEndpoint}/stores`, item);

    static storeSignIn = item => axios.post(`${ApiEndpoint}/users/login`, item);
}
