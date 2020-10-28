export default {
    data() {
        return {
            success: {
                user: false,
                receipt: false,
                product: false,
                purchasePrice: false,
                quantity: false
            },
            rules: {
                user: [
                    v => {
                        if (v) {
                            this.success.user = true;
                            return true;
                        } else return "User is required";
                    }
                ],
                receipt: [
                    v => {
                        if (v) {
                            this.success.receipt = true;
                            return true;
                        } else return "Receipt Number is required";
                    }
                ],
                product: [
                    v => {
                        if (v.length) {
                            this.success.product = true;
                            return true;
                        } else return "You must choose at least 1 product";
                    }
                ],
                purchasePrice: [
                    v => {
                        if (v >= 0.1) {
                            this.success.purchasePrice = true;
                            return true;
                        } else if (!v) {
                            this.success.purchasePrice = false;
                            return "Purchase price is required";
                        } else return "Purchase Price must be minimum 0.1";
                    }
                ],
                quantity: [
                    v => {
                        if (v >= 1) {
                            this.success.quantity = true;
                            return true;
                        } else if (!v) {
                            this.success.quantity = false;
                            return "Quantity is required";
                        } else return "Quantity must be minimum 1";
                    }
                ]
            }
        };
    }
};
