<template>
    <b-standard-card
        title="Fast Payment"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateQuickPayment"
    >
        <v-row no-gutters justify="center">
            <v-col cols="auto" class="subtitle-2">
                Toogle Fast Payment option:
            </v-col>
            <v-col cols="auto" class="subtitle-2 ml-3">
                <v-switch
                    v-model="quickPayment"
                    :label="quickPayment ? 'On' : 'Off'"
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

export default {
    name: "FastPayment",

    data: () => ({}),

    computed: {
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
