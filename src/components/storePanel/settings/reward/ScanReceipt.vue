<template>
    <v-card class="mt-5" outlined>
        <v-card-title class="grey lighten-3">
            <v-col cols="10" class="pa-0">
                Scan Receipt
                <br />
                <span class="font-weight-light">
                    {{ scanReceipt ? "(Active)" : "(Inactive)" }}
                </span>
            </v-col>

            <v-col cols="2" class="pa-0">
                <v-switch
                    v-model="scanReceipt"
                    color="secondary"
                    class="pt-0 mb-2 mt-1"
                ></v-switch>
            </v-col>
        </v-card-title>

        <v-card-text class="pt-5">
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-icon
                        color="secondary"
                        v-text="icons.mdiInformation"
                    ></v-icon>
                </v-col>
                <v-col cols="11" class="pl-1">
                    Once activated, your customers will be able to scan the
                    receipts from your store.
                </v-col>

                <v-col cols="6" class="pr-1">
                    <h4 class="subtitle-2 mt-1">
                        Business Telephone Number
                    </h4>
                    <v-text-field
                        type="number"
                        color="secondary"
                        outlined
                        dense
                        clearable
                        hide-details
                    ></v-text-field>
                </v-col>

                <v-col cols="6" class="pl-1">
                    <h4 class="subtitle-2 mt-1">
                        Tax Id
                    </h4>
                    <v-text-field
                        type="number"
                        color="secondary"
                        outlined
                        dense
                        clearable
                        hide-details
                    ></v-text-field>
                </v-col>

                <v-col cols="6" class="pr-1">
                    <h4 class="subtitle-2 mt-1">
                        Business Address
                    </h4>
                    <v-text-field
                        color="secondary"
                        outlined
                        dense
                        clearable
                        hide-details
                    ></v-text-field>
                </v-col>

                <v-col cols="6" class="pl-1">
                    <h4 class="subtitle-2 mt-1">
                        Business name
                    </h4>
                    <v-text-field
                        color="secondary"
                        outlined
                        dense
                        clearable
                        hide-details
                    ></v-text-field>
                </v-col>

                <v-col cols="6" class="pr-1">
                    <h4 class="subtitle-2 mt-1">
                        VAT 1
                    </h4>
                    <v-text-field
                        type="number"
                        color="secondary"
                        outlined
                        dense
                        clearable
                        hide-details
                        :append-icon="icons.mdiPercent"
                    ></v-text-field>
                </v-col>

                <v-col cols="6" class="pl-1">
                    <h4 class="subtitle-2 mt-1">
                        VAT 2
                    </h4>
                    <v-text-field
                        type="number"
                        color="secondary"
                        outlined
                        dense
                        clearable
                        hide-details
                        :append-icon="icons.mdiPercent"
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-btn color="secondary" class="text-capitalize mt-5" depressed
                >update details</v-btn
            >
        </v-card-text>
    </v-card>
</template>

<script>
import { mdiInformation, mdiPercent } from "@mdi/js";

export default {
    name: "ScanReceipt",

    data: () => ({
        icons: { mdiInformation, mdiPercent },
        scanReceipt: true
    })
};
</script>
