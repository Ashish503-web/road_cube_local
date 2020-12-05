<template>
    <b-card
        title="Add Discount"
        :loading="loading"
        :error-message="errorMessage"
        :disabled="!formValid"
        @cancel="$emit('cancel')"
        @submit="create"
    >
        <b-select
            v-model="couponWithDiscount.gift_category_id"
            :items="giftCategories"
            :item-text="`name[${lang}]`"
            item-value="gift_category_id"
            label="Gift Category"
            no-top-margin
            :success="success.giftCategory"
            :error-messages="error.giftCategory"
            @focus="error.giftCategory = ''"
            @blur="validateGiftCategory"
        ></b-select>

        <v-row no-gutters align="center">
            <v-col cols="8" class="pr-2">
                <b-select
                    v-model="couponWithDiscount.product_discount_id"
                    :items="products"
                    :item-text="`name[${lang}]`"
                    item-value="product_id"
                    label="Product"
                    :success="success.product"
                    :error-messages="error.product"
                    @focus="error.product = ''"
                    @blur="validateProduct"
                ></b-select>
            </v-col>

            <v-col cols="4" class="mt-3 pl-2">
                <v-sheet
                    color="rgba(234, 237, 241, 0.57)"
                    outlined
                    class="subtitle-2 pa-3"
                >
                    Product Price:
                    {{
                        new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "EUR",
                            minimumFractionDigits: 2,
                        }).format(retailPrice)
                    }}
                </v-sheet>
            </v-col>
        </v-row>

        <v-sheet class="mt-3 pa-3 pt-2" outlined>
            <h4 class="subtitle-1 font-weight-medium">Discount Type</h4>
            <v-radio-group v-model="type" class="mt-3 pt-0" hide-details="auto">
                <v-row no-gutters>
                    <v-col
                        v-for="type in discountTypes"
                        :key="type.text"
                        cols="auto"
                        class="pr-5"
                    >
                        <v-radio color="secondary" :value="type.value">
                            <template v-slot:label>
                                <h4
                                    class="font-weight-medium text--primary"
                                    v-text="type.text"
                                ></h4>
                            </template>
                        </v-radio>
                    </v-col>
                </v-row>
            </v-radio-group>
        </v-sheet>

        <b-text-field
            v-if="type === 1"
            v-model="couponWithDiscount.discount_percentage"
            label="Amount"
            type="number"
            prepend-inner-icon="mdiPercent"
            :success="success.discountPercentage"
            :error-messages="error.discountPercentage"
            @focus="error.discountPercentage = ''"
            @blur="validateDiscountPercentage"
        ></b-text-field>
        <b-text-field
            v-else
            v-model="couponWithDiscount.discount_value"
            label="Amount"
            type="number"
            prepend-inner-icon="mdiCurrencyEur"
            :success="success.discountValue"
            :error-messages="error.discountValue"
            @focus="error.discountValue = ''"
            @blur="validateDiscountValue"
        ></b-text-field>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import validators from "./discountValidators";

export default {
    name: "CouponWithDiscountForm",

    mixins: [validators],

    data() {
        return {
            type: 1,
            discountTypes: [
                { text: "Percentage", value: 1 },
                { text: "Euro", value: 2 },
            ],
            retailPrice: 0,
        };
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("storePanel/coupons/couponsWithDiscount", [
            "giftCategories",
            "products",
            "couponWithDiscount",
        ]),

        lang() {
            return this.$route.params.lang;
        },

        innerIcon() {
            let icon = "";

            switch (this.couponWithDiscount.product_discount_id) {
                case 1:
                    icon = "mdiPercent";
                    break;
                case 2:
                    icon = "mdiCurrencyEur";
                    break;
            }

            return icon;
        },
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapActions("storePanel/coupons/couponsWithDiscount", [
            "getGiftCategories",
            "getProducts",
            "create",
        ]),
    },

    watch: {
        ["couponWithDiscount.product_discount_id"](val) {
            if (val) {
                this.retailPrice = +this.products.find(
                    (p) => p.product_id === val
                ).retail_price;
            } else {
                this.retailPrice = 0;
            }
        },

        type(val) {
            if (val === 1) {
                this.couponWithDiscount.discount_value = null;
                this.error.discountValue = "";
            } else if (val === 2) {
                this.couponWithDiscount.discount_percentage = null;
                this.error.discountPercentage = "";
            }
        },
    },

    mounted() {
        this.getGiftCategories();
        this.getProducts();
    },
};
</script>
