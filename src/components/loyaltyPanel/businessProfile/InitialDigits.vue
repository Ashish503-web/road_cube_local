<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        height="auto"
    >
        {{ translations.info[lang] }}
        <v-row no-gutters>
            <v-col cols="6">
                <b-text-field
                    type="number"
                    :label="translations.enterNumber[lang]"
<<<<<<< HEAD
=======
                   
>>>>>>> nbgspal-business-profile
                ></b-text-field>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/initialDigits";

<<<<<<< HEAD
=======
import { mapState,mapGetters, mapMutations, mapActions } from "vuex";

>>>>>>> nbgspal-business-profile
export default {
    name: "InitialDigits",

    mixins: [translations],

    computed: {
        lang() {
            return this.$route.params.lang;
<<<<<<< HEAD
        }
=======
        },

        ...mapState("loyaltyPanel/businessProfile", [
           "setBusiessProfile"
        ]),
        ...mapGetters("loyaltyPanel/businessProfile",["BusinessProfileData"]),
    
    },
    methods:{
        ...mapActions("loyaltyPanel/businessProfile", [
           "getBussinessProfile"
        ]),
    },
    created(){
        this.getBussinessProfile();
>>>>>>> nbgspal-business-profile
    }
};
</script>
