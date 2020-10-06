<template>
    <v-text-field
        :value="value"
        :label="label"
        :type="type"
        :class="noTopMargin ? 'mt-0' : 'mt-3'"
        color="secondary"
        outlined
        dense
        clearable
        hide-details="auto"
        :readonly="readonly"
        :disabled="disabled"
        :placeholder="placeholder"
        :prepend-icon="icons[`${prependIcon}`]"
        :prepend-inner-icon="icons[`${prependInnerIcon}`]"
        :append-icon="icons[`${appendIcon}`]"
        :append-outer-icon="icons[`${appendOuterIcon}`]"
        @input="$emit('input', $event)"
        @click="$emit('click')"
    ></v-text-field>
</template>

<script>
import { mdiPlus, mdiCurrencyEur, mdiClockOutline, mdiPercent } from "@mdi/js";

export default {
    name: "BTextField",
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
        readonly: Boolean,
        disabled: Boolean,
        placeholder: String
    },

    data: () => ({
        icons: { mdiPlus, mdiCurrencyEur, mdiClockOutline, mdiPercent }
    })
};
</script>
