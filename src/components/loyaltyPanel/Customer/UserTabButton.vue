<template>
  <v-dialog
      v-model="userTabDialog"
      width="40%"
      v-if="!item.totalData"
  >
    <template
        v-slot:activator="{ on, attrs }"
    >
      <v-btn
          color="secondary"
          class="text-capitalize d-block ma-1"
          depressed
          v-bind="attrs"
          v-on="on"
      >
        User Tab
      </v-btn>
    </template>

    <v-card>
      <v-card-title
          class="secondary--text font-weight-medium pa-2 pl-4 pr-0"
      >
        User Details
        <v-btn
            color="grey"
            icon
            @click="userTabDialog = false"
            class="ml-auto mr-2 title text-lowercase"
            style="transform: rotate(45deg)"
        >+</v-btn
        >
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text class="pa-5">
        <v-card>
          <v-row class="pl-5">
            <v-col
                cols="4"
                class="font-weight-bold"
            >ID</v-col
            >
            <v-col
                cols="7"
                class="font-weight-light"
            >62494</v-col
            >
          </v-row>
          <v-row class="pl-5">
            <v-col
                cols="4"
                class="font-weight-bold"
            >Marketing</v-col
            >
            <v-col
                cols="7"
                class="pb-0"
            >
              <MessageTypeCheckbox
                  v-for="messageType in messageTypes"
                  v-bind:messageType="messageType"
                  v-bind:key="messageType"
                  class="d-inline"
              />
            </v-col>
          </v-row>
          <v-row class="pl-5">
            <v-col
                cols="4"
                class="font-weight-bold"
            >User
              Phone</v-col
            >
            <v-col
                cols="7"
                class="font-weight-light"
            >6982591305</v-col
            >
          </v-row>
          <v-row class="pl-5">
            <v-col
                cols="4"
                class="font-weight-bold"
            >User
              Email</v-col
            >
            <v-col
                cols="7"
                class="font-weight-light"
            >lefkothea@roadcube.com</v-col
            >
          </v-row>
          <v-row class="pl-5">
            <v-col
                cols="4"
                class="font-weight-bold"
            >Gender</v-col
            >
            <v-col
                cols="7"
                class="font-weight-light"
            >Women</v-col
            >
          </v-row>
          <v-row class="pl-5">
            <v-col
                cols="4"
                class="font-weight-bold"
            >Date of
              Birth</v-col
            >
            <v-col
                cols="7"
                class="font-weight-light"
            >01-01-1000</v-col
            >
          </v-row>
        </v-card>
      </v-card-text>

      <v-card
          color="#f9f9f9"
          class="pa-5"
          flat
          tile
          align="end"
      >
        <v-btn
            color="#dbe1e8"
            @click="userTabDialog = false"
            class="text-capitalize"
            depressed
        >Close</v-btn
        >
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script>
import MessageTypeCheckbox from "@/components/loyaltyPanel/Customer/MessageTypeCheckbox";
export default {
  components: {MessageTypeCheckbox},
  props: ['item'],
  name: "UserTabButton",
  data: () => ({
    userTabDialog: false,
    messageTypes: ['sms', 'email', 'push', 'viber']
  })
}
</script>

<style scoped>

</style>