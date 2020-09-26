<template>
  <v-tab-item>
    <v-row class="pa-5 pt-2 pb-1">
      <GeneralLimitsButton/>
    </v-row>

    <v-card flat class="pa-5">
      <SearchField/>

      <TransactionLimitsTable
        v-bind:headers="headers"
        v-bind:body="body"
      />
    </v-card>
  </v-tab-item>
</template>

<script>
  import GeneralLimitsButton from "@/components/loyaltyPanel/Branches/buttons/GeneralLimitsButton";
  import SearchField from "@/components/loyaltyPanel/SearchField";
  import TransactionLimitsTable from "@/components/loyaltyPanel/Branches/tables/TransactionLimitsTable";

  export default {
    name: "TransactionLimitsTabItem",
    components: {
      GeneralLimitsButton,
      SearchField,
      TransactionLimitsTable,
    },
    data: () => ({
      headers: [
        { text: "Name", value: "name", align: "center" },
        {
          text: "Offline Transaction Limits",
          value: "offline_limits",
          align: "center",
        },
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