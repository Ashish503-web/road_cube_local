import API from "@/models/API";

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

    static getAppProviders = () => API().get(`/common/app-providers`);

    static getSubscriptionPlans = companyId =>
        API().get(`/common/companies/${companyId}/subscription-plans`);

    static getCountries = () => API().get(`/common/countries`);

    static createAccount = item => API().post(`/users/registration/init`, item);

    static resendCode = item => API().post(`/users/resend-password`, item);

    static verifyMobile = item =>
        API().post(`/users/mobile/verification`, item);

    static getGiftCategories = companyId =>
        API().get(`/common/companies/${companyId}/gift-categories`);

    static getStoreCategories = () => API().get(`/common/store-categories`);

    static createStore = item => API().post(`/stores`, item);

    static storeSignIn = item => API().post(`/users/login`, item);
}
