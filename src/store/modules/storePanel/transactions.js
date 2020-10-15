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
        setServerItemsLength(state, payload) {
            state.serverItemsLength = payload;
        },

        setItems(state, payload) {
            state.transactions = payload;
        },

        setItem(state, payload) {
            state.transaction = new Transaction(payload);
        },

        addItem(state, payload) {
            state.transactions.unshift(payload);
        },

        setLoading(state, payload) {
            state.loading = payload;
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
                // const { transactions, pagination } = data.data;
                // const { transactions } = data.data.transactions.data;
                const { pagination } = data.data.transactions;

                // commit("setItems", transactions);
                commit("setServerItemsLength", pagination.total);
                commit("setLoading", false);

                console.log(data.data.transactions);

            } catch (ex) {
                commit("setLoading", false);
                console.error(ex.response.data);
            }
        }
    }
};