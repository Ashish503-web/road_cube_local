<template>
    <v-tab-item>
        <v-container class="pa-12 pb-3">
            <v-card outlined tile>
                <v-data-table
                    :headers="couponsWithDiscountHeaders"
                    :items="couponsWithDiscount"
                    outlined
                >
                    <template v-slot:item.actions="{ item }">
                        <v-tooltip
                            v-if="item.discount != '-'"
                            color="secondary"
                            top
                        >
                            <template v-slot:activator="{ on }">
                                <v-btn color="red" icon v-on="on">
                                    <v-icon v-text="icons.mdiClose"></v-icon>
                                </v-btn>
                            </template>

                            <span>Delete Discount</span>
                        </v-tooltip>

                        <v-tooltip v-else color="secondary" top>
                            <template v-slot:activator="{ on }">
                                <v-btn color="primary" icon v-on="on">
                                    <v-icon
                                        v-text="icons.mdiPlusThick"
                                    ></v-icon>
                                </v-btn>
                            </template>

                            <span>Add Discount</span>
                        </v-tooltip>
                    </template>
                </v-data-table>
            </v-card>
        </v-container>
    </v-tab-item>
</template>

<script>
import { mdiClose, mdiPlusThick } from "@mdi/js";

export default {
    name: "CouponsWithDiscount",

    data: () => ({
        icons: {
            mdiClose,
            mdiPlusThick
        },
        couponsWithDiscountHeaders: [
            { text: "Product Name", value: "name" },
            { text: "Discount", value: "discount" },
            { text: "Points", value: "points" },
            { text: "Actions", value: "actions" }
        ],
        couponsWithDiscount: [
            { name: "test lefko", discount: "-10%", points: "0 points" },
            { name: "CARWASH_ΕΞΩΤΕΡΙΚΟ", discount: "-", points: "-" }
        ],
        itemsPerPageOptions: [10, 20, 30, -1]
    })
};
</script>
