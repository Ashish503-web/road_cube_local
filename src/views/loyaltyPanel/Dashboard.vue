<template>
    <v-container fluid class="b-container">
        <v-row>
            <v-col cols="12">
                <Title />
            </v-col>

            <Widget
                v-for="widget in widgets"
                v-bind:key="widget.label"
                v-bind:widget="widget"
            />

            <TransactionsWidget
                v-for="widget in transactionsWidgets"
                v-bind:key="widget.label"
                v-bind:widget="widget"
            />

            <TransactionsChart />

            <v-row class="ma-0">
                <ClicksChart />
                <NavigationChart />
            </v-row>
        </v-row>
    </v-container>
</template>

<script>
import Title from "@/components/loyaltyPanel/Dashboard/Title";
import Widget from "@/components/loyaltyPanel/Dashboard/Widget";
import TransactionsWidget from "@/components/loyaltyPanel/Dashboard/TransactionsWidget";
import TransactionsChart from "@/components/loyaltyPanel/Dashboard/TransactionsChart";
import ClicksChart from "@/components/loyaltyPanel/Dashboard/ClicksChart";
import NavigationChart from "@/components/loyaltyPanel/Dashboard/NavigationChart";

import {
    mdiDatabase,
    mdiBinoculars,
    mdiCursorDefault,
    mdiCompassOutline,
    mdiWallet
} from "@mdi/js";

export default {
    name: "Dashboard",
    components: {
        Title,
        Widget,
        TransactionsWidget,
        TransactionsChart,
        ClicksChart,
        NavigationChart
    },
    data: () => ({
        widgets: [
            {
                icon: mdiBinoculars,
                count: 0,
                label: "User views"
            },
            {
                icon: mdiCursorDefault,
                count: 0,
                label: "Clicks"
            },
            {
                icon: mdiDatabase,
                count: 0,
                label: "User leads"
            },
            {
                icon: mdiCompassOutline,
                count: 0,
                label: "Payments"
            }
        ],
        transactionsWidgets: [
            {
                title: "0 Transactions / 0,00 Total",
                label: "Last 24 hours",
                icon: mdiWallet
            },
            {
                title: "0 Transactions / 0,00 Total",
                label: "Last 7 Days",
                icon: mdiWallet
            }
        ]
    })
};
</script>
