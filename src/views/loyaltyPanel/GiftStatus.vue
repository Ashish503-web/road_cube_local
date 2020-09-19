<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet>
            <v-row no-gutters style="background: #eaedf1">
                <v-col cols="auto">
                    <v-tabs v-model="tab">
                        <v-tab class="text-capitalize">pending</v-tab>
                        <v-tab class="text-capitalize">sent</v-tab>
                    </v-tabs>
                </v-col>
            </v-row>
            <v-tabs-items v-model="tab" class="pt-3">
                <v-tab-item>
                    <v-toolbar flat>
                        <v-spacer></v-spacer>
                        <v-col cols="4">
                            <v-text-field
                                label="Search"
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
                    <v-toolbar flat>
                        <a class="export-link" href @click.prevent
                            >Export to Excel</a
                        >
                        <v-divider class="mx-3" vertical inset></v-divider>
                        <a class="export-link" href @click.prevent
                            >Export to CSV</a
                        >
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
import { mdiMagnify, mdiChevronDown } from "@mdi/js";

export default {
    name: "GiftStatus",
    data: () => ({
        icons: { mdiMagnify, mdiChevronDown },
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
