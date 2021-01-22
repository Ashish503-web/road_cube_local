export default {
    data() {
        return {
            valid: {
                mobile: false,
                password: false
            },
            success: {
                mobile: false,
                password: false
            },
            error: {
                mobile: "",
                password: ""
            },
            errorMessages: {
                mobileRequired: {
                    el: "",
                    en: "User Mobile is required",
                    it: ""
                },
                mobileLength: {
                    el: "",
                    en: "User Mobile must be 10 characters long",
                    it: ""
                },
                passwordRequired: {
                    el: "",
                    en: "Password is required",
                    it: ""
                },
                passwordLength: {
                    el: "",
                    en: "Password must be at least 6 characters long",
                    it: ""
                }
            }
        };
    },

    computed: {
        formValid() {
            return this.mode === 1
                ? this.valid.mobile && this.valid.password
                : true;
        }
    },

    methods: {
        validateMobile() {
            if (!this.user.mobile) {
                this.error.mobile = this.errorMessages.mobileRequired[
                    this.lang
                ];
            } else if (this.user.mobile.length !== 10) {
                this.error.mobile = this.errorMessages.mobileLength[this.lang];
            } else {
                this.error.mobile = "";
            }
        },

        validatePassword() {
            if (!this.user.password) {
                this.error.password = this.errorMessages.passwordRequired[
                    this.lang
                ];
            } else if (this.user.password.length < 6) {
                this.error.password = this.errorMessages.passwordLength[
                    this.lang
                ];
            } else {
                this.error.password = "";
            }
        }
    },

    watch: {
        ["user.mobile"]: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.mobile = val.length === 10;
                    this.success.mobile = val.length === 10;
                } else {
                    this.valid.mobile = false;
                    this.success.mobile = false;
                }
            }
        },

        ["user.password"]: {
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

        resetSuccess(val) {
            if (val) {
                this.success = {
                    mobile: false,
                    password: false
                };

                this.setResetSuccess(false);
            }
        },

        resetValidation: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.error = {
                        mobile: "",
                        password: ""
                    };

                    this.setResetValidation(false);
                }
            }
        }
    }
};
