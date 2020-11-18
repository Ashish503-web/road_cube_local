import Register from "@/models/Register";

export default {
    namespaced: true,

    state: () => ({
        loading: false,
        errorMessage: "",
        appProviders: [],
        appProvider: null,
        providerStoreId: null,
        subscriptionPlans: [],
        subscriptionPlan: null,
        step: 1,
        countries: [],
        country: null,
        mobile: null,
        tos: false,
        userRegistrationIdentifier: "",
        mobileVerificationCode: "",
        code: "",
        giftCategories: [],
        giftCategory: null,
        storeCategories: [],
        storeCategory: null,
        name: "",
        address: "",
        zip: "",
        vatNumber: "",
        email: "",
        primaryPhone: "",
        fullname: "",
        password: "",
        confirmPassword: "",
        successMessage: ""
    }),

    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },

        setErrorMessage(state, payload) {
            state.errorMessage = payload;
        },

        setAppProviders(state, payload) {
            state.appProviders = payload;
        },

        setAppProvider(state, payload) {
            state.appProvider = payload.app_provider_id;
            state.providerStoreId = payload.store_id;
        },

        setSubscriptionPlans(state, payload) {
            state.subscriptionPlans = payload;
        },

        setSubscriptionPlan(state, payload) {
            state.subscriptionPlan = payload;
        },

        setStep(state, payload) {
            state.step = payload;
        },

        setCountries(state, payload) {
            state.countries = payload;
        },

        setCountry(state, payload) {
            state.country = payload;
        },

        setMobile(state, payload) {
            state.mobile = payload;
        },

        setTos(state, payload) {
            state.tos = payload;
        },

        setUserRegistrationIdentifier(state, payload) {
            state.userRegistrationIdentifier = payload;
        },

        setMobileVerificationCode(state, payload) {
            state.mobileVerificationCode = payload;
        },

        setCode(state, payload) {
            state.code = payload;
        },

        setGiftCategories(state, payload) {
            state.giftCategories = payload;
        },

        setGiftCategory(state, payload) {
            state.giftCategory = payload;
        },

        setStoreCategories(state, payload) {
            state.storeCategories = payload;
        },

        setStoreCategory(state, payload) {
            state.storeCategory = payload;
        },

        setName(state, payload) {
            state.name = payload;
        },

        setAddress(state, payload) {
            state.address = payload;
        },

        setZip(state, payload) {
            state.zip = payload;
        },

        setVatNumber(state, payload) {
            state.vatNumber = payload;
        },

        setEmail(state, payload) {
            state.email = payload;
        },

        setPrimaryPhone(state, payload) {
            state.primaryPhone = payload;
        },

        setFullname(state, payload) {
            state.fullname = payload;
        },

        setPassword(state, payload) {
            state.password = payload;
        },

        setConfirmPassword(state, payload) {
            state.confirmPassword = payload;
        },

        setSuccessMessage(state, payload) {
            state.successMessage = payload;
        }
    },

    actions: {
        async getAppProviders({ commit }) {
            try {
                const { data } = await Register.getAppProviders();

                commit("setAppProviders", data.data);
            } catch (ex) {
                console.error(ex);
            }
        },

        async getSubscriptionPlans({ commit, state }) {
            try {
                const { data } = await Register.getSubscriptionPlans(
                    state.providerStoreId
                );

                commit("setSubscriptionPlans", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getCountries({ commit }) {
            try {
                const { data } = await Register.getCountries();

                commit("setCountries", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async createAccount({ commit, state }) {
            try {
                commit("setLoading", true);

                const { data } = await Register.createAccount({
                    country_id: state.country,
                    mobile: state.mobile,
                    tos: state.tos
                });

                localStorage.setItem("country", state.country);
                localStorage.setItem("mobile", state.mobile);
                localStorage.setItem(
                    "userRegistrationIdentifier",
                    data.data.user.user_registration_identifier
                );
                localStorage.setItem(
                    "mobileVerificationCode",
                    data.data.user.mobile_verification_code
                );
                localStorage.setItem("registrationStep", 2);

                commit("setMobile", data.data.user.mobile);
                commit(
                    "setUserRegistrationIdentifier",
                    data.data.user.user_registration_identifier
                );
                commit(
                    "setMobileVerificationCode",
                    data.data.user.mobile_verification_code
                );
                commit("setLoading", false);
                commit("setErrorMessage", "");
                commit("setStep", state.step + 1);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async resendCode({ commit, state }) {
            try {
                commit("setLoading", true);

                const { data } = await Register.resendCode({
                    user_registration_identifier:
                        state.userRegistrationIdentifier
                });

                console.log(data);

                // localStorage.setItem(
                //     "mobileVerificationCode",
                //     data.data.user.mobile_verification_code
                // );
                // commit(
                //     "setMobileVerificationCode",
                //     data.data.user.mobile_verification_code
                // );

                commit("setLoading", false);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async verifyMobile({ commit, state }) {
            try {
                commit("setLoading", true);

                await Register.verifyMobile({
                    user_registration_identifier:
                        state.userRegistrationIdentifier,
                    mobile_verification_code: state.code
                });

                localStorage.setItem("registrationStep", 3);
                localStorage.removeItem("mobileVerificationCode");

                commit("setLoading", false);
                commit("setErrorMessage", "");
                commit("setStep", state.step + 1);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async getGiftCategories({ commit, state }) {
            try {
                const { data } = await Register.getGiftCategories(
                    state.providerStoreId
                );

                commit("setGiftCategories", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getStoreCategories({ commit, state }) {
            try {
                const { data } = await Register.getStoreCategories();

                commit("setStoreCategories", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async createStore({ commit, state }) {
            try {
                commit("setLoading", true);

                const { data } = await Register.createStore({
                    store_details: {
                        name: state.name,
                        address: state.address,
                        zip: state.zip,
                        lat: 35.124233,
                        lon: 11.432112,
                        vat_number: state.vatNumber,
                        email: state.email,
                        primary_phone: state.primaryPhone,
                        store_category_id: state.storeCategory,
                        gift_category_id: state.giftCategory,
                        parent_id: 1,
                        store_subscription_plan_id: state.subscriptionPlan,
                        country_id: state.country
                    },
                    user_details: {
                        user_registration_identifier:
                            state.userRegistrationIdentifier,
                        app_provider_id: state.appProvider,
                        full_name: state.fullname,
                        password: state.password,
                        password_confirmation: state.confirmPassword,
                        referral: "Facebook",
                        tos: true,
                        marketing: true
                    }
                });

                localStorage.setItem("storeId", data.data.store_id);
                commit("setStoreId", data.data.store_id, { root: true });

                const signIn = await Register.storeSignIn({
                    app_provider_id: state.appProvider,
                    mobile: state.mobile,
                    password: state.password
                });

                localStorage.setItem("accessToken", signIn.data.access_token);
                commit("setAccessToken", signIn.data.access_token, {
                    root: true
                });

                localStorage.removeItem("registrationStep");
                localStorage.removeItem("country");
                localStorage.removeItem("mobile");
                localStorage.removeItem("userRegistrationIdentifier");
                localStorage.removeItem("subscriptionPlan");
                localStorage.removeItem("providerStoreId");
                localStorage.removeItem("appProvider");

                commit(
                    "setSuccessMessage",
                    "You have successfully created a store"
                );
                commit("setLoading", false);
                commit("setErrorMessage", "");
                commit("setStep", state.step + 1);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        }
    }
};
