import UserRights from "@/models/loyaltyPanel/UserRights";

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
            state.user = payload;
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
                console.log(data,'data444444444')
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
                console.log(data,'getModeratorPermissions')

                let permissions = data.data
                for (let key in permissions) {
                    if (typeof permissions[key] === "object") {
                        permissions[key].open = false
                        let subPermissions = permissions[key];

                        for (let key in subPermissions) {
                            if (typeof subPermissions[key] === "object") {
                                subPermissions[key].open = false
                                for (let subKey in subPermissions[key]) {
                                    if (typeof subPermissions[key][subKey] === "object") {
                                        subPermissions[key][subKey].open = false;
                                    }  
                                }
                            }
                        }
                    }
                }
                commit("setModeratorPermissions", data.data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async create({ commit, state, rootState } , user) {
            try {
                commit("setLoading", true, { root: true });

                delete user.user_id;
                for (let key in user.permissions) {
                    if (typeof user.permissions[key] === "object") {
                        delete user.permissions[key].open
                        let subPermissions = user.permissions[key];

                        for (let key in subPermissions) {
                            if (typeof subPermissions[key] === "object") {
                                delete subPermissions[key].open
                                for (let subKey in subPermissions[key]) {
                                    if (typeof subPermissions[key][subKey] === "object") {
                                        delete subPermissions[key][subKey].open;
                                    }  
                                }
                            }
                        }
                    }
                }
                // user.permissions = new Permissions(user.permissions);
                // user.permissions = [user.permissions];

                const { data } = await UserRights.create(user);
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
    }
};
