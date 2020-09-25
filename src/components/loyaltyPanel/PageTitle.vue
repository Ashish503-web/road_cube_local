<template>
  <v-col cols="9" sm="9" class="pl-5 pa-0" >
    <h2 class="pa-6 title">{{ title }}</h2>
  </v-col>
</template>

<script>
  export default {
    props: ['title'],
    name: "PageTitle"
  }
</script>