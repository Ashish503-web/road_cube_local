import Store from "@/models/loyaltyPanel/stores/Store";
import UserDetails from "@/models/loyaltyPanel/stores/UserDetails";

export default {
    namespaced: true,

    state: () => ({
        subscriptionPlans: [],
        countries: [],
        networkRegions: [],
        stores: [],
        store: new Store(),
        userDetails: new UserDetails()
    }),

    mutations: {
        setSubscriptionPlans(state, payload) {
            state.subscriptionPlans = payload;
        },

        setCountries(state, payload) {
            state.countries = payload;
        },

        setNetworkRegions(state, payload) {
            state.networkRegions = payload;
        },

        setItems(state, payload) {
            state.stores = payload;
        },

        setItem(state, payload) {
            state.store = new Store(payload);
        },

        setUserDetails(state, payload) {
            state.userDetails = new UserDetails(payload);
        },

        addItem(state, payload) {
            state.stores.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.stores.findIndex(
                s => s.store_id === payload.store_id
            );
            state.stores.splice(index, 1, payload);
        },

        removeItem(state, id) {
            state.stores = state.stores.filter(s => s.store_id !== id);
        }
    },

    actions: {
        async getSubscriptionPlans({ commit }) {
            try {
                const { data } = await Store.getSubscriptionPlans();

                commit("setSubscriptionPlans", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getCountries({ commit }) {
            try {
                const { data } = await Store.getCountries();

                commit("setCountries", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getNetworkRegions({ commit }) {
            try {
                const { data } = await Store.getNetworkRegions();

                commit("setNetworkRegions", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Store.get(query);

                const { stores, pagination } = data.data;

                console.log(stores,'stores555');

                commit("setItems", stores);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data.message);
            }
        },

        async getFinancialData({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Store.getFinancialData(query);

                // const { stores, pagination } = data.data;

                console.log(data);

                // commit("setItems", stores);
                // commit("setServerItemsLength", pagination.total, {
                //     root: true
                // });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data.message);
            }
        },

        async create({ commit, state, rootState }, newStoreManager) {
            try {
                commit("setLoading", true, { root: true });

                let store = { ...state.store };
                let userDetails = { ...state.userDetails };

                delete store.store_id;
                delete store.bank_providers;
                store.parent_id = rootState.loyaltyPanel.company.store_id;

                userDetails.app_provider_id = rootState.user.app_provider_id;

                if (!newStoreManager) {
                    userDetails.full_name = rootState.user.full_name;
                    // userDetails.referral = rootState.user.referral;
                }

                state.userDetails;

                const { data } = await Store.create({
                    store_details: store,
                    user_details: userDetails
                });
                
                commit("addItem", data.data);
                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength + 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully created store!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage", ex.response.data.message, {
                    root: true
                });
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        },

        async update({ commit, dispatch, state }) {
            try {
                commit("setLoading", true, { root: true });

                let store = { ...state.store };

                
                console.log(store,'product555')
                const { data } = await Store.update(store);

                
                    commit("updateItem", data.data.product, { root: true });
                    commit("setLoading", false, { root: true });
                    commit("setDialog", false, { root: true });
                    commit(
                        "setNotification",
                        {
                            show: true,
                            type: "success",
                            text: "You have successfully updated product!"
                        },

                        { root: true }
                    );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage", ex.response.data.message, {
                    root: true
                });
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        },

        async remove({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                await Store.delete(state.store.store_id);

                commit("removeItem", state.store.store_id);
                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength - 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully deleted store!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage", ex.response.data.message, {
                    root: true
                });
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        }
    }
};
