export default {
    data() {
        return {
            valid: false,
            disabled: true,
            success: {
                giftCategory: false,
                storeCategory: false,
                name: false,
                address: false,
                zip: false,
                vatNumber: false,
                email: false,
                primaryPhone: false,
                fullname: false,
                password: false,
                confirmPassword: false
            },
            rules: {
                giftCategory: [
                    v => {
                        if (v) {
                            this.success.giftCategory = true;
                            return true;
                        } else {
                            return "Gift Category is required";
                        }
                    }
                ],
                storeCategory: [
                    v => {
                        if (v) {
                            this.success.storeCategory = true;
                            return true;
                        } else {
                            return "Store Category Plan is required";
                        }
                    }
                ],
                name: [
                    v => {
                        if (v) {
                            this.success.name = true;
                            return true;
                        } else {
                            return "Store Name is required";
                        }
                    },
                    v =>
                        (v || "").length >= 5 ||
                        "Name must be at least 5 characters long"
                ],
                address: [
                    v => {
                        if (v) {
                            this.success.address = true;
                            return true;
                        } else {
                            return "Address is required";
                        }
                    },
                    v =>
                        (v || "").length >= 5 ||
                        "Address must be at least 5 characters long"
                ],
                zip: [
                    v => {
                        if (v) {
                            this.success.zip = true;
                            return true;
                        } else {
                            return "Zip Code is required";
                        }
                    },
                    v =>
                        (v || "").length === 5 ||
                        "Zip Code must be 5 characters long"
                ],
                vatNumber: [
                    v => {
                        if (v) {
                            this.success.vatNumber = true;
                            return true;
                        } else {
                            return "Vat Number is required";
                        }
                    },
                    v =>
                        (v || "").length === 9 ||
                        "Vat Number must be 9 characters long"
                ],
                email: [
                    v => {
                        if (v) {
                            this.success.email = true;
                            return true;
                        } else {
                            return "E-mail is required";
                        }
                    },
                    v => /.+@.+/.test(v) || "E-mail must be valid"
                ],
                primaryPhone: [
                    v => {
                        if (v) {
                            this.success.primaryPhone = true;
                            return true;
                        } else {
                            return "Primary Phone is required";
                        }
                    },
                    v =>
                        (v || "").length === 10 ||
                        "Primary Phone must be 10 characters long"
                ],
                fullname: [
                    v => {
                        if (v) {
                            this.success.fullname = true;
                            return true;
                        } else {
                            return "Full Name is required";
                        }
                    }
                ],
                password: [
                    v => {
                        if (v) {
                            this.success.password = true;
                            return true;
                        } else {
                            return "Password is required";
                        }
                    },
                    v =>
                        (v || "").length >= 5 ||
                        "Password must be 6 characters long"
                ],
                confirmPassword: [
                    v => {
                        if (v) {
                            this.success.confirmPassword = true;
                            return true;
                        } else {
                            return "Must match password";
                        }
                    },
                    v => v === this.password || "Must match password"
                ]
            }
        };
    }
};
