import CatalogManagement from "@/models/loyaltyPanel/CatalogManagement";

export default {
    namespaced: true,

    state: () => ({
        gifts: [],
        giftCategories: [],
        gift: {},
        deleteDialog: false
    }),

    mutations: {
        setGifts(state, payload) {
            state.gifts = payload;
        },
        setGiftCategories(state, payload) {
            state.giftCategories = payload;
        },
        setGiftData(state, payload) {
            state.gift = payload;
        },
        setDeleteDialog(state, payload) {
            state.deleteDialog = payload;
        }
    },

    actions: {
        async getGifts({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CatalogManagement.get();
                const gifts = data.data.gifts;
                commit("setGifts", gifts);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },

        async getGiftCategories({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CatalogManagement.getCategories();
                const giftCategories = data.data.gift_categories;
                commit("setGiftCategories", giftCategories);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },

        async getGiftData({ commit }, id) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await CatalogManagement.getGift(id);
                const gift = data.data;
                commit("setGiftData", gift);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },

        async create({ commit, dispatch }, body) {
            try {
                commit("setLoading", true, { root: true });

                await CatalogManagement.create(body);

                dispatch("getGifts")                
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },

        async update({ commit, dispatch },  body) {
            try {
                console.log(body,'body')
                commit("setLoading", true, { root: true });

                await CatalogManagement.update(body.gift_id,body);
                
                dispatch("getGifts")
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        },

        async delete({ commit, dispatch }, id) {
            try {
                commit("setLoading", true, { root: true });

                await CatalogManagement.delete(id);

                dispatch("getGifts")
                commit("setDeleteDialog", false);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        }
    }
};
