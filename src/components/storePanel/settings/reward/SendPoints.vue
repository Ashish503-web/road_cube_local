<template>
    <b-standard-card
        title="Send points by card or phone number"
        activatable
        :switcher.sync="sendPoints.send_points_by_card_or_phone"
        :loading="loading"
        :error-message="errorMessage"
        @submit="
            updateReward({
                type: 'sendPoints',
                item: sendPoints
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
                You will be able to use the donation from the New Transaction
                page

                <b-select
                    v-model="sendPoints.system_notification_id"
                    :items="systemNotifications"
                    item-text="name"
                    item-value="system_notification_id"
                    :disabled="!sendPoints.send_points_by_card_or_phone"
                    label="How to notify a consumer of points"
                ></b-select>

                <!-- <v-checkbox
                    v-model="sendPoints.add_new_user_on_send_points"
                    :disabled="!sendPoints.send_points_by_card_or_phone"
                    color="secondary"
                    class="pt-0 mt-3"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2">
                            Ability to add a user to "Send points"
                        </h4>
                    </template>
                </v-checkbox> -->

                <v-checkbox
                    v-model="sendPoints.choose_product_on_send_points"
                    :disabled="!sendPoints.send_points_by_card_or_phone"
                    color="secondary"
                    class="pt-0 mt-3"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2">
                            Ability to select products in "Send points"
                        </h4>
                    </template>
                </v-checkbox>

                <v-checkbox
                    v-model="sendPoints.display_receipt_on_send_points"
                    :disabled="!sendPoints.send_points_by_card_or_phone"
                    color="secondary"
                    class="pt-0 mt-1"
                    hide-details
                >
                    <template v-slot:label>
                        <h4 class="subtitle-2">
                            Show receipt code in "Send points"
                        </h4>
                    </template>
                </v-checkbox>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mdiInformation } from "@mdi/js";
import { mapMutations, mapActions } from "vuex";

export default {
    name: "SendPoints",

    data: () => ({
        icons: {
            mdiInformation
        },
        sendPoints: {}
    }),

    computed: {
        systemNotifications() {
            return this.$store.state.storePanel.settings.reward
                .systemNotifications;
        },

        loading() {
            return this.$store.state.storePanel.settings.reward.loading
                .sendPoints;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.reward.errorMessage
                .sendPoints;
        }
    },

    methods: {
        ...mapActions("storePanel/settings/reward", [
            "getSystemNotifications",
            "updateReward"
        ])
    },

    watch: {
        ["$store.state.storePanel.store"]: {
            immediate: true,
            handler(val) {
                this.sendPoints = {
                    send_points_by_card_or_phone:
                        val.flags.reward.send_points_by_card_or_phone,

                    system_notification_id:
                        val.notify_customers.system_notification_id,

                    // add_new_user_on_send_points:
                    //     val.flags.reward.add_new_user_on_send_points,

                    choose_product_on_send_points:
                        val.flags.reward.choose_product_on_send_points,

                    display_receipt_on_send_points:
                        val.flags.reward.display_receipt_on_send_points
                };
            }
        },

        ["sendPoints.send_points_by_card_or_phone"](val) {
            if (val) {
                if (!this.sendPoints.system_notification_id)
                    this.sendPoints.system_notification_id = 3;
            }
        }
    },

    mounted() {
        this.getSystemNotifications();
    }
};
</script>
