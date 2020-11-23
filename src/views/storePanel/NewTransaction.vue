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
                            {{ translations.userPoints[lang] }}:
                            {{ totalInfo.userPoints }}
                        </div>
                        <div>
                            {{ translations.newUserPoints[lang] }}:
                            {{ totalInfo.newUserPoints }}
                        </div>
                        <div>
                            {{ translations.totalAmount[lang] }}:
                            {{ totalInfo.totalAmount }}
                        </div>
                        <div>
                            {{ translations.totalDiscount[lang] }}:
                            {{ totalInfo.totalDiscount }}
                        </div>
                        <div>
                            {{ translations.wonPoints[lang] }}:
                            {{ totalInfo.wonPoints }}
                        </div>
                        <div>
                            {{ translations.lostPoints[lang] }}:
                            {{ totalInfo.lostPoints }}
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

                        <v-col cols="12">
                            <v-text-field
                                v-model="transaction.voucher_code"
                                :label="translations.voucherCode[lang]"
                                color="secondary"
                                outlined
                                dense
                                clearable
                                validate-on-blur
                                :success="success.voucher"
                                :rules="rules.voucher"
                                @focus="success.voucher = false"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <Products v-if="showProducts" />

                    <b-text-field
                        v-else
                        v-model="transaction.amount"
                        label="Amount"
                        type="number"
                        no-top-margin
                        :success="success.amount"
                        :rules="rules.amount"
                        @cancel-success="success.amount = false"
                    ></b-text-field>

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
                        :disabled="disabled"
                        >{{ translations.createOrder[lang] }}</v-btn
                    >
                </v-form>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
import { mdiPlusThick } from "@mdi/js";
import { mapState, mapActions, mapMutations } from "vuex";

import Products from "@/components/storePanel/newTransaction/Products.vue";
import translations from "@/utils/translations/storePanel/newTransaction";
import validators from "./newTransactionValidators";

export default {
    name: "NewTransaction",

    components: { Products },

    mixins: [translations, validators],

    data: () => ({
        icons: { mdiPlusThick },
        valid: false,
        disabled: true,
        totalInfo: {}
    }),

    computed: {
        ...mapState(["loading", "errorMessage", "resetSuccess"]),

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

        transaction() {
            return this.$store.state.storePanel.transactions.transaction;
        }
    },

    methods: {
        ...mapMutations(["setResetSuccess"]),
        ...mapActions("storePanel/transactions", [
            "create",
            "getTransactionPreview"
        ])
    },

    watch: {
        valid(val) {
            if (val) {
                if (this.showProducts) {
                    if (this.success.product) {
                        this.disabled = false;
                    }
                } else {
                    this.disabled = false;
                }
            } else {
                this.disabled = true;
            }
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    user: false,
                    receipt: false,
                    amount: false
                };
                this.setResetSuccess(false);
            }
        }
    },

    mounted() {
        this.$clearFocus();
        this.getTransactionPreview();
    }
};
</script>
