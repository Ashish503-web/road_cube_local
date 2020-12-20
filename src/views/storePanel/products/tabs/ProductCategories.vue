<template>
    <v-tab-item :value="$route.fullPath" class="pa-3">
        <v-toolbar flat height="90">
            <v-btn
                color="secondary"
                class="text-capitalize px-5"
                depressed
                v-text="translations.addCategory[lang]"
                @click="open(1, {})"
            ></v-btn>

            <v-spacer></v-spacer>

            <v-col cols="4" class="pa-0">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="productCategories"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            :server-items-length="serverItemsLength"
            class="b-outlined"
        >
            <template v-slot:no-data>
                <v-progress-circular
                    v-if="loading"
                    color="secondary"
                    indeterminate
                ></v-progress-circular>
                <span v-else v-text="translations.noData[lang]"></span>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="open(2, item)"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
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
                                    productCategory = item;
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

        <v-dialog v-model="dialog" max-width="500">
            <ProductCategoryForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                :title="translations.deleteCategory[lang]"
                :submit-text="{ el: '', en: 'delete', it: '' }"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <div class="subtitle-1 font-weight-medium py-3 px-2">
                    {{ translations.areYouSure[lang] }}
                    <span class="font-weight-bold text--primary">{{
                        productCategory.name[lang]
                    }}</span
                    >?
                </div>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import productCategories from "@/store/modules/storePanel/productCategories";

import { mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import ProductCategoryForm from "@/components/storePanel/products/ProductCategoryForm.vue";
import translations from "@/utils/translations/storePanel/products/productCategories";

export default {
    name: "ProductCategories",

    components: { ProductCategoryForm },

    mixins: [translations],

    data() {
        return {
            icons: { mdiPencilOutline, mdiClose },
            page: +this.$route.query.page,
            mode: 0,
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/productCategories", ["productCategories"]),

        lang() {
            return this.$route.params.lang;
        },

        permissions() {
            return this.$store.state.permissions.products
                ? this.$store.state.permissions.products.categories
                : {};
        },

        headers() {
            return [
                {
                    text: this.translations.nameInGreek[this.lang],
                    value: `name.el`,
                },
                {
                    text: this.translations.nameInEnglish[this.lang],
                    value: `name.en`,
                },
                {
                    text: this.translations.nameInItalian[this.lang],
                    value: `name.it`,
                },
                {
                    text: this.translations.actions[this.lang],
                    value: "actions",
                },
            ];
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            },
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            },
        },

        productCategory: {
            get() {
                return this.$store.state.storePanel.productCategories
                    .productCategory;
            },

            set(val) {
                this.setItem(val);
            },
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        },
    },

    methods: {
        ...mapMutations([
            "setDialog",
            "setDeleteDialog",
            "setResetSuccess",
            "setResetValidation",
        ]),
        ...mapMutations("storePanel/productCategories", ["setItem"]),
        ...mapActions("storePanel/productCategories", ["getItems", "remove"]),

        open(mode, item) {
            this.mode = mode;
            this.productCategory = item;
            setTimeout(() => this.setResetSuccess(true), 300);
            this.setResetValidation(true);
            this.dialog = true;
        },
    },

    watch: {
        ["permissions.read"]: {
            immediate: true,
            handler(val) {
                if (!val) {
                    this.$router.replace(
                        `/${this.lang}/storePanel/forbidden-gateway`
                    );
                }
            },
        },

        $route(val) {
            if (!val.query.page) {
                this.$router.replace({
                    query: {
                        page: 1,
                        ...this.$route.query,
                    },
                });
            }

            this.getItems(this.query);
        },

        page(page) {
            this.$router.replace({ query: { ...this.$route.query, page } });
        },
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
    },
};
</script>

<style scoped>
.b-border-top {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
