import Product from "@/models/Product";

export default {
    namespaced: true,

    state: {
        productGroupDialog: false,
        products: [],
        product: new Product(),
        serverItemsLength: 0
    },

    mutations: {
        setProductGroupDialog(state, payload) {
            state.productGroupDialog = payload;
        },

        setProducts(state, payload) {
            state.products = payload;
        },

        setProduct(state, payload) {
            state.product = new Product(payload);
        },

        setServerItemsLength(state, payload) {
            state.serverItemsLength = payload;
        }
    },

    actions: {
        async getProducts({ commit }, { token, storeId, query }) {
            try {
                const { data } = await Product.get(token, storeId, query);
                const { products, pagination } = data.data;

                commit("setProducts", products);
                commit("setServerItemsLength", pagination.total);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async createProduct({ commit }, { token, storeId, product }) {
            try {
                const { data } = await Product.post(token, storeId, product);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async updateProduct({ commit }, { token, storeId, product }) {
            try {
                const { data } = await Product.put(token, storeId, product);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async deleteProduct({ commit }, { token, storeId, productId }) {
            try {
                console.log(productId);
                // const { data } = await Product.delete(
                //     token,
                //     storeId,
                //     productId
                // );
            } catch (ex) {
                console.error(ex.response.data);
            }
        }
    }
};
