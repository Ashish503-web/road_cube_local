export default {
    data() {
        return {
            valid: {
                name: false,
                description: false,
                averagePrice: false,
                category: false
            },
            success: {
                name: false,
                description: false,
                averagePrice: false,
                category: false
            },
            error: {
                name: "",
                description: "",
                averagePrice: "",
                category: ""
            },
            errorMessages: {
                nameRequired: {
                    el: "",
                    en: "Name is required",
                    it: ""
                },
                descriptionRequired: {
                    el: "",
                    en: "Description is required",
                    it: ""
                },
                averagePriceRequired: {
                    el: "",
                    en: "Average Price is required",
                    it: ""
                },
                averagePriceMin: {
                    el: "",
                    en: "Average Price must be minimum 0.1",
                    it: ""
                },
                categoryRequired: {
                    el: "",
                    en: "Category is required",
                    it: ""
                }
            }
        };
    },

    computed: {
        formValid() {
            return (
                this.valid.name &&
                this.valid.description &&
                this.valid.averagePrice &&
                this.valid.category
            );
        }
    },

    methods: {
        validateName() {
            if (this.groupLang === "el") {
                if (!this.productGroup.name["el"]) {
                    this.error.name = this.errorMessages.nameRequired[
                        this.lang
                    ];
                } else {
                    this.error.name = "";
                }
            }
        },

        validateDescription() {
            if (this.descriptionLang === "el") {
                if (!this.productGroup.description["el"]) {
                    this.error.description = this.errorMessages.descriptionRequired[
                        this.lang
                    ];
                } else {
                    this.error.description = "";
                }
            }
        },

        validateAveragePrice() {
            if (!this.productGroup.average_price) {
                this.error.averagePrice = this.errorMessages.averagePriceRequired[
                    this.lang
                ];
            } else if (this.productGroup.average_price < 0.1) {
                this.error.averagePrice = this.errorMessages.averagePriceMin[
                    this.lang
                ];
            } else {
                this.error.averagePrice = "";
            }
        },

        validateCategory() {
            if (!this.productGroup.product_category_id) {
                this.error.category = this.errorMessages.categoryRequired[
                    this.lang
                ];
            } else {
                this.error.category = "";
            }
        }
    },

    watch: {
        groupLang(val) {
            if (val === "en" || val === "it") {
                this.error.name = "";
            }
        },

        descriptionLang(val) {
            if (val === "en" || val === "it") {
                this.error.description = "";
            }
        },

        ["productGroup.name.el"]: {
            immediate: true,
            handler(val) {
                this.valid.name = !!val;
                this.success.name = !!val;
            }
        },

        ["productGroup.description.el"]: {
            immediate: true,
            handler(val) {
                this.valid.description = !!val;
                this.success.description = !!val;
            }
        },

        ["productGroup.average_price"]: {
            immediate: true,
            handler(val) {
                this.valid.averagePrice = val >= 0.1;
                this.success.averagePrice = val >= 0.1;
            }
        },

        ["productGroup.product_category_id"]: {
            immediate: true,
            handler(val) {
                this.valid.category = !!val;
                this.success.category = !!val;
            }
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    name: false,
                    description: false,
                    averagePrice: false,
                    category: false
                };

                this.setResetSuccess(false);
            }
        },

        resetValidation: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.error = {
                        name: "",
                        description: "",
                        averagePrice: "",
                        category: ""
                    };

                    this.setResetValidation(false);
                }
            }
        }
    }
};
