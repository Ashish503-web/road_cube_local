<template>
    <v-container fluid class="b-container">
        <v-sheet v-if="permission" min-height="800" color="grey lighten-4">
            <v-card tile flat width="600" class="mx-auto my-3">
                <v-card-title class="text-h5 font-weight-bold px-10 pt-5">
                    <v-icon
                        class="text--primary ml-n1 mr-1"
                        large
                        v-text="icons.mdiPlusThick"
                    ></v-icon>
                    {{ translations.newTransaction[lang] }}
                </v-card-title>

                <v-card-subtitle
                    class="px-10"
                    v-text="translations.info[lang]"
                ></v-card-subtitle>

                <v-divider></v-divider>

                <v-form
                    autocomplete="off"
                    @submit.prevent="create(showProducts)"
                >
                    <v-row
                        no-gutters
                        align="center"
                        class="px-10 py-5 b-bottom-outlined"
                    >
                        <v-col
                            cols="auto"
                            class="subtitle-1 font-weight-bold pr-5"
                        >
                            {{ translations.selectUser[lang] }}

                            <v-img
                                src="@/assets/new-transaction-user.png"
                                width="90"
                                class="rounded-circle mt-4"
                            ></v-img>

                            <div
                                class="subtitle-2 font-weight-medium text-center mt-2"
                            >
                                {{
                                    transactionPreview.current_user_points || 0
                                }}
                                {{ translations.points[lang] }}
                            </div>

                            <div
                                class="subtitle-2 font-weight-medium text-center"
                            >
                                {{ transactionPreview.new_user_points || 0 }}
                                {{ translations.points[lang] }}
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

                        <v-col class="pl-10">
                            <v-text-field
                                v-model="transaction.user"
                                v-mask="'###############'"
                                type="number"
                                :label="translations.user[lang]"
                                color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                clearable
                                hide-details="auto"
                                :success="success.user"
                                :error-messages="error.user"
                                @focus="error.user = ''"
                                @blur="validateUser"
                            ></v-text-field>

                            <v-checkbox
                                v-model="showVoucher"
                                color="secondary"
                                hide-details
                                class="mt-3 pt-0"
                                :label="translations.userVoucher[lang]"
                            ></v-checkbox>
                        </v-col>
                    </v-row>

                    <v-row
                        v-if="showReceipt || showVoucher"
                        no-gutters
                        class="px-10 pt-6 b-bottom-outlined"
                    >
                        <v-col cols="12">
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

                            <v-text-field
                                v-if="showVoucher"
                                v-model="transaction.voucher"
                                :label="translations.voucherCode[lang]"
                                color="secondary"
                                outlined
                                dense
                                clearable
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <Products
                        v-if="showProducts"
                        @update-products-success="productsSuccess = $event"
                    />

                    <div v-else class="px-10 py-6 b-bottom-outlined">
                        <b-text-field
                            v-model="transaction.amount"
                            :label="translations.amount[lang]"
                            type="number"
                            no-top-margin
                            :success="success.amount"
                            :error-messages="error.amount"
                            @focus="error.amount = ''"
                            @blur="validateAmount"
                        ></b-text-field>
                    </div>

                    <v-row
                        v-if="generalCouponClaims.length"
                        no-gutters
                        class="px-10 pt-5 pb-7 b-bottom-outlined"
                    >
                        <v-col
                            cols="12"
                            class="subtitle-1 font-weight-bold pb-2"
                            >General Coupons:</v-col
                        >
                        <b-select
                            v-model="transaction.general_coupon_claims_for_use"
                            :items="generalCouponClaims"
                            item-text="gift_title"
                            return-object
                            :label="translations.generalCouponClaims[lang]"
                            multiple
                        ></b-select>
                    </v-row>

                    <SamplingCoupons v-if="samplingCoupons.length" />

                    <v-alert v-if="errorMessage" type="error" class="mt-4">{{
                        errorMessage
                    }}</v-alert>

                    <div class="px-10 pt-7 pb-5">
                        <v-btn
                            type="submit"
                            color="secondary"
                            depressed
                            block
                            large
                            :loading="loading"
                            :disabled="!valid"
                            >{{ translations.createOrder[lang] }}</v-btn
                        >
                    </div>
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

import Products from "@/components/storePanel/newTransaction/Products.vue";
import SamplingCoupons from "@/components/storePanel/newTransaction/SamplingCoupons.vue";
import translations from "@/utils/translations/storePanel/newTransaction";
import validators from "@/utils/validators/storePanel/newTransaction";

export default {
    name: "NewTransaction",

    components: { SamplingCoupons, Products },

    mixins: [translations, validators],

    data: () => ({
        icons: { mdiPlusThick },
        productsSuccess: false,
        showVoucher: false
    }),

    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapState("storePanel/transactions", [
            "previewLoading",
            "generalCouponClaims",
            "samplingCoupons"
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

        transactionPreview: {
            get() {
                return this.$store.state.storePanel.transactions
                    .transactionPreview;
            },

            set(val) {
                this.setTransactionPreview(val);
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
            "setTransactionPreview",
            "setItem"
        ]),
        ...mapActions("storePanel/transactions", [
            "create",
            "getTransactionPreview"
        ]),

        handleGetTransactionPreview() {
            this.getTransactionPreview(false);
        }
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
        }
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
        this.transactionPreview = {};
        this.transaction = {};
    }
};
</script>
