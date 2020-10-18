<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="80">
            <v-row
                class="d-flex justify-space-between align-center flex-wrap mt-2"
            >
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="dialog = true"
                    >New Product or Service</v-btn
                >

                <v-col cols="4">
                    <b-search-field
                        :selectedSearchType="selectedSearchType"
                        :searchTypes="searchTypes"
                    ></b-search-field>
                </v-col>
            </v-row>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="items"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            class="b-outlined"
        >
            <template v-slot:item.actions>
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="dialog = true"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
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
                            @click="deleteDialog = true"
                        >
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold">Delete</span>
                </v-tooltip>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="700">
            <ProductForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="600">
            <b-card
                type="delete"
                title="Delete Product"
                submit-text="delete"
                @cancel="deleteDialog = false"
            >
                <p>
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary"
                        >Product Name</span
                    >?
                </p>
                <v-checkbox
                    color="secondary"
                    class="pt-0 mt-3"
                    hide-details="auto"
                >
                    <template v-slot:label>
                        <h4 class="secondary--text">
                            Delete product from all existing companies
                        </h4>
                    </template>
                </v-checkbox>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";
import ProductForm from "@/components/loyaltyPanel/products/ProductForm.vue";

export default {
    name: "ProductsTab",
    components: { ProductForm },
    data: () => ({
        icons: { mdiPencilOutline, mdiClose },
        searchTypes: [
            "Name",
            "Description",
            "Selling Price",
            "Target Price",
            "Wholesale Price"
        ],
        selectedSearchType: "All Fields",
        headers: [
            {
                text: "Product Name",
                align: "start",
                sortable: true,
                value: "name",
                action: false
            },
            {
                text: "Product Description",
                value: "description",
                action: false
            },
            { text: "Selling Price", value: "selling", action: false },
            { text: "Wholesale Price", value: "wholesale", action: false },
            { text: "Actions", value: "actions", sortable: false, action: true }
        ],
        items: [
            {
                name: "Selling Price",
                description: 159,
                selling: 6.0,
                wholesale: 24,
                id: 1
            },
            {
                name: "Ice cream sandwich",
                description: 237,
                selling: 9.0,
                wholesale: 37,
                id: 0
            }
        ],
        mode: 1,
        dialog: false,
        deleteDialog: false
    })
};
</script>
