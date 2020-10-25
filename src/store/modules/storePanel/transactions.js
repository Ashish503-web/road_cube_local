import Transaction from "@/models/storePanel/Transaction";

export default {
    namespaced: true,

    state: () => ({
        transactionStatuses: [],
        transactionTypes: [],
        transactions: [],
        transaction: new Transaction()
    }),

    mutations: {
        setTransactionStatuses(state, payload) {
            state.transactionStatuses = payload;
        },

        setTransactionTypes(state, payload) {
            state.transactionTypes = payload;
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

        updateItem(state, payload) {
            let index = state.transactions.findIndex(
                p => p.product_id === payload.product_id
            );
            state.transactions.splice(index, 1, payload);
        },

        removeItem(state, id) {
            state.transactions = state.transactions.filter(
                p => p.product_id !== id
            );
        }
    },

    actions: {
        async getTransactionStatuses({ commit }) {
            try {
                const { data } = await Transaction.getTransactionStatuses();

                commit("setTransactionStatuses", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getTransactionTypes({ commit }) {
            try {
                const { data } = await Transaction.getTransactionTypes();

                commit("setTransactionTypes", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Transaction.get(query);

                const { transactions, pagination } = data.data;

                commit("setItems", transactions);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data.message);
            }
        },

        async create({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                let transaction = { ...state.transaction };

                const { data } = await Transaction.create(transaction);

                commit("addItem", data.data.product);
                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength + 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully created product!"
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

        async update({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                let product = { ...state.product };
                delete product.image;
                if (!product.name.en) product.name.en = product.name.el;
                if (!product.name.it) product.name.it = product.name.el;
                if (!product.description.en)
                    product.description.en = product.description.el;
                if (!product.description.it)
                    product.description.it = product.description.el;

                const { data } = await Transaction.update(product);

                commit("updateItem", data.data.product, { root: true });
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated product!"
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

        async remove({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                await Transaction.delete(state.product.product_id);
                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength - 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
                commit("removeItem", state.product.product_id);
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully deleted product!"
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
