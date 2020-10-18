<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="80">
            <v-spacer></v-spacer>
            <v-col cols="4">
                <b-search-field
                    :selectedSearchType="selectedSearchType"
                    :searchTypes="searchTypes"
                ></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="items"
            :footer-props="{ itemsPerPageOptions }"
            class="b-outlined"
        >
            <template v-slot:header.open_shop="{ header }">
                <UpdateAllCheckbox v-bind:headerText="header.text" />
            </template>
            <template v-slot:header.open_checkin="{ header }">
                <UpdateAllCheckbox v-bind:headerText="header.text" />
            </template>
            <template v-slot:header.open_scanning="{ header }">
                <UpdateAllCheckbox v-bind:headerText="header.text" />
            </template>

            <template v-slot:item.open_shop>
                <v-checkbox></v-checkbox>
            </template>
            <template v-slot:item.open_checkin>
                <v-checkbox></v-checkbox>
            </template>
            <template v-slot:item.open_scanning>
                <v-checkbox></v-checkbox>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import UpdateAllCheckbox from "@/components/loyaltyPanel/branches/UpdateAllCheckbox";

export default {
    name: "ApplicationSettings",
    components: { UpdateAllCheckbox },
    data: () => ({
        headers: [
            { text: "Name", value: "name" },
            { text: "Open shop on Map", value: "open_shop", sortable: false },
            { text: "Open Checkin", value: "open_checkin", sortable: false },
            {
                text: "Open Receipt Scanning",
                value: "open_scanning",
                sortable: false
            }
        ],
        items: [
            {
                name: "Vasilisa"
            },
            {
                name: "Vasilisb"
            },
            {
                name: "Vasilisc"
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
