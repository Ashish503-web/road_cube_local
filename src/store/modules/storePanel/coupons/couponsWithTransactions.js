import CouponWithTransaction from "@/models/storePanel/coupons/CouponWithTransaction";

export default {
    namespaced: true,

    state: () => ({
        giftCategories: [],
        users: [],
        couponWithTransaction: new CouponWithTransaction()
    }),

    mutations: {
        setItem(state, payload) {
            state.couponWithTransaction = new CouponWithTransaction(payload);
        },

        setUsers(state, payload) {
            state.users = payload;
        },

        setGiftCategories(state, payload) {
            state.giftCategories = payload;
        }
    },

    actions: {
        async getGiftCategories({ commit }) {
            try {
                const {
                    data
                } = await CouponWithTransaction.getGiftCategories();

                commit("setGiftCategories", data.data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async getItem({ commit, dispatch }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CouponWithTransaction.getItem();

                let { coupon } = data.data;
                coupon.image = coupon.gift_image;

                if (coupon.coupon_id) {
                    await dispatch("getItemUsers", {
                        id: coupon.coupon_id,
                        query: "?page=1"
                    });
                }

                commit("setItem", data.data.coupon);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async getItemUsers({ commit }, { id, query }) {
            try {
                const { data } = await CouponWithTransaction.getItemUsers(
                    id,
                    query
                );

                let { users, pagination } = data.data;

                commit("setUsers", users);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async create({ commit, dispatch, state }, image) {
            try {
                commit("setLoading", true, { root: true });

                let couponWithTransaction = { ...state.couponWithTransaction };
                delete couponWithTransaction.coupon_id;
                delete couponWithTransaction.image;

                const { data } = await CouponWithTransaction.create(
                    couponWithTransaction
                );

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.coupon,
                        image
                    });
                } else {
                    commit("setItem", data.data.coupon);
                    commit("setLoading", false, { root: true });
                    commit(
                        "setNotification",
                        {
                            show: true,
                            type: "success",
                            text:
                                "You have successfully created coupon with transaction!"
                        },

                        { root: true }
                    );
                }
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "error",
                        text: ex.response.data.message
                    },

                    { root: true }
                );
            }
        },

        async remove({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                await CouponWithTransaction.delete(
                    state.couponWithTransaction.coupon_id
                );

                commit("setItem", {});
                commit("setDeleteDialog", false, { root: true });
                commit("setLoading", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text:
                            "You have successfully deleted coupon with transaction!"
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

        async uploadImage({ commit }, { item, image }) {
            try {
                const fd = new FormData();
                fd.append("image", image);

                const { data } = await CouponWithTransaction.uploadImage(
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
                        text:
                            "You have successfully created coupon with transaction!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "error",
                        text: ex.response.data.message
                    },

                    { root: true }
                );
            }
        }
    }
};
