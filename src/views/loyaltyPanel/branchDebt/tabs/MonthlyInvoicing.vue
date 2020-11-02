<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat class="my-5">
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
                        <v-list-item-icon class="mr-3">
                            <v-icon
                                color="green darken-3"
                                v-text="icons.mdiMicrosoftExcel"
                            ></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Export to Excel</v-list-item-title>
                    </v-list-item>

                    <v-list-item href="#">
                        <v-list-item-icon class="mr-3">
                            <v-icon
                                color="blue darken-3"
                                v-text="icons.mdiFileDelimitedOutline"
                            ></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Export to CSV</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-spacer></v-spacer>

            <v-row no-gutters class="d-flex flex-wrap justify-end">
                <v-col cols="12" sm="4" class="ma-1">
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

                <v-col cols="12" sm="4" class="ma-1">
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
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="items"
            :footer-props="{ itemsPerPageOptions }"
            class="b-outlined"
        ></v-data-table>
    </v-tab-item>
</template>

<script>
import {
    mdiFormatListCheckbox,
    mdiMicrosoftExcel,
    mdiFileDelimitedOutline,
    mdiCalendarSearch,
    mdiMagnify
} from "@mdi/js";

export default {
    name: "BranchDebt",
    data: () => ({
        icons: {
            mdiFormatListCheckbox,
            mdiMicrosoftExcel,
            mdiFileDelimitedOutline,
            mdiCalendarSearch,
            mdiMagnify
        },
        range: [],
        headers: [
            { text: "Date", value: "date" },
            { text: "Name", value: "name" },
            { text: "Street address", value: "street_address" },
            { text: "Product", value: "product" },
            { text: "Product Code", value: "product_code" },
            { text: "Bank", value: "bank" },
            { text: "With subsidy", value: "with_subsidy" },
            { text: "Without subsidy", value: "without_subsidy" },
            { text: "Payment", value: "payment" }
        ],
        items: [
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
