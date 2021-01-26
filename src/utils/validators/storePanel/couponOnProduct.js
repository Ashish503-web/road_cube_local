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
            },
            errorMessages: {
                giftCategoryRequired: {
                    el: "",
                    en: "Gift Category is required",
                    it: ""
                },
                saleProductRequired: {
                    el: "",
                    en: "Product for sale is required",
                    it: ""
                },
                giftProductRequired: {
                    el: "",
                    en: "Product for gift is required",
                    it: ""
                },
                totalCouponsRequired: {
                    el: "",
                    en: "Total Coupons is required"
                },
                totalCouponsValue: {
                    el: "",
                    en: "Total Coupons must be minimum 1"
                }
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
                this.error.giftCategory = this.errorMessages.giftCategoryRequired[
                    this.lang
                ];
            } else {
                this.error.giftCategory = "";
            }
        },

        validateSaleProduct() {
            if (!this.couponOnProduct.product_buy_id) {
                this.error.saleProduct = this.errorMessages.saleProductRequired[
                    this.lang
                ];
            } else {
                this.error.saleProduct = "";
            }
        },

        validateGiftProduct() {
            if (!this.couponOnProduct.product_free_id) {
                this.error.giftProduct = this.errorMessages.giftProductRequired[
                    this.lang
                ];
            } else {
                this.error.giftProduct = "";
            }
        },

        validateTotalCoupons() {
            if (!this.couponOnProduct.maximum) {
                this.error.totalCoupons = this.errorMessages.totalCouponsRequired[
                    this.lang
                ];
            } else if (this.couponOnProduct.maximum < 1) {
                this.error.totalCoupons = this.errorMessages.totalCouponsValue[
                    this.lang
                ];
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
