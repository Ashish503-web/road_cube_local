<template>
  <v-card class="pa-0" flat>
    <v-card flat>
      <v-row>
        <v-col cols="12" sm="auto">
          <v-card-title>User Rights</v-card-title>
        </v-col>
        <v-col cols="12" sm="auto" class="ml-sm-auto ml-5">
          <v-icon
              v-text="icons.mdiAccount"
              size="80"
              color="#eaedf1"
              class="mr-sm-5"
          >
          </v-icon>
        </v-col>
      </v-row>
    </v-card>

    <v-row class="pa-5 pt-3 pb-3" style="background: #eaedf1">
      <v-col cols="12">
        <v-card flat tile>
          <v-row class="pa-5 pt-2 pb-1">
            <v-col cols="auto pb-0">
              <v-dialog
                  v-model="addCustomerDialog"
                  width="60%"
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
                    Register User
                  </v-btn>
                </template>

                <v-card class="pb-5 pl-10 pr-10">
                  <h4 class="title font-weight-medium pa-5" align="center">
                    Register User
                  </h4>
                  <v-divider width="90%" class="ml-auto mr-auto mb-2"></v-divider>

                  <v-card-text width="80%" class="pb-0">
                    <v-row class="pa-3 pt-5">
                      <v-col cols="6" class="pa-1 pt-5">
                        <v-text-field
                            label="Username"
                            required
                            outlined
                            dense
                            rounded
                            class="mt-1 mb-0"
                            type="number"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="6" class="pa-1 pt-5">
                        <v-text-field
                            label="Password"
                            required
                            outlined
                            dense
                            rounded
                            class="mt-1 mb-0"
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <h4 class="title font-weight-medium pa-0 mt-2">
                      Rights
                    </h4>

                    <v-row>
                      <v-col>
                        <v-radio-group multiple>
                          <v-radio
                            v-for="item in leftRights"
                            :key =item
                            :label=item
                          ></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col>
                        <v-radio-group multiple>
                          <v-radio
                            v-for="item in rightRights"
                            :key =item
                            :label=item
                          ></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-card-text>

                  <v-card class="pl-6" flat tile>
                    <v-btn
                        color="#dbe1e8"
                        @click="addCustomerDialog = false"
                        class="mr-2 text-capitalize"
                        rounded
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                        color="primary"
                        @click="addCustomerDialog = false"
                        class="text-capitalize"
                        rounded
                    >
                      Add
                    </v-btn>
                  </v-card>

                  <h4 class="red--text pa-6 font-weight-regular subtitle-2">The code must have a minimum of 5 digits.</h4>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-card flat class="pa-5" align="center">
            <v-card class="pa-6 elevation-6" color="#f9fafc" width="95%" style="border-left: 3px solid #626262; border-right: 3px solid #626262">
              <v-row class="pa-3 pt-0 pb-0 title font-weight-bold">User List:</v-row>
              <v-row class="pa-3 pt-0 pb-0 justify-md-end">
                <v-col cols="10" sm="8" md="6" lg="4" class="pa-3">
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

              <v-data-table
                :headers="usersHeaders"
                :items="usersData"
                :footer-props="{ itemsPerPageOptions }"
                class="mt-5"
              >
                <template
                    v-slot:item.edit
                >
                  <v-dialog
                      v-model="editDialog"
                      width="60%"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          color="primary"
                          dark
                          depressed
                          small
                          icon
                          v-bind="attrs"
                          v-on="on"
                      >
                        <v-icon
                            v-text="icons.mdiSquareEditOutline"
                        ></v-icon>
                      </v-btn>
                    </template>

                    <v-card class="pb-5 pl-10 pr-10">
                      <h4 class="title font-weight-medium pa-5" align="center">
                        Register User
                      </h4>
                      <v-divider width="90%" class="ml-auto mr-auto mb-2"></v-divider>

                      <v-card-text width="80%" class="pb-0">
                        <v-row class="pa-3 pt-5">
                          <v-col cols="6" class="pa-1 pt-5">
                            <v-text-field
                                label="Username"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                                type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="6" class="pa-1 pt-5">
                            <v-text-field
                                label="Password"
                                required
                                outlined
                                dense
                                rounded
                                class="mt-1 mb-0"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <h4 class="title font-weight-medium pa-0 mt-2">
                          Rights
                        </h4>

                        <v-row>
                          <v-col>
                            <v-radio-group multiple>
                              <v-radio
                                  v-for="item in leftRights"
                                  :key =item
                                  :label=item
                              ></v-radio>
                            </v-radio-group>
                          </v-col>
                          <v-col>
                            <v-radio-group multiple>
                              <v-radio
                                  v-for="item in rightRights"
                                  :key =item
                                  :label=item
                              ></v-radio>
                            </v-radio-group>
                          </v-col>
                        </v-row>
                      </v-card-text>

                      <v-card class="pl-6 pb-6" flat tile>
                        <v-btn
                            color="#dbe1e8"
                            @click="editDialog = false"
                            class="mr-2 text-capitalize"
                            rounded
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                            color="primary"
                            @click="editDialog = false"
                            class="text-capitalize"
                            rounded
                        >
                          Change
                        </v-btn>
                      </v-card>
                    </v-card>
                  </v-dialog>
                  <v-dialog
                      v-model="deleteDialog"
                      width="50%"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                          color="primary"
                          dark
                          depressed
                          small
                          icon
                          v-bind="attrs"
                          v-on="on"
                      >
                        <v-icon
                            v-text="icons.mdiTrashCan"
                        ></v-icon>
                      </v-btn>
                    </template>

                    <v-card class="pa-2 pb-0">
                      <v-card-title class="font-weight-medium pa-2 pl-4 pr-0">
                        Delete User Confirmation
                        <v-btn
                            color="grey"
                            icon
                            @click="deleteDialog = false"
                            class="ml-auto mr-2 title text-lowercase"
                            style="transform: rotate(45deg)"
                        >
                          +
                        </v-btn>
                      </v-card-title>
                      <v-divider></v-divider>

                      <v-card-text>
                        <h4 class="subtitle-2 font-weight-regular mt-5">Do you want to delete User with name {{  }}.</h4>
                        <h4 class="subtitle-2 font-weight-regular mt-5 mb-4">Do you want to continue?</h4>
                      </v-card-text>

                      <v-card color="#f9f9f9" class="pa-4" flat tile align="end">
                        <v-btn
                            color="#dbe1e8"
                            @click="deleteDialog = false"
                            class="mr-2 text-capitalize"
                            rounded
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                            color="error"
                            @click="deleteDialog = false"
                            class="text-capitalize"
                            rounded
                        >
                          Delete
                        </v-btn>
                      </v-card>
                    </v-card>
                  </v-dialog>
                </template>
              </v-data-table>
            </v-card>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mdiAccount, mdiMagnify, mdiSquareEditOutline, mdiTrashCan  } from '@mdi/js'

