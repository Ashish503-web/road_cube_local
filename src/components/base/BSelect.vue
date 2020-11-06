<template>
    <v-select
        :value="value"
        :label="label"
        :multiple="multiple"
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
        :loading="loading"
        :success="success"
        :rules="rules"
        :rounded="rounded"
        :clearable="!noClearIcon"
        :disabled="disabled"
        :prepend-icon="icons[`${prependIcon}`]"
        :prepend-inner-icon="icons[`${prependInnerIcon}`]"
        :append-icon="icons[`${appendIcon}`]"
        :append-outer-icon="icons[`${appendOuterIcon}`]"
        @input="$emit('input', $event)"
        @change="$emit('change')"
        @click="$emit('click')"
    ></v-select>
</template>

<script>
import { mdiPlus, mdiPercent } from "@mdi/js";

export default {
    name: "BSelect",

    props: {
        value: {
            type: [String, Number, Object, Array]
        },
        label: String,
        multiple: Boolean,
        items: Array,
        itemText: String,
        itemValue: String,
        returnObject: Boolean,
        prependIcon: String,
        prependInnerIcon: String,
        appendIcon: String,
        appendOuterIcon: String,
        noTopMargin: Boolean,
        noClearIcon: Boolean,
        rounded: Boolean,
        disabled: Boolean,
        success: Boolean,
        rules: Array,
        loading: Boolean
    },

    data: () => ({
        icons: { mdiPlus, mdiPercent }
    })
};
</script>
