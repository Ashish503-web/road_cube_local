export default {
    data() {
        return {
            valid: {
                system_payment_method: false,
                iban: false,
                name: false
            },
            success: {
                system_payment_method: false,
                iban: false,
                name: false
            },
            error: {
                system_payment_method: "",
                iban: "",
                name: ""
            },
            errorMessages: {
                systemPaymentMethodRequired: {
                    el: "",
                    en: "System Payment Method is required",
                    it: ""
                },
                ibanRequired: {
                    el: "",
                    en: "Iban is required",
                    it: ""
                },
                nameRequired: {
                    el: "",
                    en: "Name is required",
                    it: ""
                }
            }
        };
    },

    computed: {
        formValid() {
            return this.mode === 1
                ? this.valid.system_payment_method && this.valid.iban && this.valid.name
                : true;
        }
    },

    methods: {
        validateSystemPaymentMethod() {
            if (!this.paymentMethod.system_payment_method_id) {
                this.error.system_payment_method = this.errorMessages.systemPaymentMethodRequired[
                    this.lang
                ];
            } else {
                this.error.system_payment_method = "";
            }
        },

        validateName() {
            if (!this.paymentMethod.credentials.name) {
                this.error.name = this.errorMessages.nameRequired[
                    this.lang
                ];
            } else {
                this.error.name = "";
            }
        },

        validateIban() {
            if (!this.paymentMethod.credentials.iban) {
                this.error.iban = this.errorMessages.ibanRequired[
                    this.lang
                ];
            } else {
                this.error.iban = "";
            }
        }
    },

    watch: {
        ["paymentMethod.system_payment_method_id"]: {
            immediate: true,
            handler(val) {
                this.valid.system_payment_method = !!val;
                this.success.system_payment_method = !!val;
            }
        },

        ["paymentMethod.credentials.name"]: {
            immediate: true,
            handler(val) {
                this.valid.name = !!val;
                this.success.name = !!val;
            }
        },

        ["paymentMethod.credentials.iban"]: {
            immediate: true,
            handler(val) {
                this.valid.iban = !!val;
                this.success.iban = !!val;
            }
        },

        resetSuccess(val) {
            if (val) {
                this.success = {
                    system_payment_method: false,
                    iban: false,
                    name: false
                };

                this.setResetSuccess(false);
            }
        },

        resetValidation: {
            immediate: true,
            handler(val) {
                if (val) {
                    this.error = {
                        system_payment_method: "",
                        iban: "",
                        name: ""
                    };

                    this.setResetValidation(false);
                }
            }
        }
    }
};
