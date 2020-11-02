import CouponWithVisit from "@/models/storePanel/coupons/CouponWithVisit";

export default {
    namespaced: true,

    state: () => ({
        giftCategories: [],
        couponWithVisit: new CouponWithVisit()
    }),

    mutations: {
        setGiftCategories(state, payload) {
            state.giftCategories = payload;
        },

        setItem(state, payload) {
            state.couponWithVisit = new CouponWithVisit(payload);
        }
    },

    actions: {
        async getGiftCategories({ commit }) {
            try {
                const { data } = await CouponWithVisit.getGiftCategories();

                commit("setGiftCategories", data.data);
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        },

        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CouponWithVisit.get(query);

                console.log(data.data);

                commit("setItem", data.data[0]);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async create({ commit, dispatch, state }, image) {
            try {
                commit("setLoading", true, { root: true });

                let couponWithVisit = { ...state.couponWithVisit };
                delete couponWithVisit.coupon_id;
                delete couponWithVisit.image;

                const { data } = await CouponWithVisit.create(couponWithVisit);

                console.log(data);

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.coupon,
                        image,
                        mode: 1
                    });
                } else {
                    commit("setItem", data.data.coupon);
                    commit("setLoading", false, { root: true });
                    commit("setDialog", false, { root: true });
                    commit(
                        "setNotification",
                        {
                            show: true,
                            type: "success",
                            text:
                                "You have successfully created new coupon with visit!"
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

                let couponWithVisit = { ...state.couponWithVisit };
                delete couponWithVisit.image;

                const { data } = await CouponWithVisit.update(couponWithVisit);

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.coupon,
                        image,
                        mode: 2
                    });
                } else {
                    commit("updateItem", data.data.coupon);
                    commit("setLoading", false, { root: true });
                    commit("setDialog", false, { root: true });
                    commit(
                        "setNotification",
                        {
                            show: true,
                            type: "success",
                            text:
                                "You have successfully updated coupon with visit!"
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

                await CouponWithVisit.delete(state.couponWithVisit.coupon_id);

                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
                commit("setItem", {});
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully deleted coupon with visit!"
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

        async uploadImage({ commit }, { item, image, mode }) {
            try {
                const fd = new FormData();
                fd.append("image", image);

                const { data } = await CouponWithVisit.uploadImage(
                    item.coupon_id,
                    fd
                );

                item.image = data.data.image;

                commit("setItem", item);

                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: `You have successfully ${
                            mode === 1 ? "created" : "updated"
                        } coupon with visit!`
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
