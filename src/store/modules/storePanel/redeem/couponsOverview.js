import CouponsOverview from "@/models/storePanel/redeem/CouponsOverview";
import moment from "moment";

export default {
    namespaced: true,

    state: () => ({
        coupons: []
    }),

    mutations: {
        setItems(state, payload) {
            state.coupons = payload.map(c => {
                c.created_at = moment(c.created_at).format("DD/MM/YYYY HH:mm");
                if (c.available === null) c.available = "Unlimited";
                return c;
            });
        }
    },

    actions: {
        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CouponsOverview.get(query);

                const {
                    data: coupons,
                    pagination
                } = data.data.redeemed_coupons;

                commit("setItems", coupons);
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
