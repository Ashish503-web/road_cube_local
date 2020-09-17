<template>
  <v-card class="pa-0" flat>
    <v-card flat>
      <v-row>
        <v-col cols="auto">
          <v-card-title>Customer</v-card-title>
        </v-col>
        <v-col cols="auto" class="ml-auto">
          <v-icon
              v-text="icons.mdiAccountBox"
              size="80"
              color="#eaedf1"
              class="mr-5"
          >
          </v-icon>
        </v-col>
      </v-row>
    </v-card>

    <v-row class="pa-5 pt-3 pb-3" style="background: #eaedf1">
      <v-col cols="12">
        <v-card flat tile min-height="400">
          <v-card tile flat color="#f9fafc" class="pa-1 pb-0">
            <v-tabs
                v-model="tab"
                background-color="#f9fafc"
            >
              <v-tab class="pa-5 text-capitalize">All</v-tab>
              <v-dialog
                  v-model="addTabDialog"
                  width="600"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      color="primary"
                      dark
                      depressed
                      icon
                      class="d-block ml-5 mt-1"
                      v-bind="attrs"
                      v-on="on"
                  >
                    <v-icon
                        v-text="icons.mdiPlus"
                        size="40"
                        class="pa-0 ma-0"
                    ></v-icon>
                  </v-btn>
                </template>

                <v-card class="pb-5">
                  <v-card-title class="primary--text font-weight-medium pa-2 pl-4 pr-0">
                    Filters for user's table
                    <v-btn
                        color="grey"
                        icon
                        @click="addTabDialog = false"
                        class="ml-auto mr-2 title text-lowercase"
                        style="transform: rotate(45deg)"
                    >
                      +
                    </v-btn>
                  </v-card-title>
                  <v-divider></v-divider>

                  <v-card-text>
                    <v-form class="pt-5">
                      <v-row>
                        <v-col cols="6">
                          <label class="font-weight-bold ml-5">New Tab Title</label>
                          <v-text-field
                              placeholder="New Tab Title"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                              type="number"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <label class="font-weight-bold ml-5">User Filters</label>
                          <v-text-field
                              placeholder="ID"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6">
                          <label class="font-weight-bold ml-5">Operator</label>
                          <v-select
                              v-model="operator"
                              :items="operators"
                              :value="operator"
                              required
                              outlined
                              dense
                              rounded
                          ></v-select>
                        </v-col>
                        <v-col cols="6">
                          <label class="font-weight-bold ml-5">Registration Date</label>
                          <v-text-field
                              placeholder="Company Name"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                              type="date"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <label class="font-weight-bold d-block ml-5">Gender</label>
                      <v-radio-group row class="pl-4">
                        <v-radio label="male"></v-radio>
                        <v-radio label="female"></v-radio>
                        <v-radio label="both"></v-radio>
                      </v-radio-group>

                      <v-divider></v-divider>

                      <v-row class="pt-5">
                        <v-col cols="6">
                          <label class="font-weight-bold ml-5">Operator</label>
                          <v-select
                              v-model="operator"
                              :items="operators"
                              :value="operator"
                              required
                              outlined
                              dense
                              rounded
                          ></v-select>
                        </v-col>
                        <v-col cols="6">
                          <label class="font-weight-bold ml-5">Transactions Filters</label>
                          <v-text-field
                              placeholder="Transactions Filters"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="6">
                          <label class="font-weight-bold ml-5">Operator</label>
                          <v-select
                              v-model="operator"
                              :items="operators"
                              :value="operator"
                              required
                              outlined
                              dense
                              rounded
                          ></v-select>
                        </v-col>
                        <v-col cols="6">
                          <label class="font-weight-bold ml-5">Total transaction amount</label>
                          <v-text-field
                              placeholder="Total transaction amount"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <v-divider></v-divider>

                      <v-row class="pt-5">
                        <v-col cols="6">
                          <label class="font-weight-bold ml-5">Operator</label>
                          <v-select
                              v-model="operator"
                              :items="operators"
                              :value="operator"
                              required
                              outlined
                              dense
                              rounded
                          ></v-select>
                        </v-col>
                        <v-col cols="6">
                          <label class="font-weight-bold ml-5">Point Filters</label>
                          <v-text-field
                              placeholder="Point Filters"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                          ></v-text-field>
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
                          <v-row>
                            <v-checkbox
                                class="d-inline-block ma-0 pa-0"
                            ></v-checkbox>
                            <h4
                                class="d-inline-block subtitle-2 font-weight-medium"
                                style="position: relative; right: 5px; top: 1px"
                            >
                              ID
                            </h4>
                          </v-row>
                          <v-row>
                            <v-checkbox
                                class="d-inline-block ma-0 pa-0"
                            ></v-checkbox>
                            <h4
                                class="d-inline-block subtitle-2 font-weight-medium"
                                style="position: relative; right: 5px; top: 1px"
                            >
                              Transactions Number
                            </h4>
                          </v-row>
                        </v-col>
                        <v-col cols="4">
                          <v-row>
                            <v-checkbox
                                class="d-inline-block ma-0 pa-0"
                            ></v-checkbox>
                            <h4
                                class="d-inline-block subtitle-2 font-weight-medium"
                                style="position: relative; right: 5px; top: 1px"
                            >
                              Phone Number
                            </h4>
                          </v-row>
                          <v-row>
                            <v-checkbox
                                class="d-inline-block ma-0 pa-0"
                            ></v-checkbox>
                            <h4
                                class="d-inline-block subtitle-2 font-weight-medium"
                                style="position: relative; right: 5px; top: 1px"
                            >
                              Amount Transaction
                            </h4>
                          </v-row>
                        </v-col>
                        <v-col cols="4">
                          <v-row>
                            <v-checkbox
                                class="d-inline-block ma-0 pa-0"
                            ></v-checkbox>
                            <h4
                                class="d-inline-block subtitle-2 font-weight-medium"
                                style="position: relative; right: 5px; top: 1px"
                            >
                              Registration Date
                            </h4>
                          </v-row>
                          <v-row>
                            <v-checkbox
                                class="d-inline-block ma-0 pa-0"
                            ></v-checkbox>
                            <h4
                                class="d-inline-block subtitle-2 font-weight-medium"
                                style="position: relative; right: 5px; top: 1px"
                            >
                              Gender
                            </h4>
                          </v-row>
                        </v-col>
                        <v-checkbox
                            class="d-inline-block ma-0 pa-0"
                        ></v-checkbox>
                        <h4
                            class="d-inline-block subtitle-2 font-weight-medium"
                            style="position: relative; right: 5px; top: 1px"
                        >
                          points
                        </h4>
                      </v-row>
                    </v-form>
                  </v-card-text>

                  <v-card color="#f9f9f9" class="pa-5 ma-5 mb-0" flat tile align="end">
                    <v-btn
                        color="primary"
                        @click="addTabDialog = false"
                        class="text-capitalize mr-2"
                        small
                        rounded
                    >
                      Add Tab
                    </v-btn>
                    <v-btn
                        color="#dbe1e8"
                        @click="addTabDialog = false"
                        class="text-capitalize"
                        small
                        rounded
                    >
                      Cancel
                    </v-btn>
                  </v-card>
                </v-card>
              </v-dialog>
            </v-tabs>
          </v-card>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-row class="pa-5 pt-2 pb-1">
                <v-col cols="auto pb-0">
                  <v-dialog
                      v-model="addCustomerDialog"
                      width="600"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          depressed
                          large
                          color="primary"
                          v-bind="attrs"
                          v-on="on"
                          rounded
                          class="text-capitalize"
                      >
                        Add new customer
                      </v-btn>
                      <h4 class="subtitle-2 font-weight-light mt-2">
                        <a href="#" style="color: #1bbae1" class="text-decoration-none">Export to Excel</a>
                        /
                        <a href="#" style="color: #1bbae1" class="text-decoration-none">Export to CSV</a>
                      </h4>
                    </template>

                    <v-card class="pb-5">
                      <v-card-title class="primary--text font-weight-medium pa-2 pl-4 pr-0">
                        Add new customer
                        <v-btn
                            color="grey"
                            icon
                            rounded
                            @click="addCustomerDialog = false"
                            class="ml-auto mr-2 title text-lowercase"
                            style="transform: rotate(45deg)"
                        >
                          +
                        </v-btn>
                      </v-card-title>
                      <v-divider></v-divider>

                      <v-card-text>
                        <v-form class="pt-5">
                          <label class="font-weight-bold ml-5">Card Number</label>
                          <v-text-field
                              placeholder="Card Number"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                              type="number"
                          ></v-text-field>
                          <label class="font-weight-bold ml-5">Company Name</label>
                          <v-text-field
                              placeholder="Company Name"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                          ></v-text-field>
                          <label class="font-weight-bold ml-5">Surname</label>
                          <v-text-field
                              placeholder="Surname"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                          ></v-text-field>
                          <label class="font-weight-bold d-block ml-5">Name</label>
                          <v-text-field
                              placeholder="Name"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                          ></v-text-field>
                          <label class="font-weight-bold d-block ml-5">Date of Birth</label>
                          <v-text-field
                              placeholder="Name"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                              type="date"
                          ></v-text-field>
                          <label class="font-weight-bold d-block ml-5">Gender</label>
                          <v-radio-group row class="pl-4">
                            <v-radio label="male"></v-radio>
                            <v-radio label="female"></v-radio>
                          </v-radio-group>
                          <label class="font-weight-bold ml-5">Address</label>
                          <v-text-field
                              placeholder="Address"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                          ></v-text-field>
                          <label class="font-weight-bold ml-5">T.K</label>
                          <v-text-field
                              placeholder="T.K"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                              type="number"
                          ></v-text-field>
                          <label class="font-weight-bold ml-5">Area / City</label>
                          <v-text-field
                              placeholder="Area / City"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                          ></v-text-field>
                          <label class="font-weight-bold ml-5">Country Code</label>
                          <v-text-field
                              placeholder="Country Code"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                              type="number"
                          ></v-text-field>
                          <label class="font-weight-bold ml-5">Callphone Number</label>
                          <v-text-field
                              placeholder="Callphone Number"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                              type="number"
                          ></v-text-field>
                          <label class="font-weight-bold ml-5">Telephone Number</label>
                          <v-text-field
                              placeholder="Telephone Number"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                              type="number"
                          ></v-text-field>
                          <label class="font-weight-bold ml-5">Email</label>
                          <v-text-field
                              placeholder="Email"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                              type="email"
                          ></v-text-field>
                          <label class="font-weight-bold d-block ml-5">Application Date</label>
                          <v-text-field
                              placeholder="Name"
                              required
                              outlined
                              dense
                              rounded
                              class="mt-1 mb-0"
                              type="date"
                          ></v-text-field>
                          <v-card flat tile class="pl-4">
                            <v-checkbox
                                class="d-inline-block ma-0 pa-0 font-weight-bold"
                            ></v-checkbox>
                            <h4
                                class="d-inline-block subtitle-2 font-weight-bold"
                                style="position: relative; right: 5px; bottom: 5px"
                            >
                              I wish to receive news & offers from katerina
                            </h4>
                          </v-card>
                          <v-card flat tile class="pl-4">
                            <v-checkbox
                                class="d-inline-block ma-0 pa-0 font-weight-light"
                                disabled
                            ></v-checkbox>
                            <h4
                                class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                style="position: relative; right: 5px; bottom: 5px"
                            >
                              sms
                            </h4>
                            <v-checkbox
                                class="d-inline-block ma-0 pa-0 font-weight-light"
                                disabled
                            ></v-checkbox>
                            <h4
                                class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                style="position: relative; right: 5px; bottom: 5px"
                            >
                              email
                            </h4>
                            <v-checkbox
                                class="d-inline-block ma-0 pa-0 font-weight-light"
                                disabled
                            ></v-checkbox>
                            <h4
                                class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                style="position: relative; right: 5px; bottom: 5px"
                            >
                              push
                            </h4>
                            <v-checkbox
                                class="d-inline-block ma-0 pa-0 font-weight-light"
                                disabled
                            ></v-checkbox>
                            <h4
                                class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                style="position: relative; right: 5px; bottom: 5px"
                            >
                              viber
                            </h4>
                          </v-card>
                        </v-form>
                      </v-card-text>

                      <v-card color="#f9f9f9" class="pa-5 ma-5 mb-0" flat tile align="end">
                        <v-btn
                            color="#dbe1e8"
                            @click="addCustomerDialog = false"
                            class="mr-2 text-capitalize"
                            small
                            rounded
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                            color="primary"
                            @click="addCustomerDialog = false"
                            class="text-capitalize"
                            small
                            rounded
                        >
                          Add new customer
                        </v-btn>
                      </v-card>
                    </v-card>
                  </v-dialog>
                </v-col>
              </v-row>
              <v-card flat class="pa-5 pt-1 pb-1">
                <v-card flat class="pa-0" color="#f9fafc">
                  <v-row class="pa-3 pt-0 pb-0 justify-end">
                    <v-col cols="4"  class="pa-3">
                      <v-text-field
                          label="Search"
                          outlined
                          dense
                          clearable
                          rounded
                          hide-details
                          :prepend-inner-icon="icons.mdiMagnify"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-card>
                <v-data-table
                    :headers="customerHeaders"
                    :items="customerData"
                    :footer-props="{ itemsPerPageOptions }"
                >
                  <template
                      v-slot:header.member_card
                  >
                    <h4 class="subtitle-2 font-weight-bold d-inline-block mt-4 mb-2">Member Card</h4>
                    <v-text-field
                        label="Search"
                        outlined
                        dense
                        rounded
                        hide-details
                        :prepend-inner-icon="icons.mdiMagnify"
                    ></v-text-field>
                  </template>
                  <template
                      v-slot:header.transactions
                  >
                    <h4 class="subtitle-2 font-weight-bold d-inline-block mt-4 mb-2">Transactions</h4>
                    <v-text-field
                        label="Search"
                        outlined
                        dense
                        rounded
                        hide-details
                        :prepend-inner-icon="icons.mdiMagnify"
                    ></v-text-field>
                  </template>
                  <template
                      v-slot:header.total
                  >
                    <h4 class="subtitle-2 font-weight-bold d-inline-block mt-4 mb-2">Total</h4>
                    <v-text-field
                        label="Search"
                        outlined
                        dense
                        rounded
                        hide-details
                        :prepend-inner-icon="icons.mdiMagnify"
                    ></v-text-field>
                  </template>
                  <template
                      v-slot:header.redeemed
                  >
                    <h4 class="subtitle-2 font-weight-bold d-inline-block mt-4 mb-2">Redeemed</h4>
                    <v-text-field
                        label="Search"
                        outlined
                        dense
                        rounded
                        hide-details
                        :prepend-inner-icon="icons.mdiMagnify"
                    ></v-text-field>
                  </template>
                  <template
                      v-slot:header.available
                  >
                    <h4 class="subtitle-2 font-weight-bold d-inline-block mt-4 mb-2">Available</h4>
                    <v-text-field
                        label="Search"
                        outlined
                        dense
                        rounded
                        hide-details
                        :prepend-inner-icon="icons.mdiMagnify"
                    ></v-text-field>
                  </template>
                  <template
                      v-slot:header.user_tab
                  >
                    <h4 class="subtitle-2 font-weight-bold d-inline-block">User Tab</h4>
                  </template>
                  <template
                      v-slot:header.edit
                  >
                    <h4 class="subtitle-2 font-weight-bold d-inline-block">Edit</h4>
                  </template>

                  <template
                      v-slot:item.user_tab
                  >
                    <v-dialog
                        v-model="userTabDialog"
                        width="600"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            class="text-capitalize d-block ma-1"
                            rounded
                            v-bind="attrs"
                            v-on="on"
                        >
                          User Tab
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card-title class="primary--text font-weight-medium pa-2 pl-4 pr-0">
                          User Details
                          <v-btn
                              color="grey"
                              icon
                              @click="userTabDialog = false"
                              class="ml-auto mr-2 title text-lowercase"
                              style="transform: rotate(45deg)"
                          >
                            +
                          </v-btn>
                        </v-card-title>
                        <v-divider></v-divider>

                        <v-card-text class="pa-5">
                          <v-card>
                            <v-row class="pl-5">
                              <v-col cols="4" class="font-weight-bold ">
                                ID
                              </v-col>
                              <v-col cols="7" class="font-weight-light">
                                62494
                              </v-col>
                            </v-row>
                            <v-row class="pl-5">
                              <v-col cols="4" class="font-weight-bold">
                                Marketing
                              </v-col>
                              <v-col cols="7" class="pb-0">
                                <v-checkbox
                                    class="d-inline-block ma-0 pa-0 font-weight-light"
                                    disabled
                                ></v-checkbox>
                                <h4
                                    class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                    style="position: relative; right: 5px; bottom: 5px"
                                >
                                  sms
                                </h4>
                                <v-checkbox
                                    class="d-inline-block ma-0 pa-0 font-weight-light"
                                    disabled
                                ></v-checkbox>
                                <h4
                                    class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                    style="position: relative; right: 5px; bottom: 5px"
                                >
                                  email
                                </h4>
                                <v-checkbox
                                    class="d-inline-block ma-0 pa-0 font-weight-light"
                                    disabled
                                ></v-checkbox>
                                <h4
                                    class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                    style="position: relative; right: 5px; bottom: 5px"
                                >
                                  push
                                </h4>
                                <v-checkbox
                                    class="d-inline-block ma-0 pa-0 font-weight-light"
                                    disabled
                                ></v-checkbox>
                                <h4
                                    class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                    style="position: relative; right: 5px; bottom: 5px"
                                >
                                  viber
                                </h4>
                              </v-col>
                            </v-row>
                            <v-row class="pl-5">
                              <v-col cols="4" class="font-weight-bold">
                                User Phone
                              </v-col>
                              <v-col cols="7" class="font-weight-light">
                                6982591305
                              </v-col>
                            </v-row>
                            <v-row class="pl-5">
                              <v-col cols="4" class="font-weight-bold ">
                                User Email
                              </v-col>
                              <v-col cols="7" class="font-weight-light">
                                lefkothea@roadcube.com
                              </v-col>
                            </v-row>
                            <v-row class="pl-5">
                              <v-col cols="4" class="font-weight-bold ">
                                Gender
                              </v-col>
                              <v-col cols="7" class="font-weight-light">
                                Women
                              </v-col>
                            </v-row>
                            <v-row class="pl-5">
                              <v-col cols="4" class="font-weight-bold ">
                                Date of Birth
                              </v-col>
                              <v-col cols="7" class="font-weight-light">
                                01-01-1000
                              </v-col>
                            </v-row>
                          </v-card>
                        </v-card-text>

                        <v-card color="#f9f9f9" class="pa-5" flat tile align="end">
                          <v-btn
                              color="#dbe1e8"
                              @click="userTabDialog = false"
                              class="text-capitalize"
                              small
                              rounded
                          >
                            Close
                          </v-btn>
                        </v-card>
                      </v-card>
                    </v-dialog>
                  </template>
                  <template
                      v-slot:item.edit
                  >
                    <v-dialog
                        v-model="editDialog"
                        width="600"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            color="primary"
                            class="d-block ma-1 text-capitalize"
                            dark
                            rounded
                            v-bind="attrs"
                            v-on="on"
                        >
                          Edit
                        </v-btn>
                      </template>

                      <v-card class="pb-5">
                        <v-card-title class="primary--text font-weight-medium pa-2 pl-4 pr-0">
                          Update Details
                          <v-btn
                              color="grey"
                              icon
                              @click="editDialog = false"
                              class="ml-auto mr-2 title text-lowercase"
                              style="transform: rotate(45deg)"
                          >
                            +
                          </v-btn>
                        </v-card-title>
                        <v-divider></v-divider>

                        <v-card-text>
                          <v-form class="pt-5">
                            <label class="font-weight-bold ml-5">Card Number</label>
                            <v-text-field
                                placeholder="Card Number"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                                type="number"
                            ></v-text-field>
                            <label class="font-weight-bold ml-5">Company Name</label>
                            <v-text-field
                                placeholder="Company Name"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                            ></v-text-field>
                            <label class="font-weight-bold ml-5">Surname</label>
                            <v-text-field
                                placeholder="Surname"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                            ></v-text-field>
                            <label class="font-weight-bold d-block ml-5">Name</label>
                            <v-text-field
                                placeholder="Name"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                            ></v-text-field>
                            <label class="font-weight-bold d-block ml-5">Date of Birth</label>
                            <v-text-field
                                placeholder="Name"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                                type="date"
                            ></v-text-field>
                            <label class="font-weight-bold d-block ml-5">Gender</label>
                            <v-radio-group row class="pl-4">
                              <v-radio label="male"></v-radio>
                              <v-radio label="female"></v-radio>
                            </v-radio-group>
                            <label class="font-weight-bold ml-5">Address</label>
                            <v-text-field
                                placeholder="Address"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                            ></v-text-field>
                            <label class="font-weight-bold ml-5">T.K</label>
                            <v-text-field
                                placeholder="T.K"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                                type="number"
                            ></v-text-field>
                            <label class="font-weight-bold ml-5">Area / City</label>
                            <v-text-field
                                placeholder="Area / City"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                            ></v-text-field>
                            <label class="font-weight-bold ml-5">Country Code</label>
                            <v-text-field
                                placeholder="Country Code"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                                type="number"
                            ></v-text-field>
                            <label class="font-weight-bold ml-5">Callphone Number</label>
                            <v-text-field
                                placeholder="Callphone Number"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                                type="number"
                            ></v-text-field>
                            <label class="font-weight-bold ml-5">Telephone Number</label>
                            <v-text-field
                                placeholder="Telephone Number"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                                type="number"
                            ></v-text-field>
                            <label class="font-weight-bold ml-5">Email</label>
                            <v-text-field
                                placeholder="Email"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                                type="email"
                            ></v-text-field>
                            <label class="font-weight-bold d-block ml-5">Application Date</label>
                            <v-text-field
                                placeholder="Name"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                                type="date"
                            ></v-text-field>
                            <v-card flat tile class="pl-4">
                              <v-checkbox
                                  class="d-inline-block ma-0 pa-0 font-weight-bold"
                              ></v-checkbox>
                              <h4
                                  class="d-inline-block subtitle-2 font-weight-bold"
                                  style="position: relative; right: 5px; bottom: 5px"
                              >
                                I wish to receive news & offers from katerina
                              </h4>
                            </v-card>
                            <v-card flat tile class="pl-4">
                              <v-checkbox
                                  class="d-inline-block ma-0 pa-0 font-weight-light"
                                  disabled
                              ></v-checkbox>
                              <h4
                                  class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                  style="position: relative; right: 5px; bottom: 5px"
                              >
                                sms
                              </h4>
                              <v-checkbox
                                  class="d-inline-block ma-0 pa-0 font-weight-light"
                                  disabled
                              ></v-checkbox>
                              <h4
                                  class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                  style="position: relative; right: 5px; bottom: 5px"
                              >
                                email
                              </h4>
                              <v-checkbox
                                  class="d-inline-block ma-0 pa-0 font-weight-light"
                                  disabled
                              ></v-checkbox>
                              <h4
                                  class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                  style="position: relative; right: 5px; bottom: 5px"
                              >
                                push
                              </h4>
                              <v-checkbox
                                  class="d-inline-block ma-0 pa-0 font-weight-light"
                                  disabled
                              ></v-checkbox>
                              <h4
                                  class="text-uppercase d-inline-block subtitle-2 font-weight-light"
                                  style="position: relative; right: 5px; bottom: 5px"
                              >
                                viber
                              </h4>
                            </v-card>
                          </v-form>
                        </v-card-text>

                        <v-card color="#f9f9f9" class="pa-5 ma-5 mb-0" flat tile align="end">
                          <v-btn
                              color="#dbe1e8"
                              @click="editDialog = false"
                              class="mr-2 text-capitalize"
                              small
                              rounded
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                              color="primary"
                              @click="editDialog = false"
                              class="text-capitalize"
                              small
                              rounded
                          >
                            Save
                          </v-btn>
                        </v-card>
                      </v-card>
                    </v-dialog>
                  </template>

                  <template
                    v-slot:footer
                  >
                    <v-card
                      flat
                      tile
                      color="#f9fafc"
                      width="100%"
                      class="pa-3"
                    >
                      <v-card flat tile class="subtitle-2 font-weight-bold d-inline-block" width="15.3%" align="center">
                      </v-card>
                      <v-card
                        flat
                        tile
                        class="subtitle-2 font-weight-bold d-inline-block"
                        color="#f9fafc"
                        width="16%"
                        align="center"
                      >
                        {{ customerTotalData.transactions }}
                      </v-card>
                      <v-card
                        flat
                        tile
                        class="subtitle-2 font-weight-bold d-inline-block"
                        color="#f9fafc"
                        width="16.3%"
                        align="center"
                      >
                        {{ customerTotalData.total }}
                      </v-card>
                      <v-card
                        flat
                        tile
                        class="subtitle-2 font-weight-bold d-inline-block"
                        color="#f9fafc"
                        width="16.3%"
                        align="center"
                      >
                        {{ customerTotalData.redeemed }}
                      </v-card>
                      <v-card
                        flat
                        tile
                        class="subtitle-2
                        font-weight-bold d-inline-block"
                        color="#f9fafc"
                        width="16.3%"
                        align="center"
                      >
                        {{ customerTotalData.available }}
                      </v-card>
                    </v-card>
                  </template>
                </v-data-table>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mdiAccountBox, mdiMagnify, mdiPlus  } from '@mdi/js'

