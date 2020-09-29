<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs v-model="tab" color="black">
                <v-tab class="text-capitalize">pending</v-tab>
                <v-tab class="text-capitalize">sent</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-toolbar flat height="80">
                        <v-spacer></v-spacer>
                        <v-col cols="4" class="pa-0">
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
                    </v-toolbar>
                    <v-data-table
                        :headers="headers"
                        :footer-props="{ itemsPerPageOptions }"
                        class="b-outlined"
                    ></v-data-table>
                </v-tab-item>

                <v-tab-item>
                    <v-toolbar flat height="80">
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
                                            v-text="
                                                icons.mdiFileDelimitedOutline
                                            "
                                        ></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title
                                        >Export to CSV</v-list-item-title
                                    >
                                </v-list-item>
                            </v-list>
                        </v-menu>

                        <v-spacer></v-spacer>

                        <v-col cols="4">
                            <v-menu v-model="menu" offset-y>
                                <template v-slot:activator="{ attrs }">
                                    <v-text-field
                                        :label="
                                            selectedSearchType === 'All Fields'
                                                ? 'Search'
                                                : selectedSearchType
                                                ? 'Search by ' +
                                                  selectedSearchType
                                                : 'Search'
                                        "
                                        rounded
                                        outlined
                                        dense
                                        clearable
                                        hide-details
                                        :aria-expanded="attrs['aria-expanded']"
                                        :prepend-inner-icon="icons.mdiMagnify"
                                        :append-icon="icons.mdiChevronDown"
                                        @click:append="menu = true"
                                    ></v-text-field>
                                </template>

                                <v-list dense>
                                    <v-list-item-group
                                        v-model="selectedSearchType"
                                        color="primary"
                                    >
                                        <v-list-item
                                            v-for="searchType in searchTypes"
                                            :key="searchType"
                                            :value="searchType"
                                        >
                                            <v-list-item-title
                                                v-text="searchType"
                                            >
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list-item-group>
                                </v-list>
                            </v-menu>
                        </v-col>
                    </v-toolbar>

                    <v-data-table
                        :headers="sentHeaders"
                        :footer-props="{ itemsPerPageOptions }"
                        class="b-outlined"
                    ></v-data-table>
                </v-tab-item>
            </v-tabs-items>
        </v-sheet>
    </v-container>
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
    name: "GiftStatus",
    data: () => ({
        icons: {
            mdiFormatListCheckbox,
            mdiMicrosoftExcel,
            mdiFilePdf,
            mdiFileDelimitedOutline,
            mdiMagnify,
            mdiChevronDown
        },
        tab: 0,
        menu: false,
        headers: [
            { text: "Gift Name", value: "name" },
            { text: "ID", value: "id" },
            { text: "Date", value: "date" },
            { text: "Supplier", value: "supplier" },
            { text: "Deliver", value: "deliver" }
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        sentHeaders: [
            { text: "Gift Name", value: "name" },
            { text: "ID", value: "id" },
            { text: "Points Conversion Date", value: "conversionDate" },
            { text: "Redemption Date", value: "redemptionDate" },
            { text: "Supplier", value: "supplier" },
            { text: "Redeem Voucher", value: "redeemVoucher" },
            { text: "Deliver", value: "deliver" }
        ],
        searchTypes: [
            "All Fields",
            "Name",
            "ID",
            "Points Conversion Date",
            "Redemption Date",
            "Supplier",
            "Redeem Voucher",
            "Deliver"
        ],
        selectedSearchType: "All Fields"
    }),

    watch: {
        selectedSearchType(val) {
            console.log(val);
        }
    }
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}

.export-link {
    text-decoration: none;
}

.export-link:hover {
    text-decoration: underline;
}
</style>
