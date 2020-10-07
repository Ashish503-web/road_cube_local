<template>
    <b-standard-card
        title="Point Delivery"
        activatable
        :switcher.sync="pointDelivery.pos_points_delivery"
        :loading="loading"
        :error-message="errorMessage"
        @submit="
            updateReward({
                type: 'pointDelivery',
                item: {
                    pos_points_delivery: pointDelivery.pos_points_delivery,
                    pos_display_amount: pointDelivery.pos_display_amount,
                    pos_goal_shopping: pointDelivery.pos_goal_shopping
                }
            })
        "
    >
        <v-row no-gutters>
            <v-col cols="auto">
                <v-icon
                    color="secondary"
                    v-text="icons.mdiInformation"
                ></v-icon>
            </v-col>

            <v-col cols="11" class="pl-1">
                You will be able to use the Point Score via a Point Device
                connected to your store.

                <v-checkbox
                    v-model="pointDelivery.pos_display_amount"
                    :disabled="!pointDelivery.pos_points_delivery"
                    color="secondary"
                    class="pt-0 mt-1"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2">
                            Show amount in POS
                        </h4>
                    </template>
                </v-checkbox>

                <v-checkbox
                    v-model="pointDelivery.pos_goal_shopping"
                    :disabled="!pointDelivery.pos_points_delivery"
                    color="secondary"
                    class="pt-0 mt-1"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2">
                            Serial Shopping mode in POS
                        </h4>
                    </template>
                </v-checkbox>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mdiInformation } from "@mdi/js";
import { mapActions } from "vuex";

export default {
    name: "PointDelivery",

    data: () => ({
        icons: { mdiInformation }
    }),

    computed: {
        loading() {
            return this.$store.state.storePanel.settings.reward.loading
                .pointDelivery;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.reward.errorMessage
                .pointDelivery;
        },

        pointDelivery() {
            return this.$store.state.storePanel.store.flags.reward;
        }
    },

    methods: {
        ...mapActions("storePanel/settings/reward", ["updateReward"])
    }
};
</script>
