<template>
  <v-data-table
      :headers="headers"
      :items="body"
      :footer-props="{ itemsPerPageOptions }"
      class="mt-5"
  >
  </v-data-table>
</template>

<script>
  export default {
    props: ['headers', 'body'],
    name: "FinancialTable",
    data: () => ({
      itemsPerPageOptions: [10, 20, 30, -1],
    })
  }
</script>