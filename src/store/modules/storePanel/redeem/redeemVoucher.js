import RedeemVoucher from "@/models/storePanel/redeem/RedeemVoucher";

export default {
    namespaced: true,

    state: () => ({
        
    }),

    mutations: {
        
    },

    actions: {
        async create({ commit, state, rootState } , item) {
            try {
                commit("setLoading", true, { root: true });

                await RedeemVoucher.create(
                    item
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
    }
};
