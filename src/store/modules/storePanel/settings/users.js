import User from "@/models/storePanel/settings/User";
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
            payload.homepage = false;
            for (let key in payload) {
                if (typeof payload[key] === "object") {
                    payload[key].open = false;
                    let obj = payload[key];

                    for (let subKey in obj) {
                        if (subKey !== "open") obj[subKey].open = false;
                    }
                }
            }
            state.moderatorPermissions = payload;
        },

        setItems(state, payload) {
            state.users = payload.map(u => {
                if (!u.permissions.length) u.permissions_enabled = false;
                u.created_at = moment(u.created_at).format("YYYY.MM.DD");
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
            state.users.unshift(payload);
        },

        updateItem(state, payload) {
            let index = state.users.findIndex(
                u => u.user_id === payload.user_id
            );
            state.users.splice(index, 1, payload);
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
                console.log(users);

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
                for (let key in user.permissions) {
                    let obj = user.permissions[key];
                    delete obj.open;

                    for (let prop in obj) {
                        let subObj = obj[prop];

                        delete subObj.open;
                    }
                }
                user.permissions = [user.permissions];

                const { data } = await User.create(user);

                console.log(data);

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
                user.permissions = [user.permissions];

                const { data } = await User.update(
                    user.user_id,
                    user.permissions
                );

                commit("updateItem", data.data.product, { root: true });
                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated product!"
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
