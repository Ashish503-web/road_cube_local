import Transaction from "@/models/storePanel/Transaction";
import moment from "moment";

export default {
    namespaced: true,

    state: () => ({
        mobileLoading: false,
        productsLoading: false,
        previewLoading: false,
        products: [],
        selectedProducts: [],
        transactionStatuses: [],
        transactionTypes: [],
        transactionProfile: {},
        transactions: [],
        transaction: new Transaction(),
        transactionPreview: {},
        generalCouponClaims: [],
        samplingCoupons: []
    }),

    mutations: {
        setMobileLoading(state, payload) {
            state.mobileLoading = payload;
        },

        setProductsLoading(state, payload) {
            state.productsLoading = payload;
        },

        setPreviewLoading(state, payload) {
            state.previewLoading = payload;
        },

        setProducts(state, payload) {
            state.products = payload.map(p => {
                if (state.selectedProducts.length) {
                    let selectedProduct = state.selectedProducts.find(
                        s => s.product_id === p.product_id
                    );
                    if (selectedProduct) p.selected = true;
                } else {
                    p.selected = false;
                }

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
                t.created_at = moment(t.created_at).format("DD/MM/YYYY HH:mm");
                return t;
            });
        },

        setTransactionProfile(state, payload) {
            payload.created_at = moment(payload.created_at).format(
                "DD/MM/YYYY HH:mm"
            );
            payload.transaction_items.forEach(t => {
                t.total_row_price = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2
                }).format(t.total_row_price);

                if (t.reward_type_id === 4) t.quantity = "";
            });
            state.transactionProfile = payload;
        },

        setItem(state, payload) {
            state.transaction = new Transaction(payload);
        },

        setTransactionPreview(state, payload) {
            state.transactionPreview = payload;
        },

        setTransactionProductCouponClaims(state, payload) {
            payload.forEach(payloadProduct => {
                let product = state.transaction.products.find(
                    p => p.product_id === payloadProduct.product_id
                );

                if (product) {
                    product.product_coupons = payloadProduct.product_coupons.map(
                        p => {
                            p.text = {};
                            p.text.el = `${p.product_free.name.el} (${p.code})`;
                            p.text.en = `${p.product_free.name.en} (${p.code})`;
                            p.text.it = `${p.product_free.name.it} (${p.code})`;
                            return p;
                        }
                    );

                    let index = state.transaction.products.findIndex(
                        p => p.product_id === payloadProduct.product_id
                    );

                    state.transaction.products.splice(index, 1, product);
                }
            });
        },

        setGeneralCouponClaims(state, payload) {
            state.generalCouponClaims = payload;
        },

        setSamplingCoupons(state, payload) {
            state.samplingCoupons = payload;
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

        async getTransactionPreview({ commit, state }, showProducts) {
            try {
                commit("setPreviewLoading", true);

                let transaction = { ...state.transaction };
                Transaction.clearFalsyValues(transaction);

                const { data } = await Transaction.getTransactionPreview(
                    transaction
                );

                if (showProducts) {
                    commit(
                        "setTransactionProductCouponClaims",
                        data.data.products
                    );
                }

                if (data.data.general_coupon_claims) {
                    if (data.data.general_coupon_claims.length) {
                        commit(
                            "setGeneralCouponClaims",
                            data.data.general_coupon_claims
                        );
                    }
                }

                commit("setSamplingCoupons", data.data.sampling_coupons);

                commit("setTransactionPreview", data.data);
                commit("setPreviewLoading", false);
            } catch (ex) {
                commit("setPreviewLoading", false);
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

        async create({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                let transaction = { ...state.transaction };
                Transaction.clearFalsyValues(transaction);

                await Transaction.create(transaction);

                commit("setItem", {});
                commit("setTransactionPreview", {});
                commit("setSelectedProducts", []);
                commit("setResetValidation", true, { root: true });
                commit("setGeneralCouponClaims", []);
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

        async updateMobilePayments({ commit }, item) {
            try {
                commit("setMobileLoading", true);

                await Transaction.updateMobilePayments(item);

                commit(
                    "storePanel/setMobilePayments",
                    item.online_payment_processing,
                    {
                        root: true
                    }
                );
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

        async refundTransaction({ commit }, item) {
            try {
                commit("setLoading", true, { root: true });

                await Transaction.refundTransaction(item);

                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully refunded transaction!"
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
