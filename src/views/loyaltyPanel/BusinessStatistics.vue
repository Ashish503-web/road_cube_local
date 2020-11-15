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

            <v-toolbar flat height="90">
                <ExportLinks withPDF />

                <v-spacer></v-spacer>

                <v-col cols="12" sm="6" md="4">
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
                                :prepend-inner-icon="icons.mdiCalendarSearch"
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
                    <b-search-field></b-search-field>
                </v-col>
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
import { mdiCalendarSearch, mdiAccountGroup, mdiHumanHandsup } from "@mdi/js";

import ExportLinks from "@/components/general/ExportLinks.vue";
import translations from "@/utils/translations/loyaltyPanel/businessStatistics";

export default {
    name: "BusinessStatistics",

    components: { ExportLinks },

    mixins: [translations],

    data: () => ({
        icons: {
            mdiCalendarSearch,
            mdiAccountGroup,
            mdiHumanHandsup
        },
        range: [],
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
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                { text: this.translations.no[this.lang], value: "number" },
                { text: this.translations.name[this.lang], value: "name" },
                {
                    text: this.translations.totalAmount[this.lang],
                    value: "total_amount"
                },
                {
                    text: this.translations.transactions[this.lang],
                    value: "transactions"
                },
                {
                    text: this.translations.totalPoints[this.lang],
                    value: "total_points"
                },
                { text: this.translations.users[this.lang], value: "users" },
                { text: this.translations.cards[this.lang], value: "cards" }
            ];
        }
    }
};
</script>
