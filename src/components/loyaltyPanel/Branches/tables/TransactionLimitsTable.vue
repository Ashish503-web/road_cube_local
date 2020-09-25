<template>
  <v-data-table
      :headers="headers"
      :items="body"
      :footer-props="{ itemsPerPageOptions }"
      class="mt-5"
  >

    <template v-slot:item.offline_limits>
      <TransactionLimitsChangeButton/>
    </template>
  </v-data-table>
</template>

<script>
  import TransactionLimitsChangeButton from "@/components/loyaltyPanel/Branches/buttons/TransactionLimitsChangeButton";
  export default {
    components: {TransactionLimitsChangeButton},
    props: ['headers', 'body'],
    name: "TransactionLimitsTable",
    data: () => ({
      itemsPerPageOptions: [10, 20, 30, -1],
    })
  }
</script>