import Transaction from "@/models/storePanel/Transaction";

export default {
    namespaced: true,

    state: () => ({
        loading: false,
        serverItemsLength: 0,
        transactions: [],
        transaction: new Transaction()
    }),

    mutations: {
        setLoading(state, payload) {
            state.loading = payload;
        },

        setServerItemsLength(state, payload) {
            state.serverItemsLength = payload;
        },

        setItems(state, payload) {
            state.transactions = payload;
        }
    },

    actions: {
        async getItems({ commit, rootState }, query) {
            try {
                commit("setLoading", true);

                const { data } = await Transaction.get(
                    rootState.storeToken,
                    rootState.storeId,
                    query
                );

                const {
                    data: transactions,
                    pagination
                } = data.data.transactions;

                commit("setItems", transactions);
                commit("setServerItemsLength", pagination.total);
                commit("setLoading", false);
            } catch (ex) {
                commit("setLoading", false);
                console.error(ex.response.data);
            }
        }
    }
};
