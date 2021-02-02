<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        height="auto"
    >

        <h4 class="secondary--text" v-text="translations.info[lang]"></h4>
        <v-radio-group class="mt-3 pt-0" hide-details v-model="returnPoint">
            <v-radio color="secondary" value="true">
                <template v-slot:label>
                    <h4
                        class="subtitle-2 secondary--text"
                        v-text="translations.yes[lang]"
                        
                    ></h4>
                </template>
            </v-radio>
            <v-radio color="secondary" value="false">
                <template v-slot:label >
                    <h4
                        class="subtitle-2 secondary--text"
                        v-text="translations.no[lang]"
                         
                    ></h4>
                </template>
            </v-radio>
        </v-radio-group>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/pointsReturn";
import { mapState,mapGetters, mapMutations, mapActions } from "vuex";
export default {
    name: "PointsReturn",

    mixins: [translations],
    data (){
        return {
            returnPoint :null,
        }
    },
   
    
    computed: {
        lang() {
            return this.$route.params.lang;
        },

        // returnPoint: {
        //     get(){
        //          return this.$store.state.loyaltyPanel.businessProfile.initailPoint;
        //     },
        //     set(val){
        //         this.setReturnPoint(val);
        //     }
        //
        // }
        
    },
    methods:{
        ...mapActions("loyaltyPanel/businessProfile", [
           "getBussinessProfile"
        ]),

        selectedPointReturn(){
            let returnPointData = this.$store.state.loyaltyPanel.businessProfile.returnPoint;
            this.returnPoint = returnPointData.toString();

        },
    },
    mounted (){
        this.selectedPointReturn();
    }
    
};
</script>
