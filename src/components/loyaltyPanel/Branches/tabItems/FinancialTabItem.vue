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

      <FinancialTable
        v-bind:headers="headers"
        v-bind:body="body"
      />
    </v-card>
  </v-tab-item>
</template>

<script>
import AddShopButton from "@/components/loyaltyPanel/Branches/buttons/AddShopButton";
import RightsButton from "@/components/loyaltyPanel/Branches/buttons/RightsButton";
import SearchField from "@/components/loyaltyPanel/Branches/SearchField";
import FinancialTable from "@/components/loyaltyPanel/Branches/tables/FinancialTable";

export default {
name: "FinancialTabItem",
  components: {
    AddShopButton,
    RightsButton,
    SearchField,
    FinancialTable
  },
  data: () => ({
    searchTypes: [
      'All Fields',
      'Name',
      'Name of Shop(in app)',
      'Customer',
      'Transaction',
      'Total',
      'Points',
    ],
    selectedSearchType: 'All Fields',
    headers: [
      { text: "Name", value: "name", align: "center" },
      {
        text: "Name of Shop(in app)",
        value: "name_of_shop",
        align: "center",
      },
      { text: "Customer", value: "customer", align: "center" },
      { text: "Transaction", value: "transaction", align: "center" },
      { text: "Total", value: "total", align: "center" },
      { text: "Points", value: "points", align: "center" },
    ],
    body: [
      {
        name: "Vasilis",
        name_of_shop: "katerina1",
        customer: "20",
        transaction: "34",
        total: "1905.18",
        points: "3836",
      },
      {
        name: "Vasilis",
        name_of_shop: "katerina1",
        customer: "20",
        transaction: "34",
        total: "1905.18",
        points: "3836",
      },
      {
        name: "Vasilis",
        name_of_shop: "katerina1",
        customer: "20",
        transaction: "34",
        total: "1905.18",
        points: "3836",
      },
    ],
    bodyTotal: {
      customer: 0,
      transaction: 0,
      total: 0,
      points: 0
    }
  }),
  mounted() {
    this.body.forEach((item) => {
      this.bodyTotal.customer += Number(item.customer);
      this.bodyTotal.transaction += Number(item.transaction);
      this.bodyTotal.total += Number(item.total);
      this.bodyTotal.points += Number(item.points);
    });
    this.body.push(this.bodyTotal);
  }
}
</script>