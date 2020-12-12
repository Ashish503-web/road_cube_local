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
            },
            errorMessages: {
                giftCategoryRequired: {
                    el: "",
                    en: "Gift Category is required",
                    it: ""
                },
                codeRequired: {
                    el: "",
                    en: "Coupon Code is required",
                    it: ""
                },
                movesRequired: {
                    el: "",
                    en: "Moves is required",
                    it: ""
                },
                totalCouponsRequired: {
                    el: "",
                    en: "Total Coupons is required",
                    it: ""
                },
                totalCouponsValue: {
                    el: "",
                    en: "Total Coupons must be minimum 1",
                    it: ""
                },
                giftTitleRequired: {
                    el: "",
                    en: "Gift Title is required",
                    it: ""
                },
                giftDescriptionRequired: {
                    el: "",
                    en: "Gift Description is required",
                    it: ""
                }
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
                this.error.giftCategory = this.errorMessages.giftCategoryRequired[
                    this.lang
                ];
            } else {
                this.error.giftCategory = "";
            }
        },

        validateCode() {
            if (!this.couponWithCode.code) {
                this.error.code = this.errorMessages.codeRequired[this.lang];
            } else {
                this.error.code = "";
            }
        },

        validatePoints() {
            if (!this.couponWithCode.points) {
                this.error.points = this.errorMessages.movesRequired[this.lang];
            } else {
                this.error.points = "";
            }
        },

        validateTotalCoupons() {
            if (!this.couponWithCode.maximum) {
                this.error.totalCoupons = this.errorMessages.totalCouponsRequired[
                    this.lang
                ];
            } else if (this.couponWithCode.maximum < 1) {
                this.error.totalCoupons = this.errorMessages.totalCouponsValue[
                    this.lang
                ];
            } else {
                this.error.totalCoupons = "";
            }
        },

        validateGiftTitle() {
            if (!this.couponWithCode.gift_title) {
                this.error.giftTitle = this.errorMessages.giftTitleRequired[
                    this.lang
                ];
            } else {
                this.error.giftTitle = "";
            }
        },

        validateGiftDescription() {
            if (!this.couponWithCode.gift_description) {
                this.error.giftDescription = this.errorMessages.giftDescriptionRequired[
                    this.lang
                ];
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
