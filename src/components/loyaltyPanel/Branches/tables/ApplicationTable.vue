<template>
  <v-data-table
      :headers="headers"
      :items="body"
      :footer-props="{ itemsPerPageOptions }"
      class="mt-5"
  >

    <template v-slot:header.open_shop="{header}">
      <UpdateAllCheckbox
          v-bind:headerText="header.text"
      />
    </template>
    <template v-slot:header.open_checkin="{header}">
      <UpdateAllCheckbox
          v-bind:headerText="header.text"
      />
    </template>
    <template v-slot:header.open_scanning="{header}">
      <UpdateAllCheckbox
          v-bind:headerText="header.text"
      />
    </template>

    <template v-slot:item.open_shop>
      <v-checkbox></v-checkbox>
    </template>
    <template v-slot:item.open_checkin>
      <v-checkbox></v-checkbox>
    </template>
    <template v-slot:item.open_scanning>
      <v-checkbox></v-checkbox>
    </template>

  </v-data-table>
</template>

<script>
  import UpdateAllCheckbox from "@/components/loyaltyPanel/Branches/UpdateAllCheckbox";
  export default {
    components: {UpdateAllCheckbox},
    props: ['headers', 'body'],
    name: "ApplicationTable",
    data: () => ({
      itemsPerPageOptions: [10, 20, 30, -1],
    })
  }
</script>