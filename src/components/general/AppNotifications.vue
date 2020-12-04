<template>
    <fragment>
        <v-menu offset-y left max-height="90%">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-badge
                        :content="messages.length"
                        :value="messages.length"
                        bordered
                        color="error"
                    >
                        <v-icon v-text="icons.mdiBellOutline"></v-icon>
                    </v-badge>
                </v-btn>
            </template>

            <v-card>
                <v-card-title>Notifications</v-card-title>
                <v-divider></v-divider>

                <v-list v-if="messages.length" class="font-weight-medium">
                    <v-list-item
                        v-for="message in messages"
                        :key="message.transactionId"
                    >
                        <v-list-item-avatar>
                            <v-icon
                                color="warning"
                                large
                                v-text="icons.mdiAlphaTCircle"
                            ></v-icon>
                        </v-list-item-avatar>
                        <v-list-item-title>
                            New Notification

                            <v-tooltip color="secondary" top>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        class="ml-3"
                                        icon
                                        v-on="on"
                                        @click="
                                            () => {
                                                transactionId =
                                                    message.transactionId;
                                                dialog = true;
                                            }
                                        "
                                    >
                                        <v-icon
                                            v-text="icons.mdiOpenInApp"
                                        ></v-icon>
                                    </v-btn>
                                </template>

                                <span class="font-weight-bold"
                                    >Open Transaction</span
                                >
                            </v-tooltip>

                            <v-tooltip
                                v-if="
                                    $route.path !==
                                    `/${lang}/storePanel/transactions`
                                "
                                color="secondary"
                                top
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        class="mx-3"
                                        icon
                                        v-on="on"
                                        :to="`/${lang}/storePanel/transactions?page=1`"
                                    >
                                        <v-icon
                                            v-text="icons.mdiOpenInNew"
                                        ></v-icon>
                                    </v-btn>
                                </template>

                                <span class="font-weight-bold"
                                    >Open Transactions Page</span
                                >
                            </v-tooltip>
                        </v-list-item-title>
                    </v-list-item>
                </v-list>

                <v-card-text v-else>No new notifications</v-card-text>
            </v-card>
        </v-menu>

        <v-dialog v-model="dialog" max-width="600">
            <TransactionProfile
                :transaction-id="transactionId"
                @cancel="dialog = false"
            />
        </v-dialog>
    </fragment>
</template>

<script>
import {
    mdiBellOutline,
    mdiAlphaTCircle,
    mdiOpenInNew,
    mdiOpenInApp,
} from "@mdi/js";

import { Fragment } from "vue-fragment";
import TransactionProfile from "@/components/storePanel/transactions/TransactionProfile.vue";

export default {
    name: "AppNotifications",

    components: { Fragment, TransactionProfile },

    data: () => ({
        icons: {
            mdiBellOutline,
            mdiAlphaTCircle,
            mdiOpenInNew,
            mdiOpenInApp,
        },
        pusher: null,
        channel: null,
        messages: [],
        dialog: false,
        transactionId: null,
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },
    },

    mounted() {
        // window.Pusher.logToConsole = true;

        var self = this;

        this.pusher = new window.Pusher("9db4ecb89daebe1a42a0", {
            cluster: "eu",
        });

        this.channel = this.pusher.subscribe("transaction-for-store-2");

        this.channel.bind("new-transaction", function (data) {
            self.messages.unshift(data);
        });
    },
};
</script>