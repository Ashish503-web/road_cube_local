import Register from "@/models/Register";

export default {
    namespaced: true,

    state: () => ({
        step: 1,
        loading: false,
        errorMessage: "",
        countries: [
            {
                name: "Greece",
                country_id: 1
            },
            {
                name: "USA",
                country_id: 2
            },
            {
                name: "Italy",
                country_id: 3
            }
        ],
        country: null,
        mobile: "",
        userRegistrationIdentifier: "",
        mobileVerificationCode: "",
        code: "",
        appProviders: [],
        appProvider: null,
        subscriptionPlans: [],
        subscriptionPlan: null,
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
        setStep(state, payload) {
            state.step = payload;
        },

        setLoading(state, payload) {
            state.loading = payload;
        },

        setErrorMessage(state, payload) {
            state.errorMessage = payload;
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

        setUserRegistrationIdentifier(state, payload) {
            state.userRegistrationIdentifier = payload;
        },

        setMobileVerificationCode(state, payload) {
            state.mobileVerificationCode = payload;
        },

        setCode(state, payload) {
            state.code = payload;
        },

        setAppProviders(state, payload) {
            state.appProviders = payload;
        },

        setAppProvider(state, payload) {
            state.appProvider = payload;
        },

        setSubscriptionPlans(state, payload) {
            state.subscriptionPlans = payload;
        },

        setSubscriptionPlan(state, payload) {
            state.subscriptionPlan = payload;
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
        async getCountries({ commit }) {
            try {
                const { data } = await Register.getCountries();

                commit("setCountries", data.data);
            } catch (ex) {
                console.error(ex);
            }
        },

        async createAccount({ commit, state }) {
            try {
                commit("setLoading", true);

                const { data } = await Register.createAccount({
                    country_id: state.country,
                    mobile: state.mobile,
                    tos: true
                });

                localStorage.setItem("mobile", data.data.user.mobile);
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
                commit("setStep", state.step + 1);
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

                commit("setLoading", false);
                commit("setStep", state.step + 1);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

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
                    state.appProvider.store_id
                );

                // commit("setAppProviders", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getGiftCategories({ commit, state }) {
            try {
                const { data } = await Register.getGiftCategories(
                    state.appProvider.store_id
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

                await Register.createStore({
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

                // localStorage.setItem("storeId", res.data.data.store_id);
                // this.setStoreId(res.data.data.store_id);

                const { data } = await Register.storeSignIn({
                    app_provider_id: state.appProvider,
                    mobile: state.mobile,
                    password: state.password
                });

                localStorage.setItem("storeToken", data.data.access_token);
                commit("setStoreToken", data.data.access_token);

                commit(
                    "setSuccessMessage",
                    "You have successfully created a store"
                );
                commit("setLoading", false);
                commit("setStep", state.step + 1);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        }
    }
};
