export default {
    data() {
        return {
            success: {
                mobile: false,
                password: false
            },
            rules: {
                mobile: [
                    v => {
                        if (v) {
                            this.success.mobile = true;
                            return true;
                        } else return "User Mobile is required";
                    },
                    v =>
                        (v || "").length === 10 ||
                        "User Mobile must be 10 characters long"
                ],
                password: [
                    v => {
                        if (v) {
                            this.success.password = true;
                            return true;
                        } else return "Password is required";
                    }
                ]
            }
        };
    }
};
