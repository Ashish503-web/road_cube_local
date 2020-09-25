<template>
  <v-col cols="3" sm="3" align="end">
    <v-icon
      v-text="icon"
      :size="iconSize"
      color="#eaedf1"
      class="mr-sm-5"
    >
    </v-icon>
  </v-col>
</template>

<script>
  export default {
    props: ['icon', 'iconSize'],
    name: "PageIcon"
  }
</script>