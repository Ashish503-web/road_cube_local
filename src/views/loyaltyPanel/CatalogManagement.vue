<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="openGiftDialog(null)"
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

                <v-col cols="12" sm="4" class="pa-0">
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
                                @click="openGiftDialog(item.gift_id)"
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
                                @click="openDeleteDialog(item.gift_id)"
                            >
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span class="font-weight-bold">Delete</span>
                    </v-tooltip>
                </template>
            </v-data-table>

            <v-dialog v-model="giftDialog" :max-width="$vuetify.breakpoint.smAndDown ? '90%' : '40%'" scrollable>
                <GiftForm :giftId="giftId" @close="giftDialog = false" />
            </v-dialog>

            <v-dialog v-model="supplierDialog" :max-width="$vuetify.breakpoint.smAndDown ? '90%' : '40%'" scrollable>
                <SupplierForm @close="supplierDialog = false" />
            </v-dialog>

            <v-dialog v-model="deleteDialog" max-width="500">
                <b-card
                    type="delete"
                    title="Delete Gift"
                    submit-text="delete"
                    @cancel="deleteDialog = false"
                    @submit="remove"
                >
                    <div class="subtitle-1 font-weight-medium py-3">
                        Are you sure?
                    </div>
                </b-card>
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
import { mapMutations, mapState, mapActions } from "vuex";

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
        giftId: null,
        headers: [
            { text: "Catalog Number", value: "catalog_number" },
            { text: "Image", value: "image" },
            { text: "Supplier", value: "supplier_id" },
            { text: "Category", value: "gift_category_id" },
            { text: "Name", value: "title" },
            { text: "Description", value: "description" },
            { text: "Points", value: "points" },
            { text: "Actions", value: "actions" }
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
        supplierDialog: false,
        deletingGiftId: null
    }),

    computed:{
        gifts: {
            get() {
                return this.$store.state.loyaltyPanel.catalogManagement.gifts;
            }
        },

        deleteDialog: {
            get() {
                return this.$store.state.loyaltyPanel.catalogManagement.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        },
    },
    methods: {
        ...mapMutations("loyaltyPanel/catalogManagement", [
            "setDeleteDialog"
        ]),
        ...mapActions("loyaltyPanel/catalogManagement", ["getGifts","delete"]),

        openGiftDialog(id){
            this.giftId = id
            this.giftDialog = true
        },

        openDeleteDialog(id){
            this.deletingGiftId = id
            this.deleteDialog = true
        },

        remove(){
            this.delete(this.deletingGiftId)
        }
    },
    mounted(){
        this.getGifts()
    }
};
</script>
