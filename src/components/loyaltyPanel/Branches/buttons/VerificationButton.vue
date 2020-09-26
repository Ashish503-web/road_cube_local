<template>
  <v-dialog v-model="verificationDialog" width="40%">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="secondary"
          dark
          depressed
          small
          icon
          class="d-block ma-1"
          v-bind="attrs"
          v-on="on"
      >
        <v-icon
            v-text="icons.mdiNavigation"
            style="transform: rotate(45deg)"
        ></v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title
          class="secondary--text font-weight-medium pa-2 pl-4 pr-0"
      >
        Verification
        <v-btn
            color="grey"
            icon
            @click="verificationDialog = false"
            class="ml-auto mr-2 title text-lowercase"
            style="transform: rotate(45deg)"
        >+</v-btn>
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <h4 class="subtitle-2 font-weight-medium mt-5">
          Want to go to your
          substitute on the road
          {{}}.
        </h4>
        <h4
            class="subtitle-2 font-weight-medium mt-5 mb-5"
        >Do you want to continue?</h4>
      </v-card-text>

      <v-divider></v-divider>

      <v-card
          color="#f9f9f9"
          class="pa-5"
          flat
          tile
          align="end"
      >
        <v-btn
            color="#dbe1e8"
            @click="verificationDialog = false"
            class="mr-2 text-capitalize"
            depressed
        >Cancel</v-btn>
        <v-btn
            color="secondary"
            @click="verificationDialog = false"
            class="text-capitalize"
            depressed
        >Ok</v-btn>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mdiNavigation } from "@mdi/js"
  export default {
    name: "VerificationButton",
    data: () => ({
      verificationDialog: false,
      icons: {
        mdiNavigation
      }
    })
  }
</script>