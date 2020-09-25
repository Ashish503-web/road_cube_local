<template>
  <v-data-table
      :headers="headers"
      :items="body"
      :footer-props="{ itemsPerPageOptions }"
      class="mt-5"
  >
    <template v-slot:item.enter>
      <EditButton/>
      <VerificationButton/>
      <DeleteButton/>
    </template>
  </v-data-table>
</template>

<script>
  import EditButton from "@/components/loyaltyPanel/Branches/buttons/EditButton";
  import VerificationButton from "@/components/loyaltyPanel/Branches/buttons/VerificationButton";
  import DeleteButton from "@/components/loyaltyPanel/Branches/buttons/DeleteButton";

  export default {
    components: {
      DeleteButton,
      VerificationButton,
      EditButton
    },
    props: ['headers', 'body'],
    name: "BranchesTable",
    data: () => ({
      itemsPerPageOptions: [10, 20, 30, -1],
    })
  }
</script>