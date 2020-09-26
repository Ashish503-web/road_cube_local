<template>
  <v-card tile flat color="#f9fafc" class="pa-1 pb-0">
    <v-tabs
      v-model="tab"
      color="secondary"
      :vertical="$vuetify.breakpoint.mdAndDown"
    >
      <v-tab
        class="text-capitalize"
        v-for="tab in tabs"
        v-bind:key="tab.label"
      >
        {{ tab.label }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <BranchesTabItem/>
      <FinancialTabItem/>
      <AdminPanelTabItem/>
      <ApplicationTabItem/>
      <TransactionLimitsTabItem/>
    </v-tabs-items>
  </v-card>
</template>

<script>
  import BranchesTabItem from "@/components/loyaltyPanel/Branches/tabItems/BranchesTabItem";
  import FinancialTabItem from "@/components/loyaltyPanel/Branches/tabItems/FinancialTabItem";
  import AdminPanelTabItem from "@/components/loyaltyPanel/Branches/tabItems/AdminPanelTabItem";
  import ApplicationTabItem from "@/components/loyaltyPanel/Branches/tabItems/ApplicationTabItem";
  import TransactionLimitsTabItem from "@/components/loyaltyPanel/Branches/tabItems/TransactionLimitsTabItem";

  export default {
    name: "Tab",
    components: {
      TransactionLimitsTabItem,
      ApplicationTabItem,
      AdminPanelTabItem,
      FinancialTabItem,
      BranchesTabItem
    },
    data: () => ({
      tab: 0,
      tabs: [
        {label: 'Branches'},
        {label: 'Financial data'},
        {label: 'Setting of Admin Panel'},
        {label: 'Settings of Application'},
        {label: 'Daily Transaction Limits'}
      ],
    })
  }
</script>