<template>
    <v-container fluid class="b-container">
        <v-sheet height="calc(100vh - 88px)">
            <v-row no-gutters class="pa-3 fill-height" justify="center">
                <v-col cols="12">
                    <v-card tile flat height="100%">
                        <v-row no-gutters justify="center">
                            <v-col cols="12" sm="8" md="6" lg="5">
                                <v-card-title
                                    class="text-h5 font-weight-bold pl-0 mt-5"
                                >
                                    <v-icon
                                        class="text--primary ml-n1 mr-3"
                                        large
                                        v-text="icons.mdiPlusThick"
                                    ></v-icon
                                    >New Transaction
                                </v-card-title>

                                <v-form
                                    v-model="valid"
                                    @submit.prevent="create"
                                >
                                    <v-text-field
                                        v-model="transaction.user"
                                        v-mask="'###############'"
                                        type="number"
                                        label="User (mobile or loyalty card number)"
                                        color="secondary"
                                        class="mt-12"
                                        outlined
                                        dense
                                        clearable
                                        :success="success.user"
                                        :rules="rules.user"
                                    ></v-text-field>

                                    <v-text-field
                                        v-model="transaction.receipt_number"
                                        label="Receipt Number"
                                        color="secondary"
                                        class="mt-5"
                                        outlined
                                        dense
                                        clearable
                                        :success="success.receipt"
                                        :rules="rules.receipt"
                                    ></v-text-field>

                                    <v-autocomplete
                                        v-model="selectedProducts"
                                        :search-input.sync="search"
                                        :items="products"
                                        :item-text="`name[${this.lang}]`"
                                        multiple
                                        return-object
                                        label="Select Order Products"
                                        color="secondary"
                                        item-color="secondary"
                                        class="mt-5"
                                        outlined
                                        dense
                                        clearable
                                        :loading="productsLoading"
                                        :success="success.product"
                                        :rules="rules.product"
                                    ></v-autocomplete>

                                    <v-row
                                        v-for="product in transaction.products"
                                        :key="product.product_id"
                                        no-gutters
                                    >
                                        <v-col cols="6" class="mt-5">
                                            {{ product.name[lang] }}
                                        </v-col>

                                        <v-col cols="6">
                                            <b-text-field
                                                v-if="
                                                    product.reward_type_id === 4
                                                "
                                                v-model="product.retail_price"
                                                type="number"
                                                label="Purchase Price"
                                                prepend-inner-icon="mdiCurrencyEur"
                                                :success="success.purchasePrice"
                                                :rules="rules.purchasePrice"
                                            ></b-text-field>

                                            <b-text-field
                                                v-else
                                                v-model="product.quantity"
                                                type="number"
                                                label="Quantity"
                                                :success="success.quantity"
                                                :rules="rules.quantity"
                                            ></b-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-alert v-if="errorMessage" type="error">{{
                                        errorMessage
                                    }}</v-alert>

                                    <v-btn
                                        type="submit"
                                        color="secondary"
                                        depressed
                                        class="mt-12"
                                        block
                                        large
                                        :loading="loading"
                                        :disabled="disabled"
                                        >create order</v-btn
                                    >
                                </v-form>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPlusThick, mdiCurrencyEur } from "@mdi/js";
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
    }
}

export default {
    name: "NewTransaction",
    mixins: [validators],
    data: () => ({
        icons: {
            mdiPlusThick,
            mdiCurrencyEur
        },
        valid: false,
        disabled: true,
        lang: "el",
        search: ""
    }),

    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapState("storePanel/transactions", ["productsLoading", "products"]),

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
        ...mapMutations("storePanel/transactions", [
            "setItem",
            "setSelectedProducts"
        ]),
        ...mapActions("storePanel/transactions", ["getProducts", "create"]),

        handleSearch() {
            this.getProducts(`?q=${this.search}`);
            console.log(this.search,'this.search')
        }
    },

    watch: {
        valid(val) {
            if (val) {
                this.disabled = false;
            } else {
                this.disabled = true;
            }
        },

        search(val) {
            if (val) {
                this.debouncedSearch();
            }
        },

        selectedProducts(val) {
            this.transaction.products = [];

            val.forEach(p => {
                if (p.reward_type_id === 4) p.retail_price = null;

                this.transaction.products.push(new TransactionProduct(p));
            });
        }
    },

    created() {
        this.debouncedSearch = debounce(this.handleSearch, 500);
    },

    mounted() {
        this.$clearFocus();
    },

    beforeDestroy() {
        this.selectedProducts = [];
        this.transaction = {};
    }
};
</script>
