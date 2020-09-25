<template>
  <v-data-table
      :headers="headers"
      :items="body"
      class="mt-5"
      show-select
      item-key="company"
  ></v-data-table>
</template>

<script>
export default {
  name: "RightsTable",
  data: () => ({
    headers: [{ text: "All", value: "company" }],
    body: [
      {
        company: "Company 1",
      },
      {
        company: "Company 2",
      },
      {
        company: "Company 3",
      },
      {
        company: "Company 4",
      },
    ],
  })
}
</script>

<style scoped>

</style>