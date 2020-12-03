<template>
    <v-container fluid class="b-container">
        <v-sheet height="800" color="grey lighten-4">
            <v-card tile flat width="600" class="mx-auto my-3 pa-5">
                <v-card-title class="text-h5 font-weight-bold pa-0">
                    <v-icon
                        class="text--primary ml-n1 mr-3"
                        large
                        v-text="icons.mdiPlusThick"
                    ></v-icon>
                    {{ translations.newTransaction[lang] }}
                    <v-spacer></v-spacer>

                    <TransactionPreview />
                </v-card-title>

                <v-form
                    autocomplete="off"
                    @submit.prevent="create(showProducts)"
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
                                :success="success.user"
                                :error-messages="error.user"
                                @focus="error.user = ''"
                                @blur="validateUser"
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
                                :error-messages="error.receipt"
                                @focus="error.receipt = ''"
                                @blur="validateReceipt"
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field
                                v-model="transaction.voucher"
                                :label="translations.voucherCode[lang]"
                                color="secondary"
                                outlined
                                dense
                                clearable
                                validate-on-blur
                                :success="success.voucher"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <Products
                        v-if="showProducts"
                        @update-productsInput-success="
                            productsInputSuccess = $event
                        "
                        @update-products-success="productsSuccess = $event"
                    />

                    <b-text-field
                        v-else
                        v-model="transaction.amount"
                        label="Amount"
                        type="number"
                        no-top-margin
                        :success="success.amount"
                        :error-messages="error.amount"
                        @focus="error.amount = ''"
                        @blur="validateAmount"
                    ></b-text-field>

                    <b-select
                        v-if="generalCouponClaims.length"
                        v-model="transaction.general_coupon_claims_for_use"
                        :items="generalCouponClaims"
                        item-text="gift_title"
                        return-object
                        label="General Coupon Claims"
                        multiple
                    ></b-select>

                    <v-alert v-if="errorMessage" type="error" class="mt-4">{{
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
                        :disabled="!valid"
                        >{{ translations.createOrder[lang] }}</v-btn
                    >
                </v-form>
            </v-card>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPlusThick } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

import TransactionPreview from "@/components/storePanel/newTransaction/TransactionPreview.vue";
import Products from "@/components/storePanel/newTransaction/Products.vue";
import translations from "@/utils/translations/storePanel/newTransaction";
import validators from "./newTransactionValidators";

export default {
    name: "NewTransaction",

    components: { TransactionPreview, Products },

    mixins: [translations, validators],

    data: () => ({
        icons: { mdiPlusThick },
        productsInputSuccess: false,
        productsSuccess: false
    }),

    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapState("storePanel/transactions", ["generalCouponClaims"]),

        lang() {
            return this.$route.params.lang;
        },

        showReceipt() {
            return this.$store.state.storePanel.store.flags.reward
                .offline_transaction_receipt;
        },

        showProducts() {
            return this.$store.state.storePanel.store.flags.reward
                .offline_transaction_products;
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
        ...mapMutations("storePanel/transactions", ["setItem"]),
        ...mapActions("storePanel/transactions", [
            "create",
            "getTransactionPreview"
        ])
    },

    watch: {
        ["transaction.amount"](val) {
            this.getTransactionPreview(this.showProducts);
        },

        ["transaction.products"]: {
            deep: true,
            handler(val) {
                this.getTransactionPreview(this.showProducts);
            }
        }
    },

    mounted() {
        this.$clearFocus();
    },

    beforeDestroy() {
        this.transaction = {};
    }
};
</script>
