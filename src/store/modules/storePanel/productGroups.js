import ProductGroup from "@/models/storePanel/ProductGroup";

export default {
    namespaced: true,

    state: () => ({
        showImageUpload: false,
        showWeekdays: false,
        categories: [],
        productGroups: [],
        productGroup: new ProductGroup()
    }),

    mutations: {
        setShowImageUpload(state, payload) {
            state.showImageUpload = payload;
        },

        setShowWeekdays(state, payload) {
            state.showWeekdays = payload;
        },

        setCategories(state, payload) {
            state.categories = payload;
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
        async getCategories({ commit }) {
            try {
                const { data } = await ProductGroup.getCategories();

                const { product_categories } = data.data;

                commit("setCategories", product_categories);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await ProductGroup.get(query);
                const { group_products, pagination } = data.data;

                commit("setItems", group_products);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async create({ commit, dispatch, state, rootState }, image) {
            try {
                commit("setLoading", true, { root: true });

                let productGroup = { ...state.productGroup };

                delete productGroup.product_id;
                delete productGroup.image;
                if (!productGroup.name.en)
                    productGroup.name.en = productGroup.name.el;
                if (!productGroup.name.it)
                    productGroup.name.it = productGroup.name.el;
                if (!productGroup.description.en)
                    productGroup.description.en = productGroup.description.el;
                if (!productGroup.description.it)
                    productGroup.description.it = productGroup.description.el;

                const { data } = await ProductGroup.create(productGroup);

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.product,
                        image,
                        mode: 1
                    });
                } else {
                    commit("addItem", data.data.product);
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
                            text: "You have successfully created product group!"
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

        async update({ dispatch, commit, state }, image) {
            try {
                commit("setLoading", true, { root: true });

                let productGroup = { ...state.productGroup };

                delete productGroup.image;
                if (!productGroup.name.en)
                    productGroup.name.en = productGroup.name.el;
                if (!productGroup.name.it)
                    productGroup.name.it = productGroup.name.el;
                if (!productGroup.description.en)
                    productGroup.description.en = productGroup.description.el;
                if (!productGroup.description.it)
                    productGroup.description.it = productGroup.description.el;

                const { data } = await ProductGroup.update(productGroup);

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.group_product,
                        image,
                        mode: 2
                    });
                } else {
                    commit("updateItem", data.data.group_product);
                    commit("setLoading", false, { root: true });
                    commit("setDialog", false, { root: true });
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

                await ProductGroup.delete(state.productGroup.product_id);

                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength - 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
                commit("removeItem", state.productGroup.product_id);
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

        async uploadImage({ commit, rootState }, { item, image, mode }) {
            try {
                const fd = new FormData();
                fd.append("image", image);

                const { data } = await ProductGroup.uploadImage(
                    item.product_id,
                    fd
                );

                item.image = data.data.image;

                if (mode === 1) {
                    commit("addItem", item);
                    commit(
                        "setServerItemsLength",
                        rootState.serverItemsLength + 1,
                        { root: true }
                    );
                } else {
                    commit("updateItem", item);
                }
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
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
