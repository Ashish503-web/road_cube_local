<template>
    <v-textarea
        :value="value"
        :label="label"
        :class="noTopMargin ? 'mt-0' : 'mt-3'"
        color="secondary"
        outlined
        dense
        clearable
        hide-details="auto"
        validate-on-blur
        :success="success"
        :error-messages="errorMessages"
        :rules="rules"
        :prepend-icon="icons[`${prependIcon}`]"
        :prepend-inner-icon="icons[`${prependInnerIcon}`]"
        :append-icon="icons[`${appendIcon}`]"
        :append-outer-icon="icons[`${appendOuterIcon}`]"
        @input="$emit('input', $event)"
        @click="$emit('click')"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
    >
        <template v-slot:append>
            <slot name="append"></slot>
        </template>
    </v-textarea>
</template>

<script>
export default {
    name: "BTextarea",
    props: {
        value: {
            type: [String, Number]
        },
        type: String,
        label: String,
        prependIcon: String,
        prependInnerIcon: String,
        appendIcon: String,
        appendOuterIcon: String,
        noTopMargin: Boolean,
        success: Boolean,
        errorMessages: String,
        rules: Array
    },

    data: () => ({
        icons: {}
    })
};
</script>
