<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat>
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    v-text="translations.addGift[lang]"
                    @click="dialog = true"
                ></v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    v-text="translations.createSupplier[lang]"
                    @click="supplierDialog = true"
                ></v-btn>
            </v-toolbar>

            <v-toolbar flat>
                <v-spacer></v-spacer>

                <v-col cols="12" sm="4" class="pa-0">
                    <b-search-field
                        :selectedSearchType="selectedSearchType"
                        :searchTypes="searchTypes"
                    ></b-search-field>
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

                        <span
                            class="font-weight-bold"
                            v-text="translations.update[lang]"
                        ></span>
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

                        <span
                            class="font-weight-bold"
                            v-text="translations.delete[lang]"
                        ></span>
                    </v-tooltip>
                </template>
            </v-data-table>

            <v-dialog v-model="dialog" max-width="500">
                <GiftForm @cancel="dialog = false" />
            </v-dialog>

            <v-dialog v-model="supplierDialog" max-width="400">
                <SupplierForm @cancel="supplierDialog = false" />
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";

import GiftForm from "@/components/loyaltyPanel/catalogManagement/GiftForm";
import SupplierForm from "@/components/loyaltyPanel/catalogManagement/SupplierForm";
import translations from "@/utils/translations/loyaltyPanel/catalogManagement";

export default {
    name: "CatalogManagement",

    components: { GiftForm, SupplierForm },

    mixins: [translations],

    data: () => ({
        icons: { mdiPencilOutline, mdiClose },
        searchTypes: [
            "All Fields",
            "Catalog",
            "Supplier",
            "Category",
            "Name",
            "Points"
        ],
        selectedSearchType: "All Fields",

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
        dialog: false,
        supplierDialog: false,
        deleteDialog: false
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.IDCatalog[this.lang],
                    value: "catalog"
                },
                { text: this.translations.image[this.lang], value: "image" },
                {
                    text: this.translations.supplier[this.lang],
                    value: "supplier"
                },
                {
                    text: this.translations.category[this.lang],
                    value: "category"
                },
                { text: this.translations.name[this.lang], value: "name" },
                { text: this.translations.type[this.lang], value: "type" },
                { text: this.translations.points[this.lang], value: "points" },
                { text: this.translations.actions[this.lang], value: "actions" }
            ];
        }
    }
};
</script>
