<template>
    <v-container fluid class="b-container">
        <v-row>
            <v-col cols="12">
                <v-card outlined tile>
                    <v-row class="pb-3">
                        <v-col cols="12" sm="6" md="6" lg="3">
                            <v-card-title class="pb-0 justify-center"
                                >Maroudas Optika</v-card-title
                            >
                            <h4 class="subtitle-1 success--text pl-4 text-center">
                                online
                            </h4>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" lg="3">
                            <v-card-title class="pb-0 justify-center"
                                >80</v-card-title
                            >
                            <v-card-title
                                class="pa-0 font-weight-light justify-center text--secondary"
                            >
                                <v-icon
                                    v-text="icons.mdiAccountGroup"
                                    class="mr-1"
                                ></v-icon>
                                Customer
                            </v-card-title>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" lg="3">
                            <v-card-title class="pb-0 justify-center"
                                >1.748</v-card-title
                            >
                            <v-card-title
                                class="pa-0 font-weight-light justify-center text--secondary"
                            >
                                <v-icon
                                    v-text="icons.mdiDatabase"
                                    class="mr-1"
                                ></v-icon>
                                Transactions
                            </v-card-title>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" lg="3">
                            <v-card-title class="pb-0 justify-center"
                                >€11.118.056.779,71</v-card-title
                            >
                            <v-card-title
                                class="pa-0 font-weight-light justify-center text--secondary"
                            >
                                <v-icon
                                    v-text="icons.mdiCurrencyEur"
                                    class="mr-1"
                                ></v-icon>
                                Total
                            </v-card-title>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-avatar color="accent" size="60">
                                <v-icon
                                    dark
                                    large
                                    v-text="icons.mdiBinoculars"
                                ></v-icon>
                            </v-avatar>
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
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-avatar color="accent" size="60">
                                <v-icon
                                    dark
                                    large
                                    v-text="icons.mdiCursorDefault"
                                ></v-icon>
                            </v-avatar>
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
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-avatar color="accent" size="60">
                                <v-icon
                                    dark
                                    large
                                    v-text="icons.mdiCompassOutline"
                                ></v-icon>
                            </v-avatar>
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
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-avatar color="accent" size="60">
                                <v-icon
                                    dark
                                    large
                                    v-text="icons.mdiPhone"
                                ></v-icon>
                            </v-avatar>
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
            </v-col>

            <v-col cols="12" sm="6">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-avatar color="accent" size="60">
                                <v-icon
                                    dark
                                    large
                                    v-text="icons.mdiWallet"
                                ></v-icon>
                            </v-avatar>
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
            </v-col>

            <v-col cols="12" sm="6">
                <v-card tile class="pa-5" outlined>
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-avatar color="accent" size="60">
                                <v-icon
                                    dark
                                    large
                                    v-text="icons.mdiWallet"
                                ></v-icon>
                            </v-avatar>
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
            </v-col>

            <v-col cols="12">
                <v-card tile outlined>
                    <v-card-title>Transactions</v-card-title>
                    <v-sheet
                        class="v-sheet--offset mx-auto"
                        max-width="calc(100% - 32px)"
                    >
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
import {
    mdiAccountGroup,
    mdiDatabase,
    mdiCurrencyEur,
    mdiBinoculars,
    mdiCursorDefault,
    mdiCompassOutline,
    mdiPhone,
    mdiWallet
} from "@mdi/js";

const gradients = [
    ["#222"],
    ["#42b3f4"],
    ["red", "orange", "yellow"],
    ["purple", "violet"],
    ["#00c6ff", "#F0F", "#FF0"],
    ["#f72047", "#ffd200", "#1feaea"]
];

export default {
    name: "StorePanelHome",

    data: () => ({
        icons: {
            mdiAccountGroup,
            mdiDatabase,
            mdiCurrencyEur,
            mdiBinoculars,
            mdiCursorDefault,
            mdiCompassOutline,
            mdiPhone,
            mdiWallet
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
        autoLineWidth: false
    })
};
</script>