export default {
  name: "Customer",
  data: ()=> ({
    icons: {
      mdiAccountBox,
      mdiMagnify,
      mdiPlus
    },
    tab: 0,
    addCustomerDialog: false,
    userTabDialog: false,
    editDialog: false,
    addTabDialog: false,
    itemsPerPageOptions: [10, 20, 30, -1],
    operators: ['', 'greater than', 'less than', 'greater or equal', 'less or equal', 'equal'],
    operator: '',
    customerHeaders: [
      {value: 'member_card', align: 'center'},
      {value: 'transactions', align: 'center'},
      {value: 'total', align: 'center'},
      {value: 'redeemed', align: 'center'},
      {value: 'available', align: 'center'},
      {value: 'user_tab', align: 'center'},
      {value: 'edit', align: 'center'}
    ],
    customerData: [
      {
        member_card: 10000,
        transactions: 1,
        total: 15,
        redeemed: 141500,
        available: 10000
      },
      {
        member_card: 201137,
        transactions: 0,
        total: 0,
        redeemed: 0,
        available: 3000
      },
    ],
    customerTotalData: {
      transactions: 0,
      total: 0,
      redeemed: 0,
      available: 0
    },
  }),
  mounted() {
    this.customerData.forEach((item) => {
      this.customerTotalData.transactions += item.transactions
      this.customerTotalData.total += item.total
      this.customerTotalData.redeemed += item.redeemed
      this.customerTotalData.available += item.available
    })
  }
};
</script>
