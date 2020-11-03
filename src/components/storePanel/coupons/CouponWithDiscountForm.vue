<template>
    <b-card
        title="Add Discount"
        :loading="loading"
        :error-message="errorMessage"
        :reset-validation="resetValidation"
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
        ></b-select>

        <b-select
            v-model="couponWithDiscount.product_discount_id"
            :items="products"
            :item-text="`name[${lang}]`"
            item-value="product_id"
            label="Product"
        ></b-select>

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
        ></b-text-field>
        <b-text-field
            v-else
            v-model="couponWithDiscount.discount_value"
            label="Amount"
            type="number"
            prepend-inner-icon="mdiCurrencyEur"
        ></b-text-field>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "CouponWithDiscountForm",

    data() {
        return {
            type: 1,
            discountTypes: [
                { text: "Percentage", value: 1 },
                { text: "Euro", value: 2 },
            ],
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
        ...mapActions("storePanel/coupons/couponsWithDiscount", [
            "getGiftCategories",
            "getProducts",
            "create",
        ]),
    },

    watch: {
        resetSuccess(val) {
            if (val) {
                this.success = {
                    name: false,
                    description: false,
                    sellingPrice: false,
                    wholesalePrice: false,
                    deliveryCost: false,
                    shippingCost: false,
                    category: false,
                };
            }
        },
    },

    mounted() {
        this.getGiftCategories();
        this.getProducts();
    },
};
</script>
