import Vue from "vue";
import Vuex from "vuex";
import register from "./modules/register";

Vue.use(Vuex);

import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

export default new Vuex.Store({
    modules: {
        register
    },

    state: {
        accessToken: "",
        storeId: "",
        user: {},
        userStores: [],
        permissions: {},
        dialog: false,
        deleteDialog: false,
        permissionDialog: false,
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

        setPermissions(state, payload) {
            state.permissions = payload;
        },

        setDialog(state, payload) {
            state.dialog = payload;
        },

        setDeleteDialog(state, payload) {
            state.deleteDialog = payload;
        },

        setPermissionDialog(state, payload) {
            state.permissionDialog = payload;
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
        async getUser({ commit }) {
            try {
                const { data } = await axios.get(
                    `${process.env.VUE_APP_DEFAULT_API_URL}/users/me`
                );

                data.data.user.role = data.data.user_stores[0].role.name;
                commit("setUser", data.data.user);
                commit("setPermissions", data.data.user_stores[0].permissions);
            } catch (ex) {
                console.error(ex.response.data);
            }
        }
    }
});
