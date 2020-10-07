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
        loading: false,
        errorMessage: "",
        serverItemsLength: 0,
        notification: {
            show: false,
            type: "",
            text: ""
        },
        user: {
            user_registration_identifier: "4WMH2H-H7K2-8ZRRA8-052814",
            mobile: "",
            mobile_verification_code: "6328"
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

        setUser(state, payload) {
            state.user = payload;
        },

        setLoading(state, payload) {
            state.loading = payload;
        },

        setErrorMessage(state, payload) {
            state.errorMessage = payload;
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
