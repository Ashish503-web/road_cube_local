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
        :success="success"
        :rules="rules"
        :prepend-icon="icons[`${prependIcon}`]"
        :prepend-inner-icon="icons[`${prependInnerIcon}`]"
        :append-icon="icons[`${appendIcon}`]"
        :append-outer-icon="icons[`${appendOuterIcon}`]"
        @input="$emit('input', $event)"
        @click="$emit('click')"
    ></v-textarea>
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
        rules: Array
    },

    data: () => ({
        icons: {}
    })
};
</script>
