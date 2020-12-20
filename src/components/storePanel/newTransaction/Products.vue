<template>
    <fragment>
        <v-row no-gutters justify="space-between" align="center" class="px-10">
            <v-col cols="12" class="subtitle-1 font-weight-bold mb-4">
                {{ translations.selectProducts[lang] }}
            </v-col>
            <v-col cols="auto">
                <v-img
                    src="@/assets/new-transaction-basket.png"
                    width="90"
                    class="rounded-circle"
                ></v-img>
            </v-col>

            <v-col cols="auto" style="font-size: 0.875rem">
                <div>
                    {{ transaction.products.length }}
                    {{ translations.productsSelected[lang] }}
                </div>
                <div>
                    {{ transactionPreview.won_points || 0 }}
                    {{ translations.pointsWon[lang] }}
                </div>
                <div>
                    {{ transactionPreview.lost_points || 0 }}
                    {{ translations.pointsLost[lang] }}
                </div>

                <div style="height: 2px">
                    <v-progress-linear
                        color="secondary"
                        :indeterminate="previewLoading"
                        :active="previewLoading"
                        height="2"
                    ></v-progress-linear>
                </div>
            </v-col>

            <v-col cols="auto">
                <v-btn
                    color="secondary"
                    class="text-capitalize pr-6"
                    depressed
                    @click.stop="dialog = true"
                >
                    <v-icon class="mr-2" v-text="icons.mdiPlus"></v-icon>
                    {{ translations.addProducts[lang] }}
                </v-btn>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="500">
            <b-card
                :title="translations.orderProducts[lang]"
                @cancel="dialog = false"
            >
                <div>
                    <v-menu
                        v-model="menu"
                        max-height="300"
                        offset-y
                        :close-on-content-click="false"
                        nudge-bottom="3"
                    >
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="search"
                                ref="search"
                                :label="translations.searchProducts[lang]"
                                color="secondary"
                                outlined
                                dense
                                clearable
                                v-on="on"
                                hide-details="auto"
                                autocomplete="off"
                                :append-icon="
                                    menu ? icons.mdiMenuUp : icons.mdiMenuDown
                                "
                                :loading="productsLoading"
                                :success="success"
                                :error-messages="error"
                                @focus="error = ''"
                                @blur="validateProductsInput"
                                @click:append="
                                    () => {
                                        menu = !menu;
                                        $refs.search.focus();
                                    }
                                "
                            ></v-text-field>
                        </template>

                        <v-list dense>
                            <template v-if="products.length">
                                <v-list-item
                                    v-for="product in products"
                                    :key="product.product_id"
                                    class="pl-3"
                                    :class="{
                                        'b-list-active': product.selected
                                    }"
                                    @click="productSelect(product)"
                                >
                                    <v-list-item-icon class="mr-2">
                                        <v-icon
                                            :color="
                                                product.selected
                                                    ? 'secondary'
                                                    : ''
                                            "
                                            v-text="
                                                product.selected
                                                    ? icons.mdiCheckBoxOutline
                                                    : icons.mdiCheckboxBlankOutline
                                            "
                                        ></v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-title>
                                        {{ product.name[lang] }} ({{
                                            new Intl.NumberFormat("en-US", {
                                                style: "currency",
                                                currency: "EUR",
                                                minimumFractionDigits: 2
                                            }).format(product.retail_price)
                                        }})
                                    </v-list-item-title>
                                </v-list-item>
                            </template>
                            <v-list-item v-else>
                                <v-list-item-title
                                    v-text="translations.noData[lang]"
                                ></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </b-card>
        </v-dialog>

        <v-row no-gutters class="pa-6">
            <v-col
                v-for="(product, i) in transaction.products"
                :key="product.product_id"
                cols="4"
                class="pa-2"
            >
                <v-card tile outlined>
                    <v-card-title class="subtitle-2 font-weight-bold pa-0 pl-3">
                        <v-col cols="9" class="pa-0 text-truncate">
                            {{ product.name[lang] }}
                        </v-col>

                        <v-col cols="auto" class="pa-0">
                            <v-btn
                                color="red"
                                icon
                                @click="productRemove(product, i)"
                            >
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </v-col>
                    </v-card-title>
                    <div
                        style="font-size: 0.8rem"
                        class="pl-3 mt-n2 text--secondary font-weight-medium"
                    >
                        34 {{ translations.points[lang] }}
                    </div>

                    <v-divider class="mt-1"></v-divider>

                    <div class="pt-1 pb-3">
                        <price-field
                            v-if="product.reward_type_id === 4"
                            v-model="product.retail_price"
                            :label="translations.purchasePrice[lang]"
                            prepend-inner-icon="mdiCurrencyEur"
                            @get-transaction="debouncedGetTransactionPreview"
                        ></price-field>

                        <template v-else>
                            <quantity-field
                                v-model="product.quantity"
                                :label="translations.quantity[lang]"
                                @get-transaction="
                                    debouncedGetTransactionPreview
                                "
                            ></quantity-field>

                            <template v-if="product.product_coupons">
                                <b-select
                                    v-if="product.product_coupons.length"
                                    v-model="product.product_coupons_for_use"
                                    :items="product.product_coupons"
                                    :item-text="`text[${lang}]`"
                                    return-object
                                    :label="translations.selectCoupon[lang]"
                                    class="ma-3"
                                    no-top-margin
                                    no-clear-icon
                                    multiple
                                ></b-select>
                            </template>
                        </template>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </fragment>
