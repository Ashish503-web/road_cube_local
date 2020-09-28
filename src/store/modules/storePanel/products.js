export default {
    namespaced: true,

    state: {
        productDialog: false,
        productGroupDialog: false
    },

    mutations: {
        setProductDialog(state, payload) {
            state.productDialog = payload;
        },

        setProductGroupDialog(state, payload) {
            state.productGroupDialog = payload;
        }
    }
};
