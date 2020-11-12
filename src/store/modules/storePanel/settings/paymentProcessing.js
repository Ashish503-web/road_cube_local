import PaymentProcessing from "@/models/storePanel/settings/PaymentProcessing";

export default {
    namespaced: true,

    state: () => ({
        allBankProviders: [],
        storeBankProviders: [],
        paymentProcessings: [],
        paymentProcessing: new PaymentProcessing({ bankProvider: {} })
    }),

    mutations: {
        setAllBankProviders(state, payload) {
            state.allBankProviders = payload.map(b => {
                b.bankProvider = state.storeBankProviders[0].bank_provider;
                return b;
            });
            // console.log("AllBankProviders", state.allBankProviders);
        },

        setStoreBankProviders(state, payload) {
            state.storeBankProviders = payload;
        },

        setItem(state, payload) {
            state.paymentProcessing = new PaymentProcessing(payload);
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
        async getAllBankProviders({ commit, dispatch }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await PaymentProcessing.getAllBankProviders();

                const { bank_providers, pagination } = data.data;

                await dispatch("getStoreBankProviders");

                commit("setAllBankProviders", bank_providers);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async getStoreBankProviders({ commit }) {
            try {
                const {
                    data
                } = await PaymentProcessing.getStoreBankProviders();

                // console.log(data.data.store_bank_providers);

                commit("setStoreBankProviders", data.data.store_bank_providers);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async getItems({ commit }) {
            try {
                const { data } = await PaymentProcessing.get();

                const { store_payment_routings, pagination } = data.data;

                console.log(store_payment_routings);

                // commit("setStoreBankProviders", data.data.store_bank_providers);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async create({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                let paymentProcessing = { ...state.paymentProcessing };

                await PaymentProcessing.create(paymentProcessing);

                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
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
