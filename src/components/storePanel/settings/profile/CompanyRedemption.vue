<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'verification', it: '' }"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateRedemption"
    >
        <v-radio-group v-model="redemption" class="mt-0">
            <v-radio
                :label="translations.directRedemption[lang]"
                color="secondary"
                :value="1"
            ></v-radio>
            <v-radio
                :label="translations.codeRedemption[lang]"
                color="secondary"
                :value="2"
            ></v-radio>
        </v-radio-group>
    </b-standard-card>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import translations from "@/utils/translations/storePanel/settings/companyRedemption";

export default {
    name: "CompanyRedemption",

    mixins: [translations],

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.storePanel.settings.profile.loading
                .redemption;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .redemption;
        },

        redemption: {
            get() {
                return this.$store.state.storePanel.store.redemption_type_id;
            },

            set(val) {
                this.setRedemption(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel", ["setRedemption"]),
        ...mapActions("storePanel/settings/profile", ["updateRedemption"])
    }
};
</script>
