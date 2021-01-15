export default {
    data() {
        return {
            valid: {
                subscriptionPlan: false,
                country: false,
                name: false,
                address: false,
                vatNumber: false,
                email: false,
                primaryPhone: false,
                tos: false,
                marketing: false,
                fullname: false,
                mobile: false
            },
            success: {
                subscriptionPlan: false,
                country: false,
                name: false,
                address: false,
                vatNumber: false,
                email: false,
                primaryPhone: false,
                tos: false,
                marketing: false,
                fullname: false,
                mobile: false
            },
            error: {
                subscriptionPlan: "",
                country: "",
                name: "",
                address: "",
                vatNumber: "",
                email: "",
                primaryPhone: "",
                tos: "",
                marketing: "",
                fullname: "",
                mobile: ""
            },
            errorMessages: {
                subscriptionPlanRequired: {
                    el: "",
                    en: "Subscription Plan is required",
                    it: ""
                },
                countryRequired: {
                    el: "",
                    en: "Country is required",
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
                addressIsPostal: {
                    el: "",
                    en: "Please select an address that has a postal code",
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
                },
                fullnameRequired: {
                    el: "",
                    en: "Full Name is required",
                    it: ""
                },
                mobileRequired: {
                    el: "",
                    en: "Mobile is required",
                    it: ""
                },
                mobileLength: {
                    el: "",
                    en: "Mobile must be 10 characters long",
                    it: ""
                }
            }
        };
    },

    computed: {
        formValid() {
            if (this.newStoreManager) {
                return (
                    this.valid.subscriptionPlan &&
                    this.valid.country &&
                    this.valid.name &&
                    this.valid.address &&
                    this.valid.vatNumber &&
                    this.valid.email &&
                    this.valid.primaryPhone &&
                    this.valid.tos &&
                    this.valid.marketing &&
                    this.valid.fullname &&
                    this.valid.mobile
                );
            } else {
                return (
                    this.valid.subscriptionPlan &&
                    this.valid.country &&
                    this.valid.name &&
                    this.valid.address &&
                    this.valid.vatNumber &&
                    this.valid.email &&
                    this.valid.primaryPhone &&
                    this.valid.tos &&
                    this.valid.marketing
                );
            }
        }
    },

    methods: {
        validateSubscriptionPlan() {
            if (!this.store.store_subscription_plan_id) {
                this.error.subscriptionPlan = this.errorMessages.subscriptionPlanRequired[
                    this.lang
                ];
            } else {
                this.error.subscriptionPlan = "";
            }
        },

        validateCountry() {
            if (!this.store.country_id) {
                this.error.country = this.errorMessages.countryRequired[
                    this.lang
                ];
            } else {
                this.error.country = "";
            }
        },

        validateName() {
            if (!this.store.name) {
                this.error.name = this.errorMessages.nameRequired[this.lang];
            } else if (this.store.name.length < 5) {
                this.error.name = this.errorMessages.nameLength[this.lang];
            } else {
                this.error.name = "";
            }
        },

        validateAddress() {
            if (!this.store.address) {
                this.error.address = this.errorMessages.addressRequired[
                    this.lang
                ];
            } else if (!this.isAddress) {
                this.error.address = this.errorMessages.addressIsPostal[
                    this.lang
                ];
            } else {
                this.error.address = "";
            }
        },

        validateVatNumber() {
            if (!this.store.vat_number) {
                this.error.vatNumber = this.errorMessages.vatNumberRequired[
                    this.lang
                ];
            } else if (this.store.vat_number.length !== 9) {
                this.error.vatNumber = this.errorMessages.vatNumberLength[
                    this.lang
                ];
            } else {
                this.error.vatNumber = "";
            }
        },

        validateEmail() {
            if (!this.store.email) {
                this.error.email = this.errorMessages.emailRequired[this.lang];
            } else if (!/.+@.+/.test(this.store.email)) {
                this.error.email = this.errorMessages.emailValid[this.lang];
            } else {
                this.error.email = "";
            }
        },

        validatePrimaryPhone() {
            if (!this.store.primary_phone) {
                this.error.primaryPhone = this.errorMessages.primaryPhoneRequired[
                    this.lang
                ];
            } else if (this.store.primary_phone.length !== 10) {
                this.error.primaryPhone = this.errorMessages.primaryPhoneLength[
                    this.lang
                ];
            } else {
                this.error.primaryPhone = "";
            }
        },

        validateFullname() {
            if (!this.userDetails.full_name) {
                this.error.fullname = this.errorMessages.fullnameRequired[
                    this.lang
                ];
            } else {
                this.error.fullname = "";
            }
        },

        validateMobile() {
            if (!this.userDetails.mobile) {
                this.error.mobile = this.errorMessages.mobileRequired[
                    this.lang
                ];
            } else if (this.userDetails.mobile.length !== 10) {
                this.error.mobile = this.errorMessages.mobileLength[this.lang];
            } else {
                this.error.mobile = "";
            }
        }
    },

    watch: {
        ["store.store_subscription_plan_id"]: {
            immediate: true,
            handler(val) {
                this.valid.subscriptionPlan = !!val;
                this.success.subscriptionPlan = !!val;
            }
        },

        ["store.country_id"]: {
            immediate: true,
            handler(val) {
                this.valid.country = !!val;
                this.success.country = !!val;
            }
        },

        ["store.name"]: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.name = val.length >= 5;
                    this.success.name = val.length >= 5;
                } else {
                    this.valid.name = false;
                    this.success.name = false;
                }
            }
        },

        ["store.address"]: {
            immediate: true,
            handler(val) {
                this.valid.address = !!val && this.isAddress;
                this.success.address = !!val && this.isAddress;
            }
        },

        ["store.vat_number"]: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.valid.vatNumber = val.length === 9;
                    this.success.vatNumber = val.length === 9;
                } else {
                    this.valid.vatNumber = false;
                    this.success.vatNumber = false;
                }
            }
        },

        ["store.email"](val) {
            this.valid.email = /.+@.+/.test(val);
            this.success.email = /.+@.+/.test(val);
        },

        ["store.primary_phone"]: {
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

        ["userDetails.tos"]: {
            immediate: true,
            handler(val) {
                this.valid.tos = !!val;
                this.success.tos = !!val;
            }
        },

        ["userDetails.marketing"]: {
            immediate: true,
            handler(val) {
                this.valid.marketing = !!val;
                this.success.marketing = !!val;
            }
        },

        ["userDetails.full_name"]: {
            immediate: true,
            handler(val) {
                this.valid.fullname = !!val;
                this.success.fullname = !!val;
            }
        },

        ["userDetails.mobile"]: {
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

        resetSuccess(val) {
            if (val) {
                this.success = {
                    subscriptionPlan: false,
                    country: false,
                    name: false,
                    address: false,
                    vatNumber: false,
                    email: false,
                    primaryPhone: false,
                    tos: false,
                    marketing: false,
                    fullname: false,
                    mobile: false
                };

                this.setResetSuccess(false);
            }
        },

        resetValidation: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.error = {
                        subscriptionPlan: "",
                        country: "",
                        name: "",
                        address: "",
                        vatNumber: "",
                        email: "",
                        primaryPhone: "",
                        tos: "",
                        marketing: "",
                        fullname: "",
                        mobile: ""
                    };

                    this.setResetValidation(false);
                }
            }
        }
    }
};
