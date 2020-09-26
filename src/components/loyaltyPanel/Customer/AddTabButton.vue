<template>
  <v-dialog v-model="addTabDialog" width="40%">
    <template v-slot:activator="{ on }">
      <v-btn
          color="secondary"
          text
          height="48"
          tile
          v-on="on"
      >
        <v-icon v-text="icons.mdiPlus"></v-icon>
      </v-btn>
    </template>

    <v-card class="pb-5">
      <v-card-title
          class="secondary--text font-weight-medium pa-2 pl-4 pr-0"
      >
        Filters for user's table
        <v-btn
            color="grey"
            icon
            @click="addTabDialog = false"
            class="ml-auto mr-2 title text-lowercase"
            style="transform: rotate(45deg)"
        >+</v-btn
        >
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <v-form class="pt-5">
          <v-row>
            <v-col cols="6">
              <TextField
                v-bind:label="newTabLabel"
                v-bind:placeholder="newTabPlaceholder"
                v-bind:type="newTabType"
              />
            </v-col>
            <v-col cols="6">
              <TextField
                v-bind:label="idLabel"
                v-bind:placeholder="idPlaceholder"
              />
            </v-col>
            <v-col cols="6">
              <SelectField
                v-bind:label="operatorLabel"
                v-bind:option="operator"
                v-bind:options="operators"
              />
            </v-col>
            <v-col cols="6">
              <TextField
                v-bind:label="registrationDateLabel"
                v-bind:type="registrationDateType"
              />
            </v-col>
          </v-row>

          <RadioGroup
            v-bind:label="genderLabel"
            v-bind:radios="genderRadios"
          />

          <v-divider></v-divider>

          <v-row class="pt-5">
            <v-col cols="6">
              <SelectField
                v-bind:label="operatorLabel"
                v-bind:option="operator"
                v-bind:options="operators"
              />
            </v-col>
            <v-col cols="6">
              <TextField
                v-bind:label="transactionsFiltersLabel"
                v-bind:placeholder="transactionsFiltersPlaceholder"
              />
            </v-col>
            <v-col cols="6">
              <SelectField
                v-bind:label="operatorLabel"
                v-bind:option="operator"
                v-bind:options="operators"
              />
            </v-col>
            <v-col cols="6">
              <TextField
                v-bind:label="totalTransactionAmountLabel"
                v-bind:placeholder="totalTransactionAmountPlaceholder"
              />
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row class="pt-5">
            <v-col cols="6">
              <SelectField
                v-bind:label="operatorLabel"
                v-bind:option="operator"
                v-bind:options="operators"
              />
            </v-col>
            <v-col cols="6">
              <TextField
                v-bind:label="pointsFiltersLabel"
                v-bind:placeholder="pointsFiltersPlaceholder"
              />
            </v-col>
          </v-row>

          <v-row class="pl-5">
            <v-col cols="12">
              <h4
                  class="d-inline-block subtitle-2 font-weight-bold"
              >
                Choose columns you need to be visible:
              </h4>
            </v-col>
          </v-row>
          <v-row class="pl-7">
            <v-col cols="4">
              <ColumnCheckbox
                v-bind:label="idColumnLabel"
              />
              <ColumnCheckbox
                v-bind:label="transactionsNumberColumnLabel"
              />
            </v-col>
            <v-col cols="4">
              <ColumnCheckbox
                  v-bind:label="phoneNumberColumnLabel"
              />
              <ColumnCheckbox
                  v-bind:label="amountTransactionColumnLabel"
              />
            </v-col>
            <v-col cols="4">
              <ColumnCheckbox
                  v-bind:label="registrationDateColumnLabel"
              />
              <ColumnCheckbox
                  v-bind:label="genderColumnLabel"
              />
            </v-col>
            <ColumnCheckbox
                v-bind:label="pointsColumnLabel"
            />
          </v-row>
        </v-form>
      </v-card-text>

      <v-card
          color="#f9f9f9"
          class="pa-5 ma-5 mb-0"
          flat
          tile
          align="end"
      >
        <v-btn
            color="secondary"
            @click="addTabDialog = false"
            class="text-capitalize mr-2"
            depressed
        >Add Tab</v-btn
        >
        <v-btn
            color="#dbe1e8"
            @click="addTabDialog = false"
            class="text-capitalize"
            depressed
        >Cancel</v-btn
        >
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
import { mdiPlus } from '@mdi/js'
import TextField from "@/components/loyaltyPanel/TextField";
import SelectField from "@/components/loyaltyPanel/SelectField";
import ColumnCheckbox from "@/components/loyaltyPanel/Customer/ColumnCheckbox";
import RadioGroup from "@/components/loyaltyPanel/Customer/RadioGroup";
export default {
  name: "AddTabButton",
  components: {RadioGroup, ColumnCheckbox, SelectField, TextField},
  data: () => ({
    addTabDialog: false,
    icons: {
      mdiPlus
    },
    newTabLabel: 'New Tab Title',
    newTabPlaceholder: 'New Tab Title',
    newTabType: 'number',
    idLabel: 'User Filters',
    idPlaceholder: 'ID',
    genderLabel: 'Gender',
    genderRadios: [
      {label: 'male'},
      {label: 'female'},
      {label: 'both'},
    ],
    operatorLabel: 'Operator',
    operators: [
      "",
      "greater than",
      "less than",
      "greater or equal",
      "less or equal",
      "equal"
    ],
    operator: "",
    registrationDateLabel: 'Registration Date',
    registrationDateType: 'date',
    transactionsFiltersLabel: 'Transactions Filters',
    transactionsFiltersPlaceholder: 'Transactions Filters',
    totalTransactionAmountLabel: 'Total Transaction Amount',
    totalTransactionAmountPlaceholder: 'Total Transaction Amount',
    pointsFiltersLabel: 'Points Filters',
    pointsFiltersPlaceholder: 'Points Filters',
    idColumnLabel: 'ID',
    transactionsNumberColumnLabel: 'Transactions Number',
    phoneNumberColumnLabel: 'Phone Number',
    amountTransactionColumnLabel: 'Amount Transaction',
    registrationDateColumnLabel: 'Registration Date',
    genderColumnLabel: 'Gender',
    pointsColumnLabel: 'points',
  })
}
</script>

<style scoped>

</style>