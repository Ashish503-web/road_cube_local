<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-row no-gutters align="center" class="pa-5 pt-0">
                <v-col cols="auto">
                    <v-img
                        src="@/assets/catalog-categories.png"
                        width="60"
                        height="60"
                    ></v-img>
                </v-col>

                <v-col cols="7" class="pl-5">
                    <h4 v-text="translations.title[lang]"></h4>
                    <div
                        style="font-size: 0.875rem"
                        class="font-weight-medium mt-1"
                    >
                        {{ translations.info[lang] }}
                        <router-link
                            class="blue--text ml-1"
                            v-text="translations.giftCatalog[lang]"
                            :to="`/${lang}/loyaltyPanel/gift-catalog?page=1`"
                        ></router-link>
                    </div>
                </v-col>
            </v-row>

            <v-toolbar flat>
                <v-btn
                    color="secondary"
                    class="text-capitalize d-flex mx-auto mx-sm-0"
                    depressed
                    v-text="translations.addCategory[lang]"
                    @click="addItem"
                ></v-btn>

                <v-spacer></v-spacer>

                <v-col cols="12" sm="4" class="pa-0">
                    <b-search-field></b-search-field>
                </v-col>
            </v-toolbar>

            <v-data-table
                :headers="headers"
                :items="items"
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
                                @click="editItem(item)"
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
                                @click="
                                () => {
                                    gift = item;
                                    deleteDialog = true;
                                }
                            "
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

            <v-dialog v-model="dialog" max-width="500" scrollable>
                <CategoryForm @back="dialog = false" :item=newitem :mode=mode />
            </v-dialog>

            <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                title="Delete Category"
                :submit-text="{ el: '', en: 'delete', it: '' }"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="deleteItem(gift.gift_category_id)"
            >
                <div class="subtitle-1 font-weight-medium pt-2 px-2">
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary" v-if="gift">{{
                        gift.name[lang]
                    }}</span
                    >?
                </div>
            </b-card>
        </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapMutations, mapGetters, mapActions, mapState } from "vuex";

import CategoryForm from "@/components/loyaltyPanel/catalogCategories/CategoryForm.vue";
import translations from "@/utils/translations/loyaltyPanel/catalogCategories";

export default {
    name: "CatalogCategories",

    components: { CategoryForm },

    mixins: [translations],

    data: () => ({
        icons: { mdiPencilOutline, mdiClose },
        newitem: {},
        mode: 0,
        itemsPerPageOptions: [10, 25, 50, 100],
        dialog: false
    }),
    mounted(){
        this.fetchGiftCategories();
    },
    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapGetters({
            getGiftCategories: 'loyaltyPanel/catalogManagement/getGiftCategories',
            getDeleteDialog: 'loyaltyPanel/catalogManagement/getDeleteDialog',
            getGift: 'loyaltyPanel/catalogManagement/getGift'
        }),
        lang() {
            return this.$route.params.lang;
        },
        items(){
            let items = [];
            for(let category of this.getGiftCategories){
                items.push({
                    gift_category_id: category.gift_category_id,
                    name: category.name,
                    nameToShow: category.name[this.lang],
                    text_color: category.text_color,
                    bg_color: category.bg_color,
                    image: category.image,
                    upload: null,
                });
            }
            return items;
        },
        headers() {
            return [
                {
                    text: this.translations.categoryName[this.lang],
                    value: "nameToShow"
                },
                {
                    text: this.translations.fontColor[this.lang],
                    value: "text_color"
                },
                {
                    text: this.translations.backgroundColor[this.lang],
                    value: "bg_color"
                },
                {
                    text: this.translations.imageCategory[this.lang],
                    value: "image"
                },
                {
                    text: this.translations.actions[this.lang],
                    value: "actions"
                }
            ];
        },
        gift: {
            get() {
                return this.getGift;
            },

            set(val) {
                this.setGiftData(val);
            },
        },
        deleteDialog: {
            get() {
                return this.getDeleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        },
    },

    methods: {
        ...mapMutations("loyaltyPanel/catalogManagement", [
            "setDeleteDialog",
            'setGiftData'
        ]),
        ...mapActions({
            fetchGiftCategories: "loyaltyPanel/catalogManagement/fetchGiftCategories",
            deleteItem: "loyaltyPanel/catalogManagement/delete"
        }),
        addItem(){
            this.dialog = true;
            this.mode = 0;
            this.newitem = {
                name: {
                    'el': '',
                    'en': '',
                    'it': ''
                },
                text_color: "#000000",
                bg_color: "#FFFFFF",
                image: '',
                upload: null,
                gift_category_id: undefined
            };
        },
        editItem(item){
            this.mode = 1;
            this.dialog = true;
            this.newitem = item;
        }
    }
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
