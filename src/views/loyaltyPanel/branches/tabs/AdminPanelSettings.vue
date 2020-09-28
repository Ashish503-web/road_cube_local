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
            <template v-slot:header.open_settings="{ header }">
                <UpdateAllCheckbox v-bind:headerText="header.text" />
            </template>
            <template v-slot:header.open_actions="{ header }">
                <UpdateAllCheckbox v-bind:headerText="header.text" />
            </template>
            <template v-slot:header.manual_points_delivery="{ header }">
                <UpdateAllCheckbox v-bind:headerText="header.text" />
            </template>
            <template v-slot:header.body_pricing_file="{ header }">
                <UpdateAllCheckbox v-bind:headerText="header.text" />
            </template>
            <template v-slot:header.open_add_coupon="{ header }">
                <UpdateAllCheckbox v-bind:headerText="header.text" />
            </template>
            <template v-slot:header.open_selection="{ header }">
                <UpdateAllCheckbox v-bind:headerText="header.text" />
            </template>
            <template v-slot:header.open_product="{ header }">
                <UpdateAllCheckbox v-bind:headerText="header.text" />
            </template>
            <template v-slot:header.open_discount="{ header }">
                <UpdateAllCheckbox v-bind:headerText="header.text" />
            </template>

            <template v-slot:item.open_settings>
                <v-checkbox></v-checkbox>
            </template>
            <template v-slot:item.open_actions>
                <v-checkbox></v-checkbox>
            </template>
            <template v-slot:item.manual_points_delivery>
                <v-checkbox></v-checkbox>
            </template>
            <template v-slot:item.body_pricing_file>
                <v-checkbox></v-checkbox>
            </template>
            <template v-slot:item.open_add_coupon>
                <v-checkbox></v-checkbox>
            </template>
            <template v-slot:item.open_selection>
                <v-checkbox></v-checkbox>
            </template>
            <template v-slot:item.open_product>
                <v-checkbox></v-checkbox>
            </template>
            <template v-slot:item.open_discount>
                <v-checkbox></v-checkbox>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import SearchField from "@/components/loyaltyPanel/SearchField";
import UpdateAllCheckbox from "@/components/loyaltyPanel/branches/UpdateAllCheckbox";

export default {
    name: "AdminPanelSettings",
    components: { SearchField, UpdateAllCheckbox },
    data: () => ({
        headers: [
            { text: "Name", value: "name", sortable: false },
            { text: "Open Settings", value: "open_settings", sortable: false },
            {
                text: "Open Promotional Actions",
                value: "open_actions",
                sortable: false
            },
            {
                text: "Manual Points Delivery",
                value: "manual_points_delivery",
                sortable: false
            },
            {
                text: "Body pricing file",
                value: "body_pricing_file",
                sortable: false
            },
            {
                text: "Open Add Coupon",
                value: "open_add_coupon",
                sortable: false
            },
            {
                text: "Open Redeem Mode Selection",
                value: "open_selection",
                sortable: false
            },
            {
                text: "Open Product Insertion / Modification",
                value: "open_product"
            },
            { text: "Open General Discount", value: "open_discount" }
        ],
        items: [
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
            },
            {
                name: "Vasilis"
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
