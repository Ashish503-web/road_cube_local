import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import axios from "axios";
import modules from "./modules";

export default new Vuex.Store({
    state: {
        accessToken: "",
        storeId: "",
        user: {},
        userStores: [],
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
        setAccessToken(state, payload) {
            state.accessToken = payload;
        },

        setStoreId(state, payload) {
            state.storeId = payload;
        },

        setUser(state, payload) {
            state.user = payload;
        },

        setUserStores(state, payload) {
            state.userStores = payload;
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

    actions: {
        async getUser({ commit, state }) {
            try {
                axios.defaults.headers.Authorization = `Bearer ${state.accessToken}`;

                const { data } = await axios.get(
                    "https://api.roadcube.tk/v1/users/me"
                );

                commit("setUser", data.data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        }
    },

    getters: {},

    modules
});