export default {
  name: "UserRights",
  data: () => ({
    icons: {
      mdiAccount,
      mdiMagnify,
      mdiSquareEditOutline,
      mdiTrashCan
    },
    editDialog: false,
    deleteDialog: false,
    leftRights: ['Dashboard', 'Branches', 'Collaborators', 'Customer', 'Business Profile', 'Category Management', 'Catalog Management',
                 '1+1 / Sampling', 'Check In', 'Contest & Survey', 'Multiple Coupons', 'New Campaign'
                ],
    rightRights: ['Branch Dept', 'Subscriptions', 'Products', 'User Rights', 'Business Statistics', 'Gift Status',
                  'Supplier Management', 'Receipt Scanning', 'Serial Shopping', 'Roadcodes', 'View Campaigns'
                 ],
    itemsPerPageOptions: [10, 20, 30, -1],
    usersHeaders: [
      { text: "Username", value: "username", align: 'center'},
      { text: "User Password", value: "password", align: 'center'},
      { text: "Rights", value: "rights", align: 'center'},
      { text: "Edit", value: "edit", align: 'center'}
    ],
    usersData: [
      {
        username: 'katerinanikos',
        password: 'pass1',
        rights: 'Press edit...'
      },
      {
        username: 'katerinanikos',
        password: 'pass2',
        rights: 'Press edit...'
      },
      {
        username: 'katerinanikos',
        password: 'pass3',
        rights: 'Press edit...'
      },
    ]
  })
};
</script>
