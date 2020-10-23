import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import modules from "./modules";

export default new Vuex.Store({
    state: {
        storeId: "",
        storeToken: "",
        companyId: "",
        companyToken: "",
        dialog: false,
        deleteDialog: false,
        loading: false,
        errorMessage: "",
        resetSuccess: false,
        resetValidation: false,
        serverItemsLength: 0,
        notification: {
            show: false,
            type: "",
            text: ""
        }
    },

    mutations: {
        setStoreId(state, payload) {
            state.storeId = payload;
        },

        setStoreToken(state, payload) {
            state.storeToken = payload;
        },

        setCompanyId(state, payload) {
            state.companyId = payload;
        },

        setCompanyToken(state, payload) {
            state.companyToken = payload;
        },

        setDialog(state, payload) {
            state.dialog = payload;
        },

        setDeleteDialog(state, payload) {
            state.deleteDialog = payload;
        },

        setLoading(state, payload) {
            state.loading = payload;
        },

        setErrorMessage(state, payload) {
            state.errorMessage = payload;
        },

        setResetSuccess(state, payload) {
            state.resetSuccess = payload;
        },

        setResetValidation(state, payload) {
            state.resetValidation = payload;
        },

        setServerItemsLength(state, payload) {
            state.serverItemsLength = payload;
        },

        setNotification(state, payload) {
            state.notification = payload;
        }
    },

    actions: {},

    getters: {},

    modules
});
