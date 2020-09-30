import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import modules from "./modules";

export default new Vuex.Store({
    state: {
        storeToken: "",
        companyToken: "",
        storeId: "",
        companyId: "",
        user: {
            user_registration_identifier: "4WMH2H-H7K2-8ZRRA8-052814",
            mobile: "",
            mobile_verification_code: "6328"
        }
    },

    mutations: {
        setStoreToken(state, payload) {
            state.storeToken = payload;
        },

        setCompanyToken(state, payload) {
            state.companyToken = payload;
        },

        setStoreId(state, payload) {
            state.storeId = payload;
        },

        setCompanyId(state, payload) {
            state.companyId = payload;
        },

        setUser(state, payload) {
            state.user = payload;
        }
    },

    actions: {},

    getters: {},

    modules
});
