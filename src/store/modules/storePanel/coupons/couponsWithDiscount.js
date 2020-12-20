import CouponWithDiscount from "@/models/storePanel/coupons/CouponWithDiscount";
import moment from "moment";

export default {
    namespaced: true,

    state: () => ({
        giftCategories: [],
        products: [],
        couponsWithDiscount: [],
        couponWithDiscount: new CouponWithDiscount()
    }),

    mutations: {
        setGiftCategories(state, payload) {
            state.giftCategories = payload;
        },

        setProducts(state, payload) {
            state.products = payload;
        },

        setItems(state, payload) {
            state.couponsWithDiscount = payload.map(c => {
                c.created_at = moment(c.created_at).format("DD/MM/YYYY HH:mm");
                return c;
            });
        },

        setItem(state, payload) {
            state.couponWithDiscount = new CouponWithDiscount(payload);
        },

        addItem(state, payload) {
            payload.created_at = moment(payload.created_at).format(
                "DD/MM/YYYY HH:mm"
            );
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
        async getGiftCategories({ commit }) {
            try {
                const { data } = await CouponWithDiscount.getGiftCategories();

                commit("setGiftCategories", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getProducts({ commit }) {
            try {
                const { data } = await CouponWithDiscount.getProducts();

                commit("setProducts", data.data.products);
            } catch (ex) {
                console.log(ex.response.data.message);
            }
        },

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
                console.error(ex.response.data.message);
            }
        },

        async create({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                let couponWithDiscount = { ...state.couponWithDiscount };
                CouponWithDiscount.clearFalsyValues(couponWithDiscount);

                const { data } = await CouponWithDiscount.create(
                    couponWithDiscount
                );

                const { coupon } = data.data;

                coupon.discount_product_name = coupon.product.name;
                coupon.total_discount = coupon.discount;

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
                        text:
                            "You have successfully deleted product's discount!"
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
