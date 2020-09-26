<template>
  <v-sheet>
    <label
        class="font-weight-bold d-block ml-5"
    >
      {{ label }}
    </label
    >
    <v-radio-group row class="pl-4">
      <v-radio
          v-for="radio in radios"
          v-bind:key="radio.label"
          :label="radio.label"
      ></v-radio>
    </v-radio-group>
  </v-sheet>
</template>

<script>
export default {
  props: ['label', 'radios'],
  name: "RadioGroup"
}
</script>

<style scoped>

</style>