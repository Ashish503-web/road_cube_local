import CouponWithCode from "@/models/storePanel/coupons/CouponWithCode";

export default {
    namespaced: true,

    state: () => ({
        showImageUpload: false,
        giftCategories: [],
        couponsWithCode: [],
        couponWithCode: new CouponWithCode()
    }),

    mutations: {
        setShowImageUpload(state, payload) {
            state.showImageUpload = payload;
        },

        setGiftCategories(state, payload) {
            state.giftCategories = payload;
        },

        setItems(state, payload) {
            state.couponsWithCode = payload;
        },

        setItem(state, payload) {
            state.couponWithCode = new CouponWithCode(payload);
        },

        addItem(state, payload) {
            state.couponsWithCode.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.couponsWithCode.findIndex(
                c => c.coupon_id === payload.coupon_id
            );
            state.couponsWithCode.splice(index, 1, payload);
        },

        removeItem(state, id) {
            state.couponsWithCode = state.couponsWithCode.filter(
                c => c.coupon_id !== id
            );
        }
    },

    actions: {
        async getGiftCategories({ commit }) {
            try {
                const { data } = await CouponWithCode.getGiftCategories();

                commit("setGiftCategories", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CouponWithCode.get(query);

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

        async create({ commit, dispatch, state, rootState }, image) {
            try {
                commit("setLoading", true, { root: true });

                let couponWithCode = { ...state.couponWithCode };
                delete couponWithCode.coupon_id;
                delete couponWithCode.image;

                const { data } = await CouponWithCode.create(couponWithCode);
                const { coupon } = data.data;
                coupon.total_claimed = 0;
                coupon.total_redeemed = 0;

                if (image) {
                    dispatch("uploadImage", {
                        item: coupon,
                        image,
                        mode: 1
                    });
                } else {
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
                            text: "You have successfully created new coupon!"
                        },

                        { root: true }
                    );
                }
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

        async update({ commit, dispatch, state }, image) {
            try {
                commit("setLoading", true, { root: true });

                let couponWithCode = { ...state.couponWithCode };
                delete couponWithCode.image;
                delete couponWithCode.maximum;

                const { data } = await CouponWithCode.update(couponWithCode);
                const { coupon } = data.data;
                coupon.total_claimed = coupon.claimed;
                coupon.total_redeemed = coupon.rewarded;

                if (image) {
                    dispatch("uploadImage", {
                        item: coupon,
                        image,
                        mode: 2
                    });
                } else {
                    commit("updateItem", coupon);
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
                }
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

        async remove({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                await CouponWithCode.delete(state.couponWithCode.coupon_id);

                commit("setServerItemsLength", state.serverItemsLength - 1, {
                    root: true
                });
                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
                commit("removeItem", state.couponWithCode.coupon_id);
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
        },

        async uploadImage({ commit, rootState }, { item, image, mode }) {
            try {
                const fd = new FormData();
                fd.append("image", image);

                const { data } = await CouponWithCode.uploadImage(
                    item.coupon_id,
                    fd
                );

                item.image = data.data.image;

                if (mode === 1) {
                    commit("addItem", item);
                    commit(
                        "setServerItemsLength",
                        rootState.serverItemsLength + 1,
                        { root: true }
                    );
                } else {
                    commit("updateItem", item);
                }
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: `You have successfully ${
                            mode === 1 ? "created" : "updated"
                        } product!`
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
