<template>
    <b-standard-card
        title="Mobile payments"
        activatable
        height="auto"
        class="mt-5"
        :switcher.sync="mobilePayments"
        :loading="loading"
        :error-message="errorMessage"
        @submit="
            updateReward({
                type: 'mobilePayments',
                item: {
                    online_payments: mobilePayments
                }
            })
        "
    >
        <v-row no-gutters justify="space-around">
            <v-btn
                :disabled="!mobilePayments"
                color="secondary"
                class="text-capitalize mb-3 mb-sm-0"
                outlined
                @click="$emit('appoint-cleaners')"
                >appoint cleaners</v-btn
            >

            <v-btn
                :disabled="!mobilePayments"
                color="secondary"
                class="text-capitalize"
                outlined
                @click="$emit('payment-direction')"
                >set a payment direction</v-btn
            >
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
    name: "MobilePayments",

    data: () => ({}),

    computed: {
        loading() {
            return this.$store.state.storePanel.settings.reward.loading
                .mobilePayments;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.reward.errorMessage
                .mobilePayments;
        },

        mobilePayments: {
            get() {
                return this.$store.state.storePanel.store.flags.reward
                    .online_payments;
            },

            set(val) {
                this.setMobilePayments(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel", ["setMobilePayments"]),
        ...mapActions("storePanel/settings/reward", ["updateReward"])
    }
};
</script>
