import UserRights from "@/models/loyaltyPanel/UserRights";

export default {
    namespaced: true,

    state: () => ({
        users: []
    }),

    mutations: {
        setUsers(state, payload) {
            state.users = payload;
        },
    },

    actions: {
        async getUsers({ commit }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await UserRights.get(query);
                const { users, pagination } = data.data;
                console.log(data,'data444444444')
                commit("setUsers", users);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },
    }
};
