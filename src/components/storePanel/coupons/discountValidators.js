export default {
    data() {
        return {
            success: {
                giftCategory: false,
                product: false,
                discountPercentage: false,
                discountValue: false
            },
            rules: {
                giftCategory: [
                    v => {
                        if (v) {
                            this.success.giftCategory = true;
                            return true;
                        } else return "Gift category is required";
                    }
                ],
                product: [
                    v => {
                        if (v) {
                            this.success.product = true;
                            return true;
                        } else return "Product is required";
                    }
                ],
                discountPercentage: [
                    v => {
                        if (v) {
                            this.success.discountPercentage = true;
                            return true;
                        } else return "Discount percent is required";
                    },
                    v => v >= 1 || "Discount percent must be minimum 1",
                    v => v <= 100 || "Discount percent must be maximum 100"
                ],
                discountValue: [
                    v => {
                        if (v) {
                            this.success.discountValue = true;
                            return true;
                        } else return "Discount value is required";
                    },
                    v => v >= 0.1 || "Discount value must be minimum 0.1",
                    v =>
                        v < this.retailPrice ||
                        "Discount value must be less than product price"
                ]
            }
        };
    }
};
