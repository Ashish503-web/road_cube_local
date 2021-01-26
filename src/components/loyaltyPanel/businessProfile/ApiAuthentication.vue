<template>
    <b-standard-card
        :title="translations.title[lang]"
        height="auto"
        class="mt-5"
    >
        <b-textarea no-top-margin>{{authenticationData.token}}</b-textarea>
        <v-row no-gutters justify="space-between" align="center">
            <v-col cols="6">
                <b-text-field
                    type="password"
                    :label="translations.password[lang]"
                    v-model="authenticationData.password"
                ></b-text-field>
            </v-col>
            <v-col cols="auto">
                <v-btn
                    color="secondary"
                    class="text-capitalize mt-3"
                    depressed
                    v-text="translations.getToken[lang]"
                ></v-btn>
            </v-col>

            <v-col cols="12" class="secondary--text mt-3">
                {{ translations.detailedDocumentation[lang] }}
                <a
                    class="secondary--text subtitle-2"
                    href="https://documenter.getpostman.com/view/5813491/SzKQxfkT?version=latest"
                    target="_blank"
                    v-text="translations.here[lang]"
                ></a>
            </v-col>

            <v-col
                cols="auto"
                class="subtitle-2 mt-3"
                v-text="translations.resetPreviously[lang]"
            ></v-col>

            <v-col class="pl-3">
                <v-switch
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                ></v-switch>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/apiAuthentication";
import { mapState,mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "ApiAuthentication",

    mixins: [translations],

    computed: {
        lang() {
            return this.$route.params.lang;
        },
        authenticationData : {
            get(){
                return this.$store.state.loyaltyPanel.businessProfile.authentication;
            }, 
            set(val){
                this.setApiAuthentication(val);
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
