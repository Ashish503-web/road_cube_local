<template>
    <v-text-field
        :value="value"
        :type="type"
        :label="label"
        :placeholder="placeholder"
        :class="noTopMargin ? 'mt-0' : 'mt-3'"
        :color="color"
        outlined
        dense
        clearable
        hide-details="auto"
        :loading="loading"
        :validate-on-blur="validateOnBlur"
        :readonly="readonly"
        :disabled="disabled"
        :success="success"
        :error-messages="errorMessages"
        :rules="rules"
        :hint="hint"
        :persistent-hint="persistentHint"
        :prepend-icon="icons[`${prependIcon}`]"
        :prepend-inner-icon="icons[`${prependInnerIcon}`]"
        :append-icon="icons[`${appendIcon}`]"
        :append-outer-icon="icons[`${appendOuterIcon}`]"
        @input="$emit('input', $event)"
        @click="$emit('click')"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @click:append="$emit('click-append')"
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
    mdiLock,
    mdiLockOutline
} from "@mdi/js";

export default {
    name: "BTextField",
    props: {
        value: {
            type: [String, Number]
        },
        color: {
            type: String,
            default: "secondary"
        },
        type: String,
        label: String,
        prependIcon: String,
        prependInnerIcon: String,
        appendIcon: String,
        appendOuterIcon: String,
        noTopMargin: Boolean,
        loading: Boolean,
        readonly: Boolean,
        disabled: Boolean,
        placeholder: String,
        success: Boolean,
        errorMessages: String,
        rules: Array,
        hint: String,
        persistentHint: Boolean,
        validateOnBlur: {
            type: Boolean,
            default: true
        }
    },

    data: () => ({
        icons: {
            mdiPlus,
            mdiCurrencyEur,
            mdiClockOutline,
            mdiPercent,
            mdiCalendarMonth,
            mdiEye,
            mdiLock,
            mdiLockOutline
        }
    })
};
</script>
