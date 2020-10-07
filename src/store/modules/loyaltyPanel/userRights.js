export default {
    namespaced: true,

    state: () => ({
        mode: 0,
        userDialog: false,
        deleteDialog: false
    }),

    mutations: {
        setMode(state, payload){
            state.mode = payload;
        },
        setUserDialog(state, payload){
            state.userDialog = payload;
        },
        setDeleteDialog(state, payload){
            state.deleteDialog = payload
        }
    }
};
