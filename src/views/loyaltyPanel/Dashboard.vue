<template>
    <v-card class="pa-0" flat>
        <v-card flat>
            <v-row class="ma-0">
                <Title />

                <TitleBox
                    v-for="box in boxes"
                    v-bind:key="box.label"
                    v-bind:box="box"
                />
            </v-row>
        </v-card>

        <v-row class="pa-3 pb-8" style="background: #eaedf1">
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
    </v-card>
</template>

<script>
import Title from "@/components/loyaltyPanel/Dashboard/Title";
import TitleBox from "@/components/loyaltyPanel/Dashboard/TitleBox";
import Widget from "@/components/loyaltyPanel/Dashboard/Card";
import TransactionsWidget from "@/components/loyaltyPanel/Dashboard/TransactionsCard";
import TransactionsChart from "@/components/loyaltyPanel/Dashboard/TransactionsChart";
import ClicksChart from "@/components/loyaltyPanel/Dashboard/ClicksChart";
import NavigationChart from "@/components/loyaltyPanel/Dashboard/NavigationChart";

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
    components: {
        Title,
        TitleBox,
        Widget,
        TransactionsWidget,
        TransactionsChart,
        ClicksChart,
        NavigationChart
    },
    data: () => ({
        boxes: [
            {
                title: 0,
                icon: mdiAccountGroup,
                label: "Customer"
            },
            {
                title: 0,
                icon: mdiDatabase,
                label: "Transactions"
            },
            {
                title: "0,00",
                icon: mdiCurrencyEur,
                label: "Total"
            },
            {
                title: 0,
                icon: mdiTrophyVariant,
                label: "username"
            }
        ],
        widgets: [
            {
                color: "#27ae60",
                icon: mdiBinoculars,
                count: 0,
                label: "User views"
            },
            {
                color: "#e67e22",
                icon: mdiCursorDefault,
                count: 0,
                label: "Clicks"
            },
            {
                color: "#af64cc",
                icon: mdiDatabase,
                count: 0,
                label: "User leads"
            },
            {
                color: "#e74c3c",
                icon: mdiCompassOutline,
                count: 0,
                label: "Payments"
            }
        ],
        transactionsWidgets: [
            {
                color: "#1bbae1",
                title: "0 Transactions / 0,00 Total",
                label: "Last 24 hours",
                icon: mdiWallet
            },
            {
                color: "#1bbae1",
                title: "0 Transactions / 0,00 Total",
                label: "Last 7 Days",
                icon: mdiWallet
            }
        ]
    })
};
</script>
