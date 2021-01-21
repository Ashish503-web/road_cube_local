import Store from "@/models/loyaltyPanel/stores/Store";

export default {
    namespaced: true,

    state: () => ({
        dailyLimits: [],
        dailyLimit: {},
        updateDialog: false
    }),

    mutations: {
        setItems(state, payload) {
            state.dailyLimits = payload;
        },

        setItem(state, payload) {
            state.dailyLimit = payload;
        },

        setDialog(state, payload) {
            state.updateDialog = payload;
        }
    },

    actions: {
        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Store.getDailyLimits(query);

                const { default_values, pagination } = data.data;

                commit("setItems", default_values[0].stores);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data.message);
            }
        },

        async updateLimit({ commit }, dailyLimit) {
            try {
                commit("setLoading", true, { root: true });

                await Store.updateDailyLimit(dailyLimit);

                commit("setDialog", false);
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated Transaction limit!"
                    },

                    { root: true }
                );
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data.message);
            }
        },

        async updateGlobalLimits({ commit, dispatch }, data) {
            try {
                commit("setLoading", true, { root: true });

                await Store.updateGlobalDailyLimits(data.limits);

                commit("setDialog", false);
                dispatch("getItems", data.query);
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated Transaction limit!"
                    },

                    { root: true }
                );
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data.message);
            }
        }
    }
};
