<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        height="auto"
        class="mt-5"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateUserPoints({ type: 'app_points_visibility', item:userPointsData})"
    >
        <h4
            class="text--primary"
            v-text="translations.showUserPoints[lang]"
        ></h4>

        <v-radio-group class="mt-3 pt-0" hide-details v-model="userPointsData">
            <v-radio color="secondary" value="true">
                <template v-slot:label>
                    <h4
                        class="subtitle-2 text--primary"
                        v-text="translations.yes[lang]"

                    ></h4>
                </template>
            </v-radio>
            <v-radio color="secondary" value="false">
                <template v-slot:label>
                    <h4
                        class="subtitle-2 text--primary"
                        v-text="translations.no[lang]"
                    ></h4>
                </template>
            </v-radio>
        </v-radio-group>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/userPointsInApp";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";


export default {
    name: "UserPointsInApp",

    mixins: [translations],
    data() {
        return {
            userPointsData: '',
        }
    },

    computed: {

        lang() {
            return this.$route.params.lang;
        },
        loading() {
            return this.$store.state.loyaltyPanel.businessProfile.loading.app_points_visibility;
        },

        errorMessage() {
            return this.$store.state.loyaltyPanel.businessProfile.errorMessage
                .app_points_visibility;
        },
        resetSuccess() {
            return this.$store.state.loyaltyPanel.businessProfile.resetSuccess
                .app_points_visibility;
        },

        // userPoints : {
        //   get(){
        //     return this.$store.state.loyaltyPanel.businessProfile.userPointValue;
        //   },
        //   set(val){
        //     this.setUserPoints(val);
        //   }
        // }
    },

    methods: {
        ...mapMutations("loyaltyPanel/businessProfile", ["setUserPoints"]),
        ...mapActions("loyaltyPanel/businessProfile", [
            "getBussinessProfile",
            "updateUserPoints"
        ]),
    },
    mounted() {
        let userPointsdataValue = this.$store.state.loyaltyPanel.businessProfile.userPointValue;
        this.userPointsData = userPointsdataValue.toString();


        this.getBussinessProfile();
    }
};
</script>
