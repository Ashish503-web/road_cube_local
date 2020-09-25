<template>
    <v-tab-item>
        <v-card-title class="justify-end">
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
        </v-card-title>
        <v-data-table
            :headers="headers"
            :footer-props="{ itemsPerPageOptions }"
        ></v-data-table>
    </v-tab-item>
</template>

<script>
import { mdiMagnify } from "@mdi/js";

export default {
    name: "Paid",

    data: () => ({
        icons: { mdiMagnify },
        headers: [
            { text: "User", value: "user" },
            { text: "Amount", value: "amount" },
            { text: "Points", value: "points" },
            { text: "Product", value: "product" },
            { text: "Date", value: "date" },
            { text: "Information", value: "information" }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
