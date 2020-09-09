<template>
    <v-container class="px-4">
        <v-sheet color="#eaedf1" class="pa-4 text-right">
            <v-btn color="primary" class="text-capitalize mt-4">
                <v-icon class="mr-1" v-text="icons.mdiCellphoneIphone"></v-icon>open digital payments
            </v-btn>

            <v-btn color="primary" class="text-capitalize mx-2 mt-4">
                <v-icon class="mr-1" v-text="icons.mdiPrinter"></v-icon>fund closure
            </v-btn>

            <v-btn color="primary" class="text-capitalize mt-4">
                <v-icon class="mr-1" v-text="icons.mdiOpenInNew"></v-icon>download all transactions
            </v-btn>

            <v-row class="mt-5" no-gutters>
                <v-col cols="auto">
                    <v-tabs v-model="tab">
                        <v-tab class="text-capitalize">pending</v-tab>
                        <v-tab class="text-capitalize">paid</v-tab>
                    </v-tabs>
                </v-col>

                <v-col cols="12">
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-card-title class="justify-end">
                                <v-col cols="4">
                                    <v-text-field
                                        label="Search"
                                        outlined
                                        dense
                                        clearable
                                        :prepend-inner-icon="icons.mdiMagnify"
                                    ></v-text-field>
                                </v-col>
                            </v-card-title>
                            <v-data-table
                                :headers="pendingHeaders"
                                :footer-props="{ itemsPerPageOptions }"
                            ></v-data-table>
                        </v-tab-item>
                        <v-tab-item>
                            <v-card-title class="justify-end">
                                <v-col cols="4">
                                    <v-text-field
                                        label="Search"
                                        outlined
                                        dense
                                        clearable
                                        :prepend-inner-icon="icons.mdiMagnify"
                                    ></v-text-field>
                                </v-col>
                            </v-card-title>
                            <v-data-table
                                :headers="paidHeaders"
                                :footer-props="{ itemsPerPageOptions }"
                            ></v-data-table>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiCellphoneIphone,
    mdiPrinter,
    mdiOpenInNew,
    mdiMagnify,
} from "@mdi/js";

export default {
    name: "Transactions",

    data: () => ({
        icons: {
            mdiCellphoneIphone,
            mdiPrinter,
            mdiOpenInNew,
            mdiMagnify,
        },
        tab: 0,
        itemsPerPageOptions: [10, 20, 30, -1],
        pendingHeaders: [
            { text: "User", value: "user" },
            { text: "Amount", value: "amount" },
            { text: "Product", value: "product" },
            { text: "Address", value: "address" },
            { text: "Information", value: "information" },
            { text: "Actions", value: "actions" },
        ],
        paidHeaders: [
            { text: "User", value: "user" },
            { text: "Amount", value: "amount" },
            { text: "Points", value: "points" },
            { text: "Product", value: "product" },
            { text: "Date", value: "date" },
            { text: "Information", value: "information" },
        ],
    }),
};
</script>