<template>
    <fragment>
        <v-menu offset-y left max-height="90%">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-badge
                        :content="transactions.length"
                        :value="transactions.length"
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

                <v-list v-if="transactions.length" class="font-weight-medium">
                    <v-list-item
                        v-for="message in transactions"
                        :key="message.transactionId"
                    >
                        <v-list-item-avatar>
                            <v-icon
                                color="warning"
                                large
                                v-text="icons.mdiAlphaTCircle"
                            ></v-icon>
                        </v-list-item-avatar>
                        <v-list-item-title class="align-self-center">
                            New Transaction -
                            <span class="green--text">
                                {{
                                    new Intl.NumberFormat("en-US", {
                                        style: "currency",
                                        currency: "EUR",
                                        minimumFractionDigits: 2
                                    }).format(message.totalPrice)
                                }}
                            </span>
                            <v-tooltip color="secondary" top>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        class="ml-3 mb-1"
                                        icon
                                        v-on="on"
                                        @click="
                                            () => {
                                                transactionId =
                                                    message.transactionId;
                                                transactionDialog = true;
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
                                        class="mb-1"
                                        icon
                                        v-on="on"
                                        :to="
                                            `/${lang}/storePanel/transactions?page=1`
                                        "
                                    >
                                        <v-icon
                                            size="22"
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

        <v-dialog v-model="transactionDialog" max-width="600">
            <TransactionProfile
                :transaction-id="transactionId"
                @cancel="transactionDialog = false"
            />
        </v-dialog>

        <v-dialog v-model="redemptionDialog" max-width="500" persistent>
            <v-card tile>
                <v-card-title>New Redemption</v-card-title>

                <v-divider></v-divider>

                <div v-for="(redemption, i) in redemptions" :key="i">
                    <v-banner>
                        <v-icon
                            slot="icon"
                            color="accent"
                            v-text="icons.mdiAlphaRCircle"
                        >
                        </v-icon>
                        {{ redemption.fullName }} - {{ redemption.giftTitle }} -
                        {{ redemption.voucher }}
                    </v-banner>

                    <div class="b-timer-holder">
                        <div class="b-timer"></div>
                    </div>

                    <v-alert v-if="errorMessage" type="error" class="mb-0">{{
                        errorMessage
                    }}</v-alert>

                    <div class="text-right py-2 px-1">
                        <v-btn
                            color="red"
                            text
                            :loading="redemption.rejectLoading"
                            :disabled="redemption.disabled"
                            @click="rejectRedemption(redemption)"
                            >reject</v-btn
                        >
                        <v-btn
                            color="success"
                            text
                            :loading="redemption.acceptLoading"
                            :disabled="redemption.disabled"
                            @click="acceptRedemption(redemption)"
                            >accept</v-btn
                        >
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </fragment>
</template>

<script>
import {
    mdiBellOutline,
    mdiAlphaTCircle,
    mdiAlphaRCircle,
    mdiOpenInNew,
    mdiOpenInApp
} from "@mdi/js";

import { mapActions, mapMutations, mapState } from "vuex";

import { Fragment } from "vue-fragment";
import TransactionProfile from "@/components/storePanel/transactions/TransactionProfile.vue";

export default {
    name: "AppNotifications",

    components: { Fragment, TransactionProfile },

    data: () => ({
        icons: {
            mdiBellOutline,
            mdiAlphaTCircle,
            mdiAlphaRCircle,
            mdiOpenInNew,
            mdiOpenInApp
        },
        pusher: null,
        transactionChannel: null,
        redemptionChannel: null,
        transactionDialog: false,
        transactions: [],
        transactionId: null,
        num: 1
    }),

    computed: {
        ...mapState(["errorMessage"]),
        ...mapState("storePanel", ["redemptionDialog", "redemptions"]),

        lang() {
            return this.$route.params.lang;
        },

        storeId() {
            return this.$store.state.storePanel.store.store_id;
        }
    },

    methods: {
        ...mapMutations("storePanel", [
            "setRedemptionDialog",
            "addRedemption",
            "removeRedemption"
        ]),
        ...mapActions("storePanel", ["rejectRedemption", "acceptRedemption"])
    },

    watch: {
        redemptions(val) {
            if (val.length) {
                this.setRedemptionDialog(true);
            } else {
                this.setRedemptionDialog(false);
            }
        },

        storeId: {
            immediate: true,
            handler(val) {
                if (val) {
                    // window.Pusher.logToConsole = true;

                    var self = this;

                    this.pusher = new window.Pusher("9db4ecb89daebe1a42a0", {
                        cluster: "eu"
                    });

                    this.transactionChannel = this.pusher.subscribe(
                        `transaction-for-store-${val}`
                    );

                    this.transactionChannel.bind("new-transaction", function(
                        data
                    ) {
                        self.transactions.unshift(data);
                    });

                    this.redemptionChannel = this.pusher.subscribe(
                        `redemption-for-store-${val}`
                    );

                    this.redemptionChannel.bind("new-redeem", function(data) {
                        data.rejectLoading = false;
                        data.acceptLoading = false;
                        self.addRedemption(data);
                        setTimeout(
                            () => self.removeRedemption(data.voucher),
                            30000
                        );
                    });
                }
            }
        }
    }
};
</script>

<style scoped>
.b-timer-holder {
    height: 4px;
    background-color: #bbdefb;
}

.b-timer {
    height: 4px;
    background-color: #2196f3;
    animation: timer 30s linear;
}

@keyframes timer {
    0% {
        width: 100%;
    }

    100% {
        width: 0;
    }
}
</style>
