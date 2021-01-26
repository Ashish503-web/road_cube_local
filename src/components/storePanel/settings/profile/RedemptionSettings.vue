<template>
    <b-standard-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateRedemption({ type: 'redemption', redemption_type_id })"
    >
        <v-radio-group v-model="redemption_type_id" class="mt-0">
            <v-radio
                :label="translations.codeRedemption[lang]"
                color="secondary"
                :value="1"
            ></v-radio>
            <v-radio
                :label="translations.directRedemption[lang]"
                color="secondary"
                :value="2"
            ></v-radio>
        </v-radio-group>
    </b-standard-card>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import translations from "@/utils/translations/storePanel/settings/profile/redemptionSettings";

export default {
    name: "RedemptionSettings",

    mixins: [translations],

    data: () => ({
        redemption_type_id: null
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.storePanel.profile.loading.redemption;
        },

        errorMessage() {
            return this.$store.state.storePanel.profile.errorMessage.redemption;
        }
    },

    methods: {
        ...mapActions("storePanel/profile", ["updateRedemption"])
    },

    watch: {
        ["$store.state.storePanel.store.redemption_type_id"]: {
            immediate: true,
            handler(val) {
                this.redemption_type_id = val;
            }
        }
    }
};
</script>
