import BusinessProfile from "@/models/loyaltyPanel/BusinessProfile";


export default {
    namespaced: true,

    state: () => ({
        loading: {
            logo: false,
            mapLogo: false
        },
        errorMessage: {
            logo: "",
            mapLogo: ""
        },
        resetSuccess: {
            logo: false,
            mapLogo: false
        },
        selectedPercent:'',
        initailPoint:'',
        returnPoint : ''
    }),

    mutations: {
        setLoading(state, { value, type }) {
            state.loading[type] = value;
        },

        setErrorMessage(state, { value, type }) {
            state.errorMessage[type] = value;
        },

        setResetSuccess(state, { value, type }) {
            state.resetSuccess[type] = value;
        },
        
        setBussinessProfile: (state, payload) => (state.selectedPercent = payload),

        setIntialPoints : (state, payload) => (state.initailPoint = payload),
        setReturnPoint : (state, payload) => (state.returnPoint = payload)

    },

    actions: {
        async uploadLogo({ commit }, { type, imageFile }) {
            try {
                commit("setLoading", { value: true, type });

                const fd = new FormData();
                fd.append("logo", imageFile);

                const { data } = await BusinessProfile.uploadImage(fd);

                commit("loyaltyPanel/setLogo", data.data.logo, { root: true });
                commit("setResetSuccess", { value: false, type });
                commit("setLoading", { value: false, type });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated company logo!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", { value: false, type });
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", { value: "", type }),
                    5000
                );
            }
        },

        async uploadMapLogo({ commit }, { type, imageFile }) {
            try {
                commit("setLoading", { value: true, type });

                const fd = new FormData();
                fd.append("map_logo", imageFile);

                const { data } = await BusinessProfile.uploadImage(fd);

                commit("loyaltyPanel/setMapLogo", data.data.logo, {
                    root: true
                });
                commit("setResetSuccess", { value: false, type });
                commit("setLoading", { value: false, type });
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated map logo!"
                    },

                    { root: true }
                );
            } catch (ex) {
                commit("setLoading", { value: false, type });
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", { value: "", type }),
                    5000
                );
            }
        },

        async getBussinessProfile({ commit}){
            const { data } = await BusinessProfile.getProfileData();
            console.log('data', data)
            commit("setBussinessProfile", data.data.online_offline_points_ratio);
            commit("setIntialPoints" , data.data.init_user_points);
            commit("setReturnPoint", data.data.return_points_after_coupon_exp);
            
        }
    }
};
