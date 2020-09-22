<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-toolbar-title>aa Contest</v-toolbar-title>

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
                :items="items"
                :footer-props="{ itemsPerPageOptions }"
            >
                <template v-slot:item.actions="{ attrs }">
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="primary"
                                icon
                                v-bind="attrs"
                                v-on="on"
                                to="/storepanel/view-participant-answer"
                            >
                                <v-icon v-text="icons.mdiEyeOutline"></v-icon>
                            </v-btn>
                        </template>

                        <span>View Answer</span>
                    </v-tooltip>
                </template>
            </v-data-table>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiMagnify, mdiEyeOutline } from "@mdi/js";

export default {
    name: "ViewParticipants",

    data: () => ({
        icons: {
            mdiMagnify,
            mdiEyeOutline
        },
        tab: 0,
        itemsPerPageOptions: [10, 25, 50, 100],
        headers: [
            { text: "No", value: "title" },
            { text: "Username", value: "username" },
            { text: "Date", value: "date" },
            { text: "Actions", value: "actions" }
        ],
        items: [
            {
                title: "2",
                username: "Edgar",
                date: "2020-02-04 14:40:00"
            }
        ]
    })
};
</script>
