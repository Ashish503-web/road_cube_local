export default {
    data() {
        return {
            success: {
                giftCategory: false,
                saleProduct: false,
                giftProduct: false,
                quantity: false
            },
            error: {
                giftCategory: "",
                saleProduct: "",
                giftProduct: "",
                quantity: ""
            }
        };
    },

    computed: {
        valid() {
            if (this.couponOnProduct.action === "1p1") {
                return (
                    this.success.giftCategory &&
                    this.success.saleProduct &&
                    this.success.giftProduct &&
                    this.success.quantity
                );
            } else {
                return (
                    this.success.giftCategory &&
                    this.success.giftProduct &&
                    this.success.quantity
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

        validateQuantity() {
            if (!this.couponOnProduct.maximum) {
                this.error.quantity = "Quantity is required";
            } else if (this.couponOnProduct.maximum < 1) {
                this.error.quantity = "Quantity must be minimum 1";
            } else {
                this.error.quantity = "";
            }
        }
    },

    watch: {
        ["couponOnProduct.gift_category_id"](val) {
            this.success.giftCategory = !!val;
        },

        ["couponOnProduct.product_buy_id"](val) {
            this.success.saleProduct = !!val;
        },

        ["couponOnProduct.product_free_id"](val) {
            this.success.giftProduct = !!val;
        },

        ["couponOnProduct.maximum"](val) {
            this.success.quantity = val >= 1;
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    giftCategory: false,
                    saleProduct: false,
                    giftProduct: false,
                    quantity: false
                };
            }
        },

        resetValidation(val) {
            if (val) {
                this.error = {
                    giftCategory: "",
                    saleProduct: "",
                    giftProduct: "",
                    quantity: ""
                };
            }
        }
    }
};
