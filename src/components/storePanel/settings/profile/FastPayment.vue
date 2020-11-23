<template>
    <b-standard-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateQuickPayment"
    >
        <v-row no-gutters justify="center">
            <v-col cols="auto" class="subtitle-2">
                {{ translations.toggle[lang] }}:
            </v-col>
            <v-col cols="auto" class="subtitle-2 ml-3">
                <v-switch
                    v-model="quickPayment"
                    :label="
                        quickPayment
                            ? translations.on[lang]
                            : translations.off[lang]
                    "
                    color="secondary"
                    hide-details="auto"
                    class="mt-0 pt-0"
                ></v-switch>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/profile/fastPayment";

export default {
    name: "FastPayment",

    mixins: [translations],

    data: () => ({}),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.storePanel.settings.profile.loading
                .quickPayment;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .quickPayment;
        },

        quickPayment: {
            get() {
                return this.$store.state.storePanel.store.flags.general
                    .quick_payment;
            },

            set(val) {
                this.setQuickPayment(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel", ["setQuickPayment"]),
        ...mapActions("storePanel/settings/profile", ["updateQuickPayment"])
    }
};
</script>
