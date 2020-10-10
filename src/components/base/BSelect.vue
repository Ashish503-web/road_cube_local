<template>
    <v-select
        :value="value"
        :label="label"
        :items="items"
        :item-text="itemText"
        :item-value="itemValue"
        :return-object="returnObject"
        :class="noTopMargin ? 'mt-0' : 'mt-3'"
        menu-props="offsetY"
        color="secondary"
        item-color="secondary"
        outlined
        dense
        open-on-clear
        hide-details="auto"
        :success="success"
        :rules="rules"
        :clearable="!noClearIcon"
        :disabled="disabled"
        :prepend-icon="icons[`${prependIcon}`]"
        :prepend-inner-icon="icons[`${prependInnerIcon}`]"
        :append-icon="icons[`${appendIcon}`]"
        :append-outer-icon="icons[`${appendOuterIcon}`]"
        @input="$emit('input', $event)"
        @click="$emit('click')"
    ></v-select>
</template>

<script>
import { mdiPlus, mdiPercent } from "@mdi/js";

export default {
    name: "BSelect",

    props: {
        value: {
            type: [String, Number, Object]
        },
        items: Array,
        itemText: String,
        itemValue: String,
        returnObject: Boolean,
        label: String,
        prependIcon: String,
        prependInnerIcon: String,
        appendIcon: String,
        appendOuterIcon: String,
        noTopMargin: Boolean,
        disabled: Boolean,
        noClearIcon: Boolean,
        success: Boolean,
        rules: Array
    },

    data: () => ({
        icons: { mdiPlus, mdiPercent }
    })
};
</script>
