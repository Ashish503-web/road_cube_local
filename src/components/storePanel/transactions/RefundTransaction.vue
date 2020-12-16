<template>
    <b-card
        title="Refund Transaction"
        :loading="refundLoading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="refundTransaction({ item: transactionRefund, query })"
    >
        <div v-if="loading" no-gutters class="text-center">
            <v-progress-circular indeterminate></v-progress-circular>
        </div>

        <template v-else>
            <v-row no-gutters class="pa-3">
                <v-col cols="4" class="subtitle-2">Product Name</v-col>
                <v-col cols="3" class="subtitle-2">Amount</v-col>
                <v-col cols="5" class="subtitle-2">Refund</v-col>
            </v-row>
            <v-row
                v-for="(product, i) in transactionRefund.products"
                :key="product.product_id"
                no-gutters
                align="baseline"
                class="b-outlined px-3 pt-7"
                :class="{ 'mt-3': i !== 0 }"
            >
                <v-col cols="4">
                    {{ product.name[lang] }}
                </v-col>
                <v-col cols="3">
                    {{
                        product.reward_type_id === 4
                            ? new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "EUR",
                                  minimumFractionDigits: 2
                              }).format(product.max_retail_price)
                            : product.max_quantity
                    }}
                </v-col>
                <v-col cols="3">
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

                <v-col cols="2" class="text-right">
                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="red"
                                class="mb-1"
                                icon
                                v-on="on"
                                @click="transactionRefund.products.splice(i, 1)"
                            >
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span class="font-weight-bold">Remove From List</span>
                    </v-tooltip>
                </v-col>
            </v-row>
        </template>
    </b-card>
</template>

<script>
import { mdiClose } from "@mdi/js";
import { mapActions, mapState } from "vuex";
import PriceField from "./PriceField.vue";
import QuantityField from "./QuantityField.vue";

import TransactionProduct from "@/models/storePanel/TransactionProduct";

export default {
    name: "RefundTransaction",

    components: { PriceField, QuantityField },

    props: {
        transactionId: [String, Number]
    },

    data: () => ({
        icons: { mdiClose },
        transactionRefund: {}
    }),

    computed: {
        ...mapState(["loading", "errorMessage"]),

        lang() {
            return this.$route.params.lang;
        },

        refundLoading() {
            return this.$store.state.storePanel.transactions.refundLoading;
        },

        transactionProfile() {
            return this.$store.state.storePanel.transactions.transactionProfile;
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                if (this.$route.query[key])
                    query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        }
    },

    methods: {
        ...mapActions("storePanel/transactions", [
            "getItem",
            "refundTransaction"
        ])
    },

    watch: {
        transactionProfile(val) {
            this.transactionRefund = {
                transaction_id: val.transaction_id,
                products: []
            };

            val.transaction_items.forEach(p => {
                p.name = p.product_name;
                p.retail_price = p.price;
                this.transactionRefund.products.push(new TransactionProduct(p));
            });

            this.transactionRefund.products.forEach(p => {
                p.max_quantity = p.quantity;
                p.max_retail_price = p.retail_price;
            });
        },

        transactionId: {
            immediate: true,
            handler(val) {
                this.getItem(val);
            }
        }
    }
};
</script>

<style scoped>
.b-floating-btn {
    position: absolute;
    top: 0;
    right: 0;
}
</style>
