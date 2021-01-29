import StoreSubscriptions from "@/models/loyaltyPanel/subscriptions/StoreSubscriptions";

export default {
    namespaced: true,

    state: () => ({
        storeSubscriptions: []
    }),

    mutations: {
        setStoreSubscriptions(state, payload) {
            state.storeSubscriptions = payload;
        },
    },

    actions: {
        async getStoreSubscriptions({ commit }, query){
            try {
                commit("setLoading", true, { root: true });
                const { data } = await StoreSubscriptions.get(query);
                
                const { store_subscriptions,paginations }  = data.data
                console.log(store_subscriptions,'stores111111')
                commit("setStoreSubscriptions", store_subscriptions);
                commit("setServerItemsLength", paginations.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        }
    }
        
};
