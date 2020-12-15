<template>
    <v-container fluid class="b-container">
        <v-sheet v-if="permission" height="800" color="grey lighten-4">
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
                        @update-products-success="productsSuccess = $event"
                    />

                    <b-text-field
                        v-else
                        v-model="transaction.amount"
                        :label="translations.amount[lang]"
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
                        :label="translations.generalCouponClaims[lang]"
                        multiple
                    ></b-select>

                    <b-select
                        v-model="transaction.sampling_coupons_for_use"
                        :items="samplingCoupons"
                        :item-text="`product_free.name[${this.lang}]`"
                        return-object
                        :label="translations.samplingCoupons[lang]"
                        class="mt-6"
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
import transactions from "@/store/modules/storePanel/transactions";

import { mdiPlusThick } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import debounce from "lodash/debounce";

import TransactionPreview from "@/components/storePanel/newTransaction/TransactionPreview.vue";
import Products from "@/components/storePanel/newTransaction/Products.vue";
import translations from "@/utils/translations/storePanel/newTransaction";
import validators from "@/utils/validators/storePanel/newTransaction";

export default {
    name: "NewTransaction",

    components: { TransactionPreview, Products },

    mixins: [translations, validators],

    data: () => ({
        showNotice: false,
        icons: { mdiPlusThick },
        productsSuccess: false,
        oldProducts: [],
    }),

    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapState("storePanel/transactions", [
            "showNewNotice",
            "showNewPage",
            "generalCouponClaims",
            "samplingCoupons",
        ]),

        lang() {
            return this.$route.params.lang;
        },

        permission() {
            return this.$store.state.permissions.transactions
                ? this.$store.state.permissions.transactions.create
                : null;
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
            },
        },
    },

    methods: {
        ...mapMutations("storePanel/transactions", [
            "setShowNewNotice",
            "setShowNewPage",
            "setItem",
        ]),
        ...mapActions("storePanel/transactions", [
            "create",
            "getTransactionPreview",
        ]),

        handleGetTransactionPreview() {
            this.getTransactionPreview(false);
        },
    },

    watch: {
        permission(val) {
            if (!val) {
                this.$router.replace(
                    `/${this.lang}/storePanel/forbidden-gateway`
                );
            }
        },

        ["transaction.user"](val) {
            this.debouncedGetTransactionPreview(this.showProducts);
        },

        ["transaction.amount"](val) {
            this.debouncedGetTransactionPreview();
        },
    },

    beforeCreate() {
        if (!this.$store.state.storePanel.transactions) {
            this.$store.registerModule(
                ["storePanel", "transactions"],
                transactions
            );
        }
    },

    created() {
        this.debouncedGetTransactionPreview = debounce(
            this.handleGetTransactionPreview,
            500
        );
    },

    mounted() {
        this.$clearFocus();
    },

    beforeDestroy() {
        this.transaction = {};
    },
};
</script>
