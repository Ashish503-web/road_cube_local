export default {
    data() {
        return {
            success: {
                user: false,
                receipt: false,
                amount: false
            },
            error: {
                user: "",
                receipt: "",
                amount: ""
            }
        };
    },

    computed: {
        valid() {
            if (this.showProducts) {
                if (this.showReceipt) {
                    return (
                        this.success.user &&
                        this.success.receipt &&
                        this.productsInputSuccess &&
                        this.productsSuccess
                    );
                } else {
                    return (
                        !!this.success.user &&
                        !!this.productsInputSuccess &&
                        this.productsSuccess
                    );
                }
            } else {
                if (this.showReceipt) {
                    return (
                        this.success.user &&
                        this.success.receipt &&
                        this.success.amount
                    );
                } else {
                    return this.success.user && this.success.amount;
                }
            }
        }
    },

    methods: {
        validateUser() {
            if (!this.transaction.user) {
                this.error.user = "User is required";
            } else {
                this.error.user = "";
            }
        },

        validateReceipt() {
            if (!this.transaction.receipt_number) {
                this.error.receipt = "Receipt Number is required";
            } else {
                this.error.receipt = "";
            }
        },

        validateAmount() {
            if (!this.transaction.amount) {
                this.error.amount = "Amount is required";
            } else if (this.transaction.amount < 0.1) {
                this.error.amount = "Amount must be minimum 0.1";
            } else {
                this.error.amount = "";
            }
        }
    },

    watch: {
        ["transaction.user"](val) {
            this.success.user = !!val;
        },

        ["transaction.receipt_number"](val) {
            this.success.receipt = !!val;
        },

        ["transaction.amount"](val) {
            this.success.amount = val >= 0.1;
        }
    }
};
