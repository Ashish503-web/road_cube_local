<template>
    <v-tab-item>
        <v-card-title>
            <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
            >Add registration plan </v-btn>
        </v-card-title>
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
                :items="registrationPlans"
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
                { text: "Type", value: "type" },
                { text: "Description", value: "description" },
                { text: "Amount/Rate", value: "amountRate" },
                { text: "Points", value: "points" },
                { text: "Check in points", value: "checkPoints" },
                { text: "Visible", value: "visible" },
                { text: "Payment Methods", value: "paymentMethods" },
                { text: "Companies", value: "companies" },
                { text: "Delete", value: "delete" },
            ],
            registrationPlans:[
                {
                    name: 'Argyris Packet',
                    type: 'Monthly amount',
                    description: 'aaaaa',
                    amountRate: '200 €',
                    points: '100 Points per liter',
                    checkPoints: '10',
                    visible: false,
                    paymentMethods:'...',
                    companies: '...',
                },
            ],
            itemsPerPageOptions: [10, 20, 30, -1]
        })
    };
</script>
