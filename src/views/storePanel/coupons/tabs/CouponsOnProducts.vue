<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="100" class="pt-2 mb-3">
            <v-row
                class="d-flex justify-sm-space-between align-center justify-center"
            >
                <v-col
                    cols="12"
                    sm="4"
                    class="d-flex justify-center justify-sm-start"
                >
                    <v-btn
                        color="secondary"
                        class="text-capitalize mx-auto mx-sm-0"
                        depressed
                        @click="dialog = true"
                        >add action</v-btn
                    >
                </v-col>
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
            </v-row>
        </v-toolbar>

        <v-data-table
            :headers="couponsOnProductsHeaders"
            :items="couponsOnProducts"
            :footer-props="{ itemsPerPageOptions }"
        >
            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="myFunc(item)"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span>Update</span>
                </v-tooltip>

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn color="red" icon v-on="on" @click="myFunc(item)">
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span>Delete</span>
                </v-tooltip>
            </template>

            <template v-slot:item.social>
                <v-btn color="blue darken-1" depressed dark small>
                    <v-icon class="mr-1" v-text="icons.mdiFacebook"></v-icon
                    >Share 0
                </v-btn>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" scrollable max-width="40%">
            <v-card>
                <v-card-title class="grey lighten-3">Add Action</v-card-title>
                <v-divider></v-divider>
                <v-card-text class="py-5">
                    <v-card outlined class="px-5 mb-3">
                        <v-radio-group v-model="product.type">
                            <v-row no-gutters>
                                <v-col cols="6">
                                    <v-radio color="secondary">
                                        <template v-slot:label>
                                            <h4 class="subtitle-2">
                                                action 1+1
                                            </h4>
                                        </template>
                                    </v-radio>
                                </v-col>
                                <v-col cols="6">
                                    <v-radio color="secondary">
                                        <template v-slot:label>
                                            <h4 class="subtitle-2">
                                                sampling
                                            </h4>
                                        </template>
                                    </v-radio>
                                </v-col>
                            </v-row>
                        </v-radio-group> </v-card
                    >To create a 1 + 1 Campaign you must declare 1 product for
                    Buy and one to give it Free.Define products from the lists
                    below
                    <v-card outlined class="mt-3 py-5 px-2">
                        <v-row no-gutters>
                            <v-col cols="6" class="px-3">
                                <v-select
                                    menu-props="offsetY"
                                    label="Product for sale"
                                    outlined
                                    dense
                                    hide-details
                                ></v-select>
                            </v-col>
                            <v-col cols="6" class="px-3">
                                <v-select
                                    menu-props="offsetY"
                                    label="Product for gift"
                                    outlined
                                    dense
                                    hide-details
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-card>

                    <v-card outlined class="mt-3 pa-5">
                        <v-text-field
                            type="number"
                            label="Quantity"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                        <template></template>
                    </v-card>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="dialog = false">close</v-btn>
                    <v-btn color="primary" width="80">save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiClose, mdiMagnify, mdiPencilOutline, mdiFacebook } from "@mdi/js";

export default {
    name: "CouponsOnProducts",

    data: () => ({
        icons: {
            mdiClose,
            mdiMagnify,
            mdiPencilOutline,
            mdiFacebook
        },
        couponsOnProductsHeaders: [
            { text: "Type", value: "type" },
            { text: "Product For Sale", value: "sale" },
            { text: "Product For Gift", value: "gift" },
            { text: "Quantity", value: "quantity" },
            { text: "Actions", value: "actions" },
            { text: "Social Media", value: "social" }
        ],
        couponsOnProducts: [
            {
                type: "1+1",
                sale: "discount product",
                gift: "discount product",
                quantity: 5
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        dialog: false,
        product: {
            type: "",
            image: "",
            imageFile: ""
        }
    })
};
</script>
