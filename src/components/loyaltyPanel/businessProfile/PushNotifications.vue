<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        height="auto"
        class="mt-5"
    >
        <v-row no-gutters justify="center">
            <v-col cols="11">
                <b-text-field
                    :label="translations.restApiKey[lang]"
                    no-top-margin
                    v-model="pushNotifications.rest_api_key"
                ></b-text-field>
                <b-text-field
                    :label="translations.oneSignalAppId[lang]"
                    v-model="pushNotifications.one_signal_app_id"
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

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        pushNotifications :{
            get(){
                return this.$store.state.loyaltyPanel.businessProfile.pushNotifications;
            },
            set(val){
                this.setPushNotification(val);
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
