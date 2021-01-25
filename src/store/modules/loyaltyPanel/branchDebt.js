import Debts from "@/models/loyaltyPanel/BranchDebt";

export default {
    namespaced: true,

    state: () => ({
        items: [],
        redemptionInvoice: []
    }),

    mutations: {
        setDebts(state, payload) {
            state.items = payload;
        },

        setRedemptionInvoice(state, payload) {
            state.redemptionInvoice = payload;
        }
    },

    actions: {
        async getDebts({ commit }, query){
            try {
                commit("setLoading", true, { root: true });
                const { data } = await Debts.get(query);
                
                const debts = data.data.data
                const pagination  = data.data.pagination;
                
                commit("setDebts", debts);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },

        async getRedemptionInvoice({ commit }, date){
            try {
                commit("setLoading", true, { root: true });
                const { data } = await Debts.getRedemptionInvoice(date);
                
                const debts = data.data.data
                const pagination  = data.data.pagination;
                
                commit("setRedemptionInvoice", debts);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },
    }
        
};
