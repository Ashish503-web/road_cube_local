<template>
  <v-col cols="auto pb-0">
    <v-dialog v-model="generalLimitsDialog" width="60%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="secondary"
            class="text-capitalize"
            depressed
            v-bind="attrs"
            v-on="on"
        >General Limits</v-btn>
      </template>

      <v-card class="pb-5">
        <v-card-title
            class="secondary--text font-weight-medium pa-2 pl-4 pr-0"
        >
          Change Transaction Limits for all companies
          <v-btn
              color="grey"
              icon
              rounded
              @click="generalLimitsDialog = false"
              class="ml-auto mr-2 title text-lowercase"
              style="transform: rotate(45deg)"
          >+</v-btn>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text class="mt-5 pb-0">
          <v-row>
            <v-col cols="3" class="pl-2 pr-2">
              <SelectField
                v-bind:option="on_off"
                v-bind:options="on_off_options"
              />
            </v-col>
            <v-col cols="3" class="pl-2 pr-2 mt-2">
              <h4 class="subtitle-2 font-weight-medium" align="end">
                Daily Transaction Limits
              </h4>
            </v-col>
            <v-col cols="3" class="pl-2 pr-2">
              <TextField/>
            </v-col>
            <v-col cols="3" class="pl-2 pr-2">
              <SelectField
                  v-bind:option="money"
                  v-bind:options="money_options"
              />
            </v-col>
          </v-row>
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
              @click="generalLimitsDialog = false"
              class="mr-2 text-capitalize"
              depressed
          >Cancel</v-btn>
          <v-btn
              color="secondary"
              @click="generalLimitsDialog = false"
              class="text-capitalize"
              depressed
          >Ok</v-btn>
        </v-card>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
  import SelectField from "@/components/loyaltyPanel/SelectField";
  import TextField from "@/components/loyaltyPanel/TextField";
  export default {
    name: "GeneralLimitsButton",
    components: {TextField, SelectField},
    data: () => ({
      generalLimitsDialog: false,
      on_off_options: ["offline"],
      on_off: "offline",
      money_options: ["euro", "points"],
      money: "euro",
    })
  }
</script>