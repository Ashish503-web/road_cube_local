<template>
    <v-tab-item>
        <v-toolbar flat height="80">
            <a class="export-link" href @click.prevent>Export to CSV/Excel</a>

            <v-spacer></v-spacer>

            <v-col cols="4">
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
        >
            <template v-slot:item.edit="{ item }">
                <v-btn color="yellow darken-3" icon @click="myFunc(item)">
                    <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                </v-btn>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import { mdiMagnify } from "@mdi/js";

export default {
    name: "MonthlyPoints",

    data: () => ({
        icons: { mdiMagnify },
        headers: [
            { text: "Date", value: "user" },
            { text: "With Subsidy", value: "address" },
            { text: "Without Subsidy", value: "information" },
            { text: "Sum", value: "sum" }
        ],
        itemsPerPageOptions: [10, 25, 50, 100]
    })
};
</script>
