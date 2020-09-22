<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-btn
                    rounded
                    color="primary"
                    class="text-none"
                    to="/storePanel/add-contest"
                    >Add Contest/Survey</v-btn
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
                <template v-slot:item.winners="{ item }">
                    <router-link v-if="!item.inProgress" :to="item.winners"
                        >View Winners</router-link
                    >
                    <div v-else>{{ item.winners }}</div>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                v-if="item.inProgress"
                                color="primary"
                                icon
                                v-on="on"
                                to="/storepanel/view-contest"
                            >
                                <v-icon v-text="icons.mdiEyeOutline"></v-icon>
                            </v-btn>
                        </template>

                        <span>View Contest</span>
                    </v-tooltip>

                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="primary"
                                icon
                                v-on="on"
                                to="/storepanel/view-participants"
                            >
                                <v-icon v-text="icons.mdiHelp"></v-icon>
                            </v-btn>
                        </template>

                        <span>View Participants</span>
                    </v-tooltip>

                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn color="red" icon v-on="on">
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span>Delete</span>
                    </v-tooltip>
                </template>
            </v-data-table>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiMagnify,
    mdiViewGrid,
    mdiEyeOutline,
    mdiHelp,
    mdiClose,
    mdiCloseThick
} from "@mdi/js";

export default {
    name: "Contests",

    data: () => ({
        icons: {
            mdiMagnify,
            mdiViewGrid,
            mdiEyeOutline,
            mdiHelp,
            mdiClose,
            mdiCloseThick
        },
        tab: 0,
        itemsPerPageOptions: [10, 20, 30, -1],
        headers: [
            { text: "Title", value: "title" },
            { text: "Starting Date", value: "startDate" },
            { text: "Ending Date", value: "endDate" },
            { text: "Type", value: "type" },
            { text: "Status", value: "status" },
            { text: "Winners", value: "winners" },
            { text: "Actions", value: "actions" }
        ],
        items: [
            {
                title: "aa",
                startDate: "2020-02-04 00:00:00",
                endDate: "2020-02-04 14:40:00",
                type: "Contest",
                status: "Inactive",
                winners: "/storepanel/contest-winner"
            },
            {
                title: "aa",
                startDate: "2020-02-04 00:00:00",
                endDate: "2020-02-04 14:40:00",
                type: "Contest",
                status: "Active",
                winners: "In Progress",
                inProgress: true
            }
        ]
    })
};
</script>
