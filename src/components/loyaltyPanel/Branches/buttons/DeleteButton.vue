<template>
  <v-dialog v-model="deleteDialog" width="40%">
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
            v-text="icons.mdiBackspace "
        ></v-icon>
      </v-btn>
    </template>

    <v-card class="pb-5">
      <v-card-title
          class="primary--text font-weight-medium pa-2 pl-4 pr-0"
      >
        Delete Company
        <v-btn
            color="grey"
            icon
            @click="eleteDialog = false"
            class="ml-auto mr-2 title text-lowercase"
            style="transform: rotate(45deg)"
        >+</v-btn>
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <h4 class="subtitle-2 font-weight-medium mt-5">
          Are you sure you want to
          delete {{}}.
        </h4>
        <h4
            class="subtitle-2 font-weight-medium mt-5 mb-4"
        >Do you want to continue?</h4>
        <v-checkbox class="d-inline-block ma-0"></v-checkbox>
        <h4
            class="subtitle-2 font-weight-medium d-inline-block"
            style="position: relative; bottom: 7px"
        >
          Do you want to totally
          delete Company?
        </h4>
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
            @click="deleteDialog = false"
            class="mr-2 text-capitalize"
            depressed
        >Cancel</v-btn>
        <v-btn
            color="secondary"
            @click="deleteDialog = false"
            class="text-capitalize"
            depressed
        >Ok</v-btn>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mdiBackspace } from "@mdi/js"

  export default {
    name: "DeleteButton",
    data: () => ({
      deleteDialog: false,
      icons: {
        mdiBackspace
      }
    })
  }
</script>