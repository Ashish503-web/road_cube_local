export default {
    data() {
        return {
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
        valid() {
            return (
                this.success.name &&
                this.success.description &&
                this.success.averagePrice &&
                this.success.category
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

        ["productGroup.name.el"](val) {
            this.success.name = !!val;
        },

        descriptionLang(val) {
            if (val === "en" || val === "it") {
                this.error.description = "";
            }
        },

        ["productGroup.description.el"](val) {
            this.success.description = !!val;
        },

        ["productGroup.average_price"](val) {
            this.success.averagePrice = val >= 0.1;
        },

        ["productGroup.product_category_id"](val) {
            this.success.category = !!val;
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    name: false,
                    description: false,
                    averagePrice: false,
                    category: false
                };
            }
        },

        resetValidation(val) {
            if (val) {
                this.error = {
                    name: "",
                    description: "",
                    averagePrice: "",
                    category: ""
                };
            }
        }
    }
};
