import User from "@/models/storePanel/settings/User";

export default {
    namespaced: true,

    state: () => ({
        moderatorPermissions: {},
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
                u.permissions_enabled = false;
                return u;
            });
        },

        setItem(state, payload) {
            state.user = new User(payload);
        },

        addItem(state, payload) {
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
                console.log(data.data);

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

        async create({ commit, dispatch, state, rootState }, image) {
            try {
                commit("setLoading", true, { root: true });

                let product = { ...state.product };
                delete product.product_id;
                delete product.image;
                if (!product.name.en) product.name.en = product.name.el;
                if (!product.name.it) product.name.it = product.name.el;
                if (!product.description.en)
                    product.description.en = product.description.el;
                if (!product.description.it)
                    product.description.it = product.description.el;

                const { data } = await User.create(product);

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.product,
                        image,
                        mode: 1
                    });
                } else {
                    commit("addItem", data.data.product);
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
                            text: "You have successfully created product!"
                        },

                        { root: true }
                    );
                }
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

        async enablePermissions({ commit }, id) {
            try {
                const data = await User.enablePermissions(id);
                console.log(data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async disablePermissions({ commit }, id) {
            try {
                const data = await User.disablePermissions(id);
                console.log(data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async update({ commit, dispatch, state }, image) {
            try {
                commit("setLoading", true, { root: true });

                let product = { ...state.product };
                delete product.image;
                if (!product.name.en) product.name.en = product.name.el;
                if (!product.name.it) product.name.it = product.name.el;
                if (!product.description.en)
                    product.description.en = product.description.el;
                if (!product.description.it)
                    product.description.it = product.description.el;

                const { data } = await User.update(product);

                if (image) {
                    dispatch("uploadImage", {
                        item: data.data.product,
                        image,
                        mode: 2
                    });
                } else {
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
                }
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

        async remove({ commit, state, rootState }) {
            try {
                commit("setLoading", true, { root: true });

                await User.delete(state.product.product_id);
                commit(
                    "setServerItemsLength",
                    rootState.serverItemsLength - 1,
                    { root: true }
                );
                commit("setLoading", false, { root: true });
                commit("setDeleteDialog", false, { root: true });
                commit("removeItem", state.product.product_id);
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully deleted product!"
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
