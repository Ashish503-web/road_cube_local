<template>
  <v-card class="pa-0" flat>
    <v-card flat>
      <v-row>
        <v-col cols="8" sm="6" md="4" lg="3" class="pl-5 pa-0" style="position: relative; top: 20px">
          <v-row class="pa-0">
            <v-col cols="10" class="pa-0 pl-5">
              <label class="subtitle-2 font-weight-regular ml-5">Search by date:</label>
              <v-text-field
                  placeholder="Company Name"
                  required
                  outlined
                  dense
                  rounded
                  class="ma-1"
                  type="date"
              ></v-text-field>
            </v-col>
            <v-col cols="2" class="pa-0 pl-5 pt-7">
              <v-btn
                icon
              >
                <v-icon
                    v-text="icons.mdiArrowRightCircle"
                    size="40"
                    color="primary"
                >
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="5" sm="4" md="4" lg="6">
          <h2 align="center" class="pa-6 title align-content-sm-center">Statistics</h2>
        </v-col>
        <v-col cols="3" sm="2" md="4" lg="3" class="ml-sm-0 ml-5 pl-sm-0" align="end">
          <v-icon
              v-text="icons.mdiGift"
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

          <v-card flat tile class="pa-5">
            <v-row class="ma-0">
              <v-col cols="12" md="8" lg="4">
                <v-card color="#394263" class="pl-5 pr-5 pt-2 white--text elevation-10" height="80">
                  <v-icon
                      v-text="icons.mdiAccountGroup"
                      color="#fff"
                      style="vertical-align: sub"
                  >
                  </v-icon>
                  <h4 class="title font-weight-regular d-inline-block ml-1">Active Users (payments): {{ }}</h4>
                  <h4 class="subtitle-2" style="line-height: 10px">*unique users in the last 2 months</h4>
                </v-card>
              </v-col>
              <v-col cols="12" md="8" lg="4">
                <v-card color="#394263" class="pl-5 pr-5 pt-2 white--text elevation-10" height="80">
                  <v-icon
                      v-text="icons.mdiHumanHandsup"
                      color="#fff"
                      style="vertical-align: sub"
                  >
                  </v-icon>
                  <h4 class="title font-weight-regular d-inline-block"> All Unique Users: {{ }}</h4>
                </v-card>
              </v-col>
              <v-col cols="12" md="8" lg="4">
                <v-card color="#46558c" class="pl-5 pr-5 white--text elevation-10" height="80">
                  <h4 class="title font-weight-regular" align="center">Select Tab</h4>
                  <h4 class="title font-weight-regular" style="line-height: 20px">Active:</h4>
                  <h4 class="title font-weight-regular" style="line-height: 20px">Unique:</h4>
                </v-card>
              </v-col>
            </v-row>
          </v-card>

          <v-card flat tile class="pa-5">
            <v-card tile flat color="#f9fafc" class="pa-1 pb-0">
              <v-tabs
                  v-model="tab"
                  background-color="#f9fafc"
              >
                <v-tab class="pa-5 text-capitalize">Overall Statistics</v-tab>
              </v-tabs>
            </v-card>
          </v-card>

          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat class="pa-5">

                <v-card flat class="pa-0" color="#f9fafc">
                  <v-row class="pa-3 pt-0 pb-0 justify-end">
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
                </v-card>

                <v-data-table
                    :headers="statisticsHeaders"
                    :items="statisticsData"
                    :footer-props="{ itemsPerPageOptions }"
                >
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
                      v-slot:item.total_amount="{item}"

                  >
                    <p :class="item.totalData? 'font-weight-bold mt-4': ' mt-4' ">
                      {{ item.total_amount }}
                    </p>
                  </template>
                  <template
                      v-slot:item.transactions="{item}"

                  >
                    <p :class="item.totalData? 'font-weight-bold mt-4': ' mt-4' ">
                      {{ item.transactions }}
                    </p>
                  </template>
                  <template
                      v-slot:item.total_points="{item}"

                  >
                    <p :class="item.totalData? 'font-weight-bold mt-4': ' mt-4' ">
                      {{ item.total_points }}
                    </p>
                  </template>
                  <template
                      v-slot:item.users="{item}"

                  >
                    <p :class="item.totalData? 'font-weight-bold mt-4': ' mt-4' ">
                      {{ item.users }}
                    </p>
                  </template>
                  <template
                      v-slot:item.cards="{item}"

                  >
                    <p :class="item.totalData? 'font-weight-bold mt-4': ' mt-4' ">
                      {{ item.cards }}
                    </p>
                  </template>

                </v-data-table>
                
                <v-card flat tile color="#f9fafc" class="pt-2 pb-2">
                  <v-btn
                    color="primary"
                    small
                    depressed
                    rounded
                    class="mr-2"
                  >
                    Excel
                  </v-btn>
                  <v-btn
                    color="primary"
                    small
                    depressed
                    rounded
                    class="mr-2"
                  >
                    PDF
                  </v-btn>
                  <v-btn
                    color="primary"
                    small
                    depressed
                    rounded
                    class="mr-2"
                  >
                    CSV
                  </v-btn>
                </v-card>

              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mdiMagnify, mdiArrowRightCircle, mdiGift, mdiAccountGroup, mdiHumanHandsup } from '@mdi/js'

export default {
  name: "BusinessStatistics",
  data: () => ({
    tab: 0,
    icons: {
      mdiMagnify,
      mdiArrowRightCircle,
      mdiGift,
      mdiAccountGroup,
      mdiHumanHandsup
    },
    itemsPerPageOptions: [10, 20, 30, -1],
    statisticsHeaders: [
      { text: 'No', value: 'number', align: 'center'},
      { text: 'Name', value: 'name', align: 'center'},
      { text: 'Total Amount', value: 'total_amount', align: 'center'},
      { text: 'Transactions', value: 'transactions', align: 'center'},
      { text: 'Total Points', value: 'total_points', align: 'center'},
      { text: 'Users', value: 'users', align: 'center'},
      { text: 'Cards', value: 'cards', align: 'center'},
    ],
    statisticsData: [
      {
        number: 1,
        name: 'Vasilis',
        total_amount: 1260,
        transactions: 2,
        total_points: 629,
        users: 2,
        cards: 0
      },
      {
        number: 2,
        name: 'Vasilis',
        total_amount: 363,
        transactions: 23,
        total_points: 749,
        users: 15,
        cards: 12
      },
      {
        number: 3,
        name: 'Vasilis',
        total_amount: 42,
        transactions: 2,
        total_points: 94,
        users: 1,
        cards: 0
      },
    ],
    statisticsTotalData: {
      totalData: true,
      total_amount: 0,
      transactions: 0,
      total_points: 0,
      users: 0,
      cards: 0
    }
  }),
  mounted() {
    this.statisticsData.forEach((item) => {
      this.statisticsTotalData.total_amount += item.total_amount
      this.statisticsTotalData.transactions += item.transactions
      this.statisticsTotalData.total_points += item.total_points
      this.statisticsTotalData.users += item.users
      this.statisticsTotalData.cards += item.cards
    })
    this.statisticsData.push(this.statisticsTotalData)
  }
};
</script>
