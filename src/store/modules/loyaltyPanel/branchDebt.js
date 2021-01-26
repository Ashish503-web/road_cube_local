import Debts from "@/models/loyaltyPanel/BranchDebt";

export default {
    namespaced: true,

    state: () => ({
        items: []
    }),

    mutations: {
        setDebts(state, payload) {
            state.items = payload;
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
        }
    }
        
};
