<template>
    <v-tab-item>
        <v-card-title class="justify-end">
            <v-col cols="4">
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
        </v-card-title>
        <v-data-table
                :headers="headers"
                :footer-props="{ itemsPerPageOptions }"
        ></v-data-table>
    </v-tab-item>
</template>

<script>
    import { mdiMagnify } from "@mdi/js";

    export default {
        name: "Pending",

        data: () => ({
            icons: { mdiMagnify },
            headers: [
                { text: "Name", value: "name" },
                { text: "Name of Shop", value: "nameShop" },
                { text: "Map", value: "map" },
                { text: "Active", value: "active" },
                { text: "Address", value: "address" },
                { text: "Mobile phone", value: "mobilePhone" },
                { text: "Plan", value: "plan" },
                { text: "Payment Method", value: "paymentMethod" },
                { text: "Online/Offline", value: "onOff" },
                { text: "Payment", value: "payment" },
                { text: "Next payment date", value: "paymentDate" },
                { text: "Amount", value: "amount" },
                { text: "Options", value: "options" },
            ],
            itemsPerPageOptions: [10, 20, 30, -1]
        })
    };
</script>
