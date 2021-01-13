export default {
    data() {
        return {
            success: {
                fullname: false,
                password: false,
                confirmPassword: false,
                name: false,
                address: false,
                vatNumber: false,
                email: false,
                primaryPhone: false
            },
            error: {
                fullname: "",
                password: "",
                confirmPassword: "",
                name: "",
                address: "",
                vatNumber: "",
                email: "",
                primaryPhone: ""
            },
            errorMessages: {
                fullnameRequired: {
                    el: "",
                    en: "Full Name is required",
                    it: ""
                },
                passwordRequired: {
                    el: "",
                    en: "Password is required",
                    it: ""
                },
                passwordLength: {
                    el: "",
                    en: "Password must be 6 characters long",
                    it: ""
                },
                confirmPasswordMatch: {
                    el: "",
                    en: "Must match password",
                    it: ""
                },
                nameRequired: {
                    el: "",
                    en: "Store Name is required",
                    it: ""
                },
                nameLength: {
                    el: "",
                    en: "Store Name must be at least 5 characters long",
                    it: ""
                },
                addressRequired: {
                    el: "",
                    en: "Address is required",
                    it: ""
                },
                vatNumberRequired: {
                    el: "",
                    en: "Vat Number is required",
                    it: ""
                },
                vatNumberLength: {
                    el: "",
                    en: "Vat Number must be 9 characters long",
                    it: ""
                },
                emailRequired: {
                    el: "",
                    en: "E-mail is required",
                    it: ""
                },
                emailValid: {
                    el: "",
                    en: "E-mail must be valid",
                    it: ""
                },
                primaryPhoneRequired: {
                    el: "",
                    en: "Primary Phone is required",
                    it: ""
                },
                primaryPhoneLength: {
                    el: "",
                    en: "Primary Phone must be 10 characters long",
                    it: ""
                }
            }
        };
    },

    computed: {
        valid() {
            return (
                this.success.fullname &&
                this.success.password &&
                this.success.confirmPassword &&
                this.success.name &&
                this.success.address &&
                this.success.vatNumber &&
                this.success.email &&
                this.success.primaryPhone
            );
        }
    },

    methods: {
        validateFullname() {
            if (!this.fullname) {
                this.error.fullname = this.errorMessages.fullnameRequired[
                    this.lang
                ];
            } else {
                this.error.fullname = "";
            }
        },

        validatePassword() {
            if (!this.password) {
                this.error.password = this.errorMessages.passwordRequired[
                    this.lang
                ];
            } else if (this.password.length < 6) {
                this.error.password = this.errorMessages.passwordLength[
                    this.lang
                ];
            } else {
                this.error.password = "";
            }
        },

        validateConfirmPassword() {
            if (!this.confirmPassword) {
                this.error.confirmPassword = this.errorMessages.confirmPasswordMatch[
                    this.lang
                ];
            } else if (this.confirmPassword !== this.password) {
                this.error.confirmPassword = this.errorMessages.confirmPasswordMatch[
                    this.lang
                ];
            } else {
                this.error.confirmPassword = "";
            }
        },

        validateName() {
            if (!this.storeDetails.name) {
                this.error.name = this.errorMessages.nameRequired[this.lang];
            } else if (this.storeDetails.name.length < 5) {
                this.error.name = this.errorMessages.nameLength[this.lang];
            } else {
                this.error.name = "";
            }
        },

        validateAddress() {
            if (!this.storeDetails.address) {
                this.error.address = this.errorMessages.addressRequired[
                    this.lang
                ];
            } else {
                this.error.address = "";
            }
        },

        validateVatNumber() {
            if (!this.storeDetails.vat_number) {
                this.error.vatNumber = this.errorMessages.vatNumberRequired[
                    this.lang
                ];
            } else if (this.storeDetails.vat_number.length !== 9) {
                this.error.vatNumber = this.errorMessages.vatNumberLength[
                    this.lang
                ];
            } else {
                this.error.vatNumber = "";
            }
        },

        validateEmail() {
            if (!this.storeDetails.email) {
                this.error.email = this.errorMessages.emailRequired[this.lang];
            } else if (!/.+@.+/.test(this.storeDetails.email)) {
                this.error.email = this.errorMessages.emailValid[this.lang];
            } else {
                this.error.email = "";
            }
        },

        validatePrimaryPhone() {
            if (!this.storeDetails.primary_phone) {
                this.error.primaryPhone = this.errorMessages.primaryPhoneRequired[
                    this.lang
                ];
            } else if (this.storeDetails.primary_phone.length !== 10) {
                this.error.primaryPhone = this.errorMessages.primaryPhoneLength[
                    this.lang
                ];
            } else {
                this.error.primaryPhone = "";
            }
        }
    },

    watch: {
        fullname(val) {
            this.success.fullname = !!val;
        },

        password(val) {
            if (val) {
                this.success.password = val.length >= 6;
                this.success.confirmPassword = val === this.confirmPassword;
            } else {
                this.success.password = false;
            }
        },

        confirmPassword(val) {
            if (val) {
                this.success.confirmPassword = val === this.password;
            } else {
                this.success.confirmPassword = false;
            }
        },

        ["storeDetails.name"](val) {
            if (val) {
                this.success.name = val.length >= 5;
            } else {
                this.success.name = false;
            }
        },

        ["storeDetails.address"](val) {
            this.success.address = !!val;
        },

        ["storeDetails.vat_number"](val) {
            if (val) {
                this.success.vatNumber = val.length === 9;
            } else {
                this.success.vatNumber = false;
            }
        },

        ["storeDetails.email"](val) {
            this.success.email = /.+@.+/.test(val);
        },

        ["storeDetails.primary_phone"](val) {
            if (val) {
                this.success.primaryPhone = val.length === 10;
            } else {
                this.success.primaryPhone = false;
            }
        }
    }
};
