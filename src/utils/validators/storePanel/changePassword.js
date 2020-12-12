export default {
    data() {
        return {
            valid: {
                password: false,
                newPassword: false,
                confirmPassword: false
            },
            success: {
                password: false,
                newPassword: false,
                confirmPassword: false
            },
            error: {
                password: "",
                newPassword: "",
                confirmPassword: ""
            },
            errorMessages: {
                passwordRequired: {
                    el: "",
                    en: "Password is required",
                    it: ""
                },
                passwordLength: {
                    el: "",
                    en: "Password must be at least 6 characters long",
                    it: ""
                },
                newPasswordRequired: {
                    el: "",
                    en: "New Password is required",
                    it: ""
                },
                newPasswordLength: {
                    el: "",
                    en: "New Password must be at least 6 characters long",
                    it: ""
                },
                confirmPasswordMatch: {
                    el: "",
                    en: "Must match New Password",
                    it: ""
                }
            }
        };
    },

    computed: {
        formValid() {
            return (
                this.valid.password &&
                this.valid.newPassword &&
                this.valid.confirmPassword
            );
        }
    },

    methods: {
        validatePassword() {
            if (!this.changePassword.current_password) {
                this.error.password = this.errorMessages.passwordRequired[
                    this.lang
                ];
            } else if (this.changePassword.current_password.length < 6) {
                this.error.password = this.errorMessages.passwordLength[
                    this.lang
                ];
            } else {
                this.error.password = "";
            }
        },

        validateNewPassword() {
            if (!this.changePassword.new_password) {
                this.error.newPassword = this.errorMessages.newPasswordRequired[
                    this.lang
                ];
            } else if (this.changePassword.new_password.length < 6) {
                this.error.newPassword = this.errorMessages.newPasswordLength[
                    this.lang
                ];
            } else {
                this.error.newPassword = "";
            }
        },

        validateConfirmPassword() {
            if (!this.changePassword.new_password_confirm) {
                this.error.confirmPassword = this.errorMessages.confirmPasswordMatch[
                    this.lang
                ];
            } else if (
                this.changePassword.new_password_confirm !==
                this.changePassword.new_password
            ) {
                this.error.confirmPassword = this.errorMessages.confirmPasswordMatch[
                    this.lang
                ];
            } else {
                this.error.confirmPassword = "";
            }
        }
    },

    watch: {
        ["changePassword.current_password"]: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.password = val.length >= 6;
                    this.success.password = val.length >= 6;
                } else {
                    this.valid.password = false;
                    this.success.password = false;
                }
            }
        },

        ["changePassword.new_password"]: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.newPassword = val.length >= 6;
                    this.success.newPassword = val.length >= 6;
                    this.valid.confirmPassword =
                        val === this.changePassword.new_password_confirm;
                    this.success.confirmPassword =
                        val === this.changePassword.new_password_confirm;
                } else {
                    this.valid.newPassword = false;
                    this.success.newPassword = false;
                }
            }
        },

        ["changePassword.new_password_confirm"]: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.confirmPassword =
                        val === this.changePassword.new_password;
                    this.success.confirmPassword =
                        val === this.changePassword.new_password;
                } else {
                    this.valid.confirmPassword = false;
                    this.success.confirmPassword = false;
                }
            }
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    password: false,
                    newPassword: false,
                    confirmPassword: false
                };

                this.setResetSuccess({ value: false, type: "changePassword" });
            }
        }
    }
};
