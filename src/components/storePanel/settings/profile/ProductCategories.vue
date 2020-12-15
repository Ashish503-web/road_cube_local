<template>
    <b-standard-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
        hide-default-footer
    >
        <v-form @submit.prevent="create">
            <v-row no-gutters justify="space-between" align="center">
                <v-col class="pr-2">
                    <b-text-field
                        v-model="productCategory.name[categoryLang]"
                        :label="translations.name[lang]"
                        no-top-margin
                    >
                        <template v-slot:append>
                            <b-lang-menu
                                v-model="categoryLang"
                                type="inner"
                            ></b-lang-menu>
                        </template>
                    </b-text-field>
                </v-col>
                <v-col cols="auto">
                    <v-btn
                        type="submit"
                        color="secondary"
                        class="text-capitalize px-5"
                        depressed
                        :loading="loading"
                        >{{ translations.add[lang] }}</v-btn
                    >
                </v-col>
            </v-row>
        </v-form>

        <v-sheet outlined class="mt-3">
            <v-row no-gutters>
                <v-col
                    class="subtitle-2 text--secondary pa-3"
                    v-text="translations.name[lang]"
                ></v-col>
                <v-col
                    cols="auto"
                    class="subtitle-2 text--secondary py-3 px-6"
                    v-text="translations.actions[lang]"
                ></v-col>
            </v-row>
            <v-row
                v-for="category in productCategories"
                :key="category.product_category_id"
                no-gutters
                align="center"
                class="b-border-top"
            >
                <v-col class="pa-3" v-text="category.name[lang]"></v-col>
                <v-col cols="auto" class="px-3">
                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="yellow darken-3"
                                icon
                                v-on="on"
                                @click="
                                    () => {
                                        category.expanded = true;
                                        selectedProductCategory = category;
                                    }
                                "
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
                                        selectedProductCategory = category;
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
                </v-col>

                <v-col v-if="category.expanded" cols="12">
                    <v-card flat class="pa-3">
                        <b-text-field
                            v-model="selectedProductCategory.name[selectedLang]"
                            label="Category Name"
                            no-top-margin
                        >
                            <template v-slot:append>
                                <b-lang-menu
                                    v-model="selectedLang"
                                    type="inner"
                                ></b-lang-menu>
                            </template>
                        </b-text-field>

                        <v-card-actions class="pa-0 pt-3">
                            <v-spacer></v-spacer>
                            <v-btn
                                class="text-capitalize"
                                height="32"
                                text
                                v-text="translations.cancel[lang]"
                                @click="
                                    () => {
                                        category.expanded = false;
                                        selectedProductCategory = {};
                                    }
                                "
                            ></v-btn>
                            <v-btn
                                type="submit"
                                color="secondary"
                                class="text-capitalize"
                                height="32"
                                depressed
                                :loading="selectedProductCategory.loading"
                                @click="update"
                                >{{ translations.save[lang] }}</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
            <v-dialog v-model="deleteDialog" max-width="500">
                <b-card
                    type="delete"
                    :title="translations.deleteCategory[lang]"
                    :submit-text="{ el: '', en: 'delete', it: '' }"
                    :loading="selectedProductCategory.loading"
                    :error-message="errorMessage"
                    @cancel="deleteDialog = false"
                    @submit="
                        remove(selectedProductCategory.product_category_id)
                    "
                >
                    <div class="subtitle-1 font-weight-medium py-3 px-2">
                        Are you sure you want to delete
                        <span class="font-weight-bold text--primary">{{
                            selectedProductCategory.name[lang]
                        }}</span
                        >?
                    </div>
                </b-card>
            </v-dialog>
        </v-sheet>
    </b-standard-card>
</template>

<script>
import productCategories from "@/store/modules/storePanel/settings/productCategories";

import { mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/profile/productCategories";

export default {
    name: "ProductCategories",

    mixins: [translations],

    data() {
        return {
            icons: { mdiPencilOutline, mdiClose },
            categoryLang: "el",
            selectedLang: "el",
            page: 1
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/productCategories", ["productCategories"]),

        lang() {
            return this.$route.params.lang;
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        },

        productCategory: {
            get() {
                return this.$store.state.storePanel.productCategories
                    .productCategory;
            },

            set(val) {
                this.setItem(val);
            }
        },

        selectedProductCategory: {
            get() {
                return this.$store.state.storePanel.productCategories
                    .selectedProductCategory;
            },

            set(val) {
                this.setSelectedItem(val);
            }
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        }
    },

    methods: {
        ...mapMutations(["setDeleteDialog"]),
        ...mapMutations("storePanel/productCategories", [
            "setItem",
            "setSelectedItem"
        ]),
        ...mapActions("storePanel/productCategories", [
            "getItems",
            "create",
            "update",
            "remove"
        ])
    },

    watch: {
        page(page) {
            this.getItems(this.query);
        }
    },

    beforeCreate() {
        if (!this.$store.state.storePanel.productCategories) {
            this.$store.registerModule(
                ["storePanel", "productCategories"],
                productCategories
            );
        }
    },

    mounted() {
        this.getItems(this.query);
    }
};
</script>

<style scoped>
.b-border-top {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
