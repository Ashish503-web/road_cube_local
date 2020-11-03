import Branches from "@/models/loyaltyPanel/branches/Branches";

export default {
    namespaced: true,

    state: () => ({
        branches: []
    }),

    getters: {
        branches: (state) => state.branches
    },

    mutations: {
        setBranches(state, payload){
            state.branches = payload;
        }
    },

    actions: {
        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Branches.get(query);
                const branches = data.data.stores;
                commit("setBranches", branches);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        }
    }
};
