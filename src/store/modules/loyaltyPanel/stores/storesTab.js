import Store from "@/models/loyaltyPanel/stores/Store";

export default {
    namespaced: true,

    state: () => ({
        stores: [],
        store: new Store()
    }),

    mutations: {
        setItems(state, payload) {
            state.stores = payload;
        },

        setItem(state, payload) {
            state.product = new Store(payload);
        },

        addItem(state, payload) {
            payload.retail_price = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 2
            }).format(payload.retail_price);
            state.products.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.products.findIndex(
                p => p.product_id === payload.product_id
            );
            state.products.splice(index, 1, payload);
        },

        removeItem(state, id) {
            state.products = state.products.filter(p => p.product_id !== id);
        }
    },

    actions: {
        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Store.get(query);

                const { stores, pagination } = data.data;

                console.log(stores);

                commit("setItems", stores);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data.message);
            }
        }

        // async create({ commit, dispatch, state, rootState }, image) {
        //     try {
        //         commit("setLoading", true, { root: true });

        //         let product = { ...state.product };
        //         delete product.product_id;
        //         delete product.image;
        //         if (!product.name.en) product.name.en = product.name.el;
        //         if (!product.name.it) product.name.it = product.name.el;
        //         if (!product.description.en)
        //             product.description.en = product.description.el;
        //         if (!product.description.it)
        //             product.description.it = product.description.el;

        //         const { data } = await Store.create(product);

        //         if (image) {
        //             dispatch("uploadImage", {
        //                 item: data.data.product,
        //                 image,
        //                 mode: 1
        //             });
        //         } else {
        //             commit("addItem", data.data.product);
        //             commit(
        //                 "setServerItemsLength",
        //                 rootState.serverItemsLength + 1,
        //                 { root: true }
        //             );
        //             commit("setLoading", false, { root: true });
        //             commit("setDialog", false, { root: true });
        //             commit(
        //                 "setNotification",
        //                 {
        //                     show: true,
        //                     type: "success",
        //                     text: "You have successfully created product!"
        //                 },

        //                 { root: true }
        //             );
        //         }
        //     } catch (ex) {
        //         commit("setLoading", false, { root: true });
        //         commit("setErrorMessage", ex.response.data.message, {
        //             root: true
        //         });
        //         setTimeout(
        //             () => commit("setErrorMessage", "", { root: true }),
        //             5000
        //         );
        //     }
        // },

        // async update({ commit, dispatch, state }, image) {
        //     try {
        //         commit("setLoading", true, { root: true });

        //         let product = { ...state.product };
        //         delete product.image;
        //         if (!product.name.en) product.name.en = product.name.el;
        //         if (!product.name.it) product.name.it = product.name.el;
        //         if (!product.description.en)
        //             product.description.en = product.description.el;
        //         if (!product.description.it)
        //             product.description.it = product.description.el;

        //         const { data } = await Store.update(product);

        //         if (image) {
        //             dispatch("uploadImage", {
        //                 item: data.data.product,
        //                 image,
        //                 mode: 2
        //             });
        //         } else {
        //             commit("updateItem", data.data.product, { root: true });
        //             commit("setLoading", false, { root: true });
        //             commit("setDialog", false, { root: true });
        //             commit(
        //                 "setNotification",
        //                 {
        //                     show: true,
        //                     type: "success",
        //                     text: "You have successfully updated product!"
        //                 },

        //                 { root: true }
        //             );
        //         }
        //     } catch (ex) {
        //         commit("setLoading", false, { root: true });
        //         commit("setErrorMessage", ex.response.data.message, {
        //             root: true
        //         });
        //         setTimeout(
        //             () => commit("setErrorMessage", "", { root: true }),
        //             5000
        //         );
        //     }
        // },

        // async remove({ commit, state, rootState }) {
        //     try {
        //         commit("setLoading", true, { root: true });

        //         commit(
        //             "setServerItemsLength",
        //             rootState.serverItemsLength - 1,
        //             { root: true }
        //         );
        //         commit("setLoading", false, { root: true });
        //         commit("setDeleteDialog", false, { root: true });
        //         commit("removeItem", state.product.product_id);
        //         commit(
        //             "setNotification",
        //             {
        //                 show: true,
        //                 type: "success",
        //                 text: "You have successfully deleted product!"
        //             },

        //             { root: true }
        //         );
        //     } catch (ex) {
        //         commit("setLoading", false, { root: true });
        //         commit("setErrorMessage", ex.response.data.message, {
        //             root: true
        //         });
        //         setTimeout(
        //             () => commit("setErrorMessage", "", { root: true }),
        //             5000
        //         );
        //     }
        // }
    }
};
