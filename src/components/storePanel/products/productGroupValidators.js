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
                    this.error.name = "Name is required";
                } else {
                    this.error.name = "";
                }
            }
        },

        validateDescription() {
            if (this.descriptionLang === "el") {
                if (!this.productGroup.description["el"]) {
                    this.error.description = "Description is required";
                } else {
                    this.error.description = "";
                }
            }
        },

        validateAveragePrice() {
            if (!this.productGroup.average_price) {
                this.error.averagePrice = "Average Price is required";
            } else if (this.productGroup.average_price < 0.1) {
                this.error.averagePrice = "Average Price must be minimum 0.1";
            } else {
                this.error.averagePrice = "";
            }
        },

        validateCategory() {
            if (!this.productGroup.product_category_id) {
                this.error.category = "Category is required";
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
