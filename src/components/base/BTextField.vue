<template>
    <v-text-field
        :value="value"
        :label="label"
        :type="type"
        :class="noTopMargin ? 'mt-0' : 'mt-3'"
        :color="color"
        outlined
        dense
        clearable
        hide-details="auto"
        validate-on-blur
        :readonly="readonly"
        :disabled="disabled"
        :placeholder="placeholder"
        :success="success"
        :rules="rules"
        :hint="hint"
        :persistent-hint="persistentHint"
        :prepend-icon="icons[`${prependIcon}`]"
        :prepend-inner-icon="icons[`${prependInnerIcon}`]"
        :append-icon="icons[`${appendIcon}`]"
        :append-outer-icon="icons[`${appendOuterIcon}`]"
        @input="$emit('input', $event)"
        @click="$emit('click')"
        @click:append="$emit('click-append')"
        @focus="$emit('cancel-success')"
    >
        <template v-slot:append>
            <slot name="append"></slot>
        </template>
    </v-text-field>
</template>

<script>
import {
    mdiPlus,
    mdiCurrencyEur,
    mdiClockOutline,
    mdiPercent,
    mdiCalendarMonth,
    mdiEye,
} from "@mdi/js";

export default {
    name: "BTextField",
    props: {
        value: {
            type: [String, Number],
        },
        color: {
            type: String,
            default: "secondary",
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
        placeholder: String,
        success: Boolean,
        rules: Array,
        hint: String,
        persistentHint: Boolean,
    },

    data: () => ({
        icons: {
            mdiPlus,
            mdiCurrencyEur,
            mdiClockOutline,
            mdiPercent,
            mdiCalendarMonth,
            mdiEye,
        },
    }),
};
</script>
