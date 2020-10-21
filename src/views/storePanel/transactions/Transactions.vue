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

            <v-row no-gutters style="background: #eaedf191" class="px-3 pt-3">
                <v-col cols="auto">
                    <v-tabs v-model="tab" color="secondary">
                        <v-tab
                            v-for="tab in tabs"
                            :key="tab.name"
                            v-text="tab.name"
                            :to="tab.to"
                            class="text-capitalize"
                        ></v-tab>
                    </v-tabs>
                </v-col>
            </v-row>

            <v-tabs-items v-model="tab">
                <router-view></router-view>
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiCellphoneIphone,
    mdiFormatListCheckbox,
    mdiPrinter,
    mdiOpenInNew,
} from "@mdi/js";

export default {
    name: "Transactions",

    data: () => ({
        icons: {
            mdiCellphoneIphone,
            mdiFormatListCheckbox,
            mdiPrinter,
            mdiOpenInNew,
        },
        test: "",
        tab: "storePanel/transactions/pending",
        tabs: [
            { to: "/storePanel/transactions/pending", name: "Pending" },
            { to: "/storePanel/transactions/paid", name: "Paid" },
        ],
    }),

    watch: {
        $route: {
            immediate: true,
            handler(val) {
                if (val.path === "/storePanel/transactions") {
                    this.$router.push("/storePanel/transactions/pending");
                }
            },
        },
    },
};
</script>
