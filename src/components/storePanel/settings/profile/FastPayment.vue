<template>
    <b-standard-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateFastPayment({ type: 'fastPayment', fast_payment })"
    >
        {{ translations.info[lang] }}

        <v-row no-gutters justify="center" align="center" class="mt-3">
            <v-col cols="auto" class="subtitle-2">
                {{ translations.toggle[lang] }}:
            </v-col>
            <v-col cols="auto" class="ml-3" style="position: relative">
                <v-switch
                    v-model="fast_payment"
                    :label="
                        fast_payment
                            ? translations.on[lang]
                            : translations.off[lang]
                    "
                    :readonly="readonly"
                    color="secondary"
                    class="mt-0 pt-0"
                    hide-details="auto"
                ></v-switch>

                <div v-if="readonly" class="b-not-allowed"></div>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/profile/fastPayment";

export default {
    name: "FastPayment",

    mixins: [translations],

    data: () => ({
        fast_payment: null,
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.storePanel.settings.profile.loading
                .fastPayment;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .fastPayment;
        },

        readonly() {
            return !this.$store.state.storePanel.store.flags.reward
                .online_payment_processing;
        },
    },

    methods: {
        ...mapActions("storePanel/settings/profile", ["updateFastPayment"]),
    },

    watch: {
        ["$store.state.storePanel.store.flags.app_settings.fast_payment"]: {
            immediate: true,
            handler(val) {
                this.fast_payment = val;
            },
        },
    },
};
</script>

<style scoped>
.b-not-allowed {
    cursor: no-drop;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
