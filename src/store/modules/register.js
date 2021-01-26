import Register from "@/models/Register";
import StoreDetails from "@/models/StoreDetails";

export default {
    namespaced: true,

    state: () => ({
        loading: false,
        errorMessage: "",
        appProviders: [],
        appProvider: null,
        providerStoreId: null,
        subscriptionPlans: [],
        step: 1,
        countries: [],
        mobile: 6982591305,
        tos: false,
        userRegistrationIdentifier: "",
        mobileVerificationCode: "",
        code: "",
        fullname: "",
        password: "",
        confirmPassword: "",
        storeDetails: new StoreDetails(),
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
            state.storeDetails.store_subscription_plan_id = payload;
        },

        setStep(state, payload) {
            state.step = payload;
        },

        setCountries(state, payload) {
            state.countries = payload;
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
                    country_id: state.storeDetails.country_id,
                    mobile: state.mobile,
                    tos: state.tos
                });

                localStorage.setItem("country", state.storeDetails.country_id);
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

        async createStore({ commit, state }) {
            try {
                commit("setLoading", true);

                const { data } = await Register.createStore({
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
                    },
                    store_details: state.storeDetails
                });

                localStorage.setItem("storeId", data.data.store_id);
                commit("setStoreId", data.data.store_id, { root: true });

                const { data: signIn } = await Register.storeSignIn({
                    app_provider_id: state.appProvider,
                    mobile: state.mobile,
                    password: state.password
                });

                localStorage.setItem("accessToken", signIn.access_token);
                commit("setAccessToken", signIn.access_token, {
                    root: true
                });
                signIn.extra_data.user.role =
                    signIn.extra_data.user_stores[0].role.name;
                commit("setUser", signIn.extra_data.user, { root: true });
                commit(
                    "setPermissions",
                    signIn.extra_data.user_stores[0].permissions,
                    { root: true }
                );

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
