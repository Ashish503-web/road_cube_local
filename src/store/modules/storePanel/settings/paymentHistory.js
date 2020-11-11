import Payment from "@/models/storePanel/settings/Payment";

export default {
    namespaced: true,

    state: () => ({
        payments: [],
        payment: new Payment()
    }),

    mutations: {
        setAllBankProviders(state, payload) {
            state.allBankProviders = payload.map(b => {
                b.bankProvider = state.storeBankProviders[0].bank_provider;
                return b;
            });
        },

        setStoreBankProviders(state, payload) {
            state.storeBankProviders = payload;
        },

        setItem(state, payload) {
            state.paymentProcessing = new Payment(payload);
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
        async getItems({ commit }) {
            try {
                const data = await Payment.get();

                console.log(data);

                // commit("setStoreBankProviders", data.data.store_bank_providers);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async create({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                let paymentProcessing = { ...state.paymentProcessing };

                await Payment.create(paymentProcessing);

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

                // await Payment.delete(id);

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
