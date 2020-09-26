<template>
  <v-col cols="12" sm="auto">
    <v-dialog v-model="addDialog" width="40%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="secondary"
            class="text-capitalize"
            depressed
            v-bind="attrs"
            v-on="on"
        >Add Shop</v-btn>
      </template>

      <v-card class="pb-5">
        <v-card-title
            class="secondary--text font-weight-medium pa-2 pl-4 pr-0"
        >
          Add Shop
          <v-btn
              color="grey"
              icon
              rounded
              @click="addDialog = false"
              class="ml-auto mr-2 title text-lowercase"
              style="transform: rotate(45deg)"
          >+</v-btn>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text>
          <v-form class="pt-5">
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
              v-bind:type="input.type"
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
                v-bind:type="input.type"
                v-bind:key="input.label"
            />
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
              @click="addDialog = false"
              class="mr-2 text-capitalize"
              depressed
          >Cancel</v-btn>
          <v-btn
              color="secondary"
              @click="addDialog = false"
              class="text-capitalize"
              depressed
          >Add Shop</v-btn>
        </v-card>
      </v-card>
    </v-dialog>
  </v-col>
</template>

<script>
  import SelectField from "@/components/loyaltyPanel/SelectField";
  import TextField from "@/components/loyaltyPanel/TextField";
  import AddRegionButton from "@/components/loyaltyPanel/Branches/buttons/AddRegionButton";

  export default {
    name: "AddShopButton",
    components: {AddRegionButton, TextField, SelectField},
    data: () => ({
      addDialog: false,
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
        {label: 'ID', placeholder: 'ID'},
      ]
    })
  }
</script>