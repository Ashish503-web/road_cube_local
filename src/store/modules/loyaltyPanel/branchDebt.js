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
        async getDebts({ commit }, date){
            try {
                commit("setLoading", true, { root: true });
                const { data } = await Debts.get(date);
                
                console.log(data, "data2222");
                let debts = data.data
                debts.map(item => {
                    item.product_name = JSON.parse(item.product_name)
                    item.bank_provider_name = JSON.parse(item.bank_provider_name)
                })
                
                commit("setDebts", debts);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },

        async getRedemptionInvoice({ commit }, date){
            try {
                commit("setLoading", true, { root: true });
                const { data } = await Debts.getRedemptionInvoice(date);
                
                console.log(data, "data2222");
                let debts = data.data
                
                commit("setRedemptionInvoice", debts);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },
    }
        
};
