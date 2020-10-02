import Product from "@/models/Product";

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

        async createProduct({ commit, rootState }, product) {
            delete product.product_id;
            commit("setLoading", true);

            try {
                const { data } = await Product.post(
                    rootState.storeToken,
                    rootState.storeId,
                    product
                );
                commit("setLoading", false);
                commit("setDialog", false);
                commit("addProduct", data.data.product);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async updateProduct({ commit, rootState }, product) {
            commit("setLoading", true);

            try {
                const { data } = await Product.put(
                    rootState.storeToken,
                    rootState.storeId,
                    product
                );
                commit("setLoading", false);
                commit("setDialog", false);
                commit("updateProduct", data.data.product);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        },

        async deleteProduct({ commit, rootState }, productId) {
            commit("setLoading", true);

            try {
                await Product.delete(
                    rootState.storeToken,
                    rootState.storeId,
                    productId
                );
                commit("setDeleteDialog", false);
                commit("deleteProduct", productId);
            } catch (ex) {
                commit("setLoading", false);
                commit("setErrorMessage", ex.response.data.message);
                setTimeout(() => commit("setErrorMessage", ""), 5000);
            }
        }
    }
};
