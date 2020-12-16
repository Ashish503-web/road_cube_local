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
    name: "QuantityField",

    props: {
        value: [String, Number],
        label: String,
        quantityMax: Number
    },

    data() {
        return {
            success: false,
            error: "",
            errorMessages: {
                quantityRequired: {
                    el: "",
                    en: "Refund quantity is required",
                    it: ""
                },
                quantityMin: {
                    el: "",
                    en: "Refund quantity must be minimum 1",
                    it: ""
                },
                quantityMax: {
                    el: "",
                    en:
                        "Refund quantity must be less than or equal to " +
                        this.quantityMax,
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
                this.error = this.errorMessages.quantityRequired[this.lang];
            } else if (this.value < 1) {
                this.error = this.errorMessages.quantityMin[this.lang];
            } else if (this.value > this.quantityMax) {
                this.error = this.errorMessages.quantityMax[this.lang];
            } else {
                this.error = "";
            }
        }
    },

    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.success = val >= 1 && val <= this.quantityMax;
            }
        }
    }
};
</script>
