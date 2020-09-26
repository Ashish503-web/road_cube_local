<template>
  <v-row>
    <v-checkbox
        class="d-inline-block ma-0 pa-0"
    ></v-checkbox>
    <h4
        class="d-inline-block subtitle-2 font-weight-medium"
        style="position: relative; right: 5px; top: 1px"
    >
      {{ label }}
    </h4>
  </v-row>
</template>

<script>
export default {
  props: ['label'],
  name: "ColumnCheckbox"
}
</script>

<style scoped>

</style>