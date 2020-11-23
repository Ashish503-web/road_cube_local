<template>
    <b-card
        :title="translations.title[lang]"
        hide-default-footer
        @cancel="$emit('cancel')"
    >
        <v-row no-gutters class="py-5">
            <v-col cols="1" sm="auto">
                <v-icon
                    color="secondary"
                    v-text="icons.mdiInformation"
                ></v-icon>
            </v-col>

            <v-col cols="11" class="pl-1">
                {{ translations.info[lang] }}
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mdiInformation } from "@mdi/js";
import translations from "@/utils/translations/storePanel/settings/reward/rewardWithPresence";

export default {
    name: "RewardWithPresence",

    mixins: [translations],

    data: () => ({
        icons: { mdiInformation }
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    }
};
</script>
