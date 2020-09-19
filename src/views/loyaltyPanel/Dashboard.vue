<template>
    <v-card class="pa-0" flat>
        <v-card flat>
            <v-row>
                <v-col cols="4">
                    <v-card-title class="pb-0">Dashboard</v-card-title>
                </v-col>
                <v-col cols="2">
                    <v-card-title class="pb-0 justify-center">23</v-card-title>
                    <v-card-title
                        class="pa-0 font-weight-light justify-center text--secondary"
                    >
                        <v-icon v-text="icons.mdiAccountGroup" class="mr-1">
                        </v-icon>
                        Customer
                    </v-card-title>
                </v-col>
                <v-col cols="2">
                    <v-card-title class="pb-0 justify-center">32</v-card-title>
                    <v-card-title
                        class="pa-0 font-weight-light justify-center text--secondary"
                    >
                        <v-icon v-text="icons.mdiDatabase" class="mr-1">
                        </v-icon
                        >Transactions
                    </v-card-title>
                </v-col>
                <v-col cols="2">
                    <v-card-title class="pb-0 justify-center"
                        >€1.748,18</v-card-title
                    >
                    <v-card-title
                        class="pa-0 font-weight-light justify-center text--secondary"
                    >
                        <v-icon v-text="icons.mdiCurrencyEur" class="mr-1">
                        </v-icon>
                        Total
                    </v-card-title>
                </v-col>
                <v-col cols="2">
                    <v-card-title class="pb-0 justify-center"
                        >1630</v-card-title
                    >
                    <v-card-title
                        class="pa-0 font-weight-light justify-center text--secondary"
                    >
                        <v-icon v-text="icons.mdiTrophyVariant" class="mr-1">
                        </v-icon>
                        KAt
                    </v-card-title>
                </v-col>
            </v-row>
        </v-card>

        <v-row class="pa-10 pt-8 pb-8" style="background: #eaedf1">
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
                                    color="#27ae60"
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
                                    color="#e67e22"
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
                                    color="#af64cc"
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
                                    color="#e74c3c"
                                    dark
                                    class="rounded-circle"
                                >
                                    <v-icon
                                        class="ma-3"
                                        large
                                        v-text="icons.mdiDatabase"
                                    ></v-icon>
                                </v-sheet>
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
                                    color="accent"
                                    dark
                                    class="rounded-circle"
                                >
                                    <v-icon
                                        class="ma-3"
                                        large
                                        v-text="icons.mdiWallet"
                                        style="transform: rotate(-90deg)"
                                    ></v-icon>
                                </v-sheet>
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
                                    color="accent"
                                    dark
                                    class="rounded-circle"
                                >
                                    <v-icon
                                        class="ma-3"
                                        large
                                        v-text="icons.mdiWallet"
                                        style="transform: rotate(-90deg)"
                                    ></v-icon>
                                </v-sheet>
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
                </v-hover>
            </v-col>

            <v-col cols="6">
                <v-card tile flat min-height="400">
                    <v-card tile flat color="#f9fafc">
                        <v-card-title
                            class="subtitle-1 font-weight-regular pt-2 pb-2"
                            >Transactions</v-card-title
                        >
                    </v-card>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card flat tile min-height="400" align="center">
                    <v-card tile flat color="#f9fafc">
                        <v-card-title
                            class="subtitle-1 font-weight-regular pt-2 pb-2"
                            >View clicks</v-card-title
                        >
                    </v-card>
                </v-card>
            </v-col>

            <v-col cols="3">
                <v-card flat tile min-height="400" align="center">
                    <v-card tile flat color="#f9fafc">
                        <v-card-title
                            class="subtitle-1 font-weight-regular pt-2 pb-2"
                            >View navigations</v-card-title
                        >
                    </v-card>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
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
        }
    })
};
</script>
