import Product from "@/models/storePanel/Product";

export default {
    namespaced: true,

    state: {
        dialog: false,
        deleteDialog: false,
        loading: false,
        errorMessage: "",
        serverItemsLength: 0,
        products: [],
        product: new Product()
    },

    mutations: {
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

        setServerItemsLength(state, payload) {
            state.serverItemsLength = payload;
        },

        setProducts(state, payload) {
            state.products = payload;
        },

        setProduct(state, payload) {
            state.product = new Product(payload);
        },

        addProduct(state, payload) {
            state.products.unshift(payload);
        },

        updateProduct(state, payload) {
            let index = state.products.findIndex(
                p => p.product_id === payload.product_id
            );
            state.products.splice(index, 1, payload);
        },

        deleteProduct(state, id) {
            state.products = state.products.filter(p => p.product_id !== id);
        }
    },

    actions: {
        async getProducts({ commit, rootState }, query) {
            try {
                const { data } = await Product.get(
                    rootState.storeToken,
                    rootState.storeId,
                    query
                );
                const { products, pagination } = data.data;

                commit("setProducts", products);
                commit("setServerItemsLength", pagination.total);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async createProduct(
            { dispatch, commit, rootState },
            { product, image }
        ) {
            delete product.product_id;
            delete product.image;
            commit("setLoading", true);

            try {
                const { data } = await Product.post(
                    rootState.storeToken,
                    rootState.storeId,
                    product
                );

                if (image) {
                    dispatch("uploadImage", {
                        product: data.data.product,
                        image,
                        mode: 1
                    });
                } else {
                    commit("addProduct", data.data.product);
                    commit("setLoading", false);
                    commit("setDialog", false);
                }
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async updateProduct(
            { dispatch, commit, rootState },
            { product, image }
        ) {
            delete product.image;
            commit("setLoading", true);

            try {
                const { data } = await Product.put(
                    rootState.storeToken,
                    rootState.storeId,
                    product
                );

                if (image) {
                    dispatch("uploadImage", {
                        product: data.data.product,
                        image,
                        mode: 2
                    });
                } else {
                    commit("updateProduct", data.data.product);
                    commit("setLoading", false);
                    commit("setDialog", false);
                }
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async deleteProduct({ commit, rootState }, id) {
            commit("setLoading", true);

            try {
                await Product.delete(
                    rootState.storeToken,
                    rootState.storeId,
                    id
                );
                commit("setLoading", false);
                commit("setDeleteDialog", false);
                commit("deleteProduct", id);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async uploadImage({ commit, rootState }, { product, image, mode }) {
            try {
                const fd = new FormData();
                fd.append("image", image);

                const { data } = await Product.uploadImage(
                    rootState.storeToken,
                    rootState.storeId,
                    product.product_id,
                    fd
                );

                product.image = data.data.image;

                if (mode === 1) commit("addProduct", product);
                else commit("updateProduct", product);
                commit("setLoading", false);
                commit("setDialog", false);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        }
    }
};
