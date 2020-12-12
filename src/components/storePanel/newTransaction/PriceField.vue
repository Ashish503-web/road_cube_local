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
    },

    data: () => ({
        success: false,
        error: "",
        errorMessages: {
            priceRequired: {
                el: "",
                en: "Purchase price is required",
                it: "",
            },
            priceMin: {
                el: "",
                en: "Purchase Price must be minimum 0.1",
                it: "",
            },
        },
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },
    },

    methods: {
        validate() {
            if (!this.value) {
                this.error = this.errorMessages.priceRequired[this.lang];
            } else if (this.value < 0.1) {
                this.error = this.errorMessages.priceMin[this.lang];
            } else {
                this.error = "";
            }
        },
    },

    watch: {
        value: {
            immediate: true,
            handler(newVal, oldVal) {
                this.success = newVal >= 0.1;
                this.$emit("get-transaction");
            },
        },
    },
};
</script>
