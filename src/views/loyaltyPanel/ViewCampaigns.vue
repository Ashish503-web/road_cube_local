<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-spacer></v-spacer>
                <v-col cols="12" sm="4" class="pa-0">
                    <b-search-field></b-search-field>
                </v-col>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="campaigns"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined rounded-0"
            >
                <template v-slot:item.title="{ item }">
                    <v-btn
                        color="secondary"
                        depressed
                        width="80"
                        small
                        v-text="item.title"
                    ></v-btn>
                </template>

                <template v-slot:item.schedule>
                    <v-btn color="brown" icon>
                        <v-icon v-text="icons.mdiCalendarMonth"></v-icon>
                    </v-btn>
                </template>

                <template v-slot:item.advertisingMeans>
                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-icon
                                color="green"
                                style="cursor:pointer"
                                v-text="icons.mdiChat"
                                v-on="on"
                            ></v-icon>
                        </template>

                        <span class="font-weight-bold">21</span>
                    </v-tooltip>

                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-icon
                                color="green"
                                style="cursor:pointer"
                                v-text="icons.mdiBell"
                                v-on="on"
                            ></v-icon>
                        </template>

                        <span class="font-weight-bold">17</span>
                    </v-tooltip>

                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-icon
                                color="green"
                                style="cursor:pointer"
                                v-text="icons.mdiEmail"
                                v-on="on"
                            ></v-icon>
                        </template>

                        <span class="font-weight-bold">34</span>
                    </v-tooltip>
                </template>

                <template v-slot:item.edit>
                    <v-icon color="secondary" v-text="icons.mdiLock"></v-icon>
                </template>
            </v-data-table>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiCalendarMonth, mdiChat, mdiBell, mdiEmail, mdiLock } from "@mdi/js";

import translations from "@/utils/translations/loyaltyPanel/viewCampaigns";

export default {
    name: "ViewCampaigns",

    mixins: [translations],

    data: () => ({
        icons: {
            mdiCalendarMonth,
            mdiChat,
            mdiBell,
            mdiEmail,
            mdiLock
        },
        headers: [
            { text: "Ημ. Δημιουργίας", value: "date" },
            { text: "Title", value: "title" },
            { text: "Status", value: "status" },
            { text: "Schedule", value: "schedule" },
            { text: "Advertising Means", value: "advertisingMeans" },
            { text: "Edit", value: "edit" }
        ],
        campaigns: [
            { date: "2020-08-24 12:09:30", title: 21, status: "pending" },
            { date: "2020-07-16 18:23:34", title: "test", status: "completed" },
            { date: "2020-08-24 12:09:30", title: "df", status: "completed" }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    }
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
