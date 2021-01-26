import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

export default {
    namespaced: true,

    state: () => ({
        productPoints: []
    }),

    mutations: {
        setItems(state, payload) {
            state.productPoints = payload.map(p => {
                p.loading = false;
                return p;
            });
        }
    },

    actions: {
        async getItems({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await axios.get(
                    `${ApiEndpoint}/${localStorage.getItem(
                        "storeId"
                    )}/products/association${query}`
                );

                const { products, pagination } = data.data;

                commit("setItems", products);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async update({ commit }, item) {
            try {
                item.loading = true;

                await axios.put(
                    `${ApiEndpoint}/${localStorage.getItem(
                        "storeId"
                    )}/products/${item.product_id}/association`,
                    {
                        reward_points: item.reward_points,
                        reward_type_id: item.reward_type_id,
                        reward_points_shared: item.reward_points_shared
                    }
                );

                item.loading = false;
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated product points!"
                    },

                    { root: true }
                );
            } catch (ex) {
                item.loading = false;
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "error",
                        text: ex.response.data.message
                    },

                    { root: true }
                );
            }
        }
    }
};