</template>

<script>
import {
    mdiPlus,
    mdiClose,
    mdiMenuUp,
    mdiMenuDown,
    mdiCheckBoxOutline,
    mdiCheckboxBlankOutline
} from "@mdi/js";

import { mapState, mapMutations, mapActions } from "vuex";
import debounce from "lodash/debounce";

import { Fragment } from "vue-fragment";
import QuantityField from "./QuantityField.vue";
import PriceField from "./PriceField.vue";
import TransactionProduct from "@/models/storePanel/TransactionProduct";
import translations from "@/utils/translations/storePanel/newTransaction/products";

export default {
    name: "NewTransactionProducts",

    components: { Fragment, QuantityField, PriceField },

    mixins: [translations],

    data: () => ({
        icons: {
            mdiPlus,
            mdiClose,
            mdiMenuUp,
            mdiMenuDown,
            mdiCheckBoxOutline,
            mdiCheckboxBlankOutline
        },
        menu: false,
        search: "",
        success: false,
        error: "",
        productRequired: {
            el: "",
            en: "You must choose at least 1 product",
            it: ""
        }
    }),

    computed: {
        ...mapState(["resetValidation"]),
        ...mapState("storePanel/transactions", [
            "previewLoading",
            "transactionPreview",
            "productsLoading",
            "products",
            "transaction"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            }
        },

        selectedProducts: {
            get() {
                return this.$store.state.storePanel.transactions
                    .selectedProducts;
            },

            set(val) {
                this.setSelectedProducts(val);
            }
        }
    },

    methods: {
        ...mapMutations(["setDialog", "setResetValidation"]),
        ...mapMutations("storePanel/transactions", ["setSelectedProducts"]),
        ...mapActions("storePanel/transactions", [
            "getProducts",
            "getTransactionPreview"
        ]),

        productSelect(item) {
            item.selected = !item.selected;

            let index = this.selectedProducts.findIndex(
                p => p.product_id === item.product_id
            );

            if (index === -1) {
                this.selectedProducts.push(item);
            } else {
                this.selectedProducts.splice(index, 1);
            }

            if (!item.selected) this.debouncedGetTransactionPreview(true);
        },

        productRemove(item, index) {
            this.selectedProducts.splice(index, 1);
            let product = this.products.find(
                p => p.product_id === item.product_id
            );
            if (product) product.selected = false;
            this.debouncedGetTransactionPreview(true);
        },

        handleSearch() {
            this.getProducts(`?q=${this.search}`);
        },

        handleGetTransactionPreview() {
            this.getTransactionPreview(true);
        },

        validateProductsInput() {
            if (!this.selectedProducts.length) {
                this.error = this.productRequired[this.lang];
            } else {
                this.error = "";
            }
        }
    },

    watch: {
        selectedProducts(val) {
            this.success = !!val.length;

            if (val.length) {
                this.error = "";
            } else {
                this.error = this.productRequired[this.lang];
            }

            val.forEach(selected => {
                let product = this.transaction.products.find(
                    p => p.product_id === selected.product_id
                );

                if (product) {
                    selected.quantity = product.quantity;
                    selected.retail_price = product.retail_price;
                } else {
                    if (selected.reward_type_id === 4)
                        selected.retail_price = null;
                }
            });

            this.transaction.products = [];

            val.forEach(p => {
                this.transaction.products.push(new TransactionProduct(p));
            });
        },

        search(val) {
            this.menu = true;
            if (val) {
                this.debouncedSearch();
            } else {
                this.getProducts(`?page=1`);
            }
        },

        success(val) {
            if (val) {
                this.$emit("update-products-success", true);
            } else {
                this.$emit("update-products-success", false);
            }
        },

        resetValidation(val) {
            if (val) {
                this.error = "";
                this.setResetValidation(false);
            }
        }
    },

    created() {
        this.debouncedSearch = debounce(this.handleSearch, 500);
        this.debouncedGetTransactionPreview = debounce(
            this.handleGetTransactionPreview,
            500
        );
    },

    mounted() {
        this.getProducts(`?page=1`);
    },

    beforeDestroy() {
        this.selectedProducts = [];
    }
};
</script>

<style scoped>
.b-list-active {
    background-color: rgba(42, 48, 66, 0.12);
    color: rgb(42, 48, 66);
}
</style>
