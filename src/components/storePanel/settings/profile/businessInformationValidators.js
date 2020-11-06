export default {
    data() {
        return {
            success: {
                name: false,
                primaryPhone: false,
                country: false,
                secondaryPhone: false,
                fullname: false,
                address: false,
                activity: false,
                mobile: false,
                email: false
            },
            rules: {
                name: [
                    v => {
                        if (v) {
                            this.success.name = true;
                            return true;
                        } else return "Business Name is required";
                    }
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
                country: [
                    v => {
                        if (v) {
                            this.success.country = true;
                            return true;
                        } else return "Country is required";
                    }
                ],
                secondaryPhone: [
                    v => {
                        if (v) {
                            this.success.secondaryPhone = true;
                            return true;
                        } else {
                            return "Secondary Phone is required";
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
                        } else return "Owner's Fullname is required";
                    }
                ],
                address: [
                    v => {
                        if (v) {
                            this.success.address = true;
                            return true;
                        } else return "Business Address is required";
                    }
                ],
                activity: [
                    v => {
                        if (v) {
                            this.success.activity = true;
                            return true;
                        } else return "Business Activity is required";
                    }
                ],
                mobile: [
                    v => {
                        if (v) {
                            this.success.mobile = true;
                            return true;
                        } else {
                            return "Owner's Mobile Phone is required";
                        }
                    },
                    v =>
                        (v || "").length === 10 ||
                        "Primary Phone must be 10 characters long"
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
                ]
            }
        };
    }
};
