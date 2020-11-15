<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="90">
            <v-btn
                color="secondary"
                class="text-capitalize px-5"
                depressed
                v-text="translations.addProduct[lang]"
                @click="open(1, {})"
            ></v-btn>

            <v-spacer></v-spacer>

            <v-col cols="4" class="pa-0">
                <b-search-field
                    :selectedSearchType="selectedSearchType"
                    :searchTypes="searchTypes"
                ></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="products"
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

            <template v-slot:item.actions>
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
                                    product = item;
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

        <v-dialog v-model="dialog" max-width="600">
            <ProductForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                title="Delete Product"
                submit-text="delete"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <p>
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary">{{
                        product.name[lang]
                    }}</span
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
import { mapState, mapMutations, mapActions } from "vuex";
import debounce from "lodash/debounce";

import ProductForm from "@/components/loyaltyPanel/products/ProductForm.vue";
import translations from "@/utils/translations/loyaltyPanel/products/productsTab";

export default {
    name: "ProductsTab",

    components: { ProductForm },

    mixins: [translations],

    data() {
        return {
            icons: { mdiPencilOutline, mdiClose },
            searchTypes: [
                "Name",
                "Description",
                "Selling Price",
                "Target Price",
                "Wholesale Price"
            ],
            selectedSearchType: "All Fields",
            page: +this.$route.query.page,
            mode: 0,
            search: ""
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("loyaltyPanel/products", ["products"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.productName[this.lang],
                    value: `name[${this.lang}]`
                },
                {
                    text: this.translations.productDescription[this.lang],
                    value: `description[${this.lang}]`
                },
                {
                    text: this.translations.sellingPrice[this.lang],
                    value: "retail_price"
                },
                {
                    text: this.translations.wholesalePrice[this.lang],
                    value: "wholesale_price"
                },
                {
                    text: this.translations.actions[this.lang],
                    value: "actions"
                }
            ];
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            }
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        },

        product: {
            get() {
                return this.$store.state.loyaltyPanel.products.product;
            },

            set(val) {
                this.setItem(val);
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
        ...mapMutations([
            "setDialog",
            "setDeleteDialog",
            "setResetSuccess",
            "setResetValidation"
        ]),
        ...mapMutations("loyaltyPanel/products", [
            "setShowImageUpload",
            "setShowWeekdays",
            "setItem"
        ]),
        ...mapActions("loyaltyPanel/products", ["getItems", "remove"]),

        open(mode, item) {
            this.mode = mode;
            this.product = item;
            if (this.product.image) this.setShowImageUpload(true);
            else this.setShowImageUpload(false);
            if (this.product.availability_days.length)
                this.setShowWeekdays(true);
            else this.setShowWeekdays(false);
            setTimeout(() => this.setResetSuccess(true), 300);
            this.setResetValidation(true);
            this.dialog = true;
        },

        handleSearch() {
            this.getItems(`?q=${this.search}`);
        }
    },

    watch: {
        dialog(val) {
            if (!val) {
                this.setResetSuccess(false);
                this.setResetValidation(false);
            }
        },

        $route(val) {
            if (!val.query.page) {
                this.$router.push({
                    query: {
                        page: 1,
                        ...this.$route.query
                    }
                });
            }
            this.getItems(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        },

        search(val, oldVal) {
            if (val != oldVal) {
                if (val == null) {
                    this.getItems(this.query);
                } else {
                    this.debouncedSearch();
                }
            }
        }
    },

    beforeCreate() {
        if (!this.$route.query.page) {
            this.$router.push({
                query: {
                    page: 1,
                    ...this.$route.query
                }
            });
        }
    },

    created() {
        this.debouncedSearch = debounce(this.handleSearch, 500);
    },

    mounted() {
        this.getItems(this.query);
    }
};
</script>
