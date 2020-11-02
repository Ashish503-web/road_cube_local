import CouponWithTransactions from "@/models/storePanel/coupons/CouponWithTransactions";

export default {
    namespaced: true,

    state: () => ({
        coupon: {},
        giftCategories: []
    }),

    getters: {
        coupon: state => state.coupon,
        giftCategories: state => state.giftCategories
    },

    mutations: {
        setCoupon(state, payload) {
            state.coupon = payload;
        },

        setGiftCategories(state, payload) {
            state.giftCategories = payload;
        }
    },

    actions: {
        async getCoupon({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CouponWithTransactions.get();

                const coupon = data.data.coupon;
                commit("setCoupon", coupon);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async getGiftCategories({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const {
                    data
                } = await CouponWithTransactions.getGiftCategories();

                commit("setGiftCategories", data.data);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async create({ commit, state, rootState }, item) {
            console.log(item, "item56465");
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CouponWithTransactions.create(item);

                const { coupon } = data.data.coupon;

                commit("setCoupon", coupon);
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully created coupon on product!"
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

        async remove({ commit, state, rootState }, coupon_id) {
            try {
                commit("setLoading", true, { root: true });

                await CouponWithTransactions.delete(coupon_id);

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
