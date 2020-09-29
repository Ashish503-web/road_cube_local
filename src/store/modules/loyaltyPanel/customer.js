export default {
    namespaced: true,

    state: () => ({
        mode: 0,
        tabDialog: false,
        customerDialog: false
    }),

    mutations: {
        setMode(state, payload) {
            state.mode = payload;
        },

        setTabDialog(state, payload) {
            state.tabDialog = payload;
        },

        setCustomerDialog(state, payload) {
            state.customerDialog = payload;
        }
    }
};
