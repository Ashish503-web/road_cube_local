<template>
    <v-tab-item :value="$route.path" class="pt-3">
        <v-toolbar flat height="90">
            <v-row
                class="d-flex justify-space-between align-center flex-wrap"
                style="width: 100%"
            >
                <v-btn
                    color="secondary"
                    class="text-capitalize d-flex mx-auto mx-sm-0"
                    depressed
                >
                    Add registration plan
                </v-btn>

                <v-col cols="12" sm="4" class="px-0 mx-auto mx-sm-0">
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
            </v-row>
        </v-toolbar>

        <v-sheet outlined style="overflow: auto">
            <v-sheet min-width="1500">
                <v-data-table
                    :headers="headers"
                    :items="registrationPlans"
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
            { text: "Type", value: "type" },
            { text: "Description", value: "description" },
            { text: "Amount/Rate", value: "amountRate" },
            { text: "Points", value: "points" },
            { text: "Check in points", value: "checkPoints" },
            { text: "Visible", value: "visible" },
            { text: "Payment Methods", value: "paymentMethods" },
            { text: "Companies", value: "companies" },
            { text: "Delete", value: "delete" }
        ],
        registrationPlans: [
            {
                name: "Argyris Packet",
                type: "Monthly amount",
                description: "aaaaa",
                amountRate: "200 €",
                points: "100 Points per liter",
                checkPoints: "10",
                visible: false,
                paymentMethods: "...",
                companies: "..."
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
