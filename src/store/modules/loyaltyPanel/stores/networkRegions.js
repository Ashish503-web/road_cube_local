import NetworkRegion from "@/models/loyaltyPanel/stores/NetworkRegion";

export default {
    namespaced: true,

    state: () => ({
        networkRegions: [],
        networkRegion: new NetworkRegion()
    }),

    mutations: {
        setItems(state, payload) {
            state.networkRegions = payload;
        },

        setItem(state, payload) {
            state.networkRegion = new NetworkRegion(payload);
        },

        addItem(state, payload) {
            state.networkRegions.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.networkRegions.findIndex(
                s =>
                    s.store_company_network_region_id ===
                    payload.store_company_network_region_id
            );
            state.networkRegions.splice(index, 1, payload);
        },

        removeItem(state, id) {
            state.networkRegions = state.networkRegions.filter(
                s => s.store_company_network_region_id !== id
            );
        }
    },

    actions: {
        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await NetworkRegion.get(query);

                // const { stores, pagination } = data.data;
                let pagination = {
                    total: data.data.length
                };

                commit("setItems", data.data);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data.message);
            }
        },

        async create({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                let networkRegion = { ...state.networkRegion };
                delete networkRegion.store_company_network_region_id;

                const { data } = await NetworkRegion.create(networkRegion);

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
                        text:
                            "You have successfully created store network region!"
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

        async update({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                let networkRegion = { ...state.networkRegion };

                const { data } = await NetworkRegion.update(networkRegion);

                commit("updateItem", data.data);
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text:
                            "You have successfully updated store network region!"
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

                await NetworkRegion.delete(
                    state.networkRegion.store_company_network_region_id
                );

                commit(
                    "removeItem",
                    state.networkRegion.store_company_network_region_id
                );
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
                        text: "You have successfully deleted network region!"
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
