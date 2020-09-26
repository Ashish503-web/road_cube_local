<template>
  <v-data-table
      :headers="headers"
      :items="body"
      :footer-props="{ itemsPerPageOptions }"
  >
    <template v-slot:item.user_tab="{ item }">
      <UserTabButton
        v-bind:item="item"
      />
    </template>
    <template v-slot:item.edit="{ item }">
      <EditButton
        v-bind:item="item"
      />
    </template>
  </v-data-table>
</template>

<script>
import UserTabButton from "@/components/loyaltyPanel/Customer/UserTabButton";
import EditButton from "@/components/loyaltyPanel/Customer/EditButton";
export default {
  name: "CustomerTable",
  components: {EditButton, UserTabButton},
  data: () => ({
    itemsPerPageOptions: [10, 20, 30, -1],
    headers: [
      { text: "Member Cards", value: "member_card", align: 'center' },
      { text: "Transactions", value: "transactions", align: 'center' },
      { text: "Total", value: "total", align: 'center' },
      { text: "Redeemed", value: "redeemed", align: 'center' },
      { text: "Available", value: "available", align: 'center' },
      { text: "User Tab", value: "user_tab" },
      { text: "Edit", value: "edit"}
    ],
    body: [
      {
        member_card: 10000,
        transactions: 1,
        total: 15,
        redeemed: 141500,
        available: 10000
      },
      {
        member_card: 201137,
        transactions: 0,
        total: 0,
        redeemed: 0,
        available: 3000
      }
    ],
    bodyTotal: {
      totalData: true,
      transactions: 0,
      total: 0,
      redeemed: 0,
      available: 0
    }
  }),
  mounted() {
    this.body.forEach((item) => {
      this.bodyTotal.transactions += Number(item.transactions);
      this.bodyTotal.total += Number(item.total);
      this.bodyTotal.redeemed += Number(item.redeemed);
      this.bodyTotal.available += Number(item.available);
    });
    this.body.push(this.bodyTotal);
  }
}
</script>

<style scoped>

</style>