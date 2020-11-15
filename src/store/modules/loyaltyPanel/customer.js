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
        }
    }
};
