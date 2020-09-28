export default {
    namespaced: true,

    state: () => ({
        mode: 0,
        shopDialog: false,
        rightsDialog: false,
        redirectDialog: false,
        deleteDialog: false,
        limitsDialog: false
    }),

    mutations: {
        setMode(state, payload) {
            state.mode = payload;
        },

        setShopDialog(state, payload) {
            state.shopDialog = payload;
        },

        setRightsDialog(state, payload) {
            state.rightsDialog = payload;
        },

        setRedirectDialog(state, payload) {
            state.redirectDialog = payload;
        },

        setDeleteDialog(state, payload) {
            state.deleteDialog = payload;
        },

        setLimitsDialog(state, payload) {
            state.limitsDialog = payload;
        }
    }
};
