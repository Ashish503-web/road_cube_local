<template>
    <v-select
        :value="value"
        :label="label"
        :items="items"
        menu-props="offsetY"
        color="secondary"
        item-color="secondary"
        outlined
        dense
        clearable
        hide-details
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
        items: {
            type: Array
        },
        label: {
            type: String
        },
        prependIcon: {
            type: String
        },
        prependInnerIcon: {
            type: String
        },
        appendIcon: {
            type: String
        },
        appendOuterIcon: {
            type: String
        }
    },

    data: () => ({
        icons: { mdiPlus }
    })
};
</script>
