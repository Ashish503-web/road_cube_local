<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-btn
                    color="primary"
                    class="px-8"
                    rounded
                    to="/loyaltyPanel/add-contest"
                    >add contest/survey</v-btn
                >

                <v-spacer></v-spacer>

                <v-switch color="secondary" hide-details></v-switch>
            </v-toolbar>

            <v-toolbar flat>
                <v-spacer></v-spacer>
                <v-col cols="4" class="pa-0">
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
                :items="contestsAndSurveys"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined"
            >
                <template v-slot:item.actions="{ item }">
                    <v-tooltip top v-if="item.winners === 'In Progress'">
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="primary"
                                icon
                                v-on="on"
                                to="/loyaltyPanel/view-contest"
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
                                to="/loyaltyPanel/view-participants"
                            >
                                <v-icon v-text="icons.mdiHelp"></v-icon>
                            </v-btn>
                        </template>

                        <span>View Participants</span>
                    </v-tooltip>

                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="red"
                                icon
                                v-on="on"
                                @click="myFunc(item)"
                            >
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
import { mdiMagnify, mdiHelp, mdiEyeOutline, mdiClose } from "@mdi/js";

export default {
    name: "ContestSurvey",

    data: () => ({
        icons: {
            mdiMagnify,
            mdiHelp,
            mdiEyeOutline,
            mdiClose
        },
        headers: [
            { text: "Title", value: "title" },
            { text: "Starting Date", value: "dateStart" },
            { text: "Ending Date", value: "dateEnd" },
            { text: "Type", value: "type" },
            { text: "Status", value: "status" },
            { text: "Winners", value: "winners" },
            { text: "Actions", value: "actions" }
        ],
        contestsAndSurveys: [
            {
                title: "Hi",
                dateStart: "2020-05-04 10:00:00",
                dateEnd: "2020-05-04 17:00:00",
                type: "Survey",
                status: "Inactive",
                winners: "-"
            },
            {
                title: "terste",
                dateStart: "2020-06-05 00:00:00	",
                dateEnd: "2020-06-19 23:59:00",
                type: "Contest",
                status: "Active",
                winners: "In Progress"
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
