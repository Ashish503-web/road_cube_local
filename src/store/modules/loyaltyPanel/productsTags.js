import ProductTag from "@/models/loyaltyPanel/ProductTag";

export default {
    namespaced: true,

    state: () => ({
        productsTags: [],
        productTag: new ProductTag()
    }),

    mutations: {
        setItems(state, payload) {
            state.productsTags = payload;
        },

        setItem(state, payload) {
            state.productTag = new ProductTag(payload);
        },

        addItem(state, payload) {
            state.productsTags.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.productsTags.findIndex(
                p => p.product_tag_id === payload.product_tag_id
            );
            state.productsTags.splice(index, 1, payload);
        },

        removeItem(state, id) {
            state.productsTags = state.productsTags.filter(
                p => p.product_tag_id !== id
            );
        }
    },

    actions: {
        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await ProductTag.get(query);
                const { product_tags, pagination } = data.data;

                commit("setItems", product_tags);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async create({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                let productTag = { ...state.productTag };
                delete productTag.product_tag_id;

                const { data } = await ProductTag.create(productTag);

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
                        text: "You have successfully created product tag!"
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

                let productTag = { ...state.productTag };

                const { data } = await ProductTag.update(productTag);

                commit("updateItem", data.data);
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated product tag!"
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

                await ProductTag.delete(state.productTag.product_tag_id);
                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength - 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
                commit("removeItem", state.productTag.product_tag_id);
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully deleted product tag!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage", ex, {
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
