<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        :loading="loading"
        :error-message="errorMessage"
        @submit = "updateRelation({ type: 'online_offline_points_ratio', item:selectedPercent})"
    >
        {{ translations.info[lang] }}

        <v-row no-gutters align="baseline" class="mt-3">
            <v-col
                cols="auto"
                class="pr-2 subtitle-1 font-weight-bold"
                v-text="translations.relation[lang]"
            ></v-col>


            <v-col cols="4" class="pl-2">
                <b-select
                    v-model="selectedPercent"
                    :items="point_relation"
                    append-outer-icon="mdiPercent"
                    no-clear-icon
                ></b-select>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/pointsRelation";
import Axios from 'axios';

import { mapState,mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "PointsRelation",

    mixins: [translations],

    data (){
        return {
            selectedPercent : null,
            point_relation:[]
        }
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },
        loading() {
            return this.$store.state.loyaltyPanel.businessProfile.loading.selectedPercent;
        },

        errorMessage() {
            return this.$store.state.loyaltyPanel.businessProfile.errorMessage
                .selectedPercent;
        },
        resetSuccess() {
            return this.$store.state.loyaltyPanel.businessProfile.resetSuccess
                .selectedPercent;
        }

    },
     methods:{
        ...mapActions("loyaltyPanel/businessProfile", [
           "getBussinessProfile",
            "updateRelation"
        ]),

         selectedPoint(){
             let points_data = this.$store.state.loyaltyPanel.businessProfile.selectedPercent;
             this.selectedPercent = points_data
         },

         allPointRelation (){
             for (let i = 1; i < 101; i++) {
                 this.point_relation.push(i);
             }
             return this.point_relation;
         }

    },
    mounted(){
        this.selectedPoint();
        this.allPointRelation();
    }

};
</script>
