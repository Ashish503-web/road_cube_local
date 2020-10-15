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
                item: {
                    send_points_by_card_or_phone:
                        sendPoints.send_points_by_card_or_phone,
                    system_notification_id: systemNotificationId,
                    add_new_user_on_send_points:
                        sendPoints.add_new_user_on_send_points,
                    choose_product_on_send_points:
                        sendPoints.choose_product_on_send_points,
                    display_receipt_on_send_points:
                        sendPoints.display_receipt_on_send_points
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
                You will be able to use the donation from the New Transaction
                page

                <b-select
                    v-model="systemNotificationId"
                    :items="systemNotifications"
                    :disabled="!sendPoints.send_points_by_card_or_phone"
                    label="How to notify a consumer of points"
                ></b-select>

                <v-checkbox
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
                </v-checkbox>

                <v-checkbox
                    v-model="sendPoints.choose_product_on_send_points"
                    :disabled="!sendPoints.send_points_by_card_or_phone"
                    color="secondary"
                    class="pt-0 mt-1"
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
        systemNotifications: [
            { text: "Sms 1/month", value: 1 },
            { text: "Sms every time", value: 2 },
            { text: "Push", value: 3 },
            { text: "Email", value: 4 }
        ]
    }),

    computed: {
        loading() {
            return this.$store.state.storePanel.settings.reward.loading
                .sendPoints;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.reward.errorMessage
                .sendPoints;
        },

        systemNotificationId: {
            get() {
                return this.$store.state.storePanel.store.notify_customers
                    .system_notification_id;
            },

            set(val) {
                this.setSystemNotificationId(val);
            }
        },

        sendPoints() {
            return this.$store.state.storePanel.store.flags.reward;
        }
    },

    methods: {
        ...mapMutations("storePanel", ["setSystemNotificationId"]),
        ...mapActions("storePanel/settings/reward", ["updateReward"])
    }
};
</script>
