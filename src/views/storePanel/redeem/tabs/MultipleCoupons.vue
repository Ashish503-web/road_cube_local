<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="80">
            <v-spacer></v-spacer>

            <v-col cols="12" sm="4">
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

        <v-data-table
            :headers="headers"
            :items="multipleCoupons"
            :footer-props="{ itemsPerPageOptions }"
        ></v-data-table>
    </v-tab-item>
</template>

<script>
import { mdiMagnify } from "@mdi/js";

export default {
    name: "MultipleCoupons",

    data: () => ({
        icons: { mdiMagnify },
        headers: [
            { text: "Voucher / Action", value: "user" },
            { text: "Voucher", value: "amount" },
            { text: "Coupon Code", value: "product" },
            { text: "Coupon Value", value: "address" }
        ],
        multipleCoupons: [],
        itemsPerPageOptions: [10, 25, 50, 100]
    })
};
</script>
