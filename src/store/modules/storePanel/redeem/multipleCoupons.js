import MultipleCoupons from "@/models/storePanel/redeem/MultipleCoupons";

export default {
    namespaced: true,

    state: () => ({
        multipleCoupons: []
    }),

    getters: {
        multipleCoupons: (state) => state.multipleCoupons
    },

    mutations: {
        setMultipleCoupons(state, payload) {
            state.multipleCoupons = payload;
        },
    },

    actions: {
        async getItems({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await MultipleCoupons.get();
                const multipleCoupons = data.data.redeemed_coupons.data
                commit("setMultipleCoupons", multipleCoupons);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },
    }
};
