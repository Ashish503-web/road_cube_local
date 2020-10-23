import axios from "axios";
const ApiEndpoint = `https://api.roadcube.tk/v1/stores/`;

export default {
    namespaced: true,

    state: () => ({
        loading: {
            sendPoints: false,
            pointDelivery: false,
            scanReceipt: false,
            rewardWithPresence: false,
            mobilePayments: false
        },
        errorMessage: {
            sendPoints: "",
            pointDelivery: "",
            scanReceipt: "",
            rewardWithPresence: "",
            mobilePayments: ""
        },
        systemNotifications: []
    }),

    mutations: {
        setLoading(state, { value, type }) {
            state.loading[type] = value;
        },

        setErrorMessage(state, { value, type }) {
            state.errorMessage[type] = value;
        },

        setSystemNotifications(state, payload) {
            state.systemNotifications = payload;
        }
    },

    actions: {
        async getSystemNotifications({ commit }) {
            try {
                const { data } = await axios.get(
                    `https://api.roadcube.tk/v1/common/system-notifications`
                );

                commit("setSystemNotifications", data.data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async updateReward({ commit, rootState }, { item, type }) {
            try {
                commit("setLoading", { value: true, type });

                axios.defaults.headers.Authorization = `Bearer ${rootState.storeToken}`;
                await axios.put(
                    `${ApiEndpoint}${rootState.storeId}/flags/reward`,
                    item
                );

                commit("setLoading", { value: false, type });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text:
                            "You have successfully updated reward information!"
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
                    () =>
                        commit("setErrorMessage", {
                            value: "",
                            type
                        }),
                    5000
                );
            }
        },

        async updateScanReceipt(
            { commit, rootState },
            { scan_receipt, item, type }
        ) {
            try {
                commit("setLoading", { value: true, type });

                axios.defaults.headers.Authorization = `Bearer ${rootState.storeToken}`;
                await axios.put(
                    `${ApiEndpoint}${rootState.storeId}/flags/reward`,
                    { scan_receipt }
                );
                await axios.put(
                    `${ApiEndpoint}${rootState.storeId}/billing-details/receipt-information`,
                    item
                );

                commit("setLoading", { value: false, type });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text:
                            "You have successfully updated reward information!"
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
                    () =>
                        commit("setErrorMessage", {
                            value: "",
                            type
                        }),
                    5000
                );
            }
        }
    }
};
