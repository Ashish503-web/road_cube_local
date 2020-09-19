<template>
    <v-container fluid class="px-3">
        <v-sheet color="#eaedf1" class="pa-3">
            <v-row no-gutters>
                <v-col cols="auto">
                    <v-tabs v-model="tab">
                        <v-tab class="text-capitalize">redeem voucher</v-tab>
                        <v-tab class="text-capitalize">coupons overview</v-tab>
                        <v-tab class="text-capitalize">multiple coupons</v-tab>
                    </v-tabs>
                </v-col>
                <v-col cols="12">
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <v-card-text>
                                When the customer wins a discount or a gift our
                                system will generate a voucher which will have a
                                code. This voucher will be sended in the user
                                account. Type the voucher code below
                            </v-card-text>
                            <v-card-title class="subtitle-1 font-weight-medium">
                                <v-col cols="auto">Coupon Code</v-col>
                                <v-col cols="auto">
                                    <v-text-field
                                        outlined
                                        dense
                                        clearable
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                                <v-btn color="primary" rounded>
                                    <v-icon
                                        class="mr-2"
                                        v-text="icons.mdiArrowRight"
                                    ></v-icon
                                    >validation
                                </v-btn>
                            </v-card-title>
                        </v-tab-item>

                        <v-tab-item>
                            <v-toolbar flat height="80" class="pt-2">
                                <a class="export-link" href @click.prevent
                                    >Export to Excel</a
                                >
                                <v-divider
                                    class="mx-3"
                                    vertical
                                    inset
                                ></v-divider>
                                <a class="export-link" href @click.prevent
                                    >Export to CSV</a
                                >

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
                                :headers="couponsHeaders"
                                :items="coupons"
                                :footer-props="{ itemsPerPageOptions }"
                                class="mt-4 coupon-table"
                            >
                                <template v-slot:item.edit="{ item }">
                                    <v-btn
                                        color="yellow darken-3"
                                        icon
                                        @click="myFunc(item)"
                                    >
                                        <v-icon
                                            v-text="icons.mdiPencilOutline"
                                        ></v-icon>
                                    </v-btn>
                                </template>
                            </v-data-table>
                        </v-tab-item>

                        <v-tab-item class="pt-4">
                            <v-data-table
                                :headers="multipleCouponsHeaders"
                                :items="multipleCoupons"
                                :footer-props="{ itemsPerPageOptions }"
                            ></v-data-table>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiArrowRight, mdiMagnify, mdiPencilOutline } from "@mdi/js";

export default {
    name: "Redeem",

    data: () => ({
        icons: { mdiArrowRight, mdiMagnify, mdiPencilOutline },
        tab: 0,
        itemsPerPageOptions: [10, 25, 50, 100],
        couponsHeaders: [
            { text: "Voucher / Action", value: "user" },
            { text: "Voucher", value: "amount" },
            { text: "Points", value: "product" },
            { text: "Acquired", value: "address" },
            { text: "Redeemed", value: "information" },
            { text: "Available", value: "actions" },
            { text: "Edit", value: "edit" },
            { text: "Available", value: "actions" }
        ],
        coupons: [{ user: "Edgar" }],
        multipleCouponsHeaders: [
            { text: "Voucher / Action", value: "user" },
            { text: "Voucher", value: "amount" },
            { text: "Coupon Code", value: "product" },
            { text: "Coupon Value", value: "address" }
        ],
        multipleCoupons: []
    })
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
