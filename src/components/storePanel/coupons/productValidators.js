export default {
    data() {
        return {
            valid: {
                giftCategory: false,
                saleProduct: false,
                giftProduct: false,
                totalCoupons: false
            },
            success: {
                giftCategory: false,
                saleProduct: false,
                giftProduct: false,
                totalCoupons: false
            },
            error: {
                giftCategory: "",
                saleProduct: "",
                giftProduct: "",
                totalCoupons: ""
            }
        };
    },

    computed: {
        formValid() {
            if (this.couponOnProduct.action === "1p1") {
                return (
                    this.valid.giftCategory &&
                    this.valid.saleProduct &&
                    this.valid.giftProduct &&
                    this.valid.totalCoupons
                );
            } else {
                return (
                    this.valid.giftCategory &&
                    this.valid.giftProduct &&
                    this.valid.totalCoupons
                );
            }
        }
    },

    methods: {
        validateGiftCategory() {
            if (!this.couponOnProduct.gift_category_id) {
                this.error.giftCategory = "Gift category is required";
            } else {
                this.error.giftCategory = "";
            }
        },

        validateSaleProduct() {
            if (!this.couponOnProduct.product_buy_id) {
                this.error.saleProduct = "Product for sale is required";
            } else {
                this.error.saleProduct = "";
            }
        },

        validateGiftProduct() {
            if (!this.couponOnProduct.product_free_id) {
                this.error.giftProduct = "Product for gift is required";
            } else {
                this.error.giftProduct = "";
            }
        },

        validateTotalCoupons() {
            if (!this.couponOnProduct.maximum) {
                this.error.totalCoupons = "Quantity is required";
            } else if (this.couponOnProduct.maximum < 1) {
                this.error.totalCoupons = "Quantity must be minimum 1";
            } else {
                this.error.totalCoupons = "";
            }
        }
    },

    watch: {
        ["couponOnProduct.gift_category_id"]: {
            immediate: true,
            handler(val) {
                this.valid.giftCategory = !!val;
                this.success.giftCategory = !!val;
            }
        },

        ["couponOnProduct.product_buy_id"]: {
            immediate: true,
            handler(val) {
                this.valid.saleProduct = !!val;
                this.success.saleProduct = !!val;
            }
        },

        ["couponOnProduct.product_free_id"]: {
            immediate: true,
            handler(val) {
                this.valid.giftProduct = !!val;
                this.success.giftProduct = !!val;
            }
        },

        ["couponOnProduct.maximum"]: {
            immediate: true,
            handler(val) {
                this.valid.totalCoupons = val >= 1;
                this.success.totalCoupons = val >= 1;
            }
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    giftCategory: false,
                    saleProduct: false,
                    giftProduct: false,
                    totalCoupons: false
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
                        saleProduct: "",
                        giftProduct: "",
                        totalCoupons: ""
                    };

                    this.setResetValidation(false);
                }
            }
        }
    }
};
