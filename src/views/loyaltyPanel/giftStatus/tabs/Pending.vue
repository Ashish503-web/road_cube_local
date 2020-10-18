<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="90">
            <v-spacer></v-spacer>
            <v-col cols="12" sm="4" class="pa-0">
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
            :footer-props="{ itemsPerPageOptions: [12] }"
            class="b-outlined"
        ></v-data-table>
    </v-tab-item>
</template>

<script>
import { mdiMagnify, mdiChevronDown } from "@mdi/js";

export default {
    name: "Pending",

    data: () => ({
        icons: {
            mdiMagnify,
            mdiChevronDown
        },
        headers: [
            { text: "Gift Name", value: "name" },
            { text: "ID", value: "id" },
            { text: "Date", value: "date" },
            { text: "Supplier", value: "supplier" },
            { text: "Deliver", value: "deliver" }
        ]
    })
};
</script>
