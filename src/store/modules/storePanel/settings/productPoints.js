import axios from "axios";
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
        async getItems({ commit, rootState }, query) {
            try {
                axios.defaults.headers.Authorization = `Bearer ${rootState.storeToken}`;
                const { data } = await axios.get(
                    `${ApiEndpoint}/${rootState.storeId}/products/association${query}`
                );

                const { products, pagination } = data.data;

                console.log(data);

                commit("setItems", products);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async update({ commit, rootState }, payload) {
            try {
                commit("setLoading", true, { root: true });

                axios.defaults.headers.Authorization = `Bearer ${rootState.storeToken}`;
                await axios.put(
                    `${ApiEndpoint}/${rootState.storeId}/products/${payload.product_id}/association`,
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
