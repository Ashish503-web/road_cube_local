<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        height="auto"
        class="mt-5"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updatePushNotification({type: 'push_notification',
         item: push_notification,})"
    >
        <v-row no-gutters justify="center">
            <v-col cols="11">
                <b-text-field
                    :label="translations.restApiKey[lang]"
                    no-top-margin
                    v-model="push_notification.rest_api_key"
                ></b-text-field>
                <b-text-field
                    :label="translations.oneSignalAppId[lang]"
                    v-model="push_notification.one_signal_app_id"
                ></b-text-field>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/pushNotifications";
import { mapState,mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "PushNotifications",

    mixins: [translations],
    data() {
        return {
            push_notification:{
                rest_api_key:null,
                one_signal_app_id:null
            }
        }
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },
        loading() {
            return this.$store.state.loyaltyPanel.businessProfile.loading.push_notification;
        },

        errorMessage() {
            return this.$store.state.loyaltyPanel.businessProfile.errorMessage
                .push_notification;
        },
        resetSuccess() {
            return this.$store.state.loyaltyPanel.businessProfile.resetSuccess
                .push_notification;
        },


    },
     methods:{
        ...mapActions("loyaltyPanel/businessProfile", [
           "getBussinessProfile",
            "updatePushNotification"
        ]),
         getPushNotification(){
             let push_notification_data = this.$store.state.loyaltyPanel.businessProfile.pushNotifications;
             console.log('push_notification', push_notification_data)
             this.push_notification = push_notification_data

         }

    },
    mounted() {
        this.getPushNotification();
    }

};
</script>
