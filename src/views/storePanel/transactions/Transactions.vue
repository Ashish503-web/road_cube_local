<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat color="#EAEDF191">
                <v-spacer></v-spacer>
                <v-btn rounded color="primary" class="text-capitalize ">
                    <v-icon
                        class="mr-1"
                        v-text="icons.mdiCellphoneIphone"
                    ></v-icon
                    >open digital payments
                </v-btn>

                <v-btn rounded color="primary" class="text-capitalize mx-2">
                    <v-icon class="mr-1" v-text="icons.mdiPrinter"></v-icon>fund
                    closure
                </v-btn>

                <v-btn rounded color="primary" class="text-capitalize">
                    <v-icon class="mr-1" v-text="icons.mdiOpenInNew"></v-icon
                    >download all transactions
                </v-btn>
            </v-toolbar>

            <v-row no-gutters style="background: #EAEDF191" class="px-3 pt-3">
                <v-col cols="auto">
                    <v-tabs v-model="tab">
                        <v-tab class="text-capitalize">pending</v-tab>
                        <v-tab class="text-capitalize">paid</v-tab>
                    </v-tabs>
                </v-col>
            </v-row>

            <v-tabs-items v-model="tab">
                <Pending />
                <Paid />
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiCellphoneIphone, mdiPrinter, mdiOpenInNew } from "@mdi/js";
import Pending from "./Pending";
import Paid from "./Paid";

export default {
    name: "Transactions",
    components: { Pending, Paid },
    data: () => ({
        icons: {
            mdiCellphoneIphone,
            mdiPrinter,
            mdiOpenInNew
        },
        tab: 0
    })
};
</script>
