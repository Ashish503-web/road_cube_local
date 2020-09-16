<template>
    <v-container>
        <v-card flat>
            <v-row>
                <v-col>
                    <v-card-title class="pb-0">Maroudas Optika</v-card-title>
                    <h4 class="subtitle-1 success--text pl-4">online</h4>
                </v-col>
                <v-col>
                    <v-card-title class="pb-0 justify-center">80</v-card-title>
                    <v-card-title
                        class="pa-0 font-weight-light justify-center text--secondary"
                        >Customer</v-card-title
                    >
                </v-col>
                <v-col>
                    <v-card-title class="pb-0 justify-center"
                        >1.748</v-card-title
                    >
                    <v-card-title
                        class="pa-0 font-weight-light justify-center text--secondary"
                        >Transactions</v-card-title
                    >
                </v-col>
                <v-col>
                    <v-card-title class="pb-0 justify-center"
                        >€11.118.056.779,71</v-card-title
                    >
                    <v-card-title
                        class="pa-0 font-weight-light justify-center text--secondary"
                        >Total</v-card-title
                    >
                </v-col>
            </v-row>
        </v-card>

        <v-row class="mx-1" style="background: #eaedf1">
            <v-col cols="3">
                <v-hover v-slot:default="{ hover }">
                    <v-card
                        tile
                        class="pa-5"
                        outlined
                        :elevation="hover ? 3 : 0"
                    >
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="center"
                        >
                            <v-col cols="auto">
                                <v-sheet
                                    color="primary"
                                    dark
                                    class="rounded-circle"
                                >
                                    <v-icon
                                        class="ma-3"
                                        large
                                        v-text="icons.mdiBinoculars"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col cols="auto">
                                <v-card-title
                                    class="subtitle-1 font-weight-bold pa-0 justify-end"
                                    >58734</v-card-title
                                >
                                <h4
                                    class="subtitle-2 font-weight-regular text--secondary"
                                >
                                    Shows on Map
                                </h4>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col cols="3">
                <v-hover v-slot:default="{ hover }">
                    <v-card
                        tile
                        class="pa-5"
                        outlined
                        :elevation="hover ? 3 : 0"
                    >
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="center"
                        >
                            <v-col cols="auto">
                                <v-sheet
                                    color="primary"
                                    dark
                                    class="rounded-circle"
                                >
                                    <v-icon
                                        class="ma-3"
                                        large
                                        v-text="icons.mdiCursorDefault"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col cols="auto">
                                <v-card-title
                                    class="subtitle-1 font-weight-bold pa-0 justify-end"
                                    >8244</v-card-title
                                >
                                <h4
                                    class="subtitle-2 font-weight-regular text--secondary"
                                >
                                    Clicks
                                </h4>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col cols="3">
                <v-hover v-slot:default="{ hover }">
                    <v-card
                        tile
                        class="pa-5"
                        outlined
                        :elevation="hover ? 3 : 0"
                    >
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="center"
                        >
                            <v-col cols="auto">
                                <v-sheet
                                    color="primary"
                                    dark
                                    class="rounded-circle"
                                >
                                    <v-icon
                                        class="ma-3"
                                        large
                                        v-text="icons.mdiCompassOutline"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col cols="auto">
                                <v-card-title
                                    class="subtitle-1 font-weight-bold pa-0 justify-end"
                                    >21</v-card-title
                                >
                                <h4
                                    class="subtitle-2 font-weight-regular text--secondary"
                                >
                                    Click on Navigate
                                </h4>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col cols="3">
                <v-hover v-slot:default="{ hover }">
                    <v-card
                        tile
                        class="pa-5"
                        outlined
                        :elevation="hover ? 3 : 0"
                    >
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="center"
                        >
                            <v-col cols="auto">
                                <v-sheet
                                    color="primary"
                                    dark
                                    class="rounded-circle"
                                >
                                    <v-icon
                                        class="ma-3"
                                        large
                                        v-text="icons.mdiPhone"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col cols="auto">
                                <v-card-title
                                    class="subtitle-1 font-weight-bold pa-0 justify-end"
                                    >11</v-card-title
                                >
                                <h4
                                    class="subtitle-2 font-weight-regular text--secondary"
                                >
                                    Phone Clicks
                                </h4>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col cols="6">
                <v-hover v-slot:default="{ hover }">
                    <v-card
                        tile
                        class="pa-5"
                        outlined
                        :elevation="hover ? 3 : 0"
                    >
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="center"
                        >
                            <v-col cols="auto">
                                <v-sheet
                                    color="primary"
                                    dark
                                    class="rounded-circle"
                                >
                                    <v-icon
                                        class="ma-3"
                                        large
                                        v-text="icons.mdiWallet"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col class="ml-4">
                                <v-card-title
                                    class="subtitle-1 font-weight-bold pa-0"
                                    >Payments Last 12 Hours</v-card-title
                                >
                                <h4
                                    class="subtitle-2 font-weight-regular text--secondary"
                                >
                                    Per Hour
                                </h4>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col cols="6">
                <v-hover v-slot:default="{ hover }">
                    <v-card
                        tile
                        class="pa-5"
                        outlined
                        :elevation="hover ? 3 : 0"
                    >
                        <v-row
                            no-gutters
                            justify="space-between"
                            align="center"
                        >
                            <v-col cols="auto">
                                <v-sheet
                                    color="primary"
                                    dark
                                    class="rounded-circle"
                                >
                                    <v-icon
                                        class="ma-3"
                                        large
                                        v-text="icons.mdiWallet"
                                    ></v-icon>
                                </v-sheet>
                            </v-col>
                            <v-col class="ml-4">
                                <v-card-title
                                    class="subtitle-1 font-weight-bold pa-0"
                                    >Payments Last Week</v-card-title
                                >
                                <h4
                                    class="subtitle-2 font-weight-regular text--secondary"
                                >
                                    Per Day
                                </h4>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col cols="12">
                <v-card tile flat>
                    <v-card-title>Transactions</v-card-title>
                    <v-sheet
                        class="v-sheet--offset mx-auto"
                        color="primary"
                        max-width="calc(100% - 32px)"
                    >
                        <v-sparkline
                            :labels="labels"
                            :value="value"
                            color="white"
                            line-width="2"
                            padding="16"
                        ></v-sparkline>
                    </v-sheet>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mdiBinoculars } from "@mdi/js";
import { mdiCursorDefault } from "@mdi/js";
import { mdiCompassOutline } from "@mdi/js";
import { mdiPhone } from "@mdi/js";
import { mdiWallet } from "@mdi/js";

export default {
    name: "StorePanelHome",

    data: () => ({
        labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
        value: [200, 675, 410, 390, 310, 460, 250, 240, 220, 370],
        icons: {
            mdiBinoculars,
            mdiCursorDefault,
            mdiCompassOutline,
            mdiPhone,
            mdiWallet
        }
    })
};
</script>
