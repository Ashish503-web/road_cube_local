import MultipleCoupons from "@/models/storePanel/redeem/MultipleCoupons";
import moment from "moment";

export default {
    namespaced: true,

    state: () => ({
        multipleCoupons: []
    }),

    mutations: {
        setItems(state, payload) {
            state.multipleCoupons = payload.map(m => {
                m.created_at = moment(m.created_at).format("DD/MM/YYYY HH:mm");
                return m;
            });
        }
    },

    actions: {
        async getItems({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await MultipleCoupons.get();

                const { multiple_redeemed_coupons, pagination } = data.data;

                commit("setItems", multiple_redeemed_coupons);
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
