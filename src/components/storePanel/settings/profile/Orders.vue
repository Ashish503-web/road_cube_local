<template>
    <b-standard-card 
        title="Orders"
        @submit="submitChanges">
        <v-container>
            <v-row
                no-gutters
                justify="space-between"
                align="center"
                class="px-4"
            >
                <v-col cols="12" sm="4" class="subtitle-2">
                    Toogle Order option:
                    <v-switch
                        v-model="orderSettings.enabled"
                        :label="orderSettings.enabled ? 'On' : 'Off'"
                        color="secondary"
                        class="mb-3 mt-5"
                    ></v-switch>
                </v-col>

                <v-col cols="12" sm="4" class="subtitle-2">
                    Limit:
                    <v-text-field
                        v-model="orderSettings.order_range"
                        label="Radius m2"
                        color="secondary"
                        class="mt-4"
                        outlined
                        dense
                        clearable
                        :disabled="!orderSettings.enabled"
                    ></v-text-field>
                </v-col>

                <template v-if="orderSettings.enabled">
                    <v-col cols="12" sm="6" class="subtitle-2">
                        Validate minimum amount for delivery after discount :
                        <v-switch
                            v-model="orderSettings.validate_min_delivery_price_after_discount"
                            :label="orderSettings.validate_min_delivery_price_after_discount ? 'On' : 'Off'"
                            color="secondary"
                            class="mb-3 mt-5"
                        ></v-switch>
                    </v-col>

                    <v-col cols="12" sm="4" class="subtitle-2">
                        Minimum Amount for Delivery:
                        <v-text-field
                            v-model="orderSettings.delivery_min_price"
                            :disabled="!orderSettings.validate_min_delivery_price_after_discount"
                            type="number"
                            label="Amount"
                            color="secondary"
                            class="mt-4"
                            outlined
                            dense
                            clearable
                            :append-outer-icon="icons.mdiCurrencyEur"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="4" class="subtitle-2">
                        Card payments:
                        <v-switch
                            v-model="orderSettings.delivery_card_payment"
                            :label="orderSettings.delivery_card_payment ? 'On' : 'Off'"
                            color="secondary"
                            class="mb-4"
                        ></v-switch>
                    </v-col>

                    <v-col cols="12" sm="4" class="subtitle-2">
                        Cash payments:
                        <v-switch
                            v-model="orderSettings.delivery_cash_payment"
                            :label="orderSettings.delivery_cash_payment ? 'On' : 'Off'"
                            color="secondary"
                            class="mb-4"
                        ></v-switch>
                    </v-col>

                    <v-col cols="12" sm="4" class="subtitle-2">
                        Cash on delivery Fee:
                        <v-text-field
                            v-model="orderSettings.cash_on_delivery_fee"
                            type="number"
                            label="Amount"
                            color="secondary"
                            class="mt-4"
                            outlined
                            dense
                            clearable
                            :append-outer-icon="icons.mdiCurrencyEur"
                        ></v-text-field>
                    </v-col>
                </template>
            </v-row>
        </v-container>
    </b-standard-card>
</template>

<script>
import { mdiCurrencyEur } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "Orders",

    data: () => ({
        icons: {
            mdiCurrencyEur
        }
    }),
    computed: {
        orderSettings: {
            get() {
                return this.$store.state.storePanel.store.order_settings;
            },
        }
    },

    methods: {
        ...mapMutations("storePanel", ["setOrderSettings"]),
        ...mapActions("storePanel/settings/profile", ["updateOrdersData"]),
        submitChanges(){
            this.setOrderSettings(this.orderSettings);
            this.updateOrdersData(this.orderSettings)
        }
    }
};
</script>
