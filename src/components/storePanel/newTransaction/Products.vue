<template>
    <fragment>
        <v-menu
            v-model="menu"
            max-height="300"
            offset-y
            :close-on-content-click="false"
        >
            <template v-slot:activator="{ on }">
                <v-text-field
                    v-model="search"
                    :label="
                        selectedProducts.length
                            ? selectedProducts.length +
                              translations.selectedProducts[lang]
                            : translations.orderProducts[lang]
                    "
                    color="secondary"
                    outlined
                    dense
                    clearable
                    v-on="on"
                    hide-details="auto"
                    :append-icon="menu ? icons.mdiMenuUp : icons.mdiMenuDown"
                    :loading="productsLoading"
                    :success="success"
                    :error-messages="error"
                    @focus="error = ''"
                    @blur="validateProductsInput"
                    @click:append="menu = !menu"
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
                                :color="product.selected ? 'secondary' : ''"
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
                    <v-list-item-title> No data available </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-card
            v-for="(product, i) in transaction.products"
            :key="product.product_id"
            color="rgba(234, 237, 241, 0.57)"
            outlined
            class="px-3 my-2"
        >
            <v-row
                no-gutters
                justify="space-between"
                align="center"
                class="py-5"
            >
                <v-col cols="4">
                    {{ product.name[lang] }}
                </v-col>

                <v-col cols="7">
                    <v-sheet color="white" max-height="40">
                        <b-text-field
                            v-if="product.reward_type_id === 4"
                            v-model="product.retail_price"
                            :label="translations.purchasePrice[lang]"
                            type="number"
                            no-top-margin
                            prepend-inner-icon="mdiCurrencyEur"
                            :success="product.success"
                            :error-messages="product.error"
                            @focus="product.error = ''"
                            @blur="validateProduct(product)"
                        ></b-text-field>

                        <template v-else>
                            <v-row no-gutters>
                                <v-col class="pr-1">
                                    <b-text-field
                                        v-model="product.quantity"
                                        :label="translations.quantity[lang]"
                                        type="number"
                                        no-top-margin
                                        :success="product.success"
                                        :error-messages="product.error"
                                        @focus="product.error = ''"
                                        @blur="validateProduct(product)"
                                    ></b-text-field>
                                </v-col>

                                <template v-if="product.product_coupons">
                                    <v-col
                                        v-if="product.product_coupons.length"
                                        cols="6"
                                        class="pl-1"
                                    >
                                        <b-select
                                            v-model="
                                                transaction.product_coupon_claims_for_use
                                            "
                                            :items="product.product_coupons"
                                            item-text="code"
                                            return-object
                                            label="Select Coupon"
                                            no-top-margin
                                            no-clear-icon
                                        ></b-select>
                                    </v-col>
                                </template>
                            </v-row>
                        </template>
                    </v-sheet>
                </v-col>

                <v-col cols="auto">
                    <v-btn color="red" icon @click="productRemove(product, i)">
                        <v-icon v-text="icons.mdiClose"></v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </fragment>
</template>

<script>
import {
    mdiMenuUp,
    mdiMenuDown,
    mdiCheckBoxOutline,
    mdiCheckboxBlankOutline,
    mdiClose
} from "@mdi/js";

import { mapState, mapMutations, mapActions } from "vuex";
import debounce from "lodash/debounce";

import { Fragment } from "vue-fragment";
import TransactionProduct from "@/models/storePanel/TransactionProduct";
import translations from "@/utils/translations/storePanel/newTransaction/products";

export default {
    name: "NewTransactionProducts",

    components: { Fragment },

    mixins: [translations],

    data: () => ({
        icons: {
            mdiMenuUp,
            mdiMenuDown,
            mdiCheckBoxOutline,
            mdiCheckboxBlankOutline,
            mdiClose
        },
        menu: false,
        search: "",
        success: false,
        error: ""
    }),

    computed: {
        ...mapState(["resetValidation"]),
        ...mapState("storePanel/transactions", [
            "productsLoading",
            "products",
            "transaction"
        ]),

        lang() {
            return this.$route.params.lang;
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
        ...mapMutations(["setResetValidation"]),
        ...mapMutations("storePanel/transactions", ["setSelectedProducts"]),
        ...mapActions("storePanel/transactions", ["getProducts"]),

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
        },

        productRemove(item, index) {
            this.selectedProducts.splice(index, 1);
            let product = this.products.find(
                p => p.product_id === item.product_id
            );
            if (product) product.selected = false;
        },

        handleSearch() {
            this.getProducts(`?q=${this.search}`);
        },

        validateProductsInput() {
            if (!this.selectedProducts.length) {
                this.error = "You must choose at least 1 product";
            } else {
                this.error = "";
            }
        },

        validateProduct(product) {
            if (product.reward_type_id === 4) {
                if (!product.retail_price) {
                    product.error = "Purchase price is required";
                } else if (product.retail_price < 0.1) {
                    product.error = "Purchase Price must be minimum 0.1";
                } else {
                    product.error = "";
                }
            } else {
                if (!product.quantity) {
                    product.error = "Product quantity is required";
                } else if (product.quantity < 1) {
                    product.error = "Product quantity must be minimum 1";
                } else {
                    product.error = "";
                }
            }
        }
    },

    watch: {
        selectedProducts(val) {
            this.success = !!val.length;

            if (val.length) {
                this.error = "";
            } else {
                this.error = "You must choose at least 1 product";
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

        ["transaction.products"]: {
            deep: true,
            handler(val) {
                if (val.length) {
                    let success = true;
                    val.forEach(p => {
                        if (p.reward_type_id === 4) {
                            p.success = p.retail_price >= 0.1;
                        } else {
                            p.success = p.quantity >= 1;
                        }

                        if (!p.success) success = false;
                    });

                    this.$emit("update-products-success", success);
                }
            }
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
                this.$emit("update-productsInput-success", true);
            } else {
                this.$emit("update-productsInput-success", false);
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
