<template>
  <v-dialog v-model="editDialog" width="40%">
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
            v-text="icons.mdiSquareEditOutline"
        ></v-icon>
      </v-btn>
    </template>

    <v-card class="pb-5">
      <v-card-title
          class="primary--text font-weight-medium pa-2 pl-4 pr-0"
      >
        Edit Branch
        <v-btn
            color="grey"
            icon
            @click="editDialog = false"
            class="ml-auto mr-2 title text-lowercase"
            style="transform: rotate(45deg)"
        >+</v-btn>
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <v-form class="pt-5">
          <TextField
              v-bind:label='idLabel'
              v-bind:placeholder="idPlaceholder"
          />

          <SelectField
              v-bind:label="packageLabel"
              v-bind:option="packageValue"
              v-bind:options="packages"
          />

          <SelectField
              v-bind:label="giftCategoryLabel"
              v-bind:option="giftCategory"
              v-bind:options="giftCategories"
          />

          <TextField
              v-for="input in firstInputs"
              v-bind:label="input.label"
              v-bind:placeholder="input.placeholder"
              v-bind:key="input.label"
          />

          <SelectField
              v-bind:label="regionLabel"
              v-bind:option="region"
              v-bind:options="regions"
          />

          <AddRegionButton/>

          <TextField
              v-for="input in secondInputs"
              v-bind:label="input.label"
              v-bind:placeholder="input.placeholder"
              v-bind:key="input.label"
          />

          <v-row>
            <label
                class="font-weight-bold ml-5 mr-1"
            >Active</label>
            <v-checkbox
                class="d-inline-block ma-0 pa-0"
            ></v-checkbox>
          </v-row>
          <v-row>
            <label
                class="font-weight-bold ml-5 mr-1"
            >General Discount</label>
            <v-checkbox
                class="d-inline-block ma-0 pa-0"
            ></v-checkbox>
          </v-row>
          <v-row>
            <label
                class="font-weight-bold ml-5 mr-1"
            >
              Ability to
              change product
              range
            </label>
            <v-checkbox
                class="d-inline-block ma-0 pa-0"
            ></v-checkbox>
          </v-row>
          <v-row>
            <label
                class="font-weight-bold ml-5 mr-1"
            >Receipt number</label>
            <v-checkbox
                class="d-inline-block ma-0 pa-0"
            ></v-checkbox>
          </v-row>
          <v-row>
            <label
                class="font-weight-bold ml-5 mr-1 d-block"
            >Loyalty Programs</label>
          </v-row>
          <v-row class="ma-2">
            <v-checkbox
                class="d-inline-block ma-0 pa-0"
            ></v-checkbox>
            <h4
                class="d-inline-block ma-0 mr-5 pa-0"
            >Επιστροφή</h4>
            <v-checkbox
                class="d-inline-block ma-0 pa-0"
            ></v-checkbox>
            <h4
                class="d-inline-block ma-0 mr-5 pa-0"
            >go4more</h4>
            <v-checkbox
                class="d-inline-block ma-0 pa-0"
            ></v-checkbox>
            <h4
                class="d-inline-block ma-0 mr-5 pa-0"
            >Alpha Bank Bonus</h4>
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
            color="#dbe1e8"
            @click="editDialog = false"
            class="mr-2 text-capitalize"
            depressed
        >Cancel</v-btn>
        <v-btn
            color="secondary"
            @click="editDialog = false"
            class="text-capitalize"
            depressed
        >Change</v-btn>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mdiSquareEditOutline } from "@mdi/js"

  import SelectField from "@/components/loyaltyPanel/Branches/SelectField";
  import TextField from "@/components/loyaltyPanel/Branches/TextField";
  import AddRegionButton from "@/components/loyaltyPanel/Branches/buttons/AddRegionButton";

  export default {
    name: "EditButton",
    components: {AddRegionButton, TextField, SelectField},
    data: () => ({
      icons: {
        mdiSquareEditOutline
      },
      editDialog: false,
      idLabel: 'ID',
      idPlaceholder: 'ID',
      packageLabel: 'Select Package',
      packages: ["Επιλέξτε..", "Single", "Brand", "Intro"],
      packageValue: "Επιλέξτε..",
      giftCategoryLabel: 'Please choose category where gifts of company will show',
      giftCategories: [
        "Auto - Moto",
        "Entertainment",
        "Sports, Fitness",
        "Travel, Leisure",
        "Food, Drink",
        "For the House",
        "Clothing, Footwear, Accessories",
        "Health, Care, Beauty",
        "Department Stores",
        "Others",
        "Technology",
      ],
      giftCategory: "Auto - Moto",
      firstInputs: [
        {label: 'Name of Shop', placeholder: 'Name'},
        {label: 'Name of Shop(in app)', placeholder: 'Name'},
      ],
      regionLabel: 'Select Region',
      regions: [
        "No Region",
        "Region 1",
        "Region 2",
        "Region 3",
      ],
      region: "No Region",
      secondInputs: [
        {label: 'Password of Shop', placeholder: 'Code'},
        {label: 'Email of Shop(in app)', placeholder: 'Email'},
        {label: 'Address of Shop', placeholder: 'Address'},
        {label: 'T.k', placeholder: 'T.K'},
        {label: 'Number of Shop', placeholder: 'Number of Shop'},
        {label: 'Longitude', placeholder: 'x'},
        {label: 'Latitude', placeholder: 'y'},
      ]
    })
  }
</script>