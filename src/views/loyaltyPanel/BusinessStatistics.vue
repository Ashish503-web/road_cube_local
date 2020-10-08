<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-row>
                <v-col cols="12" lg="4">
                    <v-card color="#394263" dark flat height="100%">
                        <v-card-title class="justify-center">
                            <v-icon
                                large
                                v-text="icons.mdiAccountGroup"
                            ></v-icon>

                            Active Users (payments): 18
                        </v-card-title>
                        <v-card-subtitle class="text-center"
                            >*unique users in the last 2 months
                        </v-card-subtitle>
                    </v-card>
                </v-col>

                <v-col cols="12" lg="4">
                    <v-card color="#394263" height="100%" flat dark>
                        <v-card-title class="justify-center fill-height">
                            <v-icon
                                large
                                v-text="icons.mdiHumanHandsup"
                            ></v-icon>
                            All Unique Users: 25
                        </v-card-title>
                    </v-card>
                </v-col>

                <v-col cols="12" lg="4">
                    <v-card color="#394263" height="100%" flat dark>
                        <v-card-title class="justify-center pt-3 pb-0"
                            >Select Tab
                        </v-card-title>

                        <h4 class="subtitle px-4 text-center">
                            Active: 5
                        </h4>
                        <h4 class="subtitle px-4 text-center">
                            Unique: 7
                        </h4>
                    </v-card>
                </v-col>
            </v-row>

            <v-toolbar flat class="my-7 my-sm-5" height="auto">
                <v-row class="d-flex justify-space-between align-center">
                    <v-menu offset-y right>
                        <template v-slot:activator="{ on }">
                            <v-btn text v-on="on">
                                <v-icon
                                    color="secondary"
                                    v-text="icons.mdiFormatListCheckbox"
                                ></v-icon>
                            </v-btn>
                        </template>

                        <v-list dense>
                            <v-list-item href="#">
                                <v-list-item-icon>
                                    <v-icon
                                        color="green darken-3"
                                        v-text="icons.mdiMicrosoftExcel"
                                    ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                    >Export to Excel
                                </v-list-item-title>
                            </v-list-item>

                            <v-list-item href="#">
                                <v-list-item-icon>
                                    <v-icon
                                        color="red darken-4"
                                        v-text="icons.mdiFilePdf"
                                    ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                    >Export to PDF</v-list-item-title
                                >
                            </v-list-item>

                            <v-list-item href="#">
                                <v-list-item-icon>
                                    <v-icon
                                        color="blue darken-3"
                                        v-text="icons.mdiFileDelimitedOutline"
                                    ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                    >Export to CSV</v-list-item-title
                                >
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-row class="d-flex justify-end align-center ">
                        <v-col cols="12" sm="6" md="4" class="py-0">
                            <v-menu
                                :close-on-content-click="false"
                                offset-y
                                max-width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        label="Range"
                                        color="secondary"
                                        rounded
                                        outlined
                                        dense
                                        clearable
                                        hide-details
                                        :prepend-inner-icon="
                                            icons.mdiCalendarSearch
                                        "
                                        v-on="on"
                                    ></v-text-field>
                                </template>

                                <v-date-picker
                                    v-model="range"
                                    color="secondary"
                                    range
                                    no-title
                                ></v-date-picker>
                            </v-menu>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                                label="Search"
                                color="secondary"
                                rounded
                                outlined
                                dense
                                clearable
                                hide-details
                                :prepend-inner-icon="icons.mdiMagnify"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-row>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="statistics"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined"
            ></v-data-table>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiFormatListCheckbox,
    mdiMicrosoftExcel,
    mdiFilePdf,
    mdiFileDelimitedOutline,
    mdiCalendarSearch,
    mdiMagnify,
    mdiArrowRightCircle,
    mdiGift,
    mdiAccountGroup,
    mdiHumanHandsup
} from "@mdi/js";

export default {
    name: "BusinessStatistics",
    data: () => ({
        tab: 0,
        icons: {
            mdiFormatListCheckbox,
            mdiMicrosoftExcel,
            mdiFilePdf,
            mdiFileDelimitedOutline,
            mdiCalendarSearch,
            mdiMagnify,
            mdiArrowRightCircle,
            mdiGift,
            mdiAccountGroup,
            mdiHumanHandsup
        },
        range: [],
        headers: [
            { text: "No", value: "number", align: "center" },
            { text: "Name", value: "name", align: "center" },
            { text: "Total Amount", value: "total_amount", align: "center" },
            { text: "Transactions", value: "transactions", align: "center" },
            { text: "Total Points", value: "total_points", align: "center" },
            { text: "Users", value: "users", align: "center" },
            { text: "Cards", value: "cards", align: "center" }
        ],
        statistics: [
            {
                number: 1,
                name: "Vasilis",
                total_amount: 1260,
                transactions: 2,
                total_points: 629,
                users: 2,
                cards: 0
            },
            {
                number: 2,
                name: "Vasilis",
                total_amount: 363,
                transactions: 23,
                total_points: 749,
                users: 15,
                cards: 12
            },
            {
                number: 3,
                name: "Vasilis",
                total_amount: 42,
                transactions: 2,
                total_points: 94,
                users: 1,
                cards: 0
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
