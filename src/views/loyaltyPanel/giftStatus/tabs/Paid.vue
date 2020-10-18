<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="90">
            <v-row class="d-flex">
                <v-col class="pa-0">
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
                                    >Export to Excel</v-list-item-title
                                >
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
                </v-col>

                <v-col cols="12" sm="4" class="pa-0">
                    <b-search-field
                        :selected-search-type="selectedSearchType"
                        :searchTypes="searchTypes"
                    ></b-search-field>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :footer-props="{ itemsPerPageOptions: [12] }"
            class="b-outlined"
        ></v-data-table>
    </v-tab-item>
</template>

<script>
import {
    mdiFormatListCheckbox,
    mdiMicrosoftExcel,
    mdiFilePdf,
    mdiFileDelimitedOutline,
    mdiMagnify,
    mdiChevronDown
} from "@mdi/js";

export default {
    name: "Paid",

    data: () => ({
        icons: {
            mdiFormatListCheckbox,
            mdiMicrosoftExcel,
            mdiFilePdf,
            mdiFileDelimitedOutline,
            mdiMagnify,
            mdiChevronDown
        },
        menu: false,
        headers: [
            { text: "Gift Name", value: "name" },
            { text: "ID", value: "id" },
            { text: "Points Conversion Date", value: "conversionDate" },
            { text: "Redemption Date", value: "redemptionDate" },
            { text: "Supplier", value: "supplier" },
            { text: "Redeem Voucher", value: "redeemVoucher" },
            { text: "Deliver", value: "deliver" }
        ],
        selectedSearchType: "All Fields",
        searchTypes: [
            "All Fields",
            "Name",
            "ID",
            "Points Conversion Date",
            "Redemption Date",
            "Supplier",
            "Redeem Voucher",
            "Deliver"
        ]
    })
};
</script>
