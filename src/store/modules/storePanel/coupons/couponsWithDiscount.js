import CouponWithDiscount from "@/models/storePanel/coupons/CouponWithDiscount";

export default {
    namespaced: true,

    state: () => ({
        couponsWithDiscount: [],
        couponWithDiscount: new CouponWithDiscount()
    }),

    mutations: {
        setItems(state, payload) {
            state.couponsWithDiscount = payload;
        },

        setItem(state, payload) {
            state.couponWithDiscount = new CouponWithDiscount(payload);
        },

        addItem(state, payload) {
            state.couponsWithDiscount.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.couponsWithDiscount.findIndex(
                c => c.coupon_id === payload.coupon_id
            );
            state.couponsWithDiscount.splice(index, 1, payload);
        },

        removeItem(state, id) {
            state.couponsWithDiscount = state.couponsWithDiscount.filter(
                c => c.coupon_id !== id
            );
        }
    },

    actions: {
        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CouponWithDiscount.get(query);

                const { coupons, pagination } = data.data;

                commit("setItems", coupons);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async create({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                let couponOnProduct = { ...state.couponOnProduct };

                const { data } = await CouponWithDiscount.create(
                    couponOnProduct
                );

                const { coupon } = data.data;

                coupon.product_buy_name = coupon.product_buy.name;
                coupon.product_free_name = coupon.product_free.name;

                commit("addItem", coupon);
                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength + 1,
                    { root: true }
                );
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

        async remove({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                await CouponWithDiscount.delete(
                    state.couponWithDiscount.coupon_id
                );

                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength - 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
                commit("removeItem", state.couponWithDiscount.coupon_id);
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
