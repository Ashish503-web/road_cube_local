<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        :loading="loading"
        :error-message="errorMessage"

    >

<!--        @submit="updateInitialPoint({type: 'initailPoint',-->
<!--        item: init_user_point,})"-->
        {{ translations.info[lang] }}

        <br />
        <div class="mt-3">
            {{ translations.totallySent[lang] }}
            <span class="font-weight-bold secondary--text">718</span>
            {{ translations.users[lang] }}
        </div>

        <div class="mt-3 red--text">
            Users have exceeded the limit.
        </div>

        <v-row no-gutters>
            <v-col cols="12">
                <v-checkbox
                    v-model="unlimitedOnline"
                    :disabled="wholeUsers"
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4
                            class="subtitle-2 secondary--text"
                            v-text="translations.usersOnline[lang]"
                        ></h4>
                    </template>
                </v-checkbox>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    :disabled="wholeUsers"
                    type="number"
                    :label="translations.onlinePoints[lang]"
                    v-model="init_user_point.first_online_user_points"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-if="!unlimitedOnline"
                    :disabled="wholeUsers"
                    type="number"
                    :label="translations.usersOnlineTotal[lang]"
                    v-model="init_user_point.first_online_users_count"
                ></b-text-field>
            </v-col>

            <v-col cols="12">
                <v-checkbox
                    v-model="unlimitedOffline"
                    :disabled="wholeUsers"
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4
                            class="subtitle-2 secondary--text"
                            v-text="translations.usersOffline[lang]"
                        ></h4>
                    </template>
                </v-checkbox>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    :disabled="wholeUsers"
                    type="number"
                    :label="translations.offlinePoints[lang]"
                    v-model="init_user_point.first_offline_user_points"
                ></b-text-field>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-if="!unlimitedOffline"
                    :disabled="wholeUsers"
                    type="number"
                    :label="translations.usersOfflineTotal[lang]"
                    v-model="init_user_point.first_offline_users_count"
                ></b-text-field>
            </v-col>

            <!-- <v-col cols="12">
                <v-checkbox
                    v-model="wholeUsers"
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4
                            class="subtitle-2 secondary--text"
                            v-text="translations.defineUsers[lang]"
                        ></h4>
                    </template>
                </v-checkbox>
            </v-col>

            <v-col cols="8" class="pr-2">
                <b-text-field
                    type="number"
                    :label="translations.usersTotal[lang]"
                ></b-text-field>
            </v-col> -->
        </v-row>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/initialPoints";
import { mapState,mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "InitialPoints",

    mixins: [translations],

    data: () => ({
        unlimitedOnline: false,
        unlimitedOffline: false,
        wholeUsers: false,
        init_user_point: [],

    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },
        loading() {
            return this.$store.state.loyaltyPanel.businessProfile.loading.initailPoint;
        },

        errorMessage() {
            return this.$store.state.loyaltyPanel.businessProfile.errorMessage
                .initailPoint;
        },
        resetSuccess() {
            return this.$store.state.loyaltyPanel.businessProfile.resetSuccess
                .initailPoint;
        }


        // initialpoints : {
        //     get(){
        //             return this.$store.state.loyaltyPanel.businessProfile.initailPoint;
        //     },
        //     set(val){
        //         this.setIntialPoints(val);
        //     }
        // }

    },
    methods:{
        ...mapActions("loyaltyPanel/businessProfile", [
           "getBussinessProfile",
            "updateInitialPoint"
        ]),

        getInitialPoints(){
            let points_data = this.$store.state.loyaltyPanel.businessProfile.initailPoint;
            this.init_user_point = points_data

        }
    },

    mounted: function(){
       this.getInitialPoints();
    },

    
};
</script>
