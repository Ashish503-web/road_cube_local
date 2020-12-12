export default {
    data() {
        return {
            valid: {
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
            error: {
                name: "",
                primaryPhone: "",
                country: "",
                secondaryPhone: "",
                fullname: "",
                address: "",
                activity: "",
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
                countryRequired: {
                    el: "",
                    en: "Country is required",
                    it: ""
                },
                secondaryPhoneRequired: {
                    el: "",
                    en: "Secondary Phone is required",
                    it: ""
                },
                secondaryPhoneLength: {
                    el: "",
                    en: "Secondary Phone must be 10 characters long",
                    it: ""
                },
                fullnameRequired: {
                    el: "",
                    en: "Owner's Fullname is required",
                    it: ""
                },
                addressRequired: {
                    el: "",
                    en: "Business Address is required",
                    it: ""
                },
                activityRequired: {
                    el: "",
                    en: "Business Activity is required",
                    it: ""
                },
                mobileRequired: {
                    el: "",
                    en: "Owner's Mobile Phone is required",
                    it: ""
                },
                mobileLength: {
                    el: "",
                    en: "Owner's Mobile Phone must be 10 characters long",
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
                }
            }
        };
    },

    computed: {
        formValid() {
            return (
                this.valid.name &&
                this.valid.primaryPhone &&
                this.valid.country &&
                this.valid.secondaryPhone &&
                this.valid.fullname &&
                this.valid.address &&
                this.valid.activity &&
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

        validateCountry() {
            if (!this.businessInformation.country_id) {
                this.error.country = this.errorMessages.countryRequired[
                    this.lang
                ];
            } else {
                this.error.country = "";
            }
        },

        validateSecondaryPhone() {
            if (!this.businessInformation.secondary_phone) {
                this.error.secondaryPhone = this.errorMessages.secondaryPhoneRequired[
                    this.lang
                ];
            } else if (this.businessInformation.secondary_phone.length !== 10) {
                this.error.secondaryPhone = this.errorMessages.secondaryPhoneLength[
                    this.lang
                ];
            } else {
                this.error.secondaryPhone = "";
            }
        },

        validateFullname() {
            if (!this.businessInformation.full_name) {
                this.error.fullname = this.errorMessages.fullnameRequired[
                    this.lang
                ];
            } else {
                this.error.fullname = "";
            }
        },

        validateAddress() {
            if (!this.businessInformation.address) {
                this.error.address = this.errorMessages.addressRequired[
                    this.lang
                ];
            } else {
                this.error.address = "";
            }
        },

        validateActivity() {
            if (!this.businessInformation.activity) {
                this.error.activity = this.errorMessages.activityRequired[
                    this.lang
                ];
            } else {
                this.error.activity = "";
            }
        },

        validateMobile() {
            if (!this.businessInformation.mobile) {
                this.error.mobile = this.errorMessages.mobileRequired[
                    this.lang
                ];
            } else if (this.businessInformation.mobile.length !== 10) {
                this.error.mobile = this.errorMessages.mobileLength[this.lang];
            } else {
                this.error.mobile = "";
            }
        },

        validateEmail() {
            if (!this.businessInformation.email) {
                this.error.email = this.errorMessages.emailRequired[this.lang];
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

        ["businessInformation.country_id"]: {
            immediate: true,
            handler(val) {
                this.valid.country = !!val;
                this.success.country = !!val;
            }
        },

        ["businessInformation.secondary_phone"]: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.secondaryPhone = val.length === 10;
                    this.success.secondaryPhone = val.length === 10;
                } else {
                    this.valid.secondaryPhone = false;
                    this.success.secondaryPhone = false;
                }
            }
        },

        ["businessInformation.full_name"]: {
            immediate: true,
            handler(val) {
                this.valid.fullname = !!val;
                this.success.fullname = !!val;
            }
        },

        ["businessInformation.address"]: {
            immediate: true,
            handler(val) {
                this.valid.address = !!val;
                this.success.address = !!val;
            }
        },

        ["businessInformation.activity"]: {
            immediate: true,
            handler(val) {
                this.valid.activity = !!val;
                this.success.activity = !!val;
            }
        },

        ["businessInformation.mobile"]: {
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

        ["businessInformation.email"]: {
            immediate: true,
            handler(val) {
                this.valid.email = /.+@.+/.test(val);
                this.success.email = /.+@.+/.test(val);
            }
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    name: false,
                    primaryPhone: false,
                    country: false,
                    secondaryPhone: false,
                    fullname: false,
                    address: false,
                    activity: false,
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
