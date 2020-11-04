import BankProvider from "@/models/storePanel/settings/BankProvider";

export default {
    namespaced: true,

    state: () => ({
        bankProviders: [],
        storeBankProviders: [],
        bankProvider: new BankProvider()
    }),

    getters: {
        bankProviders: (state) => state.bankProviders,
        storeBankProviders: (state) => state.storeBankProviders
    },

    mutations: {
        setBankProviders(state, payload) {
            state.bankProviders = payload;
        },
        
        setStoreBankProviders(state, payload) {
            state.storeBankProviders = payload;
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
        async getBankProviders({ commit }, query) {
            try {
                const { data } = await BankProvider.get(query);

                const bank_providers = data.data.bank_providers;

                commit("setBankProviders", bank_providers);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async getItems({ commit }, query) {
            try {
                const { data } = await BankProvider.getStoreProviders();

                const store_bank_providers = data.data.store_bank_providers;

                commit("setStoreBankProviders", store_bank_providers);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async createItem({ commit, state }, form) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await BankProvider.createItem(form);

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

        async create({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                let productCategory = { ...state.productCategory };
                delete productCategory.product_category_id;
                productCategory.store_id = localStorage.getItem("storeId");
                if (!productCategory.name.en)
                    productCategory.name.en = productCategory.name.el;
                if (!productCategory.name.it)
                    productCategory.name.it = productCategory.name.el;

                const { data } = await BankProvider.create(productCategory);

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

        async removeProvider({ commit, dispatch }, id) {
            try {
                commit("setLoading", true, { root: true });

                await BankProvider.removeProvider(id);

                dispatch("getItems")
                commit("setLoading", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully deleted Bank Provider!"
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
    

        async remove({ commit }, id) {
            try {
                commit("setLoading", true, { root: true });

                await BankProvider.delete(id);

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
