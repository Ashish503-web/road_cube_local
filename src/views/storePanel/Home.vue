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
                ></v-skeleton-loader>

                <v-card v-else tile outlined>
                    <v-card-title
                        v-text="translations.transactions[lang]"
                    ></v-card-title>

                    <v-divider></v-divider>

                    <v-card-text>
                        <canvas ref="myChart"></canvas>
                    </v-card-text>
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
    mdiWallet,
} from "@mdi/js";

import Chart from "chart.js";
import moment from "moment";

import { mapActions } from "vuex";
import translations from "@/utils/translations/home";

export default {
    name: "StorePanelHome",

    mixins: [translations],

    data: () => ({
        statistics: {},
        labels: [],
        values: [],
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
                        it: "",
                    },
                    value: this.statistics.total_customers,
                },
                {
                    icon: mdiDatabase,
                    text: {
                        el: "",
                        en: "Transactions",
                        it: "",
                    },
                    value: this.statistics.total_transactions,
                },
                {
                    icon: mdiCurrencyEur,
                    text: {
                        el: "",
                        en: "Total",
                        it: "",
                    },
                    value: new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 2,
                    }).format(this.statistics.total_income),
                },
            ];
        },

        views() {
            return [
                {
                    icon: mdiBinoculars,
                    text: {
                        el: "",
                        en: "User map views",
                        it: "",
                    },
                    value: this.statistics.views.map_views,
                },
                {
                    icon: mdiCursorDefault,
                    text: {
                        el: "",
                        en: "User store clicks",
                        it: "",
                    },
                    value: this.statistics.views.visits,
                },
                {
                    icon: mdiDatabase,
                    text: {
                        el: "",
                        en: "User navigation clicks",
                        it: "",
                    },
                    value: this.statistics.views.nav_clicks,
                },
                {
                    icon: mdiCompassOutline,
                    text: {
                        el: "",
                        en: "User phone clicks",
                        it: "",
                    },
                    value: this.statistics.views.phone_clicks,
                },
            ];
        },

        transactions() {
            return [
                {
                    icon: mdiWallet,
                    text: {
                        el: "",
                        en: "Payments Last 12 Hours",
                        it: "",
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
                            minimumFractionDigits: 2,
                        }).format(
                            this.statistics.last_twelve_hours_payments
                                .total_price
                        )}
                        ${this.translations.total[this.lang]}
                    `,
                },
                {
                    icon: mdiWallet,
                    text: {
                        el: "",
                        en: "Payments Last Week",
                        it: "",
                    },
                    value: `
                        ${this.statistics.last_week_payments.total_transactions}
                        ${this.translations.transactions[this.lang]} /
                        ${new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "EUR",
                            minimumFractionDigits: 2,
                        }).format(
                            this.statistics.last_week_payments.total_price
                        )}
                        ${this.translations.total[this.lang]}
                    `,
                },
            ];
        },
    },

    methods: {
        ...mapActions("storePanel", ["getStore"]),

        createChart() {
            let ctx = this.$refs.myChart.getContext("2d");

            var gradientStroke = ctx.createLinearGradient(500, -100, 100, 0);
            gradientStroke.addColorStop(0, "#1feaea");
            gradientStroke.addColorStop(0.33, "yellow");
            gradientStroke.addColorStop(0.66, "orange");
            gradientStroke.addColorStop(1, "red");

            var myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: this.labels,
                    datasets: [
                        {
                            label: "",
                            data: this.values,
                            backgroundColor: ["rgba(0, 0, 0, 0)"],
                            borderColor: gradientStroke,
                            pointBorderColor: gradientStroke,
                            pointBackgroundColor: gradientStroke,
                            pointHoverBackgroundColor: gradientStroke,
                            pointHoverBorderColor: gradientStroke,
                            borderWidth: 4,
                        },
                    ],
                },
                options: {
                    legend: {
                        position: "top",
                    },
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    fontColor: "rgba(0,0,0,0.5)",
                                    fontStyle: "bold",
                                    beginAtZero: true,
                                    maxTicksLimit: 5,
                                    padding: 20,
                                },
                                gridLines: {
                                    drawTicks: false,
                                },
                            },
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    zeroLineColor: "transparent",
                                },
                                ticks: {
                                    padding: 20,
                                    fontColor: "rgba(0,0,0,0.5)",
                                    fontStyle: "bold",
                                },
                            },
                        ],
                    },
                },
            });
        },
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
                if (this.statistics.last_seven_days_revenue) {
                    if (!this.labels.length) {
                        this.statistics.last_seven_days_revenue.forEach((r) =>
                            this.labels.push(
                                moment(r.date).format("DD/MM/YYYY")
                            )
                        );

                        this.labels.reverse();
                    }

                    if (!this.values.length) {
                        this.statistics.last_seven_days_revenue.forEach((r) =>
                            this.values.push(r.total_price)
                        );

                        this.values.reverse();
                    }
                }
            },
        },
    },

    mounted() {
        this.getStore();
        setTimeout(() => this.createChart(), 1500);
    },
};
</script>
