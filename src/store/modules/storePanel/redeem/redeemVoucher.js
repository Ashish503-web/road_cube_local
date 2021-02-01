import RedeemVoucher from "@/models/storePanel/redeem/RedeemVoucher";

export default {
    namespaced: true,

    state: () => ({}),

    mutations: {},

    actions: {
        async create({ commit }, item) {
            try {
                commit("setLoading", true, { root: true });

                await RedeemVoucher.create(item);

                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "Success Redemption"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                // commit("setErrorMessage", ex.response.data.message, {
                //     root: true
                // });
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
