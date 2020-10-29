import Transaction from "@/models/storePanel/Transaction";

export default {
    namespaced: true,

    state: () => ({
        productsLoading: false,
        products: [],
        selectedProducts: [],
        transactionStatuses: [],
        transactionTypes: [],
        transactions: [],
        transaction: new Transaction()
    }),

    mutations: {
        setProductsLoading(state, payload) {
            state.productsLoading = payload;
        },

        setProducts(state, payload) {
            state.products = payload.map(p => {
                p.selected = false;
                return p;
            });
        },

        setSelectedProducts(state, payload) {
            state.selectedProducts = payload;
        },

        setTransactionStatuses(state, payload) {
            state.transactionStatuses = payload.map(s => {
                s.selected = false;
                return s;
            });
        },

        setTransactionTypes(state, payload) {
            state.transactionTypes = payload.map(t => {
                t.selected = false;
                return t;
            });
        },

        setItems(state, payload) {
            state.transactions = payload.map(t => {
                t.loading = false;
                return t;
            });
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
        async getProducts({ commit }, query) {
            try {
                commit("setProductsLoading", true);

                const { data } = await Transaction.getProducts(query);

                commit("setProducts", data.data.products);
                commit("setProductsLoading", false);
            } catch (ex) {
                commit("setProductsLoading", false);
                console.error(ex.response.data.message);
            }
        },

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

        async create({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                let transaction = { ...state.transaction };

                await Transaction.create(transaction);

                commit("setItem", {});
                commit("setSelectedProducts", []);

                commit("setLoading", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully created transaction!"
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

        async changeStatus({ commit }, transaction) {
            try {
                transaction.loading = true;

                await Transaction.changeStatus(transaction);

                transaction.loading = false;
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated transaction!"
                    },

                    { root: true }
                );
            } catch (ex) {
                transaction.loading = false;
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "error",
                        text: ex.response.data.message
                    },

                    { root: true }
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
