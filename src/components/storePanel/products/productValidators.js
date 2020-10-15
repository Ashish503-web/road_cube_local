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
            rules: {
                name: [
                    v => {
                        if (v) {
                            this.success.name = true;
                            return true;
                        } else return "Name is required";
                    }
                ],
                description: [
                    v => {
                        if (v) {
                            this.success.description = true;
                            return true;
                        } else return "Description is required";
                    }
                ],
                sellingPrice: [
                    v => {
                        if (v) {
                            this.success.sellingPrice = true;
                            return true;
                        } else return "Selling Price is required";
                    },
                    v => v >= 0.1 || "Selling Price must be minimum 0.1"
                ],
                wholesalePrice: [
                    v => {
                        if (v >= 0.1) {
                            this.success.wholesalePrice = true;
                            return true;
                        } else if (!v) {
                            this.success.wholesalePrice = false;
                            return true;
                        } else return "Wholesale Price must be minimum 0.1";
                    }
                ],
                deliveryCost: [
                    v => {
                        if (v >= 0.1) {
                            this.success.deliveryCost = true;
                            return true;
                        } else if (!v) {
                            this.success.deliveryCost = false;
                            return true;
                        } else return "Delivery Cost must be minimum 0.1";
                    }
                ],
                shippingCost: [
                    v => {
                        if (v >= 0.1) {
                            this.success.shippingCost = true;
                            return true;
                        } else if (!v) {
                            this.success.shippingCost = false;
                            return true;
                        } else return "Shipping Cost must be minimum 0.1";
                    }
                ],
                category: [
                    v => {
                        if (v) {
                            this.success.category = true;
                            return true;
                        } else return "Category is required";
                    }
                ]
            }
        };
    }
};
