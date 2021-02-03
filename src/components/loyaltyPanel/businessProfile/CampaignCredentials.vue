<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateCampaignData({type: 'push_notification',
         item: campaign_credentials,})"
    >

        <h4
            class="subtitle-1 font-weight-bold text--primary"
            v-text="translations.notifications[lang]"
        ></h4>

        {{ translations.notificationsInfo[lang] }}


        <v-row v-for="(item, index) in campaign_credentials.campaign_email_notifications" :key="index" no-gutters
               align="baseline">
            <v-col
                cols="auto"
                class="subtitle-1 font-weight-bold secondary--text"
            >
                {{ index }}
            </v-col>
            <v-col cols="7" class="pl-3">
                <b-text-field :value="item"></b-text-field>
            </v-col>
        </v-row>

        <h4
            class="secondary--text font-weight-bold subtitle-1 mt-7"
            v-text="translations.smsEmail[lang]"
        ></h4>

        {{ translations.smsEmailInfo[lang] }}

        <b-text-field
            :label="translations.messageSenderName[lang]"
            v-model="campaign_credentials.email_sms_settings.email_sender_alias_name"
        ></b-text-field>

        <b-text-field
            :label="translations.messageSenderEmail[lang]"
            type="email"
            v-model="campaign_credentials.email_sms_settings.email_sender_alias_email"
        ></b-text-field>

        <v-divider class="my-7"></v-divider>

        <v-row
            no-gutters
            justify="space-between"
            align="baseline"
            class="mt-3 mb-1"
        >
            <v-col cols="auto">
                <h4 class="secondary--text font-weight-bold subtitle-1">
                    1. {{ translations.emailFirstMethod[lang] }}
                </h4>
            </v-col>

            <v-col cols="auto">
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    small
                    depressed
                    v-text="translations.verifyEmail[lang]"
                ></v-btn>
            </v-col>
        </v-row>

        {{ translations.emailFirstMethodInfo[lang] }}

        <v-alert type="warning">
            The email has not been fully verified. The first method will not be
            used in campaigns.
        </v-alert>

        <v-divider class="mt-7 mb-4"></v-divider>

        <h4 class="secondary--text font-weight-bold subtitle-1">
            2. {{ translations.emailSecondMethod[lang] }}
        </h4>

        <v-alert type="warning" class="mt-3">
            Not all data have been completed and the second method will not be
            used in campaigns.
        </v-alert>

        {{ translations.emailSecondMethodInfo[lang] }}

        <b-text-field
            :label="translations.host[lang]"
            class="mt-7"
            v-model="campaign_credentials.email_sms_settings.secondary_email_settings.smtp_host"
        ></b-text-field>
        <b-text-field :label="translations.name[lang]"
                      v-model="campaign_credentials.email_sms_settings.secondary_email_settings.email_sender_alias_name"></b-text-field>
        <b-text-field
            :label="translations.email[lang]"
            type="email"
            v-model="campaign_credentials.email_sms_settings.secondary_email_settings.email"
        ></b-text-field>
        <b-text-field
            :label="translations.password[lang]"
            type="password"
            v-model="campaign_credentials.email_sms_settings.secondary_email_settings.password"
        ></b-text-field>

        <v-alert
            color="blue darken-2"
            text
            dense
            border="left"
            class="mt-7"
            v-text="translations.info[lang]"
        ></v-alert>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/campaignCredentials";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
    name: "CampaignCredentials",

    mixins: [translations],
    data() {
        return {
            email_first_method: 'null',
            email_second_method: 'null',
            campaign_credentials: {
                campaign_email_notifications: {
                    email1: null,
                    email2: null,
                    email3: null
                },
                email_sms_settings: {
                    email_sender_alias_name: null,
                    email_sender_alias_email:null,
                    secondary_email_settings: {
                        email: null,
                        password: null,
                        smtp_host: null,
                        email_sender_alias_name: null,
                    }
                }

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
    methods: {
        ...mapActions("loyaltyPanel/businessProfile", [
            "getBussinessProfile",
            "updateCampaignData"
        ]),

        getCampaignCredentials() {
            let campaign_data = this.$store.state.loyaltyPanel.businessProfile;
            console.log('compign_data', campaign_data);
            this.campaign_credentials.campaign_email_notifications = campaign_data.compaignCrendential;
            this.campaign_credentials.email_sms_settings.email_sender_alias_name = campaign_data.email_sender_alias_name;
            this.campaign_credentials.email_sms_settings.secondary_email_settings = campaign_data.emailSmsSetting;
            this.campaign_credentials.email_sms_settings.email_sender_alias_email = campaign_data.email_sender_alias_email;


        }
    },

    watch:{
        ["$store.state.loyaltyPanel.businessProfile.businessProfileData"]: {

            handler(val) {
                console.log(val);
                this.campaign_credentials.campaign_email_notifications = val.campaign_email_notifications;
                this.campaign_credentials.email_sms_settings.email_sender_alias_name = val.email_sms_settings.email_sender_alias_name;
                this.campaign_credentials.email_sms_settings.secondary_email_settings = val.email_sms_settings.secondary_email_settings;
                this.campaign_credentials.email_sms_settings.email_sender_alias_email = val.email_sms_settings.email_sender_alias_email;

            }
        },
    },
    mounted() {
        this.getCampaignCredentials();
    }

};
</script>
