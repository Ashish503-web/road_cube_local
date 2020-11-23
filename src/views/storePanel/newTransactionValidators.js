export default {
    data() {
        return {
            success: {
                user: false,
                receipt: false,
                amount: false
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
                amount: [
                    v => {
                        if (v >= 0.1) {
                            this.success.amount = true;
                            return true;
                        } else if (!v) {
                            this.success.amount = false;
                            return "Purchase price is required";
                        } else return "Purchase Price must be minimum 0.1";
                    }
                ]
            }
        };
    }
};
