import ProductGroup from "@/models/storePanel/ProductGroup";

export default {
    namespaced: true,

    state: () => ({
        dialog: false,
        deleteDialog: false,
        loading: false,
        errorMessage: "",
        resetSuccess: false,
        resetValidation: false,
        serverItemsLength: 0,
        showImageUpload: false,
        showWeekdays: false,
        productGroups: [],
        productGroup: new ProductGroup()
    }),

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

        setResetSuccess(state, payload) {
            state.resetSuccess = payload;
        },

        setResetValidation(state, payload) {
            state.resetValidation = payload;
        },

        setShowImageUpload(state, payload) {
            state.showImageUpload = payload;
        },

        setShowWeekdays(state, payload) {
            state.showWeekdays = payload;
        },

        setItems(state, payload) {
            state.productGroups = payload;
        },

        setItem(state, payload) {
            state.productGroup = new ProductGroup(payload);
        },

        addItem(state, payload) {
            state.productGroups.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.productGroups.findIndex(
                p => p.product_id === payload.product_id
            );
            state.productGroups.splice(index, 1, payload);
        },

        removeItem(state, id) {
            state.productGroups = state.productGroups.filter(
                p => p.product_id !== id
            );
        }
    },

    actions: {
        async getItems({ commit, rootState }, query) {
            try {
                commit("setLoading", true);

                const { data } = await ProductGroup.get(
                    rootState.storeToken,
                    rootState.storeId,
                    query
                );
                const { group_products, pagination } = data.data;

                commit("setItems", group_products);
                commit("setServerItemsLength", pagination.total);
                commit("setLoading", false);
            } catch (ex) {
                commit("setLoading", false);
                console.error(ex.response.data);
            }
        },

        async create(
            { dispatch, commit, state, rootState },
            { productGroup, image }
        ) {
            try {
                delete productGroup.product_id;
                delete productGroup.image;
                commit("setLoading", true);

                const { data } = await ProductGroup.create(
                    rootState.storeToken,
                    rootState.storeId,
                    productGroup
                );

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.group_product,
                        image,
                        mode: 1
                    });
                } else {
                    commit("addItem", data.data.group_product);
                    commit("setServerItemsLength", state.serverItemsLength + 1);
                    commit("setLoading", false);
                    commit("setDialog", false);
                    commit(
                        "setNotification",
                        {
                            show: true,
                            type: "success",
                            text: "You have successfully created product group!"
                        },

                        { root: true }
                    );
                }
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async update({ dispatch, commit, rootState }, { productGroup, image }) {
            try {
                delete productGroup.image;
                commit("setLoading", true);

                const { data } = await ProductGroup.update(
                    rootState.storeToken,
                    rootState.storeId,
                    productGroup
                );

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.group_product,
                        image,
                        mode: 2
                    });
                } else {
                    commit("updateItem", data.data.group_product);
                    commit("setLoading", false);
                    commit("setDialog", false);
                    commit(
                        "setNotification",
                        {
                            show: true,
                            type: "success",
                            text: "You have successfully updated product group!"
                        },

                        { root: true }
                    );
                }
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async remove({ commit, state, rootState }, id) {
            try {
                commit("setLoading", true);

                await ProductGroup.delete(
                    rootState.storeToken,
                    rootState.storeId,
                    id
                );

                commit("setServerItemsLength", state.serverItemsLength - 1);
                commit("setLoading", false);
                commit("setDeleteDialog", false);
                commit("removeItem", id);
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully deleted product group!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async uploadImage({ commit, state, rootState }, { item, image, mode }) {
            try {
                const fd = new FormData();
                fd.append("image", image);

                const { data } = await ProductGroup.uploadImage(
                    rootState.storeToken,
                    rootState.storeId,
                    item.product_id,
                    fd
                );

                item.image = data.data.image;

                if (mode === 1) {
                    commit("addItem", item);
                    commit("setServerItemsLength", state.serverItemsLength + 1);
                } else {
                    commit("updateItem", item);
                }
                commit("setLoading", false);
                commit("setDialog", false);
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: `You have successfully ${
                            mode === 1 ? "created" : "updated"
                        } product group!`
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        }
    }
};
