import PaymentProvider from "@/models/storePanel/settings/PaymentProvider";

export default {
    namespaced: true,

    state: () => ({
        providersLoading: false,
        paymentProviders: [],
        paymentProvider: new PaymentProvider()
    }),

    mutations: {
        setLoading(state, payload) {
            state.providersLoading = payload;
        },

        setPaymentProviders(state, payload) {
            state.paymentProviders = payload;
        },

        setItem(state, payload) {
            state.paymentProvider = new PaymentProvider(payload);
        },

        updateItem(state, payload) {
            let paymentProvider = state.paymentProviders.find(
                p => p.bank_provider_id === payload.bank_provider_id
            );
            paymentProvider.store_bank_provider_id =
                payload.store_bank_provider_id;
            paymentProvider.credentials = payload.credentials;
        },

        removeItem(state, payload) {
            let paymentProvider = state.paymentProviders.find(
                p => p.bank_provider_id === payload.bank_provider_id
            );
            paymentProvider.store_bank_provider_id = null;
            paymentProvider.credentials = null;
        }
    },

    actions: {
        async getItems({ commit }, query) {
            try {
                commit("setLoading", true);

                const { data } = await PaymentProvider.get(query);

                commit("setPaymentProviders", data.data.store_bank_providers);
                commit("setLoading", false);
            } catch (ex) {
                commit("setLoading", false);
                console.error(ex.response.data);
            }
        },

        async create({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await PaymentProvider.create({
                    bank_provider_id: state.paymentProvider.bank_provider_id,
                    credentials: state.paymentProvider.credentials
                });

                commit("updateItem", data.data.store_bank_provider);
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully created Bank Provider!"
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

        async remove({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                await PaymentProvider.delete(
                    state.paymentProvider.store_bank_provider_id
                );

                commit("removeItem", state.paymentProvider);
                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
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
        }
    }
};
