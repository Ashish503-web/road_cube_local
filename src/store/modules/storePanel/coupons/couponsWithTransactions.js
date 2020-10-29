import CouponWithTransactions from "@/models/storePanel/coupons/CouponWithTransactions";

export default {
    namespaced: true,

    state: () => ({
        coupon: {}
    }),

    getters: {
        coupon: (state) => state.coupon
    },

    mutations: {
        setCoupon(state, payload) {
            state.coupon = payload;
        },
    },

    actions: {
        async getCoupon({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CouponWithTransactions.get(query);

                const coupon = data.data.coupon;
                commit("setCoupon", coupon);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async remove({ commit, state, rootState }, coupon_id) {
            try {
                commit("setLoading", true, { root: true });

                await CouponWithTransactions.delete(
                    coupon_id
                );

                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength - 1,
                    { root: true }
                );
                commit("setCoupon", {});
                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
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
