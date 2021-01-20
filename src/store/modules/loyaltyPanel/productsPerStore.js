import ProductPerStore from "@/models/loyaltyPanel/ProductPerStore";

export default {
    namespaced: true,

    state: () => ({
        stores: [],
        products: []
    }),

    mutations: {
        setStores(state, payload) {
            state.stores = payload;
        },

        setProducts(state, payload) {
            state.products = payload;
        },
    },

    actions: {
        async getItems({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await ProductPerStore.get();
                const items = data.data;
                let stores = []
                let productsIds = []
                let products = []
                items.stores.map(store => {
                    stores.push({
                        text: store.name
                    })

                    store.products.map(product => {
                        if(productsIds.includes(product.product_id)){
                            products.map(item => {
                                if(item.id == product.product_id){
                                    item[store.name] = true
                                }
                            })
                        }else{
                            productsIds.push(product.product_id)
                            let newProd = {
                                id: product.product_id,
                                name: product.name
                            }
                            newProd[store.name] = true

                            products.push(newProd)
                            console.log(products,'products00000')
                        }
                    })

                })
                console.log(data,'data5464684')
                
                commit("setProducts",products)
                commit("setStores",stores)
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },  
    }
};
