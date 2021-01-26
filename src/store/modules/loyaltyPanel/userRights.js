import UserRights from "@/models/loyaltyPanel/UserRights";
import Permissions from "@/models/loyaltyPanel/Permissions";

export default {
    namespaced: true,

    state: () => ({
        users: [],
        moderatorPermissions: {},
        user: new UserRights()
    }),

    mutations: {
        setUsers(state, payload) {
            state.users = payload;
        },

        setUser(state, payload) {
            state.user = new UserRights(payload);
            console.log(state.user,'state.user')
        },

        setModeratorPermissions(state, payload) {
            state.moderatorPermissions = payload;
        },
    },

    actions: {
        async getUsers({ commit,dispatch }, query) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await UserRights.get(query);
                const { users, pagination } = data.data;
                dispatch("getModeratorPermissions")
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

        async getModeratorPermissions({ commit }) {
            try {
                const { data } = await UserRights.getModeratorPermissions();
                commit("setModeratorPermissions", data.data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async create({ commit, dispatch, rootState } , user) {
            try {
                commit("setLoading", true, { root: true });

                delete user.user_id;
                user.permissions = new Permissions(user.permissions);
                user.permissions = [user.permissions];

                const { data } = await UserRights.create(user);
                data.data.permissions = user.permissions[0];

                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength + 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                let query = "?page=1"
                dispatch("getUsers",query)
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully created store moderator!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage", ex.response.data.message, {
                    root: true
                });
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        },

        async update({ commit, state, rootState } , user) {
            try {
                commit("setLoading", true, { root: true });
                user.permissions = new Permissions(user.permissions);
                user.permissions = [user.permissions];

                const { data } = await UserRights.update(user);
                data.data.permissions = user.permissions[0];

                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength + 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated store moderator!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", false, { root: true });
                commit("setErrorMessage", ex.response.data.message, {
                    root: true
                });
                setTimeout(
                    () => commit("setErrorMessage", "", { root: true }),
                    5000
                );
            }
        },
    }
};
