<template>
    <v-container fluid class="b-container">
        <v-row>
            <v-col cols="12">
                <v-skeleton-loader
                    v-if="loading"
                    type="image"
                    height="112"
                ></v-skeleton-loader>

                <v-card v-else tile outlined class="py-6">
                    <v-row
                        no-gutters
                        justify="space-between"
                        align="center"
                        class="px-5"
                    >
                        <v-col cols="auto">
                            <v-card-title class="pa-0">{{
                                statistics.name
                            }}</v-card-title>
                            <h4
                                class="subtitle-1 success--text"
                                v-text="translations.online[lang]"
                            ></h4>
                        </v-col>

                        <v-col
                            v-for="statistic in titleStatistics"
                            :key="statistic.text['en']"
                            cols="auto"
                        >
                            <v-card-title class="pa-0 justify-center">{{
                                statistic.value
                            }}</v-card-title>
                            <v-row
                                no-gutters
                                align="center"
                                class="subtitle-1 text-center text--secondary"
                            >
                                <v-icon
                                    v-text="statistic.icon"
                                    class="mr-1"
                                ></v-icon>
                                {{ statistic.text[lang] }}
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col
                v-for="view in views"
                v-bind:key="view.text['en']"
                cols="12"
                sm="6"
                lg="3"
            >
                <v-skeleton-loader
                    v-if="loading"
                    type="image"
                    height="100"
                ></v-skeleton-loader>

                <v-card v-else tile outlined class="pa-5">
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-avatar color="accent" size="60">
                                <v-icon dark large v-text="view.icon"></v-icon>
                            </v-avatar>
                        </v-col>

                        <v-col class="text-right">
                            <h4
                                class="subtitle-1 font-weight-bold"
                                v-text="view.value"
                            ></h4>
                            <h4
                                class="subtitle-2 font-weight-medium text--secondary"
                                v-text="view.text[lang]"
                            ></h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col
                v-for="transaction in transactions"
                v-bind:key="transaction.text[lang]"
                cols="12"
                md="6"
            >
                <v-skeleton-loader
                    v-if="loading"
                    type="image"
                    height="100"
                ></v-skeleton-loader>

                <v-card v-else tile outlined class="pa-5">
                    <v-row no-gutters justify="space-between" align="center">
                        <v-col cols="auto">
                            <v-avatar color="accent" size="60">
                                <v-icon
                                    dark
                                    large
                                    v-text="transaction.icon"
                                ></v-icon>
                            </v-avatar>
                        </v-col>

                        <v-col cols="auto" class="text-right">
                            <h4
                                class="subtitle-1 font-weight-bold"
                                v-text="transaction.value"
                            ></h4>
                            <h4
                                class="subtitle-2 font-weight-medium text--secondary"
                                v-text="transaction.text[lang]"
                            ></h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-skeleton-loader
                    v-if="loading"
                    type="image"
                    height="307"
                ></v-skeleton-loader>

                <v-card v-else tile outlined>
                    <v-card-title
                        v-text="translations.transactions[lang]"
                    ></v-card-title>

                    <v-divider></v-divider>

                    <v-card-title>
                        <canvas ref="myChart"></canvas>
                    </v-card-title>
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

import Chart from "chart.js";

import { mapActions } from "vuex";
import translations from "@/utils/translations/home";

export default {
    name: "StorePanelHome",

    mixins: [translations],

    data: () => ({
        statistics: {}
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        permission() {
            return this.$store.state.permissions.homepage
                ? this.$store.state.permissions.homepage.read
                : null;
        },

        loading() {
            return this.$store.state.storePanel.loading;
        },

        titleStatistics() {
            return [
                {
                    icon: mdiAccountGroup,
                    text: {
                        el: "",
                        en: "Customer",
                        it: ""
                    },
                    value: this.statistics.total_customers
                },
                {
                    icon: mdiDatabase,
                    text: {
                        el: "",
                        en: "Transactions",
                        it: ""
                    },
                    value: this.statistics.total_transactions
                },
                {
                    icon: mdiCurrencyEur,
                    text: {
                        el: "",
                        en: "Total",
                        it: ""
                    },
                    value: new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 2
                    }).format(this.statistics.total_income)
                }
            ];
        },

        views() {
            return [
                {
                    icon: mdiBinoculars,
                    text: {
                        el: "",
                        en: "User map views",
                        it: ""
                    },
                    value: this.statistics.views.map_views
                },
                {
                    icon: mdiCursorDefault,
                    text: {
                        el: "",
                        en: "User store clicks",
                        it: ""
                    },
                    value: this.statistics.views.visits
                },
                {
                    icon: mdiDatabase,
                    text: {
                        el: "",
                        en: "User navigation clicks",
                        it: ""
                    },
                    value: this.statistics.views.nav_clicks
                },
                {
                    icon: mdiCompassOutline,
                    text: {
                        el: "",
                        en: "User phone clicks",
                        it: ""
                    },
                    value: this.statistics.views.phone_clicks
                }
            ];
        },

        transactions() {
            return [
                {
                    icon: mdiWallet,
                    text: {
                        el: "",
                        en: "Payments Last 12 Hours",
                        it: ""
                    },
                    value: `
                        ${
                            this.statistics.last_twelve_hours_payments
                                .total_transactions
                        }
                        ${this.translations.transactions[this.lang]} /
                        ${new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "EUR",
                            minimumFractionDigits: 2
                        }).format(
                            this.statistics.last_twelve_hours_payments
                                .total_price
                        )}
                        ${this.translations.total[this.lang]}
                    `
                },
                {
                    icon: mdiWallet,
                    text: {
                        el: "",
                        en: "Payments Last Week",
                        it: ""
                    },
                    value: `
                        ${this.statistics.last_week_payments.total_transactions}
                        ${this.translations.transactions[this.lang]} /
                        ${new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "EUR",
                            minimumFractionDigits: 2
                        }).format(
                            this.statistics.last_week_payments.total_price
                        )}
                        ${this.translations.total[this.lang]}
                    `
                }
            ];
        }
    },

    methods: {
        ...mapActions("storePanel", ["getStore"]),

        createChart() {
            var myChart = new Chart(this.$refs.myChart, {
                type: "line",
                data: {
                    labels: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                    ],
                    datasets: [
                        {
                            label: "Transaction Amount",
                            data: [
                                -51.34,
                                -67.98,
                                -78.3,
                                -25.1,
                                56.58,
                                76.67,
                                -98.38
                            ],
                            backgroundColor: ["rgba(0, 0, 0, 0)"],
                            borderColor: ["rgba(255, 99, 132, 1)"],
                            borderWidth: 4,
                            pointBackgroundColor: "rgba(255, 99, 132, 1)",
                            pointBorderColor: "rgba(255, 99, 132, 1)"
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }
            });
        }
    },

    watch: {
        permission(val) {
            if (!val) {
                this.$router.replace(
                    `/${this.lang}/storePanel/forbidden-gateway`
                );
            }
        },

        ["$store.state.storePanel.store"]: {
            immediate: true,
            handler(val) {
                this.statistics = val.statistics;
                this.statistics.name = val.app_name;
            }
        }
    },

    mounted() {
        this.getStore();
        setTimeout(() => this.createChart(), 1500);
    }
};
</script>
