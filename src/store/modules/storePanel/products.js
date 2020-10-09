import Product from "@/models/storePanel/Product";

export default {
    namespaced: true,

    state: () => ({
        dialog: false,
        deleteDialog: false,
        loading: false,
        errorMessage: "",
        serverItemsLength: 0,
        showImageUpload: false,
        showWeekdays: false,
        products: [],
        product: new Product()
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

        setShowImageUpload(state, payload) {
            state.showImageUpload = payload;
        },

        setShowWeekdays(state, payload) {
            state.showWeekdays = payload;
        },

        setServerItemsLength(state, payload) {
            state.serverItemsLength = payload;
        },

        setItems(state, payload) {
            state.products = payload;
        },

        setItem(state, payload) {
            state.product = new Product(payload);
        },

        addItem(state, payload) {
            state.products.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.products.findIndex(
                p => p.product_id === payload.product_id
            );
            state.products.splice(index, 1, payload);
        },

        removeItem(state, id) {
            state.products = state.products.filter(p => p.product_id !== id);
        }
    },

    actions: {
        async getItems({ commit, rootState }, query) {
            try {
                commit("setLoading", true);

                const { data } = await Product.get(
                    rootState.storeToken,
                    rootState.storeId,
                    query
                );
                const { products, pagination } = data.data;

                commit("setItems", products);
                commit("setServerItemsLength", pagination.total);
                commit("setLoading", false);
            } catch (ex) {
                commit("setLoading", false);
                console.error(ex.response.data);
            }
        },

        async create(
            { dispatch, commit, state, rootState },
            { product, image }
        ) {
            try {
                delete product.product_id;
                delete product.image;
                commit("setLoading", true);

                const { data } = await Product.create(
                    rootState.storeToken,
                    rootState.storeId,
                    product
                );

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.product,
                        image,
                        mode: 1
                    });
                } else {
                    commit("addItem", data.data.product);
                    commit("setServerItemsLength", state.serverItemsLength + 1);
                    commit("setLoading", false);
                    commit("setDialog", false);
                    commit(
                        "setNotification",
                        {
                            show: true,
                            type: "success",
                            text: "You have successfully created product!"
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

        async update({ dispatch, commit, rootState }, { product, image }) {
            try {
                delete product.image;
                commit("setLoading", true);

                const { data } = await Product.update(
                    rootState.storeToken,
                    rootState.storeId,
                    product
                );

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.product,
                        image,
                        mode: 2
                    });
                } else {
                    commit("updateItem", data.data.product);
                    commit("setLoading", false);
                    commit("setDialog", false);
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
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async remove({ commit, state, rootState }, id) {
            try {
                commit("setLoading", true);

                await Product.delete(
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
                        text: "You have successfully deleted product!"
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

                const { data } = await Product.uploadImage(
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
                        } product!`
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
