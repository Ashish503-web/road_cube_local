<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
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
                :items="participants"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined"
            >
                <template v-slot:item.action>
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="primary"
                                icon
                                v-on="on"
                                to="/loyaltyPanel/view-participant-answer"
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
        headers: [
            { text: "No", value: "number" },
            { text: "Username", value: "username" },
            { text: "Date", value: "date" },
            { text: "Action", value: "action" }
        ],
        participants: [
            { number: 1, username: "Tsekouras", date: "2020-05-04 16:36:17" },
            { number: 2, username: "dimipak11", date: "2020-05-04 16:36:30" },
            { number: 3, username: "kokoko", date: "2020-05-04 16:48:13" }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
