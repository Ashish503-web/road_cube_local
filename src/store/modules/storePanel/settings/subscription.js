import Subscription from "@/models/storePanel/settings/Subscription";
import moment from "moment";

export default {
    namespaced: true,

    state: () => ({
        storeSubscription: {},
        billings: [],
        openPayment: false,
        showAlert: false,
        slug: "",
        redirectForm: {},
        showPaymentMethods: false,
        paymentMethods: []
    }),

    mutations: {
        setStoreSubscription(state, payload) {
            state.storeSubscription = payload;
        },

        setBillings(state, payload) {
            state.billings = payload.map(b => {
                b.updated_at = moment(b.updated_at).format("DD/MM/YYYY HH:mm");
                return b;
            });
        },

        setOpenPayment(state, payload) {
            state.openPayment = payload;
        },

        setShowAlert(state, payload) {
            state.showAlert = payload;
        },

        setSlug(state, payload) {
            state.slug = payload;
        },

        setRedirectForm(state, payload) {
            state.redirectForm = payload;
        },

        setShowPaymentMethods(state, payload) {
            state.showPaymentMethods = payload;
        },

        setPaymentMethods(state, payload) {
            state.paymentMethods = payload;
        },

        addItem(state, payload) {
            payload.retail_price = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 2
            }).format(payload.retail_price);
            state.products.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.products.findIndex(
                p => p.product_id === payload.product_id
            );
            state.products.splice(index, 1, payload);
        },

        removeItem(state, id) {
            state.products = state.products.filter(p => p.product_id !== id);
        }
    },

    actions: {
        async getItem({ commit, dispatch }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Subscription.get(query);

                const { store_subscription } = data.data;

                if (store_subscription.method_chosen) {
                    if (store_subscription.open_payment) {
                        commit("setOpenPayment", true);
                    }

                    const paymentMethod =
                        store_subscription.store_payment_method;

                    if (!paymentMethod.store_payment_method_online) {
                        commit("setShowAlert", true);
                    } else {
                        const slug =
                            store_subscription.store_payment_method
                                .store_payment_method_slug;

                        commit("setSlug", slug);

                        if (slug === "clearer" || slug === "iris") {
                            dispatch("getRedirectForm");
                        }
                    }

                    commit("setStoreSubscription", store_subscription);
                    commit("setBillings", store_subscription.billings);
                    commit("setLoading", false, { root: true });
                } else {
                    commit("setShowPaymentMethods", true);
                    dispatch("getPaymentMethods");
                }
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async getRedirectForm({ commit }) {
            try {
                const { data } = await Subscription.getRedirectForm();

                commit("setRedirectForm", data.data.form);

                commit("setLoading", false, { root: true });
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

        async getPaymentMethods({ commit }) {
            try {
                const { data } = await Subscription.getPaymentMethods();

                commit("setPaymentMethods", data.data.payment_methods);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async attachPaymentMethod({ commit, dispatch }, item) {
            try {
                commit("setLoading", true, { root: true });

                await Subscription.attachPaymentMethod(item);

                commit("setShowPaymentMethods", false);
                dispatch("getItem");
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
