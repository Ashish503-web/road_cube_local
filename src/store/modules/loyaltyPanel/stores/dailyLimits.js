import Store from "@/models/loyaltyPanel/stores/Store";

export default {
    namespaced: true,

    state: () => ({
        dailyLimits: []
    }),

    mutations: {
        setItems(state, payload) {
            state.dailyLimits = payload;
        },

        setItem(state, payload) {
            state.store = new Store(payload);
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
            state.stores = state.stores.filter(s => s.store_id !== id);
        }
    },

    actions: {
        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Store.getDailyLimits(query);

                const { default_values, pagination } = data.data;

                commit("setItems", default_values[0].stores);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data.message);
            }
        }
    }
};
