export default {
    data() {
        return {
            success: {
                giftCategory: false,
                code: false,
                points: false,
                quantity: false,
                giftTitle: false,
                giftDescription: false
            },
            error: {
                giftCategory: "",
                code: "",
                points: "",
                quantity: "",
                giftTitle: "",
                giftDescription: ""
            }
        };
    },

    computed: {
        valid() {
            return (
                this.success.giftCategory &&
                this.success.code &&
                this.success.points &&
                this.success.quantity &&
                this.success.giftTitle &&
                this.success.giftDescription
            );
        }
    },

    methods: {
        validateGiftCategory() {
            if (!this.couponWithCode.gift_category_id) {
                this.error.giftCategory = "Gift Category is required";
            } else {
                this.error.giftCategory = "";
            }
        },

        validateCode() {
            if (!this.couponWithCode.code) {
                this.error.code = "Coupon Code is required";
            } else {
                this.error.code = "";
            }
        },

        validatePoints() {
            if (!this.couponWithCode.points) {
                this.error.points = "Moves is required";
            } else {
                this.error.points = "";
            }
        },

        validateQuantity() {
            if (!this.couponWithCode.maximum) {
                this.error.quantity = "Quantity is required";
            } else if (this.couponWithCode.maximum < 1) {
                this.error.quantity = "Quantity must be minimum 1";
            } else {
                this.error.quantity = "";
            }
        },

        validateGiftTitle() {
            if (!this.couponWithCode.gift_title) {
                this.error.giftTitle = "Gift Title is required";
            } else {
                this.error.giftTitle = "";
            }
        },

        validateGiftDescription() {
            if (!this.couponWithCode.gift_description) {
                this.error.giftDescription = "Gift Description is required";
            } else {
                this.error.giftDescription = "";
            }
        }
    },

    watch: {
        ["couponWithCode.gift_category_id"](val) {
            this.success.giftCategory = !!val;
        },

        ["couponWithCode.code"](val) {
            this.success.code = !!val;
        },

        ["couponWithCode.points"](val) {
            this.success.points = !!val;
        },

        ["couponWithCode.maximum"](val) {
            this.success.quantity = val >= 1;
        },

        ["couponWithCode.gift_title"](val) {
            this.success.giftTitle = !!val;
        },

        ["couponWithCode.gift_description"](val) {
            this.success.giftDescription = !!val;
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    giftCategory: false,
                    code: false,
                    points: false,
                    quantity: false,
                    giftTitle: false,
                    giftDescription: false
                };
            }
        },

        resetValidation(val) {
            if (val) {
                this.error = {
                    giftCategory: "",
                    code: "",
                    points: "",
                    quantity: "",
                    giftTitle: "",
                    giftDescription: ""
                };
            }
        }
    }
};
