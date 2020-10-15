export default {
    namespaced: true,

    state: () => ({
        editorMenu: false
    }),

    mutations: {
        setEditorMenu(state, payload) {
            state.editorMenu = payload;
        }
    },

    actions: {}
};
