export default {
    data() {
        return {
            valid: {
                name: false,
                description: false,
                sellingPrice: false,
                wholesalePrice: false,
                deliveryCost: false,
                shippingCost: false,
                category: false
            },
            success: {
                name: false,
                description: false,
                sellingPrice: false,
                wholesalePrice: false,
                deliveryCost: false,
                shippingCost: false,
                category: false
            },
            error: {
                name: "",
                description: "",
                sellingPrice: "",
                wholesalePrice: "",
                deliveryCost: "",
                shippingCost: "",
                category: ""
            }
        };
    },

    computed: {
        formValid() {
            return (
                this.valid.name &&
                this.valid.description &&
                this.valid.sellingPrice &&
                this.valid.wholesalePrice &&
                this.valid.deliveryCost &&
                this.valid.shippingCost &&
                this.valid.category
            );
        }
    },

    methods: {
        validateName() {
            if (this.productLang === "el") {
                if (!this.product.name["el"]) {
                    this.error.name = "Name is required";
                } else {
                    this.error.name = "";
                }
            }
        },

        validateDescription() {
            if (this.descriptionLang === "el") {
                if (!this.product.description["el"]) {
                    this.error.description = "Description is required";
                } else {
                    this.error.description = "";
                }
            }
        },

        validateSellingPrice() {
            if (!this.product.retail_price) {
                this.error.sellingPrice = "Selling Price is required";
            } else if (this.product.retail_price < 0.1) {
                this.error.sellingPrice = "Selling Price must be minimum 0.1";
            } else {
                this.error.sellingPrice = "";
            }
        },

        validateWholesalePrice() {
            if (!this.product.wholesale_price) {
                this.error.wholesalePrice = "";
            } else if (this.product.wholesale_price < 0.1) {
                this.error.wholesalePrice =
                    "Wholesale Price must be minimum 0.1";
            } else {
                this.error.wholesalePrice = "";
            }
        },

        validateDeliveryCost() {
            if (!this.product.delivery_cost) {
                this.error.deliveryCost = "";
            } else if (this.product.delivery_cost < 0.1) {
                this.error.deliveryCost = "Delivery Cost must be minimum 0.1";
            } else {
                this.error.deliveryCost = "";
            }
        },

        validateShippingCost() {
            if (!this.product.shipping_cost) {
                this.error.shippingCost = "";
            } else if (this.product.shipping_cost < 0.1) {
                this.error.shippingCost = "Shipping Cost must be minimum 0.1";
            } else {
                this.error.shippingCost = "";
            }
        },

        validateCategory() {
            if (!this.product.product_category_id) {
                this.error.category = "Category is required";
            } else {
                this.error.category = "";
            }
        }
    },

    watch: {
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

        ["product.delivery_cost"]: {
            immediate: true,
            handler(val) {
                this.valid.deliveryCost = val >= 0.1 || !val;
                this.success.deliveryCost = val >= 0.1;
            }
        },

        ["product.shipping_cost"]: {
            immediate: true,
            handler(val) {
                this.valid.shippingCost = val >= 0.1 || !val;
                this.success.shippingCost = val >= 0.1;
            }
        },

        ["product.product_category_id"]: {
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
                    sellingPrice: false,
                    wholesalePrice: false,
                    deliveryCost: false,
                    shippingCost: false,
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
                        sellingPrice: "",
                        wholesalePrice: "",
                        deliveryCost: "",
                        shippingCost: "",
                        category: ""
                    };

                    this.setResetValidation(false);
                }
            }
        }
    }
};
