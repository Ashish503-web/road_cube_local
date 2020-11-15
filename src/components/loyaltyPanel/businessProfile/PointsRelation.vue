<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
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
                    :items="percents"
                    append-outer-icon="mdiPercent"
                    no-clear-icon
                ></b-select>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/pointsRelation";

export default {
    name: "PointsRelation",

    mixins: [translations],

    data: () => ({
        selectedPercent: 50
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        percents() {
            let arr = [];

            for (let i = 1; i < 101; i++) {
                arr.push(i);
            }

            return arr;
        }
    }
};
</script>
