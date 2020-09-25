<template>
  <v-col cols="12" sm="auto" class="ml-sm-auto pb-0">
    <v-dialog v-model="rightsDialog" width="60%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="secondary"
            class="text-capitalize"
            depressed
            v-bind="attrs"
            v-on="on"
        >Rights</v-btn>
      </template>

      <v-card class="pb-5">
        <v-card-title
            class="primary--text font-weight-medium pa-2 pl-4 pr-0"
        >
          Branch Management
          <v-btn
              color="grey"
              icon
              @click="rightsDialog = false"
              class="ml-auto mr-2 title text-lowercase"
              style="transform: rotate(45deg)"
          >+</v-btn>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text>
          <h4 class="subtitle-2 font-weight-bold mt-10">
            Select Companies which you want to be able to Add / Delete
          </h4>

          <RightsTable/>
        </v-card-text>

        <v-card
            color="#f9f9f9"
            class="pa-5 ma-5 mb-0"
            flat
            tile
            align="end"
        >
          <v-btn
              color="#dbe1e8"
              @click="rightsDialog = false"
              class="mr-2 text-capitalize"
              depressed
          >Cancel</v-btn>
          <v-btn
              color="secondary"
              @click="rightsDialog = false"
              class="text-capitalize"
              depressed
          >Save</v-btn>
        </v-card>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
  import RightsTable from "@/components/loyaltyPanel/Branches/tables/RightsTable";
  export default {
    name: "RightsButton",
    components: {RightsTable},
    data: () => ({
      rightsDialog: false
    })
  }
</script>