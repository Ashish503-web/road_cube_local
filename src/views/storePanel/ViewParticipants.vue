<template>
    <v-container class="px-4">
        <v-sheet color="#eaedf1" class="pa-4">
            <v-row no-gutters>
                <v-col cols="12">
                    <v-toolbar flat height="80" class="pt-2">
                        <v-tooltip top>
                            <template v-slot:activator="{ on }">
                                <v-btn icon v-on="on" @click="$router.go(-1)">
                                    <v-icon
                                        v-text="icons.mdiArrowLeft"
                                    ></v-icon>
                                </v-btn>
                            </template>

                            <span>Back</span>
                        </v-tooltip>

                        <v-toolbar-title
                            >aa Contest Participants</v-toolbar-title
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
                                        <v-icon
                                            v-text="icons.mdiEyeOutline"
                                        ></v-icon>
                                    </v-btn>
                                </template>

                                <span>View Answer</span>
                            </v-tooltip>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiArrowLeft, mdiMagnify, mdiEyeOutline } from "@mdi/js";

export default {
    name: "ViewParticipants",

    data: () => ({
        icons: {
            mdiArrowLeft,
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
