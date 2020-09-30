<template>
    <v-text-field
        :value="value"
        :label="label"
        :type="type"
        color="secondary"
        outlined
        dense
        clearable
        @input="$emit('input', $event)"
        @click="$emit('click')"
    ></v-text-field>
</template>

<script>
export default {
    name: "BTextField",
    props: {
        value: {
            type: [String, Number]
        },
        type: {
            type: String
        },
        label: {
            type: String
        }
    },
    data: () => ({})
};
</script>
