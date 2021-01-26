import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

export default {
    namespaced: true,

    state: () => ({
        pointAnalysis: [],
        monthlyPoints: []
    }),

    mutations: {
        setPointAnalysis(state, payload) {
            state.pointAnalysis = payload.map(p => {
                p.product_name = JSON.parse(p.product_name);
                return p;
            });
        },

        setMonthlyPoints(state, payload) {
            state.monthlyPoints = payload;
        }
    },

    actions: {
        async getPointAnalysis({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await axios.get(
                    `${ApiEndpoint}/${localStorage.getItem(
                        "storeId"
                    )}/history/points${query}`
                );

                const { store_point_history, pagination } = data.data;

                commit("setPointAnalysis", store_point_history);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async getMonthlyPoints({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await axios.get(
                    `${ApiEndpoint}/${localStorage.getItem(
                        "storeId"
                    )}/history/monthly-points${query}`
                );

                const { monthly_store_point_history, pagination } = data.data;

                commit("setMonthlyPoints", monthly_store_point_history);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        }
    }
};
