<template>
    <v-container fluid class="b-container">
        <v-card flat tile>
            <v-row>
                <v-col>
                    <v-card-title class="pb-0">Maroudas Optika</v-card-title>
                    <h4 class="subtitle-1 success--text pl-4">online</h4>
                </v-col>
                <v-col>
                    <v-card-title class="pb-0 justify-center">80</v-card-title>
                    <v-card-title
                        class="pa-0 font-weight-light justify-center text--secondary"
                    >Customer</v-card-title>
                </v-col>
                <v-col>
                    <v-card-title class="pb-0 justify-center">1.748</v-card-title>
                    <v-card-title
                        class="pa-0 font-weight-light justify-center text--secondary"
                    >Transactions</v-card-title>
                </v-col>
                <v-col>
                    <v-card-title class="pb-0 justify-center">€11.118.056.779,71</v-card-title>
                    <v-card-title
                        class="pa-0 font-weight-light justify-center text--secondary"
                    >Total</v-card-title>
                </v-col>
            </v-row>
        </v-card>

        <v-row style="background: #eaedf1">
            <v-col cols="3">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-sheet color="accent" dark class="rounded-circle">
                                <v-icon class="ma-3" large v-text="icons.mdiBinoculars"></v-icon>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-card-title class="subtitle-1 font-weight-bold pa-0 justify-end">58734</v-card-title>
                            <h4 class="subtitle-2 font-weight-regular text--secondary">Shows on Map</h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-sheet color="accent" dark class="rounded-circle">
                                <v-icon class="ma-3" large v-text="icons.mdiCursorDefault"></v-icon>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-card-title class="subtitle-1 font-weight-bold pa-0 justify-end">8244</v-card-title>
                            <h4 class="subtitle-2 font-weight-regular text--secondary">Clicks</h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-sheet color="accent" dark class="rounded-circle">
                                <v-icon class="ma-3" large v-text="icons.mdiCompassOutline"></v-icon>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-card-title class="subtitle-1 font-weight-bold pa-0 justify-end">21</v-card-title>
                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                            >Click on Navigate</h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-sheet color="accent" dark class="rounded-circle">
                                <v-icon class="ma-3" large v-text="icons.mdiPhone"></v-icon>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-card-title class="subtitle-1 font-weight-bold pa-0 justify-end">11</v-card-title>
                            <h4 class="subtitle-2 font-weight-regular text--secondary">Phone Clicks</h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="6">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-sheet color="accent" dark class="rounded-circle">
                                <v-icon class="ma-3" large v-text="icons.mdiWallet"></v-icon>
                            </v-sheet>
                        </v-col>
                        <v-col class="ml-4">
                            <v-card-title
                                class="subtitle-1 font-weight-bold pa-0"
                            >Payments Last 12 Hours</v-card-title>
                            <h4 class="subtitle-2 font-weight-regular text--secondary">Per Hour</h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="6">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-sheet color="accent" dark class="rounded-circle">
                                <v-icon class="ma-3" large v-text="icons.mdiWallet"></v-icon>
                            </v-sheet>
                        </v-col>
                        <v-col class="ml-4">
                            <v-card-title
                                class="subtitle-1 font-weight-bold pa-0"
                            >Payments Last Week</v-card-title>
                            <h4 class="subtitle-2 font-weight-regular text--secondary">Per Day</h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card tile flat>
                    <v-card-title>Transactions</v-card-title>
                    <v-sheet class="v-sheet--offset mx-auto" max-width="calc(100% - 32px)">
                        <v-sparkline
                            :value="value"
                            :gradient="gradient"
                            :smooth="radius || false"
                            :padding="padding"
                            :line-width="width"
                            :stroke-linecap="lineCap"
                            :gradient-direction="gradientDirection"
                            :fill="fill"
                            :type="type"
                            :auto-line-width="autoLineWidth"
                            auto-draw
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

const gradients = [
    ["#222"],
    ["#42b3f4"],
    ["red", "orange", "yellow"],
    ["purple", "violet"],
    ["#00c6ff", "#F0F", "#FF0"],
    ["#f72047", "#ffd200", "#1feaea"],
];

export default {
    name: "StorePanelHome",

    data: () => ({
        icons: {
            mdiBinoculars,
            mdiCursorDefault,
            mdiCompassOutline,
            mdiPhone,
            mdiWallet,
        },
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: "round",
        gradient: gradients[5],
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        gradientDirection: "top",
        gradients,
        fill: false,
        type: "trend",
        autoLineWidth: false,
    }),
};
</script>
