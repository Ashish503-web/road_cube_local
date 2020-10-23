import CouponOnProduct from "@/models/storePanel/coupons/CouponOnProduct";

export default {
    namespaced: true,

    state: () => ({
        products: [],
        couponsOnProducts: [],
        couponOnProduct: new CouponOnProduct()
    }),

    mutations: {
        setProducts(state, payload) {
            state.products = payload;
        },

        setItems(state, payload) {
            state.couponsOnProducts = payload;
        },

        setItem(state, payload) {
            state.couponOnProduct = new CouponOnProduct(payload);
        },

        addItem(state, payload) {
            state.couponsOnProducts.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.couponsOnProducts.findIndex(
                c => c.coupon_id === payload.coupon_id
            );
            state.couponsOnProducts.splice(index, 1, payload);
        },

        removeItem(state, id) {
            state.couponsOnProducts = state.couponsOnProducts.filter(
                c => c.coupon_id !== id
            );
        }
    },

    actions: {
        async getProducts({ commit, rootState }) {
            try {
                const { data } = await CouponOnProduct.getProducts(
                    rootState.storeToken,
                    rootState.storeId
                );

                commit("setProducts", data.data.products);
            } catch (ex) {
                console.log(ex.response.data.message);
            }
        },

        async getItems({ commit, rootState }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CouponOnProduct.get(
                    rootState.storeToken,
                    rootState.storeId,
                    query
                );

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

                const { data } = await CouponOnProduct.create(
                    rootState.storeToken,
                    rootState.storeId,
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

        async update({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                let couponOnProduct = { ...state.couponOnProduct };

                const { data } = await CouponOnProduct.update(
                    rootState.storeToken,
                    rootState.storeId,
                    couponOnProduct
                );

                commit("updateItem", data.data.product);
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated product!"
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

                await CouponOnProduct.delete(
                    rootState.storeToken,
                    rootState.storeId,
                    state.couponOnProduct.coupon_id
                );

                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength - 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
                commit("removeItem", state.couponOnProduct.coupon_id);
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
