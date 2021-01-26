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
                    @click="dialog = true"
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

            <v-dialog v-model="dialog" max-width="500" scrollable>
                <CategoryForm @cancel="dialog = false" />
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapMutations } from "vuex";

import CategoryForm from "@/components/loyaltyPanel/catalogCategories/CategoryForm.vue";
import translations from "@/utils/translations/loyaltyPanel/catalogCategories";

export default {
    name: "CatalogCategories",

    components: { CategoryForm },

    mixins: [translations],

    data: () => ({
        icons: { mdiPencilOutline, mdiClose },
        items: [
            {
                categoryName: "Ένδυση, Υποδήματα, Αξεσουάρ",
                fontColor: "#000000",
                backgroundColor: "#ff0000",
                english: 3123,
                italian: 3123
            }
        ],
        itemsPerPageOptions: [10, 25, 50, 100],
        dialog: false
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.categoryName[this.lang],
                    value: "categoryName"
                },
                {
                    text: this.translations.fontColor[this.lang],
                    value: "fontColor"
                },
                {
                    text: this.translations.backgroundColor[this.lang],
                    value: "backgroundColor"
                },
                {
                    text: this.translations.imageCategory[this.lang],
                    value: "imageCategory"
                },
                {
                    text: this.translations.english[this.lang],
                    value: "english"
                },
                {
                    text: this.translations.italian[this.lang],
                    value: "italian"
                },
                {
                    text: this.translations.actions[this.lang],
                    value: "actions"
                }
            ];
        },

        deleteDialog: {
            get() {
                return this.$store.state.loyaltyPanel.userRights.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/userRights", ["setDeleteDialog"])
    }
};
</script>

<style scoped>
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
