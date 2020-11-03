import CouponsOverview from "@/models/storePanel/redeem/CouponsOverview";

export default {
    namespaced: true,

    state: () => ({
        coupons: [],
        pagination: {}
    }),

    getters: {
        coupons: state => state.coupons,
        pagination: state => state.pagination
    },

    mutations: {
        setCoupons(state, payload) {
            state.coupons = payload;
        },
        setPagination(state, payload) {
            state.pagination = payload;
        }
    },

    actions: {
        async getItems({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CouponsOverview.get();
                const coupons = data.data.redeemed_coupons.data;
                const pagination = data.data.redeemed_coupons.pagination;

                commit("setCoupons", coupons);
                commit("setPagination", pagination);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        }
    }
};
