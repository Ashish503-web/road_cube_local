import CouponOnProduct from "@/models/storePanel/coupons/CouponOnProduct";

export default {
    namespaced: true,

    state: () => ({
        giftCategories: [],
        products: [],
        couponsOnProducts: [],
        couponOnProduct: new CouponOnProduct()
    }),

    mutations: {
        setGiftCategories(state, payload) {
            state.giftCategories = payload;
        },

        setProducts(state, payload) {
            state.products = payload;
        },

        setItems(state, payload) {
            state.couponsOnProducts = payload.map(c => {
                c.product_buy = c.product_buy_name;
                c.product_free = c.product_free_name;
                return c;
            });
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
        async getGiftCategories({ commit }) {
            try {
                const { data } = await CouponOnProduct.getGiftCategories();

                commit("setGiftCategories", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getProducts({ commit }) {
            try {
                const { data } = await CouponOnProduct.getProducts();

                commit("setProducts", data.data.products);
            } catch (ex) {
                console.log(ex.response.data.message);
            }
        },

        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CouponOnProduct.get(query);

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
                delete couponOnProduct.coupon_id;
                delete couponOnProduct.code;
                if (couponOnProduct.action === "sample")
                    delete couponOnProduct.product_buy_id;

                const { data } = await CouponOnProduct.create(couponOnProduct);

                const { coupon } = data.data;

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

        async update({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                let couponOnProduct = { ...state.couponOnProduct };

                const { data } = await CouponOnProduct.update(couponOnProduct);

                commit("updateItem", data.data.product);
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated coupon on product!"
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

                await CouponOnProduct.delete(state.couponOnProduct.coupon_id);

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
