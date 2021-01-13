export default {
    data() {
        return {
            valid: {
                name: false,
                primaryPhone: false,
                secondaryPhone: false,
                mobile: false,
                email: false
            },
            success: {
                name: false,
                primaryPhone: false,
                secondaryPhone: false,
                mobile: false,
                email: false
            },
            error: {
                name: "",
                primaryPhone: "",
                secondaryPhone: "",
                mobile: "",
                email: ""
            },
            errorMessages: {
                nameRequired: {
                    el: "",
                    en: "Business Name is required",
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
                },
                secondaryPhoneLength: {
                    el: "",
                    en: "Secondary Phone must be 10 characters long",
                    it: ""
                },
                mobileLength: {
                    el: "",
                    en: "Owner's Mobile Phone must be 10 characters long",
                    it: ""
                },
                emailValid: {
                    el: "",
                    en: "E-mail must be valid",
                    it: ""
                }
            }
        };
    },

    computed: {
        formValid() {
            return (
                this.valid.name &&
                this.valid.primaryPhone &&
                this.valid.secondaryPhone &&
                this.valid.mobile &&
                this.valid.email
            );
        }
    },

    methods: {
        validateName() {
            if (!this.businessInformation.name) {
                this.error.name = this.errorMessages.nameRequired[this.lang];
            } else {
                this.error.name = "";
            }
        },

        validatePrimaryPhone() {
            if (!this.businessInformation.primary_phone) {
                this.error.primaryPhone = this.errorMessages.primaryPhoneRequired[
                    this.lang
                ];
            } else if (this.businessInformation.primary_phone.length !== 10) {
                this.error.primaryPhone = this.errorMessages.primaryPhoneLength[
                    this.lang
                ];
            } else {
                this.error.primaryPhone = "";
            }
        },

        validateSecondaryPhone() {
            if (!this.businessInformation.secondary_phone) {
                this.error.secondaryPhone = "";
            } else if (this.businessInformation.secondary_phone.length !== 10) {
                this.error.secondaryPhone = this.errorMessages.secondaryPhoneLength[
                    this.lang
                ];
            } else {
                this.error.secondaryPhone = "";
            }
        },

        validateMobile() {
            if (!this.businessInformation.mobile) {
                this.error.mobile = "";
            } else if (this.businessInformation.mobile.length !== 10) {
                this.error.mobile = this.errorMessages.mobileLength[this.lang];
            } else {
                this.error.mobile = "";
            }
        },

        validateEmail() {
            if (!this.businessInformation.email) {
                this.error.email = "";
            } else if (!/.+@.+/.test(this.businessInformation.email)) {
                this.error.email = this.errorMessages.emailValid[this.lang];
            } else {
                this.error.email = "";
            }
        }
    },

    watch: {
        ["businessInformation.name"]: {
            immediate: true,
            handler(val) {
                this.valid.name = !!val;
                this.success.name = !!val;
            }
        },

        ["businessInformation.primary_phone"]: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.primaryPhone = val.length === 10;
                    this.success.primaryPhone = val.length === 10;
                } else {
                    this.valid.primaryPhone = false;
                    this.success.primaryPhone = false;
                }
            }
        },

        ["businessInformation.secondary_phone"]: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.secondaryPhone = val.length === 10;
                    this.success.secondaryPhone = val.length === 10;
                } else {
                    this.valid.secondaryPhone = true;
                    this.success.secondaryPhone = false;
                }
            }
        },

        ["businessInformation.mobile"]: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.mobile = val.length === 10;
                    this.success.mobile = val.length === 10;
                } else {
                    this.valid.mobile = true;
                    this.success.mobile = false;
                }
            }
        },

        ["businessInformation.email"]: {
            immediate: true,
            handler(val) {
                this.valid.email = /.+@.+/.test(val) || !val;
                this.success.email = /.+@.+/.test(val);
            }
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    name: false,
                    primaryPhone: false,
                    secondaryPhone: false,
                    mobile: false,
                    email: false
                };

                this.setResetSuccess({
                    value: false,
                    type: "businessInformation"
                });
            }
        }
    }
};
