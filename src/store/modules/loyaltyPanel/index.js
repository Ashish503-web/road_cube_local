import branches from "./branches/index";
import customer from "./customer";
import userRights from "./userRights";

import Store from "@/models/loyaltyPanel/Store.js";

export default {
    namespaced: true,
    modules: {
        branches,
        customer,
        userRights
    },

    state: () => ({
        store: new Store()
    }),

    getters: {
        store: state => state.store
    },

    mutations: {
        setStore(state, payload) {
            state.store = payload;
        },
    },

    actions: {
        async getStore({ commit }) {
            try {
                const { data } = await Store.get();
                commit("setStore", data.data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        }
    }
};
