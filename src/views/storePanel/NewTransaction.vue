<template>
    <v-container fluid class="b-container">
        <v-row class="fill-height" align="center">
            <v-card tile flat width="600" class="mx-auto my-3 pa-5">
                <v-card-title class="text-h5 font-weight-bold pa-0">
                    <v-icon
                        class="text--primary ml-n1 mr-3"
                        large
                        v-text="icons.mdiPlusThick"
                    ></v-icon>
                    {{ translations.newTransaction[lang] }}
                    <v-spacer></v-spacer>
                    <v-sheet
                        color="rgba(234, 237, 241, 0.57)"
                        outlined
                        class="subtitle-2 pa-3"
                    >
                        <div>
                            {{ translations.totalAmount[lang] }}:
                            {{ totalAmount }}
                        </div>
                        <div>
                            {{ translations.totalPoints[lang] }}:
                            {{ totalPoints }}
                        </div>
                    </v-sheet>
                </v-card-title>

                <v-form
                    v-model="valid"
                    autocomplete="off"
                    @submit.prevent="create"
                >
                    <v-row no-gutters class="mt-7">
                        <v-col
                            :cols="showReceipt ? 6 : 12"
                            :class="{ 'pr-2': showReceipt }"
                        >
                            <v-text-field
                                v-model="transaction.user"
                                v-mask="'###############'"
                                type="number"
                                :label="translations.user[lang]"
                                color="secondary"
                                outlined
                                dense
                                clearable
                                validate-on-blur
                                :success="success.user"
                                :rules="rules.user"
                                @focus="success.user = false"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="6" class="pl-2">
                            <v-text-field
                                v-if="showReceipt"
                                v-model="transaction.receipt_number"
                                :label="translations.receiptNumber[lang]"
                                color="secondary"
                                outlined
                                dense
                                clearable
                                validate-on-blur
                                :success="success.receipt"
                                :rules="rules.receipt"
                                @focus="success.receipt = false"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <template v-if="showProducts">
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
                                    :append-icon="
                                        menu
                                            ? icons.mdiMenuUp
                                            : icons.mdiMenuDown
                                    "
                                    :loading="productsLoading"
                                    :success="success.product"
                                    :error="productError"
                                    :error-messages="productErrorMessage"
                                    @blur="
                                        () => {
                                            if (!transaction.products.length)
                                                productError = true;
                                        }
                                    "
                                    @focus="productError = false"
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
                                            type="number"
                                            label="Purchase Price"
                                            no-top-margin
                                            prepend-inner-icon="mdiCurrencyEur"
                                            :success="product.success"
                                            :rules="product.rules"
                                        ></b-text-field>

                                        <b-text-field
                                            v-else
                                            v-model="product.quantity"
                                            type="number"
                                            label="Quantity"
                                            no-top-margin
                                            :success="product.success"
                                            :rules="product.rules"
                                        ></b-text-field>
                                    </v-sheet>
                                </v-col>

                                <v-col cols="auto">
                                    <v-btn
                                        color="red"
                                        icon
                                        @click="productRemove(product, i)"
                                    >
                                        <v-icon
                                            v-text="icons.mdiClose"
                                        ></v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card>
                    </template>

                    <b-text-field
                        v-else
                        label="Amount"
                        type="number"
                        no-top-margin
                    ></b-text-field>

                    <v-alert v-if="errorMessage" type="error">{{
                        errorMessage
                    }}</v-alert>

                    <v-btn
                        type="submit"
                        color="secondary"
                        depressed
                        class="mt-7"
                        block
                        large
                        :loading="loading"
                        :disabled="disabled"
                        >{{ translations.createOrder[lang] }}</v-btn
                    >
                </v-form>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import {
    mdiPlusThick,
    mdiMenuUp,
    mdiMenuDown,
    mdiCheckBoxOutline,
    mdiCheckboxBlankOutline,
    mdiCurrencyEur,
    mdiClose
} from "@mdi/js";

import translations from "@/utils/translations/storePanel/newTransaction";
import validators from "./newTransactionValidators";
import { mapState, mapActions, mapMutations } from "vuex";
import debounce from "lodash/debounce";

class TransactionProduct {
    constructor(item = {}) {
        this.product_id = item.product_id || null;
        this.reward_type_id = item.reward_type_id || null;
        this.name = item.name || { el: "", en: "", it: "" };
        this.retail_price = item.retail_price || null;
        this.quantity = item.quantity || null;
        this.success = false;
        if (this.reward_type_id === 4) {
            this.rules = [
                v => {
                    if (v >= 0.1) {
                        this.success = true;
                        return true;
                    } else if (!v) {
                        this.success = false;
                        return "Purchase price is required";
                    } else return "Purchase Price must be minimum 0.1";
                }
            ];
        } else {
            this.rules = [
                v => {
                    if (v >= 1) {
                        this.success = true;
                        return true;
                    } else if (!v) {
                        this.success = false;
                        return "Quantity is required";
                    } else return "Quantity must be minimum 1";
                }
            ];
        }
    }
}

export default {
    name: "NewTransaction",
    mixins: [translations, validators],
    data: () => ({
        icons: {
            mdiPlusThick,
            mdiMenuUp,
            mdiMenuDown,
            mdiCheckBoxOutline,
            mdiCheckboxBlankOutline,
            mdiCurrencyEur,
            mdiClose
        },
        valid: false,
        disabled: true,
        menu: false,
        search: ""
    }),

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation"
        ]),
        ...mapState("storePanel/transactions", ["productsLoading", "products"]),

        lang() {
            return this.$route.params.lang;
        },

        totalAmount() {
            let amount = 0;

            this.selectedProducts.forEach(p => (amount += +p.retail_price));

            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 2
            }).format(amount);
        },

        totalPoints() {
            let point = 0;

            this.selectedProducts.forEach(p => (point += +p.reward_points));

            return point;
        },

        showReceipt() {
            return this.$store.state.storePanel.store.flags.reward
                .display_receipt_on_send_points;
        },

        showProducts() {
            return this.$store.state.storePanel.store.flags.reward
                .choose_product_on_send_points;
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

        transaction: {
            get() {
                return this.$store.state.storePanel.transactions.transaction;
            },

            set(val) {
                this.setItem(val);
            }
        }
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapMutations("storePanel/transactions", [
            "setItem",
            "setSelectedProducts"
        ]),
        ...mapActions("storePanel/transactions", ["getProducts", "create"]),

        handleSearch() {
            this.getProducts(`?q=${this.search}`);
        },

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
        }
    },

    watch: {
        valid(val) {
            if (val) {
                if (this.success.product) {
                    this.disabled = false;
                }
            } else {
                this.disabled = true;
            }
        },

        search(val) {
            if (val) {
                this.menu = true;
                this.debouncedSearch();
            }
        },

        selectedProducts(val) {
            if (val.length) {
                this.success.product = true;
                this.productError = false;
            } else {
                this.success.product = false;
                this.productError = true;
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

        resetValidation(val) {
            if (val) {
                this.productError = false;
                this.setResetValidation(false);
            }
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    user: false,
                    receipt: false,
                    product: false,
                    purchasePrice: false,
                    quantity: false
                };
                this.setResetSuccess(false);
            }
        }
    },

    created() {
        this.debouncedSearch = debounce(this.handleSearch, 500);
    },

    mounted() {
        this.$clearFocus();
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
