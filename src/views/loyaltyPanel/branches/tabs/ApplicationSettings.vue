<template>
    <v-tab-item>
        <v-toolbar flat height="80">
            <SearchField />
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
import SearchField from "@/components/loyaltyPanel/SearchField";
import UpdateAllCheckbox from "@/components/loyaltyPanel/Branches/UpdateAllCheckbox";

export default {
    name: "ApplicationSettings",
    components: { SearchField, UpdateAllCheckbox },
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
