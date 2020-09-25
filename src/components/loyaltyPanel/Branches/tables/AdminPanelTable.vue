<template>
  <v-data-table
      :headers="headers"
      :items="body"
      :footer-props="{ itemsPerPageOptions }"
      class="mt-5"
  >

    <template v-slot:header.open_settings="{header}">
      <UpdateAllCheckbox
        v-bind:headerText="header.text"
      />
    </template>
    <template v-slot:header.open_actions="{header}">
      <UpdateAllCheckbox
          v-bind:headerText="header.text"
      />
    </template>
    <template v-slot:header.manual_points_delivery="{header}">
      <UpdateAllCheckbox
          v-bind:headerText="header.text"
      />
    </template>
    <template v-slot:header.body_pricing_file="{header}">
      <UpdateAllCheckbox
          v-bind:headerText="header.text"
      />
    </template>
    <template v-slot:header.open_add_coupon="{header}">
      <UpdateAllCheckbox
          v-bind:headerText="header.text"
      />
    </template>
    <template v-slot:header.open_selection="{header}">
      <UpdateAllCheckbox
          v-bind:headerText="header.text"
      />
    </template>
    <template v-slot:header.open_product="{header}">
      <UpdateAllCheckbox
          v-bind:headerText="header.text"
      />
    </template>
    <template v-slot:header.open_discount="{header}">
      <UpdateAllCheckbox
          v-bind:headerText="header.text"
      />
    </template>

    <template v-slot:item.open_settings>
      <v-checkbox></v-checkbox>
    </template>
    <template v-slot:item.open_actions>
      <v-checkbox></v-checkbox>
    </template>
    <template v-slot:item.manual_points_delivery>
      <v-checkbox></v-checkbox>
    </template>
    <template v-slot:item.body_pricing_file>
      <v-checkbox></v-checkbox>
    </template>
    <template v-slot:item.open_add_coupon>
      <v-checkbox></v-checkbox>
    </template>
    <template v-slot:item.open_selection>
      <v-checkbox></v-checkbox>
    </template>
    <template v-slot:item.open_product>
      <v-checkbox></v-checkbox>
    </template>
    <template v-slot:item.open_discount>
      <v-checkbox></v-checkbox>
    </template>

  </v-data-table>
</template>

<script>
import UpdateAllCheckbox from "@/components/loyaltyPanel/Branches/UpdateAllCheckbox";
export default {
  components: {UpdateAllCheckbox},
  props: ['headers', 'body'],
  name: "AdminPanelTable",
  data: () => ({
    itemsPerPageOptions: [10, 20, 30, -1],
  })
}
</script>