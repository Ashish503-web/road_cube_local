<template>
    <v-tab-item class="pt-3">
        <v-toolbar flat height="80">
            <v-spacer></v-spacer>

            <v-col cols="12" sm="4" >
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
        </v-toolbar>

        <v-sheet outlined style="overflow: auto">
            <v-sheet min-width="1550">
                <v-data-table
                    :headers="headers"
                    :footer-props="{ itemsPerPageOptions }"
                ></v-data-table>
            </v-sheet>
        </v-sheet>
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
            { text: "Options", value: "options" }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
