<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
    >
        <h4
            class="subtitle-1 font-weight-bold text--primary"
            v-text="translations.notifications[lang]"
        ></h4>

        {{ translations.notificationsInfo[lang] }}



        <v-row v-for="(item, index) in compaignCredentials" :key="index" no-gutters align="baseline">
            <v-col
                cols="auto"
                class="subtitle-1 font-weight-bold secondary--text"
            >
                {{index}}
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
            v-model="emailSmsSettings.smtp_host"
        ></b-text-field>
        <b-text-field :label="translations.name[lang]" v-model="emailSmsSettings.email_sender_alias_name"></b-text-field>
        <b-text-field
            :label="translations.email[lang]"
            type="email"
            v-model="emailSmsSettings.email"
        ></b-text-field>
        <b-text-field
            :label="translations.password[lang]"
            type="password"
            v-model="emailSmsSettings.password"
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
import { mapState,mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "CampaignCredentials",

    mixins: [translations],
    data () {
        return {
            email_first_method:'null',
            email_second_method:'null',
        }
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        compaignCredentials :{
            get(){
                return this.$store.state.loyaltyPanel.businessProfile.compaignCrendential;
            },
            set(val){
                this.setCompaignCrendential(val);
            }
        },
        emailSmsSettings :{
            get(){
                return this.$store.state.loyaltyPanel.businessProfile.emailSmsSetting;
            },
            set(val){
                this.setEmailSmsSettings(val);
            }
        }
    },
     methods:{
        ...mapActions("loyaltyPanel/businessProfile", [
           "getBussinessProfile"
        ]),  
    },

};
</script>
