<template>
  <v-sheet>
    <label
        class="font-weight-bold ml-5"
        v-if="label"
    >
      {{ label }}
    </label>
    <v-select
        v-model="option"
        :items="options"
        :value="option"
        required
        outlined
        dense
        rounded
        class="mt-1 mb-0"
    ></v-select>
  </v-sheet>
</template>

<script>
export default {
  props: ['label', 'option', 'options'],
  name: "SelectField"
}
</script>

<style scoped>

</style>