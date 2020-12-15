<template>
    <b-card
        title="Refund Transaction"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="refundTransaction(transactionRefund)"
    >
        <v-row no-gutters class="pa-3">
            <v-col class="subtitle-2">Product Name</v-col>
            <v-col class="subtitle-2">Amount</v-col>
            <v-col class="subtitle-2">Refund</v-col>
        </v-row>
        <v-row
            v-for="(product, i) in transactionRefund.products"
            :key="product.product_id"
            no-gutters
            align="center"
            class="b-outlined pa-3"
            :class="{ 'mt-3': i !== 0 }"
        >
            <v-col cols="4">
                {{ product.name[lang] }}
            </v-col>
            <v-col cols="4">
                {{
                    product.reward_type_id === 4
                        ? new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "EUR",
                              minimumFractionDigits: 2,
                          }).format(product.max_retail_price)
                        : product.max_quantity
                }}
            </v-col>
            <v-col cols="4">
                <price-field
                    v-if="product.reward_type_id === 4"
                    v-model="product.retail_price"
                    label="Price"
                    :price-max="product.max_retail_price"
                ></price-field>
                <quantity-field
                    v-else
                    v-model="product.quantity"
                    label="Quantity"
                    :quantity-max="product.max_quantity"
                ></quantity-field>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PriceField from "./PriceField.vue";
import QuantityField from "./QuantityField.vue";

import TransactionProduct from "@/models/storePanel/TransactionProduct";

export default {
    name: "RefundTransaction",

    components: { PriceField, QuantityField },

    props: {
        transactionId: [String, Number],
    },

    data: () => ({
        transactionRefund: {},
    }),

    computed: {
        ...mapState(["loading", "errorMessage"]),

        lang() {
            return this.$route.params.lang;
        },

        transactionProfile() {
            return this.$store.state.storePanel.transactions.transactionProfile;
        },
    },

    methods: {
        ...mapActions("storePanel/transactions", [
            "getItem",
            "refundTransaction",
        ]),
    },

    watch: {
        transactionProfile(val) {
            this.transactionRefund = {
                transaction_id: val.transaction_id,
                products: [],
            };
            val.transaction_items.forEach((p) => {
                p.name = p.product_name;
                p.retail_price = p.price;
                this.transactionRefund.products.push(new TransactionProduct(p));
            });

            this.transactionRefund.products.forEach((p) => {
                p.max_quantity = p.quantity;
                p.max_retail_price = p.retail_price;
                p.quantity = null;
                p.retail_price = null;
            });
        },

        transactionId: {
            immediate: true,
            handler(val) {
                this.getItem(val);
            },
        },
    },
};
</script>
