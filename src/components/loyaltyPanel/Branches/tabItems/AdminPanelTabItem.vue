<template>
  <v-tab-item>
    <SearchField/>

    <AdminPanelTable
      v-bind:headers="headers"
      v-bind:body="body"
    />
  </v-tab-item>
</template>

<script>
  import SearchField from "@/components/loyaltyPanel/SearchField";
  import AdminPanelTable from "@/components/loyaltyPanel/Branches/tables/AdminPanelTable";

  export default {
    name: "AdminPanelTabItem",
    components: {
      SearchField,
      AdminPanelTable
    },
    data: () => ({
      headers: [
        { text: "Name", value: "name", sortable: false },
        { text: "Open Settings", value: "open_settings", sortable: false },
        {
          text: "Open Promotional Actions",
          value: "open_actions",
          sortable: false,
        },
        {
          text: "Manual Points Delivery",
          value: "manual_points_delivery",
          sortable: false,
        },
        {
          text: "Body pricing file",
          value: "body_pricing_file",
          sortable: false,
        },
        {
          text: "Open Add Coupon",
          value: "open_add_coupon",
          sortable: false,
        },
        {
          text: "Open Redeem Mode Selection",
          value: "open_selection",
          sortable: false,
        },
        {
          text: "Open Product Insertion / Modification",
          value: "open_product",
        },
        { text: "Open General Discount", value: "open_discount" },
      ],
      body: [
        {
          name: "Vasilis",
        },
        {
          name: "Vasilis",
        },
        {
          name: "Vasilis",
        },
      ],
    })
  }
</script>