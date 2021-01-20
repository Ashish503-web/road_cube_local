import Product from "@/models/loyaltyPanel/Product";

export default {
    namespaced: true,

    state: () => ({
        showImageUpload: false,
        showWeekdays: false,
        categories: [],
        productsTags: [],
        products: [],
        product: new Product()
    }),

    mutations: {
        setShowImageUpload(state, payload) {
            state.showImageUpload = payload;
        },

        setShowWeekdays(state, payload) {
            state.showWeekdays = payload;
        },

        setCategories(state, payload) {
            state.categories = payload;
        },

        setProductsTags(state, payload) {
            state.productsTags = payload;
        },

        setItems(state, payload) {
            state.products = payload;
        },

        setItem(state, payload) {
            state.product = new Product(payload);
        },

        addItem(state, payload) {
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
        async getCategories({ commit }) {
            try {
                const { data } = await Product.getCategories();

                const { product_categories } = data.data;
                commit("setCategories", product_categories);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async getProductsTags({ commit }) {
            try {
                const { data } = await Product.getProductsTags();

                const { product_tags } = data.data;
                commit("setProductsTags", product_tags);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await Product.get(query);
                const { products, pagination } = data.data;

                commit("setItems", products);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async create({ commit, dispatch, state, rootState }, image) {
            try {
                commit("setLoading", true, { root: true });

                let product = { ...state.product };
                delete product.product_id;
                delete product.image;

                if (!product.name.en) product.name.en = product.name.el;
                if (!product.name.it) product.name.it = product.name.el;
                if (!product.description.en)
                    product.description.en = product.description.el;
                if (!product.description.it)
                    product.description.it = product.description.el;

                const { data } = await Product.create(product);
                console.log(data.data.product);
                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.product,
                        image,
                        mode: 1
                    });
                } else {
                    commit("addItem", data.data.product);
                    commit(
                        "setServerItemsLength",
                        rootState.serverItemsLength + 1,
                        { root: true }
                    );
                    commit("setLoading", false, { root: true });
                    commit("setDialog", false, { root: true });
                    commit(
                        "setNotification",
                        {
                            show: true,
                            type: "success",
                            text: "You have successfully created product!"
                        },
                        { root: true }
                    );
                }
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage", ex.response.data.message, {
                    root: true
                });
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        },

        async update({ commit, dispatch, state, rootState }, image) {
            try {
                commit("setLoading", true, { root: true });

                let product = { ...state.product };
                delete product.image;

                if (!product.name.en) product.name.en = product.name.el;
                if (!product.name.it) product.name.it = product.name.el;
                if (!product.description.en)
                    product.description.en = product.description.el;
                if (!product.description.it)
                    product.description.it = product.description.el;

                const { data } = await Product.update(product);

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.product,
                        image,
                        mode: 2
                    });
                } else {
                    commit("updateItem", data.data.product, { root: true });
                    commit("setLoading", false, { root: true });
                    commit("setDialog", false, { root: true });
                    commit(
                        "setNotification",
                        {
                            show: true,
                            type: "success",
                            text: "You have successfully updated product!"
                        },

                        { root: true }
                    );
                }
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage", ex.response.data.message, {
                    root: true
                });
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        },

        async remove({ commit, state, rootState }, hardDelete) {
            try {
                commit("setLoading", true, { root: true });

                if (hardDelete) {
                    await Product.delete(state.product.product_id);
                } else {
                    await Product.softDelete(state.product.product_id);
                }

                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength - 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
                commit("removeItem", state.product.product_id);
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully deleted product!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage", ex.response.data.message, {
                    root: true
                });
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        },

        async uploadImage({ commit, rootState }, { item, image, mode }) {
            try {
                const fd = new FormData();
                fd.append("image", image);

                const { data } = await Product.uploadImage(item.product_id, fd);

                item.image = data.data.image;

                if (mode === 1) {
                    commit("addItem", item);
                    commit(
                        "setServerItemsLength",
                        rootState.serverItemsLength + 1,
                        { root: true }
                    );
                } else {
                    commit("updateItem", item);
                }
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: `You have successfully ${
                            mode === 1 ? "created" : "updated"
                        } product!`
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage", ex.response.data.message, {
                    root: true
                });
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        }
    }
};
