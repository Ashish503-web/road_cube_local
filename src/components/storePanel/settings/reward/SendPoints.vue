<template>
    <b-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="
            updateReward({
                item: sendPoints,
                url: 'flags/reward',
                commitText: 'storePanel/setSendPoints',
                successText: 'send points info'
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
                {{ translations.info[lang] }}

                <b-select
                    v-model="sendPoints.system_notification_id"
                    :items="systemNotifications"
                    item-text="name"
                    item-value="system_notification_id"
                    :label="translations.notifyConsumers[lang]"
                ></b-select>

                <v-checkbox
                    v-model="sendPoints.offline_transaction_products"
                    color="secondary"
                    class="pt-0 mt-3"
                    hide-details
                >
                    <template v-slot:label>
                        <h4
                            class="subtitle-2"
                            v-text="translations.selectProducts[lang]"
                        ></h4>
                    </template>
                </v-checkbox>

                <v-checkbox
                    v-model="sendPoints.offline_transaction_receipt"
                    color="secondary"
                    class="pt-0 mt-1"
                    hide-details
                >
                    <template v-slot:label>
                        <h4
                            class="subtitle-2"
                            v-text="translations.receiptCode[lang]"
                        ></h4>
                    </template>
                </v-checkbox>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mdiInformation } from "@mdi/js";
import { mapState, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/reward/sendPoints";

export default {
    name: "SendPoints",

    mixins: [translations],

    data: () => ({
        icons: { mdiInformation },
        sendPoints: {}
    }),

    computed: {
        ...mapState(["loading", "errorMessage"]),

        lang() {
            return this.$route.params.lang;
        },

        systemNotifications() {
            return this.$store.state.storePanel.settings.reward
                .systemNotifications;
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
                    system_notification_id:
                        val.notify_customers.system_notification_id,

                    offline_transaction_products:
                        val.flags.reward.offline_transaction_products,

                    offline_transaction_receipt:
                        val.flags.reward.offline_transaction_receipt
                };
            }
        }
    },

    mounted() {
        this.getSystemNotifications();
    }
};
</script>
