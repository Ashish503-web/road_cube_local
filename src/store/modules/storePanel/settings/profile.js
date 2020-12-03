import Profile from "@/models/storePanel/settings/Profile";

export default {
    namespaced: true,

    state: () => ({
        loading: {
            logo: false,
            mapLogo: false,
            businessInformation: false,
            invoicing: false,
            operationHours: false,
            fastPayment: false,
            shoppingCart: false,
            changePassword: false,
            redemption: false,
            deliverySettings: false
        },
        errorMessage: {
            logo: "",
            mapLogo: "",
            businessInformation: "",
            invoicing: "",
            operationHours: "",
            fastPayment: "",
            shoppingCart: "",
            changePassword: "",
            redemption: "",
            deliverySettings: ""
        },
        resetSuccess: {
            logo: false,
            mapLogo: false
        },
        countries: []
    }),

    mutations: {
        setLoading(state, { value, type }) {
            state.loading[type] = value;
        },

        setErrorMessage(state, { value, type }) {
            state.errorMessage[type] = value;
        },

        setResetSuccess(state, { value, type }) {
            state.resetSuccess[type] = value;
        },

        setCountries(state, payload) {
            state.countries = payload;
        }
    },

    actions: {
        async uploadLogo({ commit }, { type, imageFile }) {
            try {
                commit("setLoading", { value: true, type });

                const fd = new FormData();
                fd.append("logo", imageFile);

                const { data } = await Profile.uploadImage(fd);

                commit("storePanel/setLogo", data.data.logo, { root: true });
                commit("setResetSuccess", { value: true, type });
                commit("setLoading", { value: false, type });
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

        async uploadMapLogo({ commit }, { type, imageFile }) {
            try {
                commit("setLoading", { value: true, type });

                const fd = new FormData();
                fd.append("map_logo", imageFile);

                const { data } = await Profile.uploadImage(fd);

                commit("storePanel/setMapLogo", data.data.map_logo, {
                    root: true
                });
                commit("setResetSuccess", { value: true, type });
                commit("setLoading", { value: false, type });
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

        async getCountries({ commit }) {
            try {
                const { data } = await Profile.getCountries();

                commit("setCountries", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async updateBusinessInformation({ commit }, { type, item }) {
            try {
                commit("setLoading", { value: true, type });

                await Profile.updateBusinessInformation(item);

                commit("storePanel/setBusinessInformation", item, {
                    root: true
                });
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

                const { data } = await Profile.updateTimetable({ timetable });

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

        async updateInvoicing({ commit }, { type, item }) {
            try {
                commit("setLoading", { value: true, type });

                await Profile.updateInvoicing(item);

                commit("storePanel/setInvoicing", item, { root: true });
                commit("setLoading", { value: false, type });
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

        async updateFastPayment({ commit }, { type, fast_payment }) {
            try {
                commit("setLoading", { value: true, type });

                await Profile.updateFastPayment({ fast_payment });

                commit("storePanel/setFastPayment", fast_payment, {
                    root: true
                });
                commit("setLoading", { value: false, type });
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

        async updateShoppingCart({ commit }, { type, shopping_cart }) {
            try {
                commit("setLoading", { value: true, type });

                await Profile.updateShoppingCart({ shopping_cart });

                commit("storePanel/setShoppingCart", shopping_cart, {
                    root: true
                });
                commit("setLoading", { value: false, type });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated shopping cart!"
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

        async updatePassword({ commit }, { type, item }) {
            try {
                commit("setLoading", { value: true, type });

                await Profile.updatePassword(item);

                commit("setLoading", { value: false, type });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated password!"
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

        async updateRedemption({ commit }, { type, redemption_type_id }) {
            try {
                commit("setLoading", { value: true, type });

                await Profile.updateRedemption({ redemption_type_id });

                commit("storePanel/setRedemption", redemption_type_id, {
                    root: true
                });
                commit("setLoading", { value: false, type });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text:
                            "You have successfully updated redemption settings!"
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

        async updateDeliverySettings({ commit }, { type, item }) {
            try {
                commit("setLoading", { value: true, type });

                await Profile.updateDeliverySettings(item);

                commit("storePanel/setDeliverySettings", item, {
                    root: true
                });
                commit("setLoading", { value: false, type });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated delivery settings!"
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
        }
    }
};
