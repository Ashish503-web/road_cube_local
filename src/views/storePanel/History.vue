<template>
    <v-container fluid class="px-3">
        <v-sheet color="#eaedf1" class="pa-3">
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-tabs v-model="tab">
                        <v-tab class="text-capitalize">point analysis</v-tab>
                        <v-tab class="text-capitalize">monthly points</v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="12">
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-toolbar flat height="80" class="pt-2">
                                <a class="export-link" href @click.prevent
                                    >Export to CSV/Excel</a
                                >

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
                                :headers="pointHeaders"
                                :footer-props="{ itemsPerPageOptions }"
                                class="mt-4"
                            >
                                <template v-slot:item.edit="{ item }">
                                    <v-btn
                                        color="yellow darken-3"
                                        icon
                                        @click="myFunc(item)"
                                    >
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                        ></v-icon>
                                    </v-btn>
                                </template>
                            </v-data-table>
                        </v-tab-item>

                        <v-tab-item>
                            <v-toolbar flat height="80" class="pt-2">
                                <a class="export-link" href @click.prevent
                                    >Export to CSV/Excel</a
                                >

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
                                :headers="pointHeaders"
                                :footer-props="{ itemsPerPageOptions }"
                                class="mt-4"
                            >
                                <template v-slot:item.edit="{ item }">
                                    <v-btn
                                        color="yellow darken-3"
                                        icon
                                        @click="myFunc(item)"
                                    >
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                        ></v-icon>
                                    </v-btn>
                                </template>
                            </v-data-table>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiMagnify } from "@mdi/js";

export default {
    name: "History",

    data: () => ({
        icons: { mdiMagnify },
        tab: 0,
        itemsPerPageOptions: [10, 25, 50, 100],
        pointHeaders: [
            { text: "Date", value: "user" },
            { text: "Prodcut", value: "amount" },
            { text: "Bank", value: "product" },
            { text: "With Subsidy", value: "address" },
            { text: "Without Subsidy", value: "information" }
        ],
        monthlyPointHeaders: [
            { text: "Date", value: "user" },
            { text: "With Subsidy", value: "address" },
            { text: "Without Subsidy", value: "information" },
            { text: "Sum", value: "sum" }
        ]
    })
};
</script>

<style scoped>
.export-link {
    text-decoration: none;
}

.export-link:hover {
    text-decoration: underline;
}
</style>
