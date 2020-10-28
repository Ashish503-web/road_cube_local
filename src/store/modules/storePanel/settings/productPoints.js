import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/stores`;

export default {
    namespaced: true,

    state: () => ({
        productPoints: []
    }),

    mutations: {
        setItems(state, payload) {
            state.productPoints = payload;
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

        async update({ commit }, payload) {
            try {
                commit("setLoading", true, { root: true });

                await axios.put(
                    `${ApiEndpoint}/${localStorage.getItem(
                        "storeId"
                    )}/products/${payload.product_id}/association`,
                    {
                        reward_points: payload.reward_points,
                        reward_type_id: payload.reward_type_id,
                        reward_points_shared: payload.reward_points_shared
                    }
                );

                commit("setLoading", false, { root: true });
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
                commit("setLoading", false, { root: true });
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
