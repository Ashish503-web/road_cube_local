<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet class="pa-3">
            <v-alert type="info">
                1 + 1 and sampling actions are the best ways to bring the online
                customer to your store. Do not forget to publish the actions on
                the internet to maximize the result.
            </v-alert>

            <v-toolbar flat height="80">
                <v-btn
                    color="secondary"
                    class="text-capitalize px-8"
                    depressed
                    @click="dialog = true"
                >add action</v-btn>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="actions"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined"
            >
                <template v-slot:item.actions="{ item }">
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn color="yellow darken-3" icon v-on="on" @click="myFunc(item)">
                                <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                            </v-btn>
                        </template>

                        <span>Update</span>
                    </v-tooltip>

                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-btn color="red" icon v-on="on" @click="myFunc(item)">
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span>Delete</span>
                    </v-tooltip>
                </template>

                <template v-slot:item.social>
                    <v-btn color="blue darken-1" class="text-capitalize" depressed dark small>
                        <v-icon class="mr-1" v-text="icons.mdiFacebook"></v-icon>Share 0
                    </v-btn>
                </template>
            </v-data-table>

            <v-dialog v-model="dialog" max-width="40%" scrollable>
                <v-card>
                    <v-card-title class="grey lighten-3">
                        New Action
                        <v-spacer></v-spacer>
                        <v-icon color="secondary" large v-text="icons.mdiPlus"></v-icon>
                    </v-card-title>

                    <v-card-text class="pt-7">
                        <v-radio-group v-model="type">
                            <v-row no-gutters>
                                <v-col cols="6">
                                    <v-radio value="action 1 + 1">
                                        <template v-slot:label>
                                            <h4 class="subtitle-2">action 1 + 1</h4>
                                        </template>
                                    </v-radio>
                                </v-col>
                                <v-col cols="6">
                                    <v-radio value="sampling">
                                        <template v-slot:label>
                                            <h4 class="subtitle-2">sampling</h4>
                                        </template>
                                    </v-radio>
                                </v-col>
                            </v-row>
                        </v-radio-group>
                        {{ typeText }}
                        <v-card outlined class="mt-5 pt-7">
                            <v-row no-gutters justify="space-around">
                                <v-col cols="5">
                                    <v-select
                                        menu-props="offsetY"
                                        label="Product for Sale"
                                        rounded
                                        outlined
                                        dense
                                    ></v-select>
                                </v-col>
                                <v-col cols="5">
                                    <v-select
                                        menu-props="offsetY"
                                        label="Product for Gift"
                                        rounded
                                        outlined
                                        dense
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-card>

                        <v-card outlined class="mt-5 pt-7">
                            <v-row no-gutters justify="center">
                                <v-col cols="11">
                                    <v-text-field
                                        type="number"
                                        label="How many for each company?"
                                        rounded
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="dialog = false">cancel</v-btn>
                        <v-btn color="primary" width="80">save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPencilOutline, mdiClose, mdiFacebook, mdiPlus } from "@mdi/js";

export default {
    name: "Sampling",

    data: () => ({
        icons: {
            mdiPencilOutline,
            mdiClose,
            mdiFacebook,
            mdiPlus,
        },
        headers: [
            { text: "Type", value: "type" },
            { text: "Product for Sale", value: "saleProduct" },
            { text: "Product for Gift", value: "giftProduct" },
            { text: "Quantity", value: "quantity" },
            { text: "Actions", value: "actions" },
            { text: "Social Media", value: "social" },
        ],
        actions: [
            {
                type: "1+1",
                saleProduct: "katq",
                giftProduct: "kat2",
                quantity: "2",
            },
            {
                type: "Sampling",
                saleProduct: "-",
                giftProduct: "kat2",
                quantity: "5",
            },
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        dialog: false,
        type: "action 1 + 1",
    }),

    computed: {
        typeText() {
            return this.type === "action 1 + 1"
                ? "To create a 1 + 1 Campaign you must declare 1 product for Buy and one to give it Free.Define products from the lists below"
                : "To create a Sampling / Free Campaign, you must declare 1 product to serve as a sample";
        },
    },
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
