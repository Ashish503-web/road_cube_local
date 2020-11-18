import Store from "@/models/loyaltyPanel/stores/Store";

export default {
    namespaced: true,

    state: () => ({
        subscriptionPlans: [],
        countries: [],
        stores: [],
        store: new Store()
    }),

    mutations: {
        setSubscriptionPlans(state, payload) {
            state.subscriptionPlans = payload;
        },

        setCountries(state, payload) {
            state.countries = payload;
        },

        setItems(state, payload) {
            state.stores = payload;
        },

        setItem(state, payload) {
            state.store = new Store(payload);
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

        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Store.get(query);

                const { stores, pagination } = data.data;

                console.log(stores);

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

        async getItem({ commit }, id) {
            try {
                // commit("setLoading", true, { root: true });

                const { data } = await Store.getItem(id);

                // const { stores, pagination } = data.data;

                console.log(data);

                // commit("setItems", stores);
                // commit("setServerItemsLength", pagination.total, {
                //     root: true
                // });
                // commit("setLoading", false, { root: true });
            } catch (ex) {
                // commit("setLoading", false, { root: true });
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

        async create({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                let store = { ...state.store };

                delete store.store_id;
                delete store.bank_providers;
                delete store.registration_date;

                let user = { ...rootState.user };

                const { data } = await Store.create({
                    store_details: store,
                    user_details: {
                        app_provider_id: user.app_provider_id,
                        full_name: user.full_name,
                        mobile: user.mobile,
                        referral: "Other",
                        tos: true,
                        marketing: true
                    }
                });

                console.log(data);

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

        async update({ commit, dispatch, state }, image) {
            try {
                commit("setLoading", true, { root: true });

                let product = { ...state.product };
                delete product.image;
                if (!product.name.en) product.name.en = product.name.el;
                if (!product.name.it) product.name.it = product.name.el;
                if (!product.description.en)
                    product.description.en = product.description.el;
                if (!product.description.it)
                    product.description.it = product.description.el;

                const { data } = await Store.update(product);

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.product,
                        image,
                        mode: 2
                    });
                } else {
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
                }
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
