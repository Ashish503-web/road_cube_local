<template>
    <v-container fluid style="background: #eaedf1">
        <v-sheet>
            <v-app-bar flat dense>
                <v-toolbar-title>Gifts</v-toolbar-title>
            </v-app-bar>
            <v-divider></v-divider>
            <v-toolbar flat height="80">
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="giftDialog = true"
                >add gift</v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="supplierDialog = true"
                >create supplier</v-btn>
            </v-toolbar>

            <v-row justify="end" no-gutters class="py-3 px-4">
                <v-col cols="4">
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
                            <v-list-item-group v-model="selectedSearchType" color="primary">
                                <v-list-item
                                    v-for="searchType in searchTypes"
                                    :key="searchType"
                                    :value="searchType"
                                >
                                    <v-list-item-title v-text="searchType"></v-list-item-title>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-menu>
                </v-col>
            </v-row>

            <v-data-table :headers="headers" :items="gifts" :footer-props="{ itemsPerPageOptions }">
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
            </v-data-table>

            <v-dialog v-model="giftDialog" max-width="40%" scrollable>
                <v-card>
                    <v-card-title class="grey lighten-3">
                        New Gift
                        <v-spacer></v-spacer>
                        <v-icon color="secondary" large v-text="icons.mdiPlus"></v-icon>
                    </v-card-title>

                    <v-card-text class="pt-7">
                        <v-text-field
                            label="Gift Name of Discount"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-textarea label="Description" rounded outlined dense clearable></v-textarea>

                        <v-text-field label="ID Catalog" rounded outlined dense clearable></v-text-field>

                        <v-text-field label="Gift Code" rounded outlined dense clearable></v-text-field>

                        <v-select
                            :items="categories"
                            menu-props="offsetY"
                            label="Gift Category"
                            rounded
                            outlined
                            dense
                        ></v-select>

                        <v-text-field
                            type="number"
                            label="Gift Price"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-select
                            :items="suppliers"
                            menu-props="offsetY"
                            label="Supplier"
                            rounded
                            outlined
                            dense
                        ></v-select>

                        <v-checkbox class="mt-0">
                            <template v-slot:label>
                                <h4 class="subtitle-2">
                                    Receipt from the store (! supplier must have
                                    shop)
                                </h4>
                            </template>
                        </v-checkbox>

                        <v-checkbox class="mt-0">
                            <template v-slot:label>
                                <h4 class="subtitle-2">Appear in catalog</h4>
                            </template>
                        </v-checkbox>

                        <v-checkbox class="mt-0">
                            <template v-slot:label>
                                <h4 class="subtitle-2">
                                    Appear and Redeem on Stores (Only if it is a
                                    Gift Voucher)
                                </h4>
                            </template>
                        </v-checkbox>

                        <v-text-field type="number" label="Points" rounded outlined dense clearable></v-text-field>

                        <h4 class="subtitle-2 secondary--text">Type</h4>

                        <v-radio-group v-model="type">
                            <v-row no-gutters>
                                <v-col cols="auto">
                                    <v-radio value="Αγαθό">
                                        <template v-slot:label>
                                            <h4 class="subtitle-2">Αγαθό</h4>
                                        </template>
                                    </v-radio>
                                </v-col>
                                <v-col cols="auto" class="ml-3">
                                    <v-radio value="Gift Voucher">
                                        <template v-slot:label>
                                            <h4 class="subtitle-2">Gift voucher</h4>
                                        </template>
                                    </v-radio>
                                </v-col>
                            </v-row>
                        </v-radio-group>

                        <v-row v-if="type === 'Gift Voucher'" no-gutters>
                            <v-col cols="6">
                                <h3 class="subtitle-1 secondary--text">Select stores to redeem</h3>
                            </v-col>

                            <v-col cols="6">
                                <v-checkbox
                                    v-model="selectedStores"
                                    v-for="store in stores"
                                    :key="store"
                                    :value="store"
                                    class="mt-0"
                                >
                                    <template v-slot:label>
                                        <h4 class="subtitle-2" v-text="store"></h4>
                                    </template>
                                </v-checkbox>
                            </v-col>
                        </v-row>

                        <v-file-input
                            label="Send Gift"
                            class="mt-3"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-file-input>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="giftDialog = false">cancel</v-btn>
                        <v-btn color="primary" width="80">save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="supplierDialog" max-width="40%" scrollable>
                <v-card>
                    <v-card-title class="grey lighten-3">
                        New Supplier
                        <v-spacer></v-spacer>
                        <v-icon color="secondary" large v-text="icons.mdiPlus"></v-icon>
                    </v-card-title>

                    <v-card-text class="pt-7">
                        <v-text-field label="Ονομα" rounded outlined dense clearable></v-text-field>

                        <v-text-field type="email" label="Email1" rounded outlined dense clearable></v-text-field>

                        <v-text-field type="email" label="Email2" rounded outlined dense clearable></v-text-field>

                        <v-text-field label="Κωδικός" rounded outlined dense clearable></v-text-field>

                        <v-text-field
                            type="number"
                            label="Τηλέφωνο"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="supplierDialog = false">cancel</v-btn>
                        <v-btn color="primary" width="80">save</v-btn>
                    </v-card-actions>
                </v-card>
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
    mdiPlus,
} from "@mdi/js";

export default {
    name: "CatalogManagement",

    data: () => ({
        icons: {
            mdiMagnify,
            mdiChevronDown,
            mdiPencilOutline,
            mdiClose,
            mdiPlus,
        },
        headers: [
            { text: "ID Catalog", value: "catalog" },
            { text: "Image", value: "image" },
            { text: "Supplier", value: "supplier" },
            { text: "Category", value: "category" },
            { text: "Name", value: "name" },
            { text: "Type", value: "type" },
            { text: "Points", value: "points" },
            { text: "Actions", value: "actions" },
        ],
        gifts: [
            {
                catalog: "tetstetest",
                supplier: "Papadakis Mixail",
                category: "Γενικά",
                name: "tetstetest",
                type: "Αγαθό",
                points: "23",
            },
        ],
        itemsPerPageOptions: [10, 25, 50, 100],
        menu: false,
        searchTypes: [
            "All Fields",
            "Catalog",
            "Supplier",
            "Category",
            "Name",
            "Points",
        ],
        selectedSearchType: "All Fields",
        giftDialog: false,
        categories: ["12344", "Auto - Moto", "toldTouRight"],
        suppliers: ["YOU.GR", "PLAISIO", "PUBLIC", "COOKSHOP", "TESCOSMETICS"],
        type: "Αγαθό",
        stores: [
            "All",
            "Katerina",
            "Pelataki",
            "Kainouria",
            "Neo Meo",
            "Dimitris",
            "Larouti",
            "Nikniknik",
            "Arguris Epipla",
        ],
        selectedStores: [],
        supplierDialog: false,
    }),
};
</script>
