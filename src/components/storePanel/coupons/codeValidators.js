export default {
    data() {
        return {
            valid: {
                giftCategory: false,
                code: false,
                points: false,
                totalCoupons: false,
                giftTitle: false,
                giftDescription: false
            },
            success: {
                giftCategory: false,
                code: false,
                points: false,
                totalCoupons: false,
                giftTitle: false,
                giftDescription: false
            },
            error: {
                giftCategory: "",
                code: "",
                points: "",
                totalCoupons: "",
                giftTitle: "",
                giftDescription: ""
            }
        };
    },

    computed: {
        formValid() {
            let totalCouponsValid =
                this.mode === 1 ? this.valid.totalCoupons : true;
            return (
                this.valid.giftCategory &&
                this.valid.code &&
                this.valid.points &&
                totalCouponsValid &&
                this.valid.giftTitle &&
                this.valid.giftDescription
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

        validateTotalCoupons() {
            if (!this.couponWithCode.maximum) {
                this.error.totalCoupons = "Total Coupons is required";
            } else if (this.couponWithCode.maximum < 1) {
                this.error.totalCoupons = "Total Coupons must be minimum 1";
            } else {
                this.error.totalCoupons = "";
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
        ["couponWithCode.gift_category_id"]: {
            immediate: true,
            handler(val) {
                this.valid.giftCategory = !!val;
                this.success.giftCategory = !!val;
            }
        },

        ["couponWithCode.code"]: {
            immediate: true,
            handler(val) {
                this.valid.code = !!val;
                this.success.code = !!val;
            }
        },

        ["couponWithCode.points"]: {
            immediate: true,
            handler(val) {
                this.valid.points = !!val;
                this.success.points = !!val;
            }
        },

        ["couponWithCode.maximum"]: {
            immediate: true,
            handler(val) {
                this.valid.totalCoupons = val >= 1;
                this.success.totalCoupons = val >= 1;
            }
        },

        ["couponWithCode.gift_title"]: {
            immediate: true,
            handler(val) {
                this.valid.giftTitle = !!val;
                this.success.giftTitle = !!val;
            }
        },

        ["couponWithCode.gift_description"]: {
            immediate: true,
            handler(val) {
                this.valid.giftDescription = !!val;
                this.success.giftDescription = !!val;
            }
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    giftCategory: false,
                    code: false,
                    points: false,
                    totalCoupons: false,
                    giftTitle: false,
                    giftDescription: false
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
                        code: "",
                        points: "",
                        totalCoupons: "",
                        giftTitle: "",
                        giftDescription: ""
                    };

                    this.setResetValidation(false);
                }
            }
        }
    }
};
