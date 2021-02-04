import CatalogManagement from "@/models/loyaltyPanel/CatalogManagement";

export default {
    namespaced: true,

    state: () => ({
        gifts: [],
        giftCategories: [],
        gift: '',
        deleteDialog: false,
        closeForm: false
    }),

    getters:{
        getGiftCategories(state){
            return state.giftCategories;
        },
        getDeleteDialog(state){
            return state.deleteDialog;
        },
        getGift(state){
            return state.gift;
        },
        getCloseForm(state){
            return state.closeForm;
        }
    },

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
        },
        setCloseForm(state, payload) {
            state.closeForm = payload;
        }
    },

    actions: {
        async fetchGifts({ commit }) {
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

        async fetchGiftCategories({ commit }) {
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

        async fetchGiftData({ commit }, id) {
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

                const name = {
                    "en": body.name.en || body.name.el || body.name.it,
                    "el": body.name.el || body.name.en || body.name.it,
                    "it": body.name.it || body.name.en || body.name.el
                };
                const item = {
                    "name": name,
                    "bg_color": body.bg_color,
                    "text_color": body.text_color
                };
                const {data} = await CatalogManagement.create(item);
                if(body.upload){
                    const id = data.data.gift_category.gift_category_id;
                    const fd = new FormData();
                    fd.append("image", body.upload);
                    await CatalogManagement.uploadImage(id, fd);
                }

                dispatch("fetchGiftCategories");
                commit("setLoading", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully Created a new category!"
                    },
                    {root: true}
                );
                commit("setCloseForm", true);
                setTimeout(
                    () => commit("setCloseForm", false),
                    10
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage",
                    ex.response.data.message, { root: true }
                );
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        },

        async update({ commit, dispatch }, body) {
            try {
                commit("setLoading", true, { root: true });
                const name = {
                    "en": body.name.en || body.name.el || body.name.it,
                    "el": body.name.el || body.name.en || body.name.it,
                    "it": body.name.it || body.name.en || body.name.el
                };
                const item = {
                    "name": name,
                    "bg_color": body.bg_color,
                    "text_color": body.text_color,
                    "image": body.image
                };
                const id = body.gift_category_id;
                await CatalogManagement.update(id, item);
                if(body.upload){
                    const fd = new FormData();
                    fd.append("image", body.upload);
                    await CatalogManagement.uploadImage(id, fd);
                }
                dispatch("fetchGiftCategories");
                commit("setLoading", false, { root: true });commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully Updated a category!"
                    },
                    {root: true}
                );
                commit("setCloseForm", true);
                setTimeout(
                    () => commit("setCloseForm", false),
                    10
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage",
                    ex.response.data.message, { root: true }
                );
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        },

        async delete({ commit, dispatch }, id) {
            try {
                commit("setLoading", true, { root: true });

                await CatalogManagement.delete(id);

                dispatch("fetchGiftCategories");
                commit("setDeleteDialog", false);
                commit("setLoading", false, { root: true });
                commit("setLoading", false, { root: true });commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "The Category is successfully deleted!"
                    },
                    {root: true}
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
            }
        }
    }
};
