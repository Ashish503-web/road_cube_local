import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/stores`;

export default {
    namespaced: true,

    state: () => ({
        systemNotifications: []
    }),

    mutations: {
        setSystemNotifications(state, payload) {
            state.systemNotifications = payload;
        }
    },

    actions: {
        async getSystemNotifications({ commit }) {
            try {
                const { data } = await axios.get(
                    `https://api.roadcube.tk/v1/common/system-notifications`
                );

                commit("setSystemNotifications", data.data);
            } catch (ex) {
                console.error(ex.response.data);
            }
        },

        async updateActivator({ commit }, item) {
            try {
                item.loading = true;

                if (item.system_notification_id) {
                    await axios.put(
                        `${ApiEndpoint}/${localStorage.getItem(
                            "storeId"
                        )}/flags/reward`,
                        {
                            [item.updateProp]: item.active,
                            system_notification_id: item.system_notification_id
                        }
                    );
                } else {
                    await axios.put(
                        `${ApiEndpoint}/${localStorage.getItem(
                            "storeId"
                        )}/flags/reward`,
                        { [item.updateProp]: item.active }
                    );
                }

                commit(item.commit, item.active, {
                    root: true
                });
                item.loading = false;
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: `You have successfully updated ${item.successText}!`
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
        },

        async updateReward({ commit }, { item, url, commitText, successText }) {
            try {
                commit("setLoading", true, { root: true });

                await axios.put(
                    `${ApiEndpoint}/${localStorage.getItem("storeId")}/${url}`,
                    item
                );

                commit(commitText, item, { root: true });

                commit("setLoading", false, { root: true });
                commit("setDialog", false, { root: true });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: `You have successfully updated ${successText}!`
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
