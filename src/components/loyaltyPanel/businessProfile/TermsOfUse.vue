<template>
    <b-standard-card
        :title="translations.title[lang]"
        :cancel-text="{ el: '', en: 'delete', it: '' }"
        :submit-text="{ el: '', en: 'save', it: '' }"
    >
        {{ translations.info[lang] }}

        <v-row no-gutters align="center" class="mt-3">
            <v-col cols="5" class="pr-2">
                <a
                    href="https://www.roadcube.com/pdfManual/user_manual_64651.pdf"
                    >https://www.roadcube.com/pdfManual/user_manual_64651.pdf</a
                >
            </v-col>
            <v-col cols="7" class="pl-2">
                {{ translations.termsOfUse[lang] }}
                <v-file-input
                    color="secondary"
                    class="mt-1"
                    outlined
                    dense
                    hide-details="auto"
                ></v-file-input>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/termsOfUse";

export default {
    name: "TermsOfUse",

    mixins: [translations],

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    }
};
</script>
