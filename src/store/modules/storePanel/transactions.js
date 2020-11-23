import Transaction from "@/models/storePanel/Transaction";
import moment from "moment";

export default {
    namespaced: true,

    state: () => ({
        mobileLoading: false,
        productsLoading: false,
        products: [],
        selectedProducts: [],
        transactionStatuses: [],
        transactionTypes: [],
        transactionProfile: {},
        transactions: [],
        transaction: new Transaction()
    }),

    mutations: {
        setMobileLoading(state, payload) {
            state.mobileLoading = payload;
        },

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
                t.created_at = moment(t.created_at).format("YYYY.MM.DD");
                return t;
            });
        },

        setTransactionProfile(state, payload) {
            payload.transaction_items.forEach(
                t =>
                    (t.price = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 2
                    }).format(t.price))
            );
            state.transactionProfile = payload;
        },

        setItem(state, payload) {
            state.transaction = new Transaction(payload);
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

        async getTransactionPreview({ commit }) {
            try {
                // commit("setProductsLoading", true);
                let item = {
                    user: "1012938493",
                    voucher: "934242",
                    products: [
                        {
                            product_id: 1,
                            retail_price: "1",
                            quantity: 1
                        }
                    ],
                    general_coupon_claims_for_use: [
                        {
                            coupon_claim_id: 4024,
                            gift_title: "Coffee",
                            gift_description: "A special robust coffee for you"
                        }
                    ]
                };
                const data = await Transaction.getTransactionPreview(item);

                // commit("setProducts", data.data.products);
                // commit("setProductsLoading", false);
            } catch (ex) {
                // commit("setProductsLoading", false);
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

        async getItem({ commit }, id) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Transaction.getItem(id);

                commit("setTransactionProfile", data.data);
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
                console.log(transaction);

                await Transaction.create(transaction);

                commit("setItem", {});
                commit("setSelectedProducts", []);
                commit("setResetValidation", true, { root: true });
                commit("setResetSuccess", true, { root: true });
                commit("setProducts", state.products);
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
                commit(
                    "storePanel/setTotalTransactions",
                    rootState.storePanel.store.statistics.total_transactions +
                        1,
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

        async updateMobilePayments({ commit }, item) {
            try {
                commit("setMobileLoading", true);

                await Transaction.updateMobilePayments(item);

                commit("storePanel/setMobilePayments", item.online_payments, {
                    root: true
                });
                commit("setMobileLoading", false);
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated mobile payments!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setMobileLoading", false);
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
