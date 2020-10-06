<template>
    <v-select
        :value="value"
        :label="label"
        :items="items"
        :class="noTopMargin ? 'mt-0' : 'mt-3'"
        menu-props="offsetY"
        color="secondary"
        item-color="secondary"
        outlined
        dense
        clearable
        open-on-clear
        hide-details="auto"
        :readonly="readonly"
        :prepend-icon="icons[`${prependIcon}`]"
        :prepend-inner-icon="icons[`${prependInnerIcon}`]"
        :append-icon="icons[`${appendIcon}`]"
        :append-outer-icon="icons[`${appendOuterIcon}`]"
        @input="$emit('input', $event)"
        @click="$emit('click')"
    ></v-select>
</template>

<script>
import { mdiPlus } from "@mdi/js";

export default {
    name: "BSelect",

    props: {
        value: {
            type: [String, Number]
        },
        items: Array,
        label: String,
        prependIcon: String,
        prependInnerIcon: String,
        appendIcon: String,
        appendOuterIcon: String,
        noTopMargin: Boolean,
        readonly: Boolean
    },

    data: () => ({
        icons: { mdiPlus }
    })
};
</script>
