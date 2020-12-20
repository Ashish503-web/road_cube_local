<template>
    <v-text-field
        :value="value"
        :label="label"
        color="secondary"
        class="ma-3 mt-5"
        type="number"
        outlined
        dense
        clearable
        hide-details="auto"
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
        label: String
    },

    data: () => ({
        success: false,
        error: "",
        errorMessages: {
            quantityRequired: {
                el: "",
                en: "Product quantity is required",
                it: ""
            },
            quantityMin: {
                el: "",
                en: "Product quantity must be minimum 1",
                it: ""
            }
        }
    }),

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
            } else {
                this.error = "";
            }
        }
    },

    watch: {
        value: {
            immediate: true,
            handler(val) {
                this.success = val >= 1;
                this.$emit("get-transaction");
            }
        }
    }
};
</script>
