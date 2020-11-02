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
            v-model="couponWithDiscount.product_discount_id"
            label="Discount"
            :items="discountTypes"
        ></b-select>
        <b-text-field
            label="Amount"
            type="number"
            :prepend-inner-icon="innerIcon"
        ></b-text-field>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "CouponWithDiscountForm",

    data() {
        return {
            discountTypes: [
                { text: "Percentage", value: 1 },
                { text: "Euro", value: 2 }
            ]
        };
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation"
        ]),

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

        couponWithDiscount() {
            return this.$store.state.storePanel.coupons.couponsWithDiscount
                .couponWithDiscount;
        }
    },

    methods: {
        ...mapActions("storePanel/coupons/couponsWithDiscount", [
            "getItem",
            "create"
        ])
    },

    watch: {
        ["couponWithDiscount.coupon_id"]: {
            immediate: true,
            handler(val) {
                this.getItem(val);
            }
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    name: false,
                    description: false,
                    sellingPrice: false,
                    wholesalePrice: false,
                    deliveryCost: false,
                    shippingCost: false,
                    category: false
                };
            }
        }
    }
};
</script>
