<template>
  <v-sheet>
    <h4 class="caption font-weight-bold">
      {{ headerText }}
    </h4>
    <h4
        class="caption font-weight-bold d-inline-block mt-4"
    >Update All</h4>
    <v-checkbox class="ma-0"></v-checkbox>
  </v-sheet>
</template>

<script>
export default {
  props: ['headerText'],
  name: "UpdateAllCheckbox"
}
</script>

<style scoped>

</style>