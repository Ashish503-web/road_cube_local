<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        height="auto"
    >
        <h4 class="secondary--text" v-text="translations.info[lang]"></h4>
        <v-radio-group class="mt-3 pt-0" hide-details>
            <v-radio color="secondary">
                <template v-slot:label>
                    <h4
                        class="subtitle-2 secondary--text"
                        v-text="translations.yes[lang]"
                    ></h4>
                </template>
            </v-radio>
            <v-radio color="secondary">
                <template v-slot:label>
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

export default {
    name: "PointsReturn",

    mixins: [translations],

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    }
};
</script>
