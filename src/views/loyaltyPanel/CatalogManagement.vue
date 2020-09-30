<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="giftDialog = true"
                    >add gift</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="supplierDialog = true"
                    >create supplier</v-btn
                >
            </v-toolbar>

            <v-toolbar flat>
                <v-spacer></v-spacer>

                <v-col cols="4" class="pa-0">
                    <v-menu v-model="menu" offset-y>
                        <template v-slot:activator="{ attrs }">
                            <v-text-field
                                :label="
                                    selectedSearchType === 'All Fields'
                                        ? 'Search'
                                        : selectedSearchType
                                        ? 'Search by ' + selectedSearchType
                                        : 'Search'
                                "
                                rounded
                                outlined
                                dense
                                clearable
                                hide-details
                                :aria-expanded="attrs['aria-expanded']"
                                :prepend-inner-icon="icons.mdiMagnify"
                                :append-icon="icons.mdiChevronDown"
                                @click:append="menu = true"
                            ></v-text-field>
                        </template>

                        <v-list dense>
                            <v-list-item-group
                                v-model="selectedSearchType"
                                color="secondary"
                            >
                                <v-list-item
                                    v-for="searchType in searchTypes"
                                    :key="searchType"
                                    :value="searchType"
                                >
                                    <v-list-item-title
                                        v-text="searchType"
                                    ></v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-menu>
                </v-col>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="gifts"
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
            </v-data-table>

            <v-dialog v-model="giftDialog" max-width="40%" scrollable>
                <GiftForm @close="giftDialog = false" />
            </v-dialog>

            <v-dialog v-model="supplierDialog" max-width="40%" scrollable>
                <SupplierForm @close="supplierDialog = false" />
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiMagnify,
    mdiChevronDown,
    mdiPencilOutline,
    mdiClose,
    mdiPlus
} from "@mdi/js";

import GiftForm from "../../components/loyaltyPanel/catalogManagement/GiftForm";
import SupplierForm from "../../components/loyaltyPanel/catalogManagement/SupplierForm";

export default {
    name: "CatalogManagement",
    components: { GiftForm, SupplierForm },
    data: () => ({
        icons: {
            mdiMagnify,
            mdiChevronDown,
            mdiPencilOutline,
            mdiClose,
            mdiPlus
        },
        headers: [
            { text: "ID Catalog", value: "catalog" },
            { text: "Image", value: "image" },
            { text: "Supplier", value: "supplier" },
            { text: "Category", value: "category" },
            { text: "Name", value: "name" },
            { text: "Type", value: "type" },
            { text: "Points", value: "points" },
            { text: "Actions", value: "actions" }
        ],
        gifts: [
            {
                catalog: "tetstetest",
                supplier: "Papadakis Mixail",
                category: "Γενικά",
                name: "tetstetest",
                type: "Αγαθό",
                points: "23"
            }
        ],
        itemsPerPageOptions: [10, 25, 50, 100],
        menu: false,
        searchTypes: [
            "All Fields",
            "Catalog",
            "Supplier",
            "Category",
            "Name",
            "Points"
        ],
        selectedSearchType: "All Fields",
        giftDialog: false,
        supplierDialog: false
    })
};
</script>
