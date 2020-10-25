import ProductCategory from "@/models/storePanel/settings/ProductCategory";

export default {
    namespaced: true,

    state: () => ({
        productCategories: [],
        productCategory: new ProductCategory(),
        selectedProductCategory: new ProductCategory()
    }),

    mutations: {
        setItems(state, payload) {
            state.productCategories = payload.map(c => {
                c.expanded = false;
                c.loading = false;
                return c;
            });
        },

        setItem(state, payload) {
            state.productCategory = new ProductCategory(payload);
        },

        setSelectedItem(state, payload) {
            state.selectedProductCategory = payload;
        },

        setSelectedLoading(state, payload) {
            state.selectedProductCategory.loading = payload;
        },

        addItem(state, payload) {
            state.productCategories.unshift(payload);
        },

        updateItem(state, payload) {
            payload.expanded = false;
            payload.loading = false;
            let index = state.productCategories.findIndex(
                p => p.product_category_id === payload.product_category_id
            );
            state.productCategories.splice(index, 1, payload);
        },

        removeItem(state, payload) {
            state.productCategories = state.productCategories.filter(
                p => p.product_category_id !== payload
            );
        }
    },

    actions: {
        async getItems({ commit }, query) {
            try {
                const { data } = await ProductCategory.get(query);

                const { product_categories, pagination } = data.data;

                commit("setItems", product_categories);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async create({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                let productCategory = { ...state.productCategory };
                delete productCategory.product_category_id;
                productCategory.store_id = rootState.storeId;
                if (!productCategory.name.en)
                    productCategory.name.en = productCategory.name.el;
                if (!productCategory.name.it)
                    productCategory.name.it = productCategory.name.el;

                const { data } = await ProductCategory.create(productCategory);

                commit("addItem", data.data.product_category);
                commit("setItem", {});
                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength + 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully created product category!"
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

        async update({ commit, state, rootState }) {
            try {
                commit("setSelectedLoading", true);

                let productCategory = { ...state.selectedProductCategory };
                delete productCategory.expanded;
                delete productCategory.loading;
                productCategory.store_id = rootState.storeId;

                if (!productCategory.name.en)
                    productCategory.name.en = productCategory.name.el;
                if (!productCategory.name.it)
                    productCategory.name.it = productCategory.name.el;

                const { data } = await ProductCategory.update(productCategory);

                commit("updateItem", data.data.product_category);
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated product category!"
                    },
                    { root: true }
                );
            } catch (ex) {
                commit("setSelectedLoading", false);
                commit("setErrorMessage", ex.response.data.message, {
                    root: true
                });
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        },

        async remove({ commit, rootState }, id) {
            try {
                commit("setLoading", true, { root: true });

                await ProductCategory.delete(id);

                commit("removeItem", id);
                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength - 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully deleted product category!"
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
