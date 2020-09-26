<template>
  <v-sheet>
    <v-checkbox
        class="d-inline-block ma-0 pa-0 font-weight-light"
        disabled
    ></v-checkbox>
    <h4
        class="text-uppercase d-inline-block subtitle-2 font-weight-light"
        style="position: relative; right: 5px; bottom: 5px"
    >
      {{ messageType }}
    </h4>
  </v-sheet>
</template>

<script>
export default {
  props: ['messageType'],
  name: "MessageTypeCheckbox"
}
</script>

<style scoped>

</style>