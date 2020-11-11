<template>
    <v-container fluid class="b-container">
        <v-row>
            <v-col cols="12">
                <v-card outlined tile>
                    <v-row class="pb-3">
                        <v-col cols="12" sm="6" md="6" lg="3">
                            <v-card-title class="ml-7 pb-0">{{
                                statistics.name
                            }}</v-card-title>
                            <h4
                                class="subtitle-1 success--text pl-11"
                                v-text="translations.online[lang]"
                            ></h4>
                        </v-col>

                        <v-col cols="12" sm="6" md="6" lg="3">
                            <v-card-title class="pb-0 justify-center">{{
                                statistics.total_customers
                            }}</v-card-title>

                            <v-card-title
                                class="pa-0 font-weight-light justify-center text--secondary"
                            >
                                <v-icon
                                    v-text="icons.mdiAccountGroup"
                                    class="mr-1"
                                ></v-icon>
                                {{ translations.customer[lang] }}
                            </v-card-title>
                        </v-col>

                        <v-col cols="12" sm="6" md="6" lg="3">
                            <v-card-title class="pb-0 justify-center">{{
                                statistics.total_transactions
                            }}</v-card-title>
                            <v-card-title
                                class="pa-0 font-weight-light justify-center text--secondary"
                            >
                                <v-icon
                                    v-text="icons.mdiDatabase"
                                    class="mr-1"
                                ></v-icon>
                                {{ translations.transactions[lang] }}
                            </v-card-title>
                        </v-col>

                        <v-col cols="12" sm="6" md="6" lg="3">
                            <v-card-title class="pb-0 justify-center">{{
                                statistics.total_income
                            }}</v-card-title>

                            <v-card-title
                                class="pa-0 font-weight-light justify-center text--secondary"
                            >
                                <v-icon
                                    v-text="icons.mdiCurrencyEur"
                                    class="mr-1"
                                ></v-icon>
                                {{ translations.total[lang] }}
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
                                >{{ statistics.views.map_views }}</v-card-title
                            >

                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                                v-text="translations.showsOnMap[lang]"
                            ></h4>
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
                                >{{ statistics.views.visits }}</v-card-title
                            >

                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                                v-text="translations.clicks[lang]"
                            ></h4>
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
                                >{{ statistics.views.nav_clicks }}</v-card-title
                            >

                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                                v-text="translations.clickOnNavigate[lang]"
                            ></h4>
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
                                >{{
                                    statistics.views.phone_clicks
                                }}</v-card-title
                            >

                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                                v-text="translations.phoneClicks[lang]"
                            ></h4>
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
                                >{{
                                    statistics.last_twelve_hours_payments
                                        .total_transactions +
                                    ` ${translations.transactions[lang]} / ` +
                                    statistics.last_twelve_hours_payments
                                        .total_price +
                                    ` ${translations.total[lang]}`
                                }}</v-card-title
                            >
                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                                v-text="translations.paymentsLast12Hours[lang]"
                            ></h4>
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
                                >{{
                                    statistics.last_week_payments
                                        .total_transactions +
                                    ` ${translations.transactions[lang]} / ` +
                                    statistics.last_week_payments.total_price +
                                    ` ${translations.total[lang]}`
                                }}</v-card-title
                            >
                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                                v-text="translations.paymentsLastWeek[lang]"
                            ></h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card tile outlined>
                    <v-card-title
                        v-text="translations.transactions[lang]"
                    ></v-card-title>
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
    mdiWallet,
} from "@mdi/js";

import translations from "@/utils/translations/storePanel/home";

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

    mixins: [translations],

    data: () => ({
        icons: {
            mdiAccountGroup,
            mdiDatabase,
            mdiCurrencyEur,
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
        statistics: {},
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },
    },

    watch: {
        ["$store.state.storePanel.store"]: {
            immediate: true,
            handler(val) {
                this.statistics = { ...val.statistics };

                this.statistics.name = val.app_name;

                this.statistics.total_income = new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2,
                }).format(this.statistics.total_income);

                this.statistics.last_twelve_hours_payments.total_price = new Intl.NumberFormat(
                    "en-US",
                    {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 2,
                    }
                ).format(
                    this.statistics.last_twelve_hours_payments.total_price
                );

                this.statistics.last_week_payments.total_price = new Intl.NumberFormat(
                    "en-US",
                    {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 2,
                    }
                ).format(this.statistics.last_week_payments.total_price);
            },
        },
    },
};
</script>
