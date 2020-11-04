import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1`;

export default {
    namespaced: true,

    state: () => ({
        allBankProviders: [],
        storeBankProviders: []
    }),

    mutations: {
        setAllBankProviders(state, payload) {
            state.allBankProviders = payload;
        },

        setStoreBankProviders(state, payload) {
            state.storeBankProviders = payload;
        },

        setItems(state, payload) {
            state.bankProviders = payload;
        },

        setItem(state, payload) {
            // state.bankProvider = new BankProvider(payload);
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
        async getAllBankProviders({ commit }) {
            try {
                const { data } = await axios.get(
                    `${ApiEndpoint}/admin/bank-providers`
                );

                commit("setAllBankProviders", data.data.bank_providers);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async getStoreBankProviders({ commit }) {
            try {
                const { data } = await axios.get(
                    `${ApiEndpoint}/stores/${localStorage.getItem(
                        "storeId"
                    )}/settings/bank-providers`
                );

                commit("setStoreBankProviders", data.data.store_bank_providers);
            } catch (ex) {
                console.error(ex.response.data);
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

                // const { data } = await BankProvider.create(productCategory);

                // commit("addItem", data.data.product_category);
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

        async remove({ commit }, id) {
            try {
                commit("setLoading", true, { root: true });

                // await BankProvider.delete(id);

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
