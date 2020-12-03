export default {
    data() {
        return {
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

        ["product.name.el"](val) {
            this.success.name = !!val;
        },

        descriptionLang(val) {
            if (val === "en" || val === "it") {
                this.error.description = "";
            }
        },

        ["product.description.el"](val) {
            this.success.description = !!val;
        },

        ["product.retail_price"](val) {
            this.success.sellingPrice = val >= 0.1;
        },

        ["product.wholesale_price"](val) {
            this.success.wholesalePrice = val >= 0.1;
        },

        ["product.delivery_cost"](val) {
            this.success.deliveryCost = val >= 0.1;
        },

        ["product.shipping_cost"](val) {
            this.success.shippingCost = val >= 0.1;
        },

        ["product.product_category_id"](val) {
            this.success.category = !!val;
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
            }
        },

        resetValidation(val) {
            if (val) {
                this.error = {
                    name: "",
                    description: ""
                };
            }
        }
    }
};
