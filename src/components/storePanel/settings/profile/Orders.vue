<template>
    <b-standard-card title="Orders">
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
                        v-model="orderOption"
                        :label="orderOption"
                        color="secondary"
                        true-value="On"
                        false-value="Off"
                        class="mb-3 mt-5"
                    ></v-switch>
                </v-col>

                <v-col cols="12" sm="4" class="subtitle-2">
                    Limit:
                    <v-text-field
                        label="Radius m2"
                        color="secondary"
                        class="mt-4"
                        outlined
                        dense
                        clearable
                        :disabled="orderOption === 'Off'"
                    ></v-text-field>
                </v-col>

                <template v-if="orderOption === 'On'">
                    <v-col cols="12" sm="6" class="subtitle-2">
                        Validate minimum amount for delivery after discount :
                        <v-switch
                            v-model="validateMinAmount"
                            :label="validateMinAmount"
                            color="secondary"
                            true-value="On"
                            false-value="Off"
                            class="mb-3 mt-5"
                        ></v-switch>
                    </v-col>

                    <v-col cols="12" sm="4" class="subtitle-2">
                        Minimum Amount for Delivery:
                        <v-text-field
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
                            v-model="cardPayment"
                            :label="cardPayment"
                            color="secondary"
                            true-value="On"
                            false-value="Off"
                            class="mb-4"
                        ></v-switch>
                    </v-col>

                    <v-col cols="12" sm="4" class="subtitle-2">
                        Cash payments:
                        <v-switch
                            v-model="cashPayment"
                            :label="cashPayment"
                            color="secondary"
                            true-value="On"
                            false-value="Off"
                            class="mb-4"
                        ></v-switch>
                    </v-col>

                    <v-col cols="12" sm="4" class="subtitle-2">
                        Cash on delivery Fee:
                        <v-text-field
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

export default {
    name: "Orders",

    data: () => ({
        icons: {
            mdiCurrencyEur
        },
        orderOption: "Off",
        validateMinAmount: "Off",
        cardPayment: "On",
        cashPayment: "On"
    })
};
</script>
