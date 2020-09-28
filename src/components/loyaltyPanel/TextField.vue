<template>
    <v-sheet>
        <label class="font-weight-bold ml-5" v-if="label">
            {{ label }}
        </label>
        <v-text-field
            :label="placeholder ? placeholder : ''"
            required
            outlined
            dense
            rounded
            class="mt-1 mb-0"
            :type="type ? type : 'text'"
        ></v-text-field>
    </v-sheet>
</template>

<script>
export default {
    props: ["label", "placeholder", "type"],
    name: "TextField"
};
</script>
