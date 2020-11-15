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
                            <v-card-title class="pa-0">
                                {{ $store.state.loyaltyPanel.company.app_name }}
                            </v-card-title>
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
                            <v-card-title class="pa-0 justify-center">
                                {{ statistic.value }}
                            </v-card-title>
                            <v-card-title
                                class="pa-0 font-weight-light justify-center text--secondary"
                            >
                                <v-icon
                                    v-text="statistic.icon"
                                    class="mr-1"
                                ></v-icon>
                                {{ statistic.text[lang] }}
                            </v-card-title>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col
                v-for="view in views"
                :key="view.text['en']"
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

                        <v-col cols="auto" class="text-right">
                            <h4
                                class="subtitle-1 font-weight-bold"
                                v-text="view.value"
                            ></h4>
                            <h4
                                class="subtitle-2 font-weight-regular text--secondary"
                                v-text="view.text[lang]"
                            ></h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col
                v-for="transaction in transactions"
                :key="transaction.text['en']"
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
                                class="subtitle-2 font-weight-regular text--secondary"
                                v-text="transaction.text[lang]"
                            ></h4>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="6">
                <v-skeleton-loader
                    v-if="loading"
                    type="image"
                    height="200"
                ></v-skeleton-loader>

                <v-card v-else tile outlined min-height="200">
                    <v-card tile flat>
                        <v-card-title
                            class="subtitle-1 font-weight-bold py-2 grey lighten-3"
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
                </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="3">
                <v-skeleton-loader
                    v-if="loading"
                    type="image"
                    height="200"
                ></v-skeleton-loader>

                <v-card v-else tile outlined min-height="200" align="center">
                    <v-card tile flat>
                        <v-card-title
                            class="subtitle-1 font-weight-bold py-2 grey lighten-3"
                            v-text="translations.viewClicks[lang]"
                        ></v-card-title>
                    </v-card>
                </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="3">
                <v-skeleton-loader
                    v-if="loading"
                    type="image"
                    height="200"
                ></v-skeleton-loader>

                <v-card v-else tile outlined min-height="200" align="center">
                    <v-card tile flat>
                        <v-card-title
                            class="subtitle-1 font-weight-bold py-2 grey lighten-3"
                            v-text="translations.viewNavigations[lang]"
                        ></v-card-title>
                    </v-card>
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
    mdiTrophyVariant,
    mdiBinoculars,
    mdiCursorDefault,
    mdiCompassOutline,
    mdiWallet
} from "@mdi/js";

import translations from "@/utils/translations/home";

const gradients = [
    ["#222"],
    ["#42b3f4"],
    ["red", "orange", "yellow"],
    ["purple", "violet"],
    ["#00c6ff", "#F0F", "#FF0"],
    ["#f72047", "#ffd200", "#1feaea"]
];

export default {
    name: "Home",

    mixins: [translations],

    data: () => ({
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
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        loading() {
            return this.$store.state.loyaltyPanel.loading;
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
                    value: 0
                },
                {
                    icon: mdiDatabase,
                    text: {
                        el: "",
                        en: "Transactions",
                        it: ""
                    },
                    value: 0
                },
                {
                    icon: mdiCurrencyEur,
                    text: {
                        el: "",
                        en: "Total",
                        it: ""
                    },
                    value: "0,00"
                },
                {
                    icon: mdiTrophyVariant,
                    text: {
                        el: "",
                        en: "username",
                        it: ""
                    },
                    value: 0
                }
            ];
        },

        views() {
            return [
                {
                    icon: mdiBinoculars,
                    text: {
                        el: "",
                        en: "User views",
                        it: ""
                    },
                    value: 0
                },
                {
                    icon: mdiCursorDefault,
                    text: {
                        el: "",
                        en: "Clicks",
                        it: ""
                    },
                    value: 0
                },
                {
                    icon: mdiDatabase,
                    text: {
                        el: "",
                        en: "User leads",
                        it: ""
                    },
                    value: 0
                },
                {
                    icon: mdiCompassOutline,
                    text: {
                        el: "",
                        en: "Payments",
                        it: ""
                    },
                    value: 0
                }
            ];
        },

        transactions() {
            return [
                {
                    icon: mdiWallet,
                    text: {
                        el: "",
                        en: "Last 24 hours",
                        it: ""
                    },
                    value: `
                        0 ${this.translations.transactions[this.lang]} / 0,00 
                        ${this.translations.total[this.lang]}
                    `
                },
                {
                    icon: mdiWallet,
                    text: {
                        el: "",
                        en: "Last 7 Days",
                        it: ""
                    },
                    value: `
                        0 ${this.translations.transactions[this.lang]} / 0,00 
                        ${this.translations.total[this.lang]}
                    `
                }
            ];
        }
    }
};
</script>
