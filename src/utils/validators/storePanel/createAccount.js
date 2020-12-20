export default {
    data() {
        return {
            success: {
                country: false,
                mobile: false,
                tos: false
            },
            error: {
                country: "",
                mobile: "",
                tos: ""
            },
            errorMessages: {
                countryRequired: {
                    el: "",
                    en: "Country is required",
                    it: ""
                },
                mobileRequired: {
                    el: "",
                    en: "Mobile Phone is required",
                    it: ""
                },
                mobileLength: {
                    el: "",
                    en: "Mobile Phone must be 10 characters long",
                    it: ""
                },
                tosRequired: {
                    el: "",
                    en: "You must accept terms of services to proceed",
                    it: ""
                }
            }
        };
    },

    computed: {
        valid() {
            return (
                this.success.country && this.success.mobile && this.success.tos
            );
        }
    },

    methods: {
        validateCountry() {
            if (!this.storeDetails.country_id) {
                this.error.country = this.errorMessages.countryRequired[
                    this.lang
                ];
            } else {
                this.error.country = "";
            }
        },

        validateMobile() {
            if (!this.mobile) {
                this.error.mobile = this.errorMessages.mobileRequired[
                    this.lang
                ];
            } else if (this.mobile.length !== 10) {
                this.error.mobile = this.errorMessages.mobileLength[this.lang];
            } else {
                this.error.mobile = "";
            }
        },

        validateTos() {
            if (!this.tos) {
                this.error.tos = this.errorMessages.tosRequired[this.lang];
            } else {
                this.error.tos = "";
            }
        }
    },

    watch: {
        ["storeDetails.country_id"](val) {
            this.success.country = !!val;
        },

        ["mobile"](val) {
            if (val) {
                this.success.mobile = val.length === 10;
            } else {
                this.success.mobile = false;
            }
        },

        ["tos"](val) {
            this.success.tos = !!val;
        }
    }
};
