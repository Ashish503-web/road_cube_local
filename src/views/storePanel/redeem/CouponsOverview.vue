<template>
    <v-tab-item>
        <v-toolbar flat height="80" class="pt-2">
            <a class="export-link" href @click.prevent>Export to Excel</a>
            <v-divider class="mx-3" vertical inset></v-divider>
            <a class="export-link" href @click.prevent>Export to CSV</a>

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
            :items="coupons"
            :footer-props="{ itemsPerPageOptions }"
            class="mt-4 coupon-table"
        >
            <template v-slot:item.edit="{ item }">
                <v-btn color="yellow darken-3" icon @click="myFunc(item)">
                    <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                </v-btn>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import { mdiMagnify, mdiPencilOutline } from "@mdi/js";

export default {
    name: "CouponsOverview",

    data: () => ({
        icons: { mdiMagnify, mdiPencilOutline },
        headers: [
            { text: "Voucher / Action", value: "user" },
            { text: "Voucher", value: "amount" },
            { text: "Points", value: "product" },
            { text: "Acquired", value: "address" },
            { text: "Redeemed", value: "information" },
            { text: "Available", value: "actions" },
            { text: "Edit", value: "edit" },
            { text: "Available", value: "actions" },
        ],
        coupons: [{ user: "Edgar" }],
        itemsPerPageOptions: [10, 25, 50, 100],
    }),
};
</script>

<style scoped>
.export-link {
    text-decoration: none;
}

.export-link:hover {
    text-decoration: underline;
}
</style>
