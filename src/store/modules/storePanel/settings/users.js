import User from "@/models/storePanel/settings/User";
import Permissions from "@/models/storePanel/settings/Permissions";
import moment from "moment";

export default {
    namespaced: true,

    state: () => ({
        moderatorPermissions: {},
        userProfile: {},
        users: [],
        user: new User()
    }),

    mutations: {
        setModeratorPermissions(state, payload) {
            state.moderatorPermissions = payload;
        },

        setItems(state, payload) {
            state.users = payload.map(u => {
                u.created_at = moment(u.created_at).format("DD/MM/YYYY HH:mm");
                u.permissions_enabled = User.checkPermissionsStatus(
                    u.permissions
                );

                return u;
            });
        },

        setUserProfile(state, payload) {
            state.userProfile = payload;
        },

        setItem(state, payload) {
            state.user = new User(payload);
        },

        addItem(state, payload) {
            payload.role = "Store Moderator";
            payload.user = payload.mobile;
            payload.created_at = moment(payload.created_at).format(
                "YYYY.MM.DD"
            );
            payload.permissions_enabled = User.checkPermissionsStatus(
                payload.permissions
            );

            state.users.unshift(payload);
        },

        updateItem(state, payload) {
            let user = state.users.find(u => u.user_id === payload.id);
            user.permissions = payload.permissions;
            user.permissions_enabled = User.checkPermissionsStatus(
                payload.permissions
            );
        },

        removeItem(state, id) {
            state.users = state.users.filter(p => p.user_id !== id);
        }
    },

    actions: {
        async getModeratorPermissions({ commit }) {
            try {
                const { data } = await User.getModeratorPermissions();

                commit("setModeratorPermissions", data.data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async getItems({ commit }) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await User.get();

                const { users, pagination } = data.data;

                commit("setItems", users);
                commit("setServerItemsLength", pagination.total, {
                    root: true
                });
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async getItem({ commit }, id) {
            try {
                commit("setLoading", true, { root: true });

                const { data } = await User.getItem(id);

                const { user, permissions } = data.data;
                user.permissions = permissions;

                commit("setUserProfile", user);
                commit("setLoading", false, { root: true });
            } catch (ex) {
                commit("setLoading", false, { root: true });
                console.error(ex.response.data);
            }
        },

        async create({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                let user = { ...state.user };
                delete user.user_id;
                user.permissions = new Permissions(user.permissions);
                user.permissions = [user.permissions];

                const { data } = await User.create(user);
                data.data.permissions = user.permissions[0];

                commit("addItem", data.data);
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

        async update({ commit, state }) {
            try {
                commit("setLoading", true, { root: true });

                let user = { ...state.user };
                let id = user.user_id;
                delete user.user_id;
                delete user.mobile;
                delete user.password;

                user.permissions = new Permissions(user.permissions);
                user.permissions = [user.permissions];

                await User.update(id, user);

                commit("updateItem", { id, permissions: user.permissions[0] });
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated user permissions!"
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
        }
    }
};
