export default {
    data() {
        return {
            success: {
                password: false,
                newPassword: false,
                confirmPassword: false
            },
            rules: {
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
                        (v || "").length >= 6 ||
                        "Password must be 6 characters long"
                ],
                newPassword: [
                    v => {
                        if (v) {
                            this.success.newPassword = true;
                            return true;
                        } else {
                            return "New Password is required";
                        }
                    },
                    v =>
                        (v || "").length >= 6 ||
                        "Password must be 6 characters long"
                ],
                confirmPassword: [
                    v => {
                        if (v) {
                            this.success.confirmPassword = true;
                            return true;
                        } else {
                            return "Must match New Password";
                        }
                    },
                    v =>
                        v === this.changePassword.new_password ||
                        "Must match New Password"
                ]
            }
        };
    }
};
