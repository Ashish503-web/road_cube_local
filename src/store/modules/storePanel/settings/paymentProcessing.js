import PaymentProcessing from "@/models/storePanel/settings/PaymentProcessing";

export default {
    namespaced: true,

    state: () => ({
        storeBankProviders: [],
        paymentProcessings: [],
        paymentProcessing: new PaymentProcessing({ bankProvider: {} })
    }),

    mutations: {
        setStoreBankProviders(state, payload) {
            state.storeBankProviders = payload.filter(
                p => p.store_bank_provider_id
            );
        },

        setItems(state, payload) {
            state.paymentProcessings = payload;
        },

        setItem(state, payload) {
            state.paymentProcessing = new PaymentProcessing(payload);
        },

        updateItem(state, payload) {
            let index = state.paymentProcessings.findIndex(
                p =>
                    p.store_payment_routing_id ===
                    payload.store_payment_routing_id
            );
            state.paymentProcessings.splice(index, 1, payload);
        }
    },

    actions: {
        async getStoreBankProviders({ commit }) {
            try {
                const {
                    data
                } = await PaymentProcessing.getStoreBankProviders();

                commit("setStoreBankProviders", data.data.store_bank_providers);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async getItems({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await PaymentProcessing.get();

                commit("setItems", data.data.store_payment_routings);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async update({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                let store_bank_clearer_id = state.storeBankProviders.find(
                    p =>
                        p.bank_provider_id ===
                        state.paymentProcessing.bank_clearer.bank_provider_id
                ).store_bank_provider_id;

                const { data } = await PaymentProcessing.update(
                    state.paymentProcessing.store_payment_routing_id,
                    { store_bank_clearer_id }
                );

                commit("updateItem", data.data.store_payment_routing);
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated bank clearer!"
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
