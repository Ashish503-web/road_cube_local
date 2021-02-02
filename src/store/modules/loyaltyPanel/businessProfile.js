import BusinessProfile from "@/models/loyaltyPanel/BusinessProfile";

export default {
    namespaced: true,

    state: () => ({
        loading: {
            logo: false,
            mapLogo: false,
            instructions_file: false,
            terms_file: false,
            privacy_policy_file: false,
            initailPoint: false,
            selectedPercent: false,
            app_points_visibility: false,
            coupon_creation_type_id: false,
            return_points_after_coupon_exp: false,
            push_notification: false,
            campaign_credential: false
        },
        errorMessage: {
            logo: "",
            mapLogo: "",
            instructions_file: "",
            terms_file: "",
            privacy_policy_file: "",
            initailPoint: "",
            selectedPercent: "",
            app_points_visibility: "",
            coupon_creation_type_id: "",
            return_points_after_coupon_exp: "",
            push_notification: "",
            campaign_credential:""
        },
        resetSuccess: {
            logo: false,
            mapLogo: false,
            instructions_file: false,
            terms_file: false,
            privacy_policy_file: false,
            initailPoint: false,
            selectedPercent: false,
            app_points_visibility: false,
            coupon_creation_type_id: false,
            return_points_after_coupon_exp: false,
            push_notification: false,
            campaign_credential:false
        },
        businessProfileData: '',
        selectedPercent: '',
        initailPoint: '',
        returnPoint: '',
        pushNotifications: '',
        compaignCrendential: null,
        authentication: '',
        couponValues: '',
        userPointValue: '',
        emailSmsSetting: '',
        email_sender_alias_name:''


    }),

    mutations: {
        setBusinessData(state, data) {
            state.businessProfileData = data;
        },
        setLoading(state, {value, type}) {
            state.loading[type] = value;
        },

        setErrorMessage(state, {value, type}) {
            state.errorMessage[type] = value;
        },

        setResetSuccess(state, {value, type}) {
            state.resetSuccess[type] = value;
        },

        setBussinessProfile: (state, payload) => (state.selectedPercent = payload),

        setIntialPoints: (state, payload) => (state.initailPoint = payload),

        setReturnPoint: (state, payload) => (state.returnPoint = payload),

        setPushNotification: (state, payload) => (state.pushNotifications = payload),

        setCompaignCrendential: (state, payload) => (state.compaignCrendential = payload),

        setApiAuthentication: (state, payload) => (state.authentication = payload),

        setCouponValues: (state, payload) => (state.couponValues = payload),

        setUserPoints: (state, payload) => (state.userPointValue = payload),

        setEmailSmsSettings: (state, payload) => (state.emailSmsSetting = payload),

        setEmailSenderName : (state , payload ) => ( state.email_sender_alias_name = payload)

    },

    actions: {
        async uploadLogo({commit}, {type, imageFile}) {
            try {
                commit("setLoading", {value: true, type});

                const fd = new FormData();
                fd.append("logo", imageFile);

                const {data} = await BusinessProfile.uploadImage(fd);

                commit("loyaltyPanel/setLogo", data.data.logo, {root: true});
                commit("setResetSuccess", {value: false, type});
                commit("setLoading", {value: false, type});
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated company logo!"
                    },

                    {root: true}
                );
            } catch (ex) {
                commit("setLoading", {value: false, type});
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }
        },

        async uploadMapLogo({commit}, {type, imageFile}) {
            try {
                commit("setLoading", {value: true, type});

                const fd = new FormData();
                fd.append("map_logo", imageFile);

                const {data} = await BusinessProfile.uploadImage(fd);

                commit("loyaltyPanel/setMapLogo", data.data.logo, {
                    root: true
                });
                commit("setResetSuccess", {value: false, type});

                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated map logo!"
                    },

                    {root: true}
                );
                commit("setLoading", {value: false, type});
            } catch (ex) {
                commit("setLoading", {value: false, type});
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }
        },

        async getBussinessProfile({commit}) {
            const {data} = await BusinessProfile.getProfileData();

            commit("setBusinessData", data.data);

            commit("setBussinessProfile", data.data.online_offline_points_ratio);

            commit("setIntialPoints", data.data.init_user_points);

            commit("setReturnPoint", data.data.return_points_after_coupon_exp);

            commit("setPushNotification", data.data.push_notifications);

            commit("setEmailSenderName", data.data.email_sms_settings.email_sender_alias_name);
            commit("setEmailSmsSettings", data.data.email_sms_settings.secondary_email_settings);
            commit("setCompaignCrendential", data.data.campaign_email_notifications);
            commit("setApiAuthentication", data.data.api_authentication);

            commit("setCouponValues", data.data.coupon_creation_type_id);

            commit("setUserPoints", data.data.app_points_visibility);


        },

        async uploadInstructionFile({commit}, {type, item}) {
            try {
                commit("setLoading", {value: true, type});
                const fd = new FormData();
                fd.append("instructions_file", item);
                const {data} = await BusinessProfile.getUserManual(fd);
                console.log('file', data);

                commit("setResetSuccess", {value: false, type});
                commit("setLoading", {value: false, type});
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated instruction file!"
                    },

                    {root: true}
                );

            } catch (ex) {
                commit("setLoading", {value: false, type});
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }

        },

        async uploadTermsFile({commit}, {type, item}) {
            try {
                commit("setLoading", {value: true, type});
                const fd = new FormData();
                fd.append("terms_file", item);
                const {data} = await BusinessProfile.getTermFile(fd);
                console.log('file', data);

                commit("setResetSuccess", {value: false, type});
                commit("setLoading", {value: false, type});
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated term of use file!"
                    },

                    {root: true}
                );

            } catch (ex) {
                commit("setLoading", {value: false, type});
                console.log('error', type)
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }

        },

        //

        async uploadPrivacyFile({commit}, {type, item}) {
            try {
                commit("setLoading", {value: true, type});
                const fd = new FormData();
                fd.append("privacy_policy_file", item);
                const {data} = await BusinessProfile.getPrivacyFile(fd);
                console.log('file', data);

                commit("setResetSuccess", {value: false, type});
                commit("setLoading", {value: false, type});
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated privacy policy file!"
                    },

                    {root: true}
                );

            } catch (ex) {
                commit("setLoading", {value: false, type});
                console.log('error', type)
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }

        },

        async updateInitialPoint({commit}, {type, item}) {

            try {
                commit("setLoading", {value: true, type});

                const {data} = await BusinessProfile.putInitialPoint(item);
                commit("setIntialPoints", data.data.init_user_points);
                commit("setResetSuccess", {value: false, type});
                commit("setLoading", {value: false, type});
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated  Initial Online/Offline points!"
                    },

                    {root: true}
                );
            } catch (ex) {
                commit("setLoading", {value: false, type});
                console.log('error', type)
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }

        },

        async updateRelation({commit}, {type, item}) {

            try {

                commit("setLoading", {value: true, type});

                let pointRelation = {
                    'value': item,
                }

                const {data} = await BusinessProfile.updatePointRelation(pointRelation);

                commit("setReturnPoint", data.data.return_points_after_coupon_exp);

                commit("setResetSuccess", {value: false, type});
                commit("setLoading", {value: false, type});
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated  Offline-Online Points Relation!"
                    },

                    {root: true}
                );


            } catch (ex) {
                commit("setLoading", {value: false, type});
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }

        },

        async updateUserPoints({commit}, {type, item}) {
            try {

                commit("setLoading", {value: true, type});
                let userPoint = {
                    'value': JSON.parse(item),
                }
                console.log('user_points', userPoint)

                const {data} = await BusinessProfile.updateUserPointVisibility(userPoint);
                commit("setUserPoints", data.data.app_points_visibility);

                commit("setResetSuccess", {value: false, type});
                commit("setLoading", {value: false, type});
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated  User Points!"
                    },

                    {root: true}
                );

            } catch (ex) {

                commit("setLoading", {value: false, type});
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }
        },

        async updateCouponCreation({commit}, {type, item}) {
            try {

                commit("setLoading", {value: true, type});
                let couponCretion = {
                    'value': JSON.parse(item),
                }
                console.log('user_points', couponCretion)

                const {data} = await BusinessProfile.updateCoupon(couponCretion);
                commit("setCouponValues", data.data.coupon_creation_type_id);

                commit("setResetSuccess", {value: false, type});
                commit("setLoading", {value: false, type});
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated  Coupon Creation!"
                    },

                    {root: true}
                );


            } catch (ex) {
                commit("setLoading", {value: false, type});
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }
        },

        async updatePointReturn({commit}, {type, item}) {
            try {

                commit("setLoading", {value: true, type});
                let pointReturn = {
                    'value': JSON.parse(item),
                }
                console.log('user_points', pointReturn)

                const {data} = await BusinessProfile.updatePointReturn(pointReturn);

                commit("setReturnPoint", data.data.return_points_after_coupon_exp);
                commit("setResetSuccess", {value: false, type});
                commit("setLoading", {value: false, type});
                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated  Points Return!"
                    },

                    {root: true}
                )
            } catch (ex) {

                commit("setLoading", {value: false, type});
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }
        },

        async updatePushNotification({commit}, {type, item}) {
            try {

                commit("setLoading", {value: true, type});

                const {data} = await BusinessProfile.updatePushNotification(item);

                commit("setPushNotification", data.data.push_notifications);

                commit("setResetSuccess", {value: false, type});

                commit("setLoading", {value: false, type});

                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated  Push Notifications!"
                    },

                    {root: true}
                )

            } catch (ex) {

                commit("setLoading", {value: false, type});
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }
        },

        async updateCampaignData({commit}, { type, item}){
            try {

                commit("setLoading", {value: true, type});

                console.log('campaignData',item )

                const {data} = await BusinessProfile.updateCredential(item.campaign_email_notifications);
                const {emailSmsSetting} = await BusinessProfile.emailSmsSetting(item.email_sms_settings);

                commit("setEmailSenderName", emailSmsSetting.data.email_sms_settings.email_sender_alias_name);
                commit("setEmailSmsSettings", emailSmsSetting.data.email_sms_settings.secondary_email_settings);
                commit("setCompaignCrendential", data.data.campaign_email_notifications);


                commit("setResetSuccess", {value: false, type});

                commit("setLoading", {value: false, type});

                commit(
                    "setNotification",
                    {
                        show: true,
                        type: "success",
                        text: "You have successfully updated  Push Notifications!"
                    },

                    {root: true}
                )

            } catch (ex) {
                commit("setLoading", {value: false, type});
                commit("setErrorMessage", {
                    value: ex.response.data.message,
                    type
                });
                setTimeout(
                    () => commit("setErrorMessage", {value: "", type}),
                    5000
                );
            }
        }

    }
};
