<template>
    <v-text-field
        :value="value"
        :label="label"
        color="secondary"
        type="number"
        outlined
        dense
        clearable
        :success="success"
        :error-messages="error"
        @focus="error = ''"
        @blur="validate"
        @input="$emit('input', $event)"
    ></v-text-field>
</template>

<script>
export default {
    name: "PriceField",

    props: {
        value: [String, Number],
        label: String,
        priceMax: [Number]
    },

    data() {
        return {
            success: false,
            error: "",
            errorMessages: {
                priceRequired: {
                    el: "",
                    en: "Refund price is required",
                    it: ""
                },
                priceMin: {
                    el: "",
                    en: "Refund price must be minimum 0.1",
                    it: ""
                },
                priceMax: {
                    el: "",
                    en:
                        "Refund price must be less than or equal to " +
                        this.priceMax,
                    it: ""
                }
            }
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    },

    methods: {
        validate() {
            if (!this.value) {
                this.error = this.errorMessages.priceRequired[this.lang];
            } else if (this.value < 0.1) {
                this.error = this.errorMessages.priceMin[this.lang];
            } else if (this.value > this.priceMax) {
                this.error = this.errorMessages.priceMax[this.lang];
            } else {
                this.error = "";
            }
        }
    },

    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.success = val >= 0.1 && val <= this.priceMax;
            }
        }
    }
};
</script>
