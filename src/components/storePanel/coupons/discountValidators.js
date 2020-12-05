export default {
    data() {
        return {
            success: {
                giftCategory: false,
                product: false,
                discountPercentage: false,
                discountValue: false
            },
            error: {
                giftCategory: "",
                product: "",
                discountPercentage: "",
                discountValue: ""
            }
        };
    },

    computed: {
        formValid() {
            let discountValid =
                this.type === 1
                    ? this.success.discountPercentage
                    : this.success.discountValue;

            return (
                this.success.giftCategory &&
                this.success.product &&
                discountValid
            );
        }
    },

    methods: {
        validateGiftCategory() {
            if (!this.couponWithDiscount.gift_category_id) {
                this.error.giftCategory = "Gift category is required";
            } else {
                this.error.giftCategory = "";
            }
        },

        validateProduct() {
            if (!this.couponWithDiscount.product_discount_id) {
                this.error.product = "Product is required";
            } else {
                this.error.product = "";
            }
        },

        validateDiscountPercentage() {
            if (!this.couponWithDiscount.discount_percentage) {
                this.error.discountPercentage = "Discount percent is required";
            } else if (this.couponWithDiscount.discount_percentage < 1) {
                this.error.discountPercentage =
                    "Discount percent must be minimum 1";
            } else if (this.couponWithDiscount.discount_percentage > 100) {
                this.error.discountPercentage =
                    "Discount percent must be maximum 100";
            } else {
                this.error.discountPercentage = "";
            }
        },

        validateDiscountValue() {
            if (!this.couponWithDiscount.discount_value) {
                this.error.discountValue = "Discount value is required";
            } else if (this.couponWithDiscount.discount_value < 0.1) {
                this.error.discountValue = "Discount value must be minimum 0.1";
            } else if (
                this.couponWithDiscount.discount_value > this.retailPrice
            ) {
                this.error.discountValue = `Discount value must be less than ${this.retailPrice} euro`;
            } else {
                this.error.discountValue = "";
            }
        }
    },

    watch: {
        ["couponWithDiscount.gift_category_id"](val) {
            this.success.giftCategory = !!val;
        },

        ["couponWithDiscount.product_discount_id"](val) {
            this.success.product = !!val;
        },

        ["couponWithDiscount.discount_percentage"](val) {
            this.success.discountPercentage = val >= 1 && val <= 100;
        },

        ["couponWithDiscount.discount_value"](val) {
            this.success.discountValue = val >= 0.1 && val <= this.retailPrice;
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    giftCategory: false,
                    product: false,
                    discountPercentage: false,
                    discountValue: false
                };

                this.setResetSuccess(false);
            }
        },

        resetValidation: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.error = {
                        giftCategory: "",
                        product: "",
                        discountPercentage: "",
                        discountValue: ""
                    };

                    this.setResetValidation(false);
                }
            }
        }
    }
};
