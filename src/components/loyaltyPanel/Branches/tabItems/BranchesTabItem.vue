<template>
  <v-tab-item>
    <v-row class="pa-5 pt-2 pb-1">
      <AddShopButton/>
      <RightsButton/>
    </v-row>
    <v-card flat class="pa-5 pt-1 pb-1">
      <SearchField
        v-bind:selectedSearchType="selectedSearchType"
        v-bind:searchTypes="searchTypes"
      />

      <BranchesTable
        v-bind:headers="headers"
        v-bind:body="body"
      />
    </v-card>
  </v-tab-item>

</template>

<script>
  import AddShopButton from "@/components/loyaltyPanel/Branches/buttons/AddShopButton";
  import RightsButton from "@/components/loyaltyPanel/Branches/buttons/RightsButton";
  import SearchField from "@/components/loyaltyPanel/SearchField";
  import BranchesTable from "@/components/loyaltyPanel/Branches/tables/BranchesTable";

  export default {
    name: "BranchesTabItem",
    components: {
      AddShopButton,
      RightsButton,
      SearchField,
      BranchesTable
    },
    data: () => ({
      searchTypes: [
        'All Fields',
        'Name',
        'Name of Shop(in app)',
        'Banks',
        'Address',
        'Phone',
        'Registration Date',
      ],
      selectedSearchType: 'All Fields',
      itemsPerPageOptions: [10, 20, 30, -1],
      headers: [
        { text: "Name", value: "name", align: "center" },
        {
          text: "Name of Shop(in app)",
          value: "name_of_shop",
          align: "center",
        },
        { text: "Map", value: "map", align: "center" },
        { text: "Payments", value: "payments", align: "center" },
        { text: "Z", value: "z", align: "center" },
        { text: "Banks", value: "banks", align: "center" },
        { text: "Address", value: "address", align: "center" },
        { text: "Phone", value: "phone", align: "center" },
        {
          text: "Registration Date",
          value: "registration_date",
          align: "center",
        },
        { text: "Active", value: "active", align: "center" },
        { text: "Enter", value: "enter" },
      ],
      body: [
        {
          name: "Vasilis",
          name_of_shop: "katerina1",
          map: "OFF",
          payments: "OFF",
          z: "ON",
          banks: "ethniki",
          address: "Agias Glikerias 10",
          phone: "545648989478",
          registration_date: "2019/06/27",
          active: "ON",
        },
        {
          name: "Vasilis",
          name_of_shop: "katerina1",
          map: "OFF",
          payments: "OFF",
          z: "ON",
          banks: "ethniki",
          address: "Agias Glikerias 10",
          phone: "545648989478",
          registration_date: "2019/06/27",
          active: "ON",
        },
        {
          name: "Vasilis",
          name_of_shop: "katerina1",
          map: "OFF",
          payments: "OFF",
          z: "ON",
          banks: "ethniki",
          address: "Agias Glikerias 10",
          phone: "545648989478",
          registration_date: "2019/06/27",
          active: "ON",
        },
      ],
    })
  }
</script>