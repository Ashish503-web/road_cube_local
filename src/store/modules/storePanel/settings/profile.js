import Profile from "@/models/storePanel/settings/Profile";

export default {
    namespaced: true,

    state: () => ({
        success: {
            logo: false,
            mapLogo: false
        },
        loading: {
            logo: false,
            mapLogo: false,
            businessInformation: false,
            operationHours: false,
            quickPayment: false,
            invoicing: false,
            redemption: false
        },
        errorMessage: {
            logo: "",
            mapLogo: "",
            businessInformation: "",
            operationHours: "",
            quickPayment: "",
            invoicing: "",
            redemption: ""
        },
        storeCategories: [],
        countries: []
    }),

    mutations: {
        setSuccess(state, { value, type }) {
            state.success[type] = value;
        },

        setLoading(state, { value, type }) {
            state.loading[type] = value;
        },

        setErrorMessage(state, { value, type }) {
            state.errorMessage[type] = value;
        },

        setStoreCategories(state, payload) {
            state.storeCategories = payload;
        },

        setCountries(state, payload) {
            state.countries = payload;
        }
    },

    actions: {
        async uploadLogo({ commit, rootState }, imageFile) {
            try {
                commit("setLoading", { value: true, type: "logo" });

                const fd = new FormData();
                fd.append("logo", imageFile);

                await Profile.uploadImage(
                    rootState.storeToken,
                    rootState.storeId,
                    fd
                );

                commit("setSuccess", { value: false, type: "logo" });
                commit("setLoading", { value: false, type: "logo" });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated store logo!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", { value: false, type: "logo" });
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type: "logo"
                });
                setTimeout(
                    () =>
                        commit("setErrorMessage", { value: "", type: "logo" }),
                    5000
                );
            }
        },

        async uploadMapLogo({ commit, rootState }, imageFile) {
            try {
                commit("setLoading", { value: true, type: "mapLogo" });

                const fd = new FormData();
                fd.append("map_logo", imageFile);

                await Profile.uploadImage(
                    rootState.storeToken,
                    rootState.storeId,
                    fd
                );

                commit("setSuccess", { value: false, type: "mapLogo" });
                commit("setLoading", { value: false, type: "mapLogo" });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated map logo!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", { value: false, type: "mapLogo" });
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type: "mapLogo"
                });
                setTimeout(
                    () =>
                        commit("setErrorMessage", {
                            value: "",
                            type: "mapLogo"
                        }),
                    5000
                );
            }
        },

        async updateTimetable({ commit, rootState }) {
            try {
                commit("setLoading", { value: true, type: "operationHours" });

                const timetable = [...rootState.storePanel.store.timetable];

                timetable.forEach(day => {
                    if (day.type === "regular") {
                        day.shifts.pop();
                    } else if (day.type === "24h" || day.type === "closed") {
                        delete day.shifts;
                    }
                });

                const {
                    data
                } = await Profile.updateTimetable(
                    rootState.storeToken,
                    rootState.storeId,
                    { timetable }
                );

                commit("storePanel/setTimetable", data.data.timetable, {
                    root: true
                });

                commit("setLoading", { value: false, type: "operationHours" });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text:
                            "You have successfully updated hours of operations!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", { value: false, type: "operationHours" });
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type: "operationHours"
                });
                setTimeout(
                    () =>
                        commit("setErrorMessage", {
                            value: "",
                            type: "operationHours"
                        }),
                    5000
                );
            }
        },

        async updateQuickPayment({ commit, rootState }) {
            try {
                commit("setLoading", { value: true, type: "quickPayment" });

                await Profile.updateQuickPayment(
                    rootState.storeToken,
                    rootState.storeId,
                    {
                        quick_payment:
                            rootState.storePanel.store.flags.general
                                .quick_payment
                    }
                );

                commit("setLoading", { value: false, type: "quickPayment" });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated fast payment!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", { value: false, type: "quickPayment" });
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type: "quickPayment"
                });
                setTimeout(
                    () =>
                        commit("setErrorMessage", {
                            value: "",
                            type: "quickPayment"
                        }),
                    5000
                );
            }
        },

        async updateOrdersData({ commit, rootState }, body) {
            try {
                commit("setLoading", { value: true, type: "Orders" });
                
                await Profile.updateOrdersData(
                    rootState.storeToken,
                    rootState.storeId,
                    body
                );

                commit("setLoading", { value: false, type: "Orders" });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated Orders!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", { value: false, type: "Orders" });
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type: "Orders"
                });
                setTimeout(
                    () =>
                        commit("setErrorMessage", {
                            value: "",
                            type: "Orders"
                        }),
                    5000
                );
            }
        },

        async getStoreCategories({ commit }) {
            try {
                const { data } = await Profile.getStoreCategories();

                commit("setStoreCategories", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getCountries({ commit }) {
            try {
                const { data } = await Profile.getCountries();

                commit("setCountries", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async updateBusinessInformation({ commit, rootState }, { type, item }) {
            try {
                commit("setLoading", { value: true, type });

                await Profile.updateBusinessInformation(
                    rootState.storeToken,
                    rootState.storeId,
                    item
                );

                commit("setLoading", { value: false, type });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text:
                            "You have successfully updated business information!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", { value: false, type });
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", { value: "", type }),
                    5000
                );
            }
        },

        async updateInvoicing({ commit, rootState }) {
            try {
                commit("setLoading", { value: true, type: "invoicing" });

                const { billing_details } = rootState.storePanel.store;

                await Profile.updateInvoicing(
                    rootState.storeToken,
                    rootState.storeId,
                    {
                        comp_name: billing_details.comp_name,
                        vat_number: billing_details.vat_number,
                        city: billing_details.city,
                        occupation: billing_details.occupation,
                        tax_office: billing_details.tax_office,
                        country_id: billing_details.country_id
                    }
                );

                commit("setLoading", { value: false, type: "invoicing" });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text:
                            "You have successfully updated invoicing information!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", { value: false, type: "invoicing" });
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type: "invoicing"
                });
                setTimeout(
                    () =>
                        commit("setErrorMessage", {
                            value: "",
                            type: "invoicing"
                        }),
                    5000
                );
            }
        },

        async updateRedemption({ commit, rootState }) {
            try {
                commit("setLoading", {
                    value: true,
                    type: "redemption"
                });

                await Profile.updateRedemption(
                    rootState.storeToken,
                    rootState.storeId,
                    {
                        redemption_type_id:
                            rootState.storePanel.store.redemption_type_id
                    }
                );

                commit("setLoading", {
                    value: false,
                    type: "redemption"
                });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text:
                            "You have successfully updated receipt information!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", {
                    value: false,
                    type: "redemption"
                });
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type: "redemption"
                });
                setTimeout(
                    () =>
                        commit("setErrorMessage", {
                            value: "",
                            type: "redemption"
                        }),
                    5000
                );
            }
        }
    }
};
