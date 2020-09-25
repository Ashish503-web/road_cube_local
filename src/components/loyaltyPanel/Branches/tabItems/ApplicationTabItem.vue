<template>
  <v-tab-item>
    <SearchField/>

    <ApplicationTable
      v-bind:headers="headers"
      v-bind:body="body"
    />
  </v-tab-item>
</template>

<script>
  import SearchField from "@/components/loyaltyPanel/Branches/SearchField";
  import ApplicationTable from "@/components/loyaltyPanel/Branches/tables/ApplicationTable";

  export default {
    name: "ApplicationTabItem",
    components: {
      SearchField,
      ApplicationTable
    },
    data: ()=> ({
      headers: [
        { text: "Name", value: "name" },
        { text: "Open shop on Map", value: "open_shop", sortable: false },
        { text: "Open Checkin", value: "open_checkin", sortable: false },
        {
          text: "Open Receipt Scanning",
          value: "open_scanning",
          sortable: false,
        },
      ],
      body: [
        {
          name: "Vasilisa",
        },
        {
          name: "Vasilisb",
        },
        {
          name: "Vasilisc",
        },
      ],
    })
  }
</script>