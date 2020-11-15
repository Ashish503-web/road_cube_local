<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        height="auto"
        class="mt-5"
    >
        <v-row no-gutters justify="center">
            <v-col cols="11">
                <b-text-field
                    :label="translations.restApiKey[lang]"
                    no-top-margin
                ></b-text-field>
                <b-text-field
                    :label="translations.oneSignalAppId[lang]"
                ></b-text-field>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/pushNotifications";

export default {
    name: "PushNotifications",

    mixins: [translations],

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    }
};
</script>
