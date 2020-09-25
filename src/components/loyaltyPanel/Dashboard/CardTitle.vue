<template>
  <v-card-title
    class="subtitle-1 font-weight-bold pa-0 justify-end"
  >
    {{ title }}
  </v-card-title>
</template>

<script>
  export default {
    props: ['title'],
    name: "CardTitle"
  }
</script>