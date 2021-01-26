import ProductSeries from "@/models/loyaltyPanel/ProductSeries";

export default {
    namespaced: true,

    state: () => ({
        products: []
    }),

    mutations: {
        setProducts(state, payload) {
            state.products = payload;
        },

        updateList(state, payload){
            state.products = payload;
        }
    },

    actions: {
        async getItems({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await ProductSeries.get();

                commit("setProducts",data.data.products)
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async updateSorting({ commit }, products) {
            try {
                commit("setLoading", true, { root: true });

                let updatingData = {
                    sorting: []
                }

                let productOrder = 1

                products.map(product => {
                    updatingData.sorting.push({
                        product_id: product.product_id,
                        order: productOrder
                    })
                    productOrder++
                })

                const { data } = await ProductSeries.update(updatingData);

                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },  
    }
};
