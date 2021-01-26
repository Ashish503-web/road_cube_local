import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const API = () =>
    axios.create({
        baseURL: process.env.VUE_APP_DEFAULT_API_URL
    });

export default class Register {
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
