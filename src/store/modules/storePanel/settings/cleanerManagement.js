import BankProvider from "@/models/storePanel/settings/BankProvider";

export default {
    namespaced: true,

    state: () => ({
        bankProviders: [],
        bankProvider: new BankProvider()
    }),

    mutations: {
        setItems(state, payload) {
            state.bankProviders = payload;
        },

        setItem(state, payload) {
            state.bankProvider = new BankProvider(payload);
        },

        addItem(state, payload) {
            state.bankProviders.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.bankProviders.findIndex(
                b => b.name.el === payload.name.el
            );
            state.bankProviders.splice(index, 1, payload);
        },

        removeItem(state, payload) {
            state.bankProviders = state.bankProviders.filter(
                b => b.product_category_id !== payload
            );
        }
    },

    actions: {
        async getItems({ commit, rootState }, query) {
            try {
                const { data } = await BankProvider.get(
                    rootState.storeToken,
                    rootState.storeId,
                    query
                );

                console.log(data.data.store_bank_providers);

                const { store_bank_providers } = data.data;

                commit("setItems", store_bank_providers);
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

                const { data } = await BankProvider.create(
                    rootState.storeToken,
                    rootState.storeId,
                    productCategory
                );

                commit("addItem", data.data.product_category);
                commit("setItem", {});
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

        // async update({ dispatch, commit, rootState }, { product, image }) {
        //     try {
        //         delete product.image;
        //         commit("setLoading", true);

        //         const { data } = await ProductCategory.update(
        //             rootState.storeToken,
        //             rootState.storeId,
        //             product
        //         );

        //         if (image) {
        //             dispatch("uploadImage", {
        //                 item: data.data.product,
        //                 image,
        //                 mode: 2
        //             });
        //         } else {
        //             commit("updateItem", data.data.product);
        //             commit("setLoading", false);
        //             commit("setDialog", false);
        //         }
        //     } catch (ex) {
        //         commit("setLoading", false);
        //         commit("setErrorMessage", ex.response.data.message);
        //         setTimeout(() => commit("setErrorMessage", ""), 5000);
        //     }
        // },

        async remove({ commit, rootState }, id) {
            try {
                commit("setLoading", true, { root: true });

                await BankProvider.delete(
                    rootState.storeToken,
                    rootState.storeId,
                    id
                );

                commit("removeItem", id);
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
