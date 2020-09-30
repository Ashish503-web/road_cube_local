<template>
    <v-container fluid class="b-container">
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
                    >add action</v-btn
                >
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="actions"
                :footer-props="{ itemsPerPageOptions }"
                class="b-outlined"
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
                                <v-icon
                                    v-text="icons.mdiPencilOutline"
                                ></v-icon>
                            </v-btn>
                        </template>

                        <span class="font-weight-bold">Update</span>
                    </v-tooltip>

                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="red"
                                icon
                                v-on="on"
                                @click="myFunc(item)"
                            >
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span class="font-weight-bold">Delete</span>
                    </v-tooltip>
                </template>

                <template v-slot:item.social>
                    <v-btn
                        color="blue darken-1"
                        class="text-capitalize"
                        depressed
                        dark
                        small
                    >
                        <v-icon class="mr-1" v-text="icons.mdiFacebook"></v-icon
                        >Share 0
                    </v-btn>
                </template>
            </v-data-table>

            <v-dialog v-model="dialog" max-width="40%" scrollable>
                <CreateUpdateAction @close="dialog=false" />
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPencilOutline, mdiClose, mdiFacebook, mdiPlus } from "@mdi/js";
import CreateUpdateAction from "../../components/loyaltyPanel/CreateUpdateAction/CreateUpdateAction";

export default {
    name: "Sampling",
    components: { CreateUpdateAction },
    data: () => ({
        icons: {
            mdiPencilOutline,
            mdiClose,
            mdiFacebook,
            mdiPlus
        },
        headers: [
            { text: "Type", value: "type" },
            { text: "Product for Sale", value: "saleProduct" },
            { text: "Product for Gift", value: "giftProduct" },
            { text: "Quantity", value: "quantity" },
            { text: "Actions", value: "actions" },
            { text: "Social Media", value: "social" }
        ],
        actions: [
            {
                type: "1+1",
                saleProduct: "katq",
                giftProduct: "kat2",
                quantity: "2"
            },
            {
                type: "Sampling",
                saleProduct: "-",
                giftProduct: "kat2",
                quantity: "5"
            }
        ],
        itemsPerPageOptions: [10, 20, 30, -1],
        dialog: false,
    })
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
