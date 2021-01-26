<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
    >
        <h4
            class="subtitle-1 font-weight-bold text--primary"
            v-text="translations.notifications[lang]"
        ></h4>

        {{ translations.notificationsInfo[lang] }}

        <v-row v-for="n in 3" :key="n" no-gutters align="baseline">
            <v-col
                cols="auto"
                class="subtitle-1 font-weight-bold secondary--text"
            >
                {{ n }}.
            </v-col>
            <v-col cols="7" class="pl-3">
                <b-text-field></b-text-field>
            </v-col>
        </v-row>

        <h4
            class="secondary--text font-weight-bold subtitle-1 mt-7"
            v-text="translations.smsEmail[lang]"
        ></h4>

        {{ translations.smsEmailInfo[lang] }}

        <b-text-field
            :label="translations.messageSenderName[lang]"
        ></b-text-field>

        <v-divider class="my-7"></v-divider>

        <v-row
            no-gutters
            justify="space-between"
            align="baseline"
            class="mt-3 mb-1"
        >
            <v-col cols="auto">
                <h4 class="secondary--text font-weight-bold subtitle-1">
                    1. {{ translations.emailFirstMethod[lang] }}
                </h4>
            </v-col>

            <v-col cols="auto">
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    small
                    depressed
                    v-text="translations.verifyEmail[lang]"
                ></v-btn>
            </v-col>
        </v-row>

        {{ translations.emailFirstMethodInfo[lang] }}

        <v-alert type="warning">
            The email has not been fully verified. The first method will not be
            used in campaigns.
        </v-alert>

        <v-divider class="mt-7 mb-4"></v-divider>

        <h4 class="secondary--text font-weight-bold subtitle-1">
            2. {{ translations.emailSecondMethod[lang] }}
        </h4>

        <v-alert type="warning" class="mt-3">
            Not all data have been completed and the second method will not be
            used in campaigns.
        </v-alert>

        {{ translations.emailSecondMethodInfo[lang] }}

        <b-text-field
            :label="translations.host[lang]"
            class="mt-7"
        ></b-text-field>
        <b-text-field :label="translations.name[lang]"></b-text-field>
        <b-text-field
            :label="translations.email[lang]"
            type="email"
        ></b-text-field>
        <b-text-field
            :label="translations.password[lang]"
            type="password"
        ></b-text-field>

        <v-alert
            color="blue darken-2"
            text
            dense
            border="left"
            class="mt-7"
            v-text="translations.info[lang]"
        ></v-alert>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/campaignCredentials";

export default {
    name: "CampaignCredentials",

    mixins: [translations],

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    }
};
</script>
