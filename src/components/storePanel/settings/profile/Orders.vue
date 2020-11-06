<template>
    <b-standard-card
        :title="translations.title[lang]"
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
                {{ translations.toggle[lang] }}:
                <v-switch
                    v-model="orders.enabled"
                    :label="
                        orders.enabled
                            ? translations.on[lang]
                            : translations.off[lang]
                    "
                    color="secondary"
                    class="mt-5 mb-2 pt-0"
                    hide-details
                ></v-switch>
            </v-col>

            <v-col cols="12" sm="5" class="subtitle-2">
                {{ translations.limit[lang] }}:
                <b-text-field
                    v-model="orders.order_range"
                    :label="translations.radius[lang]"
                    :disabled="!orders.enabled"
                ></b-text-field>
            </v-col>

            <template v-if="orders.enabled">
                <v-col cols="12" sm="6" class="subtitle-2 mt-3">
                    {{ translations.validate[lang] }}:
                    <v-switch
                        v-model="
                            orders.validate_min_delivery_price_after_discount
                        "
                        :label="
                            orders.validate_min_delivery_price_after_discount
                                ? translations.on[lang]
                                : translations.off[lang]
                        "
                        color="secondary"
                        class="mt-5 mb-2 pt-0"
                        hide-details
                    ></v-switch>
                </v-col>

                <v-col cols="12" sm="5" class="subtitle-2 mt-3">
                    {{ translations.min[lang] }}:
                    <b-text-field
                        v-model="orders.delivery_min_price"
                        :disabled="
                            !orders.validate_min_delivery_price_after_discount
                        "
                        type="number"
                        :label="translations.amount[lang]"
                        append-icon="icons.mdiCurrencyEur"
                    ></b-text-field>
                </v-col>

                <v-col cols="12" sm="6" class="subtitle-2 mt-3">
                    {{ translations.cardPayments[lang] }}:
                    <v-switch
                        v-model="orders.delivery_card_payment"
                        :label="
                            orders.delivery_card_payment
                                ? translations.on[lang]
                                : translations.off[lang]
                        "
                        color="secondary"
                        class="mt-0"
                        hide-details
                    ></v-switch>

                    <div class="mt-3">
                        {{ translations.cashPayments[lang] }}:
                        <v-switch
                            v-model="orders.delivery_cash_payment"
                            :label="
                                orders.delivery_cash_payment
                                    ? translations.on[lang]
                                    : translations.off[lang]
                            "
                            color="secondary"
                            class="mt-0"
                            hide-details
                        ></v-switch>
                    </div>
                </v-col>

                <v-col cols="12" sm="5" class="subtitle-2 mt-3">
                    {{ translations.cashDelivery[lang] }}:
                    <b-text-field
                        v-model="orders.cash_on_delivery_fee"
                        type="number"
                        :label="translations.amount[lang]"
                        append-icon="mdiCurrencyEur"
                    ></b-text-field>
                </v-col>
            </template>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/orders";

export default {
    name: "Orders",

    mixins: [translations],

    data: () => ({
        orders: {}
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

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
