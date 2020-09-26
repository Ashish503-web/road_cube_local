<template>
  <v-dialog
      v-model="editDialog"
      width="40%"
      v-if="!item.totalData"
  >
    <template
        v-slot:activator="{ on, attrs }"
    >
      <v-btn
          color="secondary"
          class="d-block ma-1 text-capitalize"
          depressed
          v-bind="attrs"
          v-on="on"
      >Edit</v-btn
      >
    </template>

    <v-card class="pb-5">
      <v-card-title
          class="secondary--text font-weight-medium pa-2 pl-4 pr-0"
      >
        Update Details
        <v-btn
            color="grey"
            icon
            @click="editDialog = false"
            class="ml-auto mr-2 title text-lowercase"
            style="transform: rotate(45deg)"
        >+</v-btn
        >
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text>
        <v-form class="pt-5">

        <TextField
            v-for="input in firstInputs"
            v-bind:label="input.label"
            v-bind:placeholder="input.placeholder"
            v-bind:type="input.type"
            v-bind:key="input.label"
        />

        <RadioGroup
            v-bind:label="genderLabel"
            v-bind:radios="genderRadios"
        />

        <TextField
            v-for="input in secondInputs"
            v-bind:label="input.label"
            v-bind:placeholder="input.placeholder"
            v-bind:type="input.type"
            v-bind:key="input.label"
        />

        <AcceptReceiveCheckbox/>

        <v-card
            flat
            tile
            class="pl-4"
        >
          <MessageTypeCheckbox
              v-for="messageType in messageTypes"
              v-bind:messageType="messageType"
              v-bind:key="messageType"
              class="d-inline"
          />
        </v-card>
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
        >Cancel</v-btn
        >
        <v-btn
            color="secondary"
            @click="editDialog = false"
            class="text-capitalize"
            depressed
        >Save
        </v-btn>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
import TextField from "@/components/loyaltyPanel/TextField";
import RadioGroup from "@/components/loyaltyPanel/Customer/RadioGroup";
import MessageTypeCheckbox from "@/components/loyaltyPanel/Customer/MessageTypeCheckbox";
import AcceptReceiveCheckbox from "@/components/loyaltyPanel/Customer/AcceptReceiveCheckbox";
export default {
  components: {AcceptReceiveCheckbox, MessageTypeCheckbox, RadioGroup, TextField},
  props: ['item'],
  name: "EditButton",
  data: () => ({
    editDialog: false,
    firstInputs: [
      {label: 'Card Number', placeholder: 'Card Number', type: 'number'},
      {label: 'Company Name', placeholder: 'Company Name'},
      {label: 'Surname', placeholder: 'Surname'},
      {label: 'Name', placeholder: 'Name'},
      {label: 'Date of Birth', type: 'date'},
    ],
    genderLabel: 'Gender',
    genderRadios: [
      {label: 'male'},
      {label: 'female'},
      {label: 'both'},
    ],
    secondInputs: [
      {label: 'Address', placeholder: 'Address'},
      {label: 'T.K', placeholder: 'T.K'},
      {label: 'Area / City', placeholder: 'Area / City'},
      {label: 'T.k', placeholder: 'T.K'},
      {label: 'Country Code', placeholder: 'Country Code', type: 'number'},
      {label: 'Callphone Number', placeholder: 'Callphone Number', type: 'number'},
      {label: 'Telephone Number', placeholder: 'Telephone Number', type: 'number'},
      {label: 'Email', placeholder: 'Email', type: 'email'},
      {label: 'Application Date', type: 'date'},
    ],
    messageTypes: ['sms', 'email', 'push', 'viber']
  })
}
</script>

<style scoped>

</style>