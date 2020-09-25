<template>
  <v-col cols="12" sm="12" md="3" lg="2">
    <v-card-title class="pb-0 justify-center">
      {{ box.title }}
    </v-card-title>
    <v-card-title class="pa-0 font-weight-light justify-center text--secondary">
      <v-icon v-text="box.icon" class="mr-1"></v-icon>
      {{ box.label }}
    </v-card-title>
  </v-col>
</template>

<script>
  export default {
    props: ['box'],
    name: "TitleBox"
  }
</script>