<template>
  <v-tab-item>
    <v-row class="pa-5 pt-2 pb-1">
      <AddCustomerButton/>
    </v-row>
    <v-card flat class="pa-5 pt-1 pb-1">
      <SearchField/>

      <CustomerTable/>
    </v-card>
  </v-tab-item>
</template>

<script>
import SearchField from "@/components/loyaltyPanel/SearchField";
import AddCustomerButton from "@/components/loyaltyPanel/Customer/AddCustomerButton";
import CustomerTable from "@/components/loyaltyPanel/Customer/CustomerTable";
export default {
name: "TabItem",
  components: {CustomerTable, AddCustomerButton, SearchField}
}
</script>

<style scoped>

</style>