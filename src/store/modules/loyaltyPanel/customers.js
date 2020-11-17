import Customers from "@/models/loyaltyPanel/Customers";

export default {
    namespaced: true,

    state: () => ({
        mode: 0,
        customerDialog: false,
        tabDialog: false
    }),

    mutations: {
        setMode(state, payload) {
            state.mode = payload;
        },
        setCustomerDialog(state, payload) {
            state.customerDialog = payload;
        },
        setTabDialog(state, payload) {
            state.tabDialog = payload;
        },
    },

    actions: {
        async getCustomers({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Customers.get();
                // const customers = data.data.stores;
                console.log(data,'data2222')
                // commit("setCustomers", customers);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        }
    }
};
