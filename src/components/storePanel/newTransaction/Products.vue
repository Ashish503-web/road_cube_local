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
                    :label="translations.orderProducts[lang]"
                    color="secondary"
                    outlined
                    dense
                    clearable
                    v-on="on"
                    hide-details="auto"
                    :append-icon="menu ? icons.mdiMenuUp : icons.mdiMenuDown"
                    :loading="productsLoading"
                    :success="success"
                    :error="error"
                    :error-messages="errorMessage"
                    @blur="
                        () => {
                            if (!transaction.products.length) error = true;
                        }
                    "
                    @focus="error = false"
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
                        <v-list-item-title
                            v-text="product.name[lang]"
                        ></v-list-item-title>
                    </v-list-item>
                </template>
                <v-list-item v-else>
                    <v-list-item-title>
                        No data available
                    </v-list-item-title>
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
                <v-col cols="5">
                    {{ product.name[lang] }}
                </v-col>

                <v-col cols="5">
                    <v-sheet color="white" max-height="40">
                        <b-text-field
                            v-if="product.reward_type_id === 4"
                            v-model="product.retail_price"
                            :label="translations.purchasePrice[lang]"
                            type="number"
                            no-top-margin
                            prepend-inner-icon="mdiCurrencyEur"
                            :success="product.success"
                            :rules="product.rules"
                        ></b-text-field>

                        <b-text-field
                            v-else
                            v-model="product.quantity"
                            :label="translations.quantity[lang]"
                            type="number"
                            no-top-margin
                            :success="product.success"
                            :rules="product.rules"
                        ></b-text-field>
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
        error: false
    }),

    computed: {
        ...mapState("storePanel/transactions", ["productsLoading", "products"]),

        lang() {
            return this.$route.params.lang;
        },

        transaction: {
            get() {
                return this.$store.state.storePanel.transactions.transaction;
            },

            set(val) {
                this.setItem(val);
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
        },

        errorMessage() {
            if (this.error) return "You must choose at least 1 product";
            else return "";
        }
    },

    methods: {
        ...mapMutations(["setResetValidation"]),
        ...mapMutations("storePanel/transactions", [
            "setItem",
            "setSelectedProducts"
        ]),
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
            this.products.find(
                p => p.product_id === item.product_id
            ).selected = false;
        },

        handleSearch() {
            this.getProducts(`?q=${this.search}`);
        }
    },

    watch: {
        selectedProducts(val) {
            if (val.length) {
                this.success = true;
                this.error = false;
            } else {
                this.success = false;
                this.error = true;
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
            if (val) {
                this.menu = true;
                this.debouncedSearch();
            }
        },

        resetValidation(val) {
            if (val) {
                this.error = false;
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
        this.transaction = {};
    }
};
</script>

<style scoped>
.b-list-active {
    background-color: rgba(42, 48, 66, 0.12);
    color: rgb(42, 48, 66);
}
</style>
