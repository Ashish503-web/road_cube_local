<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        height="auto"
        class="mt-5"
    >
        <h4
            class="text--primary"
            v-text="translations.showUserPoints[lang]"
        ></h4>
        <v-radio-group class="mt-3 pt-0" hide-details>
            <v-radio color="secondary">
                <template v-slot:label>
                    <h4
                        class="subtitle-2 text--primary"
                        v-text="translations.yes[lang]"
                    ></h4>
                </template>
            </v-radio>
            <v-radio color="secondary">
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

export default {
    name: "UserPointsInApp",

    mixins: [translations],

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    }
};
</script>
