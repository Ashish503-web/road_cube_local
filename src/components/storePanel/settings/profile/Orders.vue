<template>
    <b-standard-card
        title="Orders"
        :loading="loading"
        :error-message="errorMessage"
        @submit="
            updateOrders({
                type: 'orders',
                item: orders
            })
        "
    >
        <v-row no-gutters justify="space-between">
            <v-col cols="12" sm="6" class="subtitle-2">
                Toogle Order option:
                <v-switch
                    v-model="orders.enabled"
                    :label="orders.enabled ? 'On' : 'Off'"
                    color="secondary"
                    class="mt-5 mb-2 pt-0"
                    hide-details
                ></v-switch>
            </v-col>

            <v-col cols="12" sm="5" class="subtitle-2">
                Limit:
                <b-text-field
                    v-model="orders.order_range"
                    label="Radius m2"
                    :disabled="!orders.enabled"
                ></b-text-field>
            </v-col>

            <template v-if="orders.enabled">
                <v-col cols="12" sm="6" class="subtitle-2 mt-3">
                    Validate minimum amount for delivery after discount :
                    <v-switch
                        v-model="
                            orders.validate_min_delivery_price_after_discount
                        "
                        :label="
                            orders.validate_min_delivery_price_after_discount
                                ? 'On'
                                : 'Off'
                        "
                        color="secondary"
                        class="mt-5 mb-2 pt-0"
                        hide-details
                    ></v-switch>
                </v-col>

                <v-col cols="12" sm="5" class="subtitle-2 mt-3">
                    Minimum Amount for Delivery:
                    <b-text-field
                        v-model="orders.delivery_min_price"
                        :disabled="
                            !orders.validate_min_delivery_price_after_discount
                        "
                        type="number"
                        label="Amount"
                        append-icon="icons.mdiCurrencyEur"
                    ></b-text-field>
                </v-col>

                <v-col cols="12" sm="6" class="subtitle-2 mt-3">
                    Card payments:
                    <v-switch
                        v-model="orders.delivery_card_payment"
                        :label="orders.delivery_card_payment ? 'On' : 'Off'"
                        color="secondary"
                        class="mt-0"
                        hide-details
                    ></v-switch>

                    <div class="mt-3">
                        Cash payments:
                        <v-switch
                            v-model="orders.delivery_cash_payment"
                            :label="orders.delivery_cash_payment ? 'On' : 'Off'"
                            color="secondary"
                            class="mt-0"
                            hide-details
                        ></v-switch>
                    </div>
                </v-col>

                <v-col cols="12" sm="5" class="subtitle-2 mt-3">
                    Cash on delivery Fee:
                    <b-text-field
                        v-model="orders.cash_on_delivery_fee"
                        type="number"
                        label="Amount"
                        append-icon="mdiCurrencyEur"
                    ></b-text-field>
                </v-col>
            </template>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "Orders",

    data: () => ({
        orders: {}
    }),

    computed: {
        loading() {
            return this.$store.state.storePanel.settings.profile.loading.orders;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .orders;
        }
    },

    methods: {
        ...mapActions("storePanel/settings/profile", ["updateOrders"])
    },

    watch: {
        ["$store.state.storePanel.store"]: {
            immediate: true,
            handler(val) {
                this.orders = {
                    enabled: val.order_settings.enabled,

                    order_range: val.order_settings.order_range,

                    validate_min_delivery_price_after_discount:
                        val.order_settings
                            .validate_min_delivery_price_after_discount,

                    delivery_min_price: val.order_settings.delivery_min_price,

                    delivery_card_payment:
                        val.order_settings.delivery_card_payment,

                    delivery_cash_payment:
                        val.order_settings.delivery_cash_payment,

                    cash_on_delivery_fee:
                        val.order_settings.cash_on_delivery_fee
                };
            }
        }
    }
};
</script>
