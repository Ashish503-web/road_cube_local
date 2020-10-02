import ProductGroup from "@/models/storePanel/ProductGroup";

export default {
    namespaced: true,

    state: {
        dialog: false,
        deleteDialog: false,
        loading: false,
        errorMessage: "",
        serverItemsLength: 0,
        productGroups: [],
        productGroup: new ProductGroup()
    },

    mutations: {
        setDialog(state, payload) {
            state.dialog = payload;
        },

        setDeleteDialog(state, payload) {
            state.deleteDialog = payload;
        },

        setLoading(state, payload) {
            state.loading = payload;
        },

        setErrorMessage(state, payload) {
            state.errorMessage = payload;
        },

        setServerItemsLength(state, payload) {
            state.serverItemsLength = payload;
        },

        setProductGroups(state, payload) {
            state.productGroups = payload;
        },

        setProductGroup(state, payload) {
            state.productGroup = new ProductGroup(payload);
        },

        addProductGroup(state, payload) {
            state.productGroups.unshift(payload);
        },

        updateProductGroup(state, payload) {
            let index = state.productGroups.findIndex(
                p => p.product_id === payload.product_id
            );
            state.productGroups.splice(index, 1, payload);
        },

        deleteProductGroup(state, id) {
            state.productGroups = state.productGroups.filter(
                p => p.product_id !== id
            );
        }
    },

    actions: {
        async getProductGroups({ commit, rootState }, query) {
            try {
                const { data } = await ProductGroup.get(
                    rootState.storeToken,
                    rootState.storeId,
                    query
                );

                const { group_products, pagination } = data.data;

                commit("setProductGroups", group_products);
                commit("setServerItemsLength", pagination.total);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async createProductGroup(
            { dispatch, commit, rootState },
            { productGroup, image }
        ) {
            delete productGroup.product_id;
            delete productGroup.image;
            commit("setLoading", true);

            try {
                const { data } = await ProductGroup.post(
                    rootState.storeToken,
                    rootState.storeId,
                    productGroup
                );

                if (image) {
                    dispatch("uploadImage", {
                        productGroup: data.data.group_product,
                        image,
                        mode: 1
                    });
                } else {
                    commit("addProductGroup", data.data.group_product);
                    commit("setLoading", false);
                    commit("setDialog", false);
                }
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async updateProductGroup(
            { dispatch, commit, rootState },
            { productGroup, image }
        ) {
            delete productGroup.image;
            commit("setLoading", true);

            try {
                const { data } = await ProductGroup.put(
                    rootState.storeToken,
                    rootState.storeId,
                    productGroup
                );

                if (image) {
                    dispatch("uploadImage", {
                        productGroup: data.data.group_product,
                        image,
                        mode: 2
                    });
                } else {
                    commit("updateProductGroup", data.data.group_product);
                    commit("setLoading", false);
                    commit("setDialog", false);
                }
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async deleteProductGroup({ commit, rootState }, id) {
            commit("setLoading", true);

            try {
                await ProductGroup.delete(
                    rootState.storeToken,
                    rootState.storeId,
                    id
                );
                commit("setLoading", false);
                commit("setDeleteDialog", false);
                commit("deleteProductGroup", id);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async uploadImage(
            { commit, rootState },
            { productGroup, image, mode }
        ) {
            try {
                const fd = new FormData();
                fd.append("image", image);

                const { data } = await ProductGroup.uploadImage(
                    rootState.storeToken,
                    rootState.storeId,
                    productGroup.product_id,
                    fd
                );

                productGroup.image = data.data.image;

                if (mode === 1) commit("addProductGroup", productGroup);
                else commit("updateProductGroup", productGroup);
                commit("setLoading", false);
                commit("setDialog", false);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        }
    }
};
