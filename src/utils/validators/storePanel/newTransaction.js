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
            },
            errorMessages: {
                userRequired: {
                    el: "",
                    en: "User is required",
                    it: ""
                },
                receiptRequired: {
                    el: "",
                    en: "Receipt Number is required",
                    it: ""
                },
                amountRequired: {
                    el: "",
                    en: "Amount is required",
                    it: ""
                },
                amountMin: {
                    el: "",
                    en: "Amount must be minimum 0.1",
                    it: ""
                }
            }
        };
    },

    computed: {
        valid() {
            if (this.showProducts) {
                let transactionProductsValid = true;
                this.transaction.products.forEach(p => {
                    if (p.reward_type_id === 4) {
                        if (p.retail_price < 0.1)
                            transactionProductsValid = false;
                    } else {
                        if (p.quantity < 1) transactionProductsValid = false;
                    }
                });

                if (this.showReceipt) {
                    return (
                        this.success.user &&
                        this.success.receipt &&
                        this.productsSuccess &&
                        transactionProductsValid
                    );
                } else {
                    return (
                        this.success.user &&
                        this.productsSuccess &&
                        transactionProductsValid
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
                this.error.user = this.errorMessages.userRequired[this.lang];
            } else {
                this.error.user = "";
            }
        },

        validateReceipt() {
            if (!this.transaction.receipt_number) {
                this.error.receipt = this.errorMessages.receiptRequired[
                    this.lang
                ];
            } else {
                this.error.receipt = "";
            }
        },

        validateAmount() {
            if (!this.transaction.amount) {
                this.error.amount = this.errorMessages.amountRequired[
                    this.lang
                ];
            } else if (this.transaction.amount < 0.1) {
                this.error.amount = this.errorMessages.amountMin[this.lang];
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
