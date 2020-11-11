<template>
    <v-tab-item :value="$route.path" class="pt-5">
        <v-alert type="error" class="font-weight-bold">
            The date for the next payment has passed. Please update your
            subscription. Cost: 62.000,00 €
        </v-alert>

        <v-toolbar flat height="80">
            <v-row class="d-flex align-center">
                <v-col cols="12" sm="auto" class="py-0">
                    <v-card-title>Transaction History</v-card-title>
                </v-col>

                <v-spacer></v-spacer>
                <v-col cols="12" sm="4" class="py-0">
                    <v-text-field
                        label="Search"
                        color="secondary"
                        rounded
                        outlined
                        dense
                        clearable
                        hide-details
                        :append-icon="icons.mdiMagnify"
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-toolbar>
        <v-data-table
            :headers="headers"
            :items="transactions"
            :footer-props="{ itemsPerPageOptions }"
            class="b-outlined"
        ></v-data-table>
    </v-tab-item>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import { mapActions } from "vuex";

export default {
    name: "PaymentHistory",

    data: () => ({
        icons: {
            mdiMagnify,
        },
        tab: 0,
        itemsPerPageOptions: [10, 25, 50, 100],
        headers: [
            { text: "Date", value: "date" },
            { text: "Description", value: "description" },
            { text: "Payment Through", value: "paymentThrough" },
            { text: "Amount", value: "amount" },
        ],
        transactions: [
            {
                date: "19-05-2020",
                description: "Payment: Online",
                paymentThrough: "Card: **********3434",
                amount: "37,20 €",
            },
        ],
    }),

    methods: {
        ...mapActions("storePanel/settings/paymentHistory", ["getItems"]),
    },

    mounted() {
        this.getItems();
    },
};
</script>

<style scoped>
.border-red {
    border: 1px solid red;
}
</style>
