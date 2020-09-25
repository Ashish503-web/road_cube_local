<template>
  <v-sheet :color="color" dark class="rounded-circle">
    <v-icon class="ma-3" large v-text="icon"></v-icon>
  </v-sheet>
</template>

<script>
  export default {
    props: ['color', 'icon'],
    name: "CardIcon"
  }
</script>