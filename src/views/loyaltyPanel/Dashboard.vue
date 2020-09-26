<template>
    <v-container fluid class="b-container">
        <v-row>
            <v-col cols="12">
                <v-card tile outlined>
                    <v-row>
                        <v-col sm="12" md="12" lg="4" class="d-none d-sm-block">
                            <v-card-title>Dashboard</v-card-title>
                        </v-col>

                        <v-col cols="12" sm="12" md="3" lg="2">
                            <v-card-title class="pb-0 justify-center"
                                >23</v-card-title
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
                        <v-col cols="12" sm="12" md="3" lg="2">
                            <v-card-title class="pb-0 justify-center"
                                >32</v-card-title
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
                        <v-col cols="12" sm="12" md="3" lg="2">
                            <v-card-title class="pb-0 justify-center"
                                >€1.748,18</v-card-title
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
                        <v-col cols="12" sm="12" md="3" lg="2">
                            <v-card-title class="pb-0 justify-center"
                                >1630</v-card-title
                            >
                            <v-card-title
                                class="pa-0 font-weight-light justify-center text--secondary"
                            >
                                <v-icon
                                    v-text="icons.mdiTrophyVariant"
                                    class="mr-1"
                                ></v-icon
                                >KAt
                            </v-card-title>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <v-card tile outlined class="pa-5">
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
                                >3540</v-card-title
                            >
                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                            >
                                User views
                            </h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <v-card tile outlined class="pa-5">
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
                                >197</v-card-title
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
                <v-card tile outlined class="pa-5">
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
                                >42</v-card-title
                            >
                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                            >
                                User leads
                            </h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12" sm="6" lg="3">
                <v-card tile outlined class="pa-5">
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-avatar color="accent" size="60">
                                <v-icon
                                    dark
                                    large
                                    v-text="icons.mdiDatabase"
                                ></v-icon>
                            </v-avatar>
                        </v-col>
                        <v-col cols="auto">
                            <v-card-title
                                class="subtitle-1 font-weight-bold pa-0 justify-end"
                                >32</v-card-title
                            >
                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                            >
                                Payments
                            </h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card tile outlined class="pa-5">
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
                        <v-col cols="auto">
                            <v-card-title
                                class="subtitle-1 font-weight-bold pa-0"
                                >0 Transactions / 0,00 Total</v-card-title
                            >
                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                                align="end"
                            >
                                Last 7 days
                            </h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12" md="6">
                <v-card tile outlined class="pa-5">
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
                        <v-col cols="auto">
                            <v-card-title
                                class="subtitle-1 font-weight-bold pa-0"
                                >0 Transactions / 0,00 Total</v-card-title
                            >
                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                                align="end"
                            >
                                Last 24 hours
                            </h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12" md="6" sm="12">
                <v-card tile outlined min-height="200">
                    <v-card tile flat color="#f9fafc">
                        <v-card-title
                            class="subtitle-1 font-weight-bold grey lighten-3 py-2"
                            >Transactions</v-card-title
                        >

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
                </v-card>
            </v-col>
            <v-row class="ma-0">
                <v-col cols="12" md="6" sm="12">
                    <v-card outlined tile min-height="200" align="center">
                        <v-card tile flat color="#f9fafc">
                            <v-card-title
                                class="subtitle-1 font-weight-bold grey lighten-3 py-2"
                                >View clicks</v-card-title
                            >
                        </v-card>
                    </v-card>
                </v-col>

                <v-col cols="12" md="6" sm="12">
                    <v-card outlined tile min-height="200" align="center">
                        <v-card tile flat color="#f9fafc">
                            <v-card-title
                                class="subtitle-1 font-weight-bold grey lighten-3 py-2"
                                >View navigations</v-card-title
                            >
                        </v-card>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
</template>

<script>
import {
    mdiAccountGroup,
    mdiDatabase,
    mdiCurrencyEur,
    mdiTrophyVariant,
    mdiBinoculars,
    mdiCursorDefault,
    mdiCompassOutline,
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
    name: "Dashboard",
    data: () => ({
        icons: {
            mdiAccountGroup,
            mdiDatabase,
            mdiCurrencyEur,
            mdiTrophyVariant,
            mdiBinoculars,
            mdiCursorDefault,
            mdiCompassOutline,
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
