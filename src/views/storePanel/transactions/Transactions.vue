<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat color="#EAEDF191">
                <v-spacer class="d-none d-sm-block"></v-spacer>

                <v-icon
                    color="secondary"
                    v-text="icons.mdiCellphoneIphone"
                ></v-icon>
                Mobile Payments
                <v-switch
                    color="secondary"
                    class="ml-3"
                    hide-details
                ></v-switch>

                <v-menu offset-y left>
                    <template v-slot:activator="{ on }">
                        <v-btn text v-on="on">
                            <v-icon
                                color="secondary"
                                v-text="icons.mdiFormatListCheckbox"
                            ></v-icon>
                        </v-btn>
                    </template>

                    <v-list dense>
                        <v-list-item-group>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon
                                        color="secondary"
                                        v-text="icons.mdiPrinter"
                                    ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                    >Fund Closure</v-list-item-title
                                >
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon
                                        color="secondary"
                                        v-text="icons.mdiOpenInNew"
                                    ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                    >Download All
                                    Transactions</v-list-item-title
                                >
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
            </v-toolbar>

            <v-row no-gutters style="background: #EAEDF191" class="px-3 pt-3">
                <v-col cols="auto">
                    <v-tabs v-model="tab" color="black">
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
import {
    mdiCellphoneIphone,
    mdiFormatListCheckbox,
    mdiPrinter,
    mdiOpenInNew
} from "@mdi/js";
import Pending from "./Pending";
import Paid from "./Paid";

export default {
    name: "Transactions",
    components: { Pending, Paid },
    data: () => ({
        icons: {
            mdiCellphoneIphone,
            mdiFormatListCheckbox,
            mdiPrinter,
            mdiOpenInNew
        },
        tab: 0
    })
};
</script>
