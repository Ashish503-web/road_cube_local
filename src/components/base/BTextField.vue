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
        :prepend-icon="icons[`${prependIcon}`]"
        :prepend-inner-icon="icons[`${prependInnerIcon}`]"
        :append-icon="icons[`${appendIcon}`]"
        :append-outer-icon="icons[`${appendOuterIcon}`]"
        @input="$emit('input', $event)"
        @click="$emit('click')"
    ></v-text-field>
</template>

<script>
import { mdiPlus, mdiCurrencyEur } from "@mdi/js";

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
        noTopMargin: Boolean
    },

    data: () => ({
        icons: { mdiPlus, mdiCurrencyEur }
    })
};
</script>
