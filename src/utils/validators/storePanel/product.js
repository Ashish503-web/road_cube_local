export default {
    data() {
        return {
            valid: {
                category: false,
                name: false,
                description: false,
                sellingPrice: false,
                wholesalePrice: false
            },
            success: {
                category: false,
                name: false,
                description: false,
                sellingPrice: false,
                wholesalePrice: false
            },
            error: {
                category: "",
                name: "",
                description: "",
                sellingPrice: "",
                wholesalePrice: ""
            },
            errorMessages: {
                categoryRequired: {
                    el: "",
                    en: "Category is required",
                    it: ""
                },
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
                sellingPriceRequired: {
                    el: "",
                    en: "Selling Price is required",
                    it: ""
                },
                sellingPriceMin: {
                    el: "",
                    en: "Selling Price must be minimum 0.1",
                    it: ""
                },
                wholesalePriceMin: {
                    el: "",
                    en: "Wholesale Price must be minimum 0.1",
                    it: ""
                }
            }
        };
    },

    computed: {
        formValid() {
            return (
                this.valid.category &&
                this.valid.name &&
                this.valid.description &&
                this.valid.sellingPrice &&
                this.valid.wholesalePrice
            );
        }
    },

    methods: {
        validateCategory() {
            if (!this.product.product_category_id) {
                this.error.category = this.errorMessages.categoryRequired[
                    this.lang
                ];
            } else {
                this.error.category = "";
            }
        },

        validateName() {
            if (this.productLang === "el") {
                if (!this.product.name["el"]) {
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
                if (!this.product.description["el"]) {
                    this.error.description = this.errorMessages.descriptionRequired[
                        this.lang
                    ];
                } else {
                    this.error.description = "";
                }
            }
        },

        validateSellingPrice() {
            if (!this.product.retail_price) {
                this.error.sellingPrice = this.errorMessages.sellingPriceRequired[
                    this.lang
                ];
            } else if (this.product.retail_price < 0.1) {
                this.error.sellingPrice = this.errorMessages.sellingPriceMin[
                    this.lang
                ];
            } else {
                this.error.sellingPrice = "";
            }
        },

        validateWholesalePrice() {
            if (!this.product.wholesale_price) {
                this.error.wholesalePrice = "";
            } else if (this.product.wholesale_price < 0.1) {
                this.error.wholesalePrice = this.errorMessages.wholesalePriceMin[
                    this.lang
                ];
            } else {
                this.error.wholesalePrice = "";
            }
        }
    },

    watch: {
        ["product.product_category_id"]: {
            immediate: true,
            handler(val) {
                this.valid.category = !!val;
                this.success.category = !!val;
            }
        },

        productLang(val) {
            if (val === "en" || val === "it") {
                this.error.name = "";
            }
        },

        descriptionLang(val) {
            if (val === "en" || val === "it") {
                this.error.description = "";
            }
        },

        ["product.name.el"]: {
            immediate: true,
            handler(val) {
                this.valid.name = !!val;
                this.success.name = !!val;
            }
        },

        ["product.description.el"]: {
            immediate: true,
            handler(val) {
                this.valid.description = !!val;
                this.success.description = !!val;
            }
        },

        ["product.retail_price"]: {
            immediate: true,
            handler(val) {
                this.valid.sellingPrice = val >= 0.1;
                this.success.sellingPrice = val >= 0.1;
            }
        },

        ["product.wholesale_price"]: {
            immediate: true,
            handler(val) {
                this.valid.wholesalePrice = val >= 0.1 || !val;
                this.success.wholesalePrice = val >= 0.1;
            }
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    category: false,
                    name: false,
                    description: false,
                    sellingPrice: false,
                    wholesalePrice: false
                };

                this.setResetSuccess(false);
            }
        },

        resetValidation: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.error = {
                        category: "",
                        name: "",
                        description: "",
                        sellingPrice: "",
                        wholesalePrice: ""
                    };

                    this.setResetValidation(false);
                }
            }
        }
    }
};
