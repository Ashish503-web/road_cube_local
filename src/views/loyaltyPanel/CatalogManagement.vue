<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat>
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    v-text="translations.addGift[lang]"
                    @click="openGiftDialog(null)"
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
                                @click="openGiftDialog(item.gift_id)"
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
                                @click="openDeleteDialog(item.gift_id)"
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

            <v-dialog v-model="giftDialog" :max-width="$vuetify.breakpoint.smAndDown ? '90%' : '40%'">
                <GiftForm :giftId="giftId" @close="giftDialog = false" />
            </v-dialog>

            <v-dialog v-model="supplierDialog" max-width="400">
                <SupplierForm @cancel="supplierDialog = false" />
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
import translations from "@/utils/translations/loyaltyPanel/catalogManagement";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
    name: "CatalogManagement",
    components: { GiftForm, SupplierForm },

    mixins: [translations],

    data: () => ({
        icons: {
            mdiMagnify,
            mdiChevronDown,
            mdiPencilOutline,
            mdiClose,
            mdiPlus
        },
        giftId: null,
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
        lang() {
            return this.$route.params.lang;
        },
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

        headers() {
            return [
                {
                    text: this.translations.IDCatalog[this.lang],
                    value: "code"
                },
                { text: this.translations.image[this.lang], value: "image" },
                {
                    text: this.translations.supplier[this.lang],
                    value: "supplier_id"
                },
                {
                    text: this.translations.category[this.lang],
                    value: "gift_category_id"
                },
                { text: this.translations.name[this.lang], value: "title" },
                { text: this.translations.type[this.lang], value: "gift_type_id" },
                { text: this.translations.points[this.lang], value: "points" },
                { text: this.translations.actions[this.lang], value: "actions" }
            ];
        }
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
