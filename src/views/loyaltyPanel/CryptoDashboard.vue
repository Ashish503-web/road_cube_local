<template>
    <v-container fluid class="py-0" style="background-color: #f8f8fb">
        <div class="d-flex align-center justify-space-between">
            <v-card-title class="pl-3 pb-2" style="font-size: 16px">CRYPTO</v-card-title>
            <v-card-title class="dashboard-info">Dashboards <span class="ml-2">  / Crypto</span></v-card-title>
        </div>
        <v-row no-gutters>
            <v-col class="px-3" cols="4">
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-card flat class="pa-5">
                            <v-row class="px-4 mb-4 row d-flex align-center justify-space-between">
                                <v-col cols="1" class="pa-0 rounded-circle">
                                    <v-img src="@/assets/avatars/avatar-1.jpg" class="rounded-circle" cover></v-img>
                                </v-col>
                                <v-col class="pa-0" cols="1">
                                    <v-menu offset-y left>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn  icon
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    class="card-menu-btn pa-0 "
                                            >
                                                ...
                                            </v-btn>
                                        </template>
                                        <v-list>
                                            <v-list-item
                                                    v-for="(item, index) in items"
                                                    :key="index"
                                            >
                                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-col>
                            </v-row>
                            <v-row class="px-4">
                                <v-card-title class="pa-0 mb-2">Henry Wells</v-card-title>
                                <v-card-text class="pa-0 mb-1 text-muted">henrywells@abc.com</v-card-text>
                                <v-card-text class="pa-0 text-muted">Id no: #SK0234</v-card-text>
                            </v-row>
                        </v-card>
                        <v-divider></v-divider>
                        <v-card flat class="pa-5">
                            <v-row>
                                <v-col cols="6" class="py-0">
                                    <p class="font-weight-medium mb-2">Balance :</p>
                                    <p class="balance-value">$ 6134.39</p>
                                </v-col>
                                <v-col cols="6" class="py-0">
                                    <p class="font-weight-medium mb-2">Coin :</p>
                                    <div class="d-inline-flex align-items-center mt-1">
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <div class="background-circle ma-1" style="background-color:  rgba(241,180,76,.25);">
                                                    <v-icon v-bind="attrs"
                                                            v-on="on"
                                                            v-text="icons.mdiBitcoin"
                                                            style="fill: #f1b44c"
                                                            class="coin-icons"
                                                            small
                                                    ></v-icon>
                                                </div>
                                            </template>
                                            <span>Bitcoin</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <div class="background-circle ma-1" style="background-color: rgba(85,110,230,.25)">
                                                    <v-icon v-bind="attrs"
                                                            v-on="on"
                                                            v-text="icons.mdiEthereum"
                                                            class="coin-icons"
                                                            style="fill: #556ee6"
                                                            small
                                                    ></v-icon>
                                                </div>
                                            </template>
                                            <span>Ethereum</span>
                                        </v-tooltip>
                                        <v-tooltip top>
                                            <template v-slot:activator="{ on, attrs }">
                                                <div class="background-circle ma-1" style="background-color: rgba(80,165,241,.25)">
                                                    <v-icon v-bind="attrs"
                                                            v-on="on"
                                                            v-text="icons.mdiLitecoin"
                                                            class="coin-icons"
                                                            size="fill: #50a5f1"
                                                            small
                                                    ></v-icon>
                                                </div>
                                            </template>
                                            <span>Litecoin</span>
                                        </v-tooltip>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                        <v-divider></v-divider>
                        <v-card flat class="px-5 py-3 d-flex align-center justify-center">
                            <v-btn outlined depressed color="" class="mr-2 custom-btn" style="border-color: #eff2f7">Deposit</v-btn>
                            <v-btn depressed class="mr-2 custom-btn" style="background-color: #556ee6; border-color: #556ee6; color: #fff">Buy / Sell</v-btn>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="px-3" cols="8">
                <v-card class="mb-4" flat>
                    <v-row no-gutters>
                        <v-col class="col-lg-9 col-sm-8">
                            <div class="pa-6">
                                <v-card-title class="theme--light right-title pa-0">Welcome Back !</v-card-title>
                                <p class="">Skote Crypto Dashboard</p>
                                <ul class="right-top-list">
                                    <li>If several languages coalesce</li>
                                    <li>Sed ut perspiciatis unde</li>
                                    <li>It would be necessary</li>
                                </ul>
                            </div>
                        </v-col>
                        <v-col class="col-lg-3 col-sm-4 align-self-center">
                            <div>
                                <v-img src="@/assets/img.png"></v-img>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
                <v-row align="center">
                    <v-col sm="4">
                        <v-card flat class="pa-5">
                            <v-card-title class="mb-5 pa-0">
                                <v-icon
                                        v-text="icons.mdiBitcoin"
                                        style="fill: #f1b44c"
                                        class="mr-4"
                                ></v-icon>
                                <span>Bitcoin</span>
                            </v-card-title>
                            <v-row class="">
                                <v-col cols="6" class="py-0">
                                    <h5>$ 9134.39</h5>
                                    <p class="d-flex align-end">
                                        <span> + 0.0012 ( 0.2 % ) </span>
                                        <v-icon class="ml-2" x-small v-text="icons.mdiArrowUp"></v-icon>
                                    </p>
                                </v-col>
                                <v-col cols="6" class="py-0">
                                    <v-sparkline
                                            :value="chart.value"
                                            :gradient="chart.gradient"
                                            :smooth="chart.radius || false"
                                            :padding="chart.padding"
                                            :line-width="chart.lineWidth"
                                            :stroke-linecap="chart.lineCap"
                                            :gradient-direction="chart.gradientDirection"
                                            :fill="chart.fill"
                                            :type="chart.type"
                                            :auto-line-width="chart.autoLineWidth"
                                            auto-draw
                                            :show-labels="chart.showLabels"
                                            :label-size="chart.labelSize"
                                    ></v-sparkline>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col sm="4">
                        <v-card flat class="pa-5">
                            <v-card-title class="mb-5 pa-0">
                                <v-icon
                                        v-text="icons.mdiEthereum"
                                        style="fill: #556ee6"
                                        class="mr-4"
                                ></v-icon>
                                <span>Ethereum</span>
                            </v-card-title>
                            <v-row class="">
                                <v-col cols="6" class="py-0">
                                    <h5>$ 245.44</h5>
                                    <p class="d-flex align-end">
                                        <span>- 4.102 ( 0.1 % )</span>
                                        <v-icon color="#f46a6a" class="ml-2" x-small v-text="icons.mdiArrowDown"></v-icon>
                                    </p>
                                </v-col>
                                <v-col cols="6" class="py-0">
                                    <v-sparkline
                                            :value="chart.value"
                                            :gradient="chart.gradient"
                                            :smooth="chart.radius || false"
                                            :padding="chart.padding"
                                            :line-width="chart.lineWidth"
                                            :stroke-linecap="chart.lineCap"
                                            :gradient-direction="chart.gradientDirection"
                                            :fill="chart.fill"
                                            :type="chart.type"
                                            :auto-line-width="chart.autoLineWidth"
                                            auto-draw
                                            :show-labels="chart.showLabels"
                                            :label-size="chart.labelSize"
                                    ></v-sparkline>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                    <v-col sm="4">
                        <v-card flat class="pa-5">
                            <v-card-title class="mb-5 pa-0">
                                <v-icon
                                        v-text="icons.mdiLitecoin"
                                        style="fill: #50a5f1"
                                        class="mr-4"
                                ></v-icon>
                                <span>Litecoin</span>
                            </v-card-title>
                            <v-row class="">
                                <v-col cols="6" class="py-0">
                                    <h5>$ 63.61</h5>
                                    <p class="d-flex align-end">
                                        <span>+ 1.792 ( 0.1 % )</span>
                                        <v-icon color="#34c38f" class="ml-2" x-small v-text="icons.mdiArrowUp"></v-icon>
                                    </p>
                                </v-col>
                                <v-col cols="6" class="py-0">
                                    <v-sparkline
                                            :value="chart.value"
                                            :gradient="chart.gradient"
                                            :smooth="chart.radius || false"
                                            :padding="chart.padding"
                                            :line-width="chart.lineWidth"
                                            :stroke-linecap="chart.lineCap"
                                            :gradient-direction="chart.gradientDirection"
                                            :fill="chart.fill"
                                            :type="chart.type"
                                            :auto-line-width="chart.autoLineWidth"
                                            auto-draw
                                            :show-labels="chart.showLabels"
                                            :label-size="chart.labelSize"
                                    ></v-sparkline>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col lg="8" class="pa-3">
                <v-card flat class="pa-5">
                    <div class="float-right">
                        <v-select
                                class="month-select "
                                :items="month"
                                label="March"
                                dense
                                solo
                        ></v-select>
                    </div>
                    <v-card-title class="card-title pa-0">Wallet Balance</v-card-title>
                    <v-row>
                        <v-col lg="4" class="py-0">
                            <div class="mt-6">
                                <p>Available Balance</p>
                                <h4 class="mb-2">$ 6134.39</h4>
                                <p class="text-muted d-flex align-center">
                                    <span>+ 0.0012.23 ( 0.2 % )</span>
                                    <v-icon color="#34c38f" class="ml-2" small v-text="icons.mdiArrowUp"></v-icon>
                                </p>
                                <v-row>
                                    <v-col cols="6" class="py-0">
                                        <p class="mb-2">Income</p>
                                        <h5>$ 2632.46</h5>
                                    </v-col>
                                    <v-col cols="6" class="py-0">
                                        <p class="mb-2">Expense</p>
                                        <h5>$ 924.38</h5>
                                    </v-col>
                                </v-row>
                                <v-btn color="primary" x-small class="mt-4 py-4">
                                    view more
                                    <v-icon class="ml-2" v-text="icons.mdiArrowRight" small></v-icon>
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col lg="4" sm="6" class="py-0">
                            Apex Chart
                        </v-col>
                        <v-col lg="4" sm="6" class="py-0 align-self-center">
                            <div>
                                <p class="mb-2 d-flex align-center">
                                    <v-icon v-text="icons.mdiCircle" x-small class="mr-2" color="#556ee6"></v-icon>
                                    <span>Ethereum</span>
                                </p>
                                <h5>
                                    4.5701 ETH = <span class="text-muted font-size-14">$ 1123.64</span>
                                </h5>
                            </div>
                            <div class="mt-4 pt-2">
                                <p class="mb-2 d-flex align-center">
                                    <v-icon v-text="icons.mdiCircle" x-small class="mr-2" color="#f1b44c"></v-icon>
                                    <span>Bitcoin</span>
                                </p>
                                <h5>
                                    0.4412 BTC = <span class="text-muted font-size-14">$ 4025.32</span>
                                </h5>
                            </div>
                            <div class="mt-4 pt-2">
                                <p class="mb-2 d-flex align-center">
                                    <v-icon v-text="icons.mdiCircle" x-small class="mr-2" color="#50a5f1"></v-icon>
                                    <span>Litecoin</span>
                                </p>
                                <h5>
                                    35.3811 LTC = <span class="text-muted font-size-14">$ 4025.32</span>
                                </h5>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col lg="4" class="pa-3">
                <v-card flat class="pa-5">
                    <v-card-title class="card-title pa-0">Overview</v-card-title>
                </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col xl="4" class="pa-3">
                <v-card flat class="pa-5">
                    <v-card-title class="card-title pa-0">Transactions</v-card-title>
                    <v-col cols="auto" class="pa-0">
                        <v-tabs v-model="tab" height="auto" color="accent" hide-slider active-class="tab-active" background-color="#eff2f7" style="border-radius: 4px;" >
                            <v-tab class="text-capitalize">All</v-tab>
                            <v-tab class="text-capitalize">Buy</v-tab>
                            <v-tab class="text-capitalize">Sell</v-tab>
                        </v-tabs>
                    </v-col>
                    <v-col cols="12" class="table mt-5" style="max-height: 340px">
                        <v-tabs-items v-model="tab">
                            <v-tab-item>
                                <v-data-table
                                        :headers="tableheader"
                                        :items="allData"
                                        class="coupon-table"
                                        hide-default-header
                                        hide-default-footer
                                >
                                    <template v-slot:item.icon="{item}">
                                        <div>{{item.icon}}</div>
                                        <v-icon v-text="icons.mdiArrowDownCircleOutline" style="color: #556ee6"></v-icon>
                                    </template>
                                    <template v-slot:item.buy="{item}">
                                        <h5 class="mb-1 font-weight-500">{{item.buy}}</h5>
                                        <p class="mb-0 text-muted table-data">{{item.date}}</p>
                                    </template>
                                </v-data-table>
                            </v-tab-item>

                            <v-tab-item>
                                <v-data-table
                                        :headers="tableheader"
                                        :items="buyData"
                                        class="coupon-table"
                                        hide-default-header
                                        hide-default-footer
                                >
                                    <template v-slot:item.icon="{item}">
                                        <div>{{item.icon}}</div>
                                        <v-icon v-text="icons.mdiArrowDownCircleOutline" style="color: #556ee6"></v-icon>
                                    </template>
                                    <template v-slot:item.buy="{item}">
                                        <h5 class="mb-1 font-weight-500">{{item.buy}}</h5>
                                        <p class="mb-0 text-muted table-data">{{item.date}}</p>
                                    </template>
                                </v-data-table>
                            </v-tab-item>

                            <v-tab-item class="">
                                <v-data-table
                                        :headers="tableheader"
                                        :items="sellData"
                                        class="coupon-table"
                                        hide-default-header
                                        hide-default-footer
                                >
                                    <template v-slot:item.icon="{item}">
                                        <div>{{item.icon}}</div>
                                        <v-icon v-text="icons.mdiArrowDownCircleOutline" style="color: #556ee6"></v-icon>
                                    </template>
                                    <template v-slot:item.buy="{item}">
                                        <h5 class="mb-1 font-weight-500">{{item.buy}}</h5>
                                        <p class="mb-0 text-muted table-data">{{item.date}}</p>
                                    </template>
                                </v-data-table>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-col>
                </v-card>
            </v-col>
            <v-col xl="4" class="pa-3">
                <v-card flat class="pa-5">
                    <v-card-title class="card-title pa-0">Notifications</v-card-title>
                    <v-card flat class="table" style="max-height: 395px">
                        <v-list>
                            <v-list-item-group style="border: 1px solid rgba(0,0,0,.125)">
                                <v-list-item
                                        style="border-bottom: 1px solid rgba(0,0,0,.125)"
                                        flat
                                        class="pa-5"
                                        v-for="(item, i) in listItems"
                                        :key="i"
                                >
                                    <div class="d-flex">
                                        <v-list-item-icon>
                                            <v-img v-text="item.icon"></v-img>
                                        </v-list-item-icon>
                                        <v-list-item-content class="pa-0">
                                            <v-list-item-title class="mb-2" v-text="item.title"></v-list-item-title>
                                            <v-list-item-action-text class="mb-4" v-text="item.about"></v-list-item-action-text>
                                            <div class="d-flex align-center justify-space-between">
                                                <v-list-item-action-text class="" v-text="item.date"></v-list-item-action-text>
                                                <div class="d-flex align-center justify-center">
                                                    <v-icon v-text="icons.mdiAccount" x-small class="mr-2"></v-icon>
                                                    <v-list-item-action-text class="" v-text="item.userName"></v-list-item-action-text>
                                                </div>
                                            </div>
                                        </v-list-item-content>
                                    </div>

                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                    </v-card>
                </v-card>
            </v-col>
            <v-col xl="4" class="pa-3">
                <v-card flat class="pa-5">
                    <v-card-title class="card-title pa-0">Buy / Sell</v-card-title>
                    <v-col cols="auto" class="pa-0">
                        <v-tabs v-model="tab3" height="auto" color="accent" hide-slider active-class="tab-active" background-color="#eff2f7" style="border-radius: 4px;" >
                            <v-tab class="text-capitalize">Buy</v-tab>
                            <v-tab class="text-capitalize">Sell</v-tab>
                        </v-tabs>
                    </v-col>
                    <v-col cols="12" class="pa-0">
                        <v-tabs-items v-model="tab3">
                            <v-tab-item>
                                <v-card flat class="mt-4">
                                    <v-col cols="12" class="mb-2 d-flex align-center justify-space-between pa-0">
                                        <div class="px-0">
                                            <h5>Buy Coin</h5>
                                        </div>
                                        <div class="d-flex align-center justify-center pa-0">
                                            <v-icon  v-text="icons.mdiWallet"
                                                     color="primary"
                                                     small
                                            ></v-icon>
                                            <h5 class="mb-0 ml-2">$4235.23</h5>
                                        </div>
                                    </v-col>
                                    <form>
                                        <label class="title-label">Payment method :</label>
                                        <v-select

                                            class="payment-select mb-3"
                                            :items="payment"
                                            label="Credit / Debit Card"
                                            dense
                                            solo
                                            outlined
                                            flat
                                            hide-details
                                        ></v-select>
                                        <div>
                                            <label class="title-label">Add Amount :</label>
                                            <div class="d-flex justify-center custom-input">
                                                <p>Amount</p>
                                                <v-select
                                                        class="input-inside-select col-3"
                                                        :items="currency"
                                                        label="BTC"
                                                        dense
                                                        solo
                                                        flat
                                                        hide-details
                                                ></v-select>
                                                <v-text-field
                                                        flat
                                                        dense
                                                        solo
                                                        hide-details
                                                ></v-text-field>
                                            </div>
                                            <div class="d-flex justify-center custom-input">
                                                <p>Price</p>
                                                <v-text-field
                                                        flat
                                                        dense
                                                        solo
                                                        hide-details
                                                ></v-text-field>
                                                <p style="border-left: 1px solid #ced4da; border-right: none">$</p>
                                            </div>
                                            <div class="d-flex justify-center custom-input">
                                                <p>Total</p>
                                                <v-text-field
                                                        flat
                                                        dense
                                                        solo
                                                        hide-details
                                                ></v-text-field>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <v-btn color="success" small class="pa-5">Buy Coin</v-btn>
                                        </div>
                                    </form>
                                </v-card>
                            </v-tab-item>

                            <v-tab-item>
                                <v-card flat class="mt-4">
                                    <v-col cols="12" class="mb-2 d-flex align-center justify-space-between pa-0">
                                        <div>
                                            <h5>Sell Coin</h5>
                                        </div>
                                        <div class="d-flex align-center justify-center pa-0">
                                            <v-icon  v-text="icons.mdiWallet"
                                                     color="primary"
                                                     small
                                            ></v-icon>
                                            <h5 class="mb-0 ml-2">$4235.23</h5>
                                        </div>
                                    </v-col>
                                    <form>
                                        <label class="title-label">Email :</label>
                                        <v-text-field
                                                flat
                                                dense
                                                solo
                                                hide-details
                                                outlined
                                                class="mb-2"
                                        ></v-text-field>
                                        <div>
                                            <label class="title-label">Add Amount :</label>
                                            <div class="d-flex justify-center custom-input">
                                                <p>Amount</p>
                                                <v-select
                                                        class="input-inside-select col-3"
                                                        :items="currency"
                                                        label="BTC"
                                                        dense
                                                        solo
                                                        flat
                                                        hide-details
                                                ></v-select>
                                                <v-text-field
                                                        flat
                                                        dense
                                                        solo
                                                        hide-details
                                                ></v-text-field>
                                            </div>
                                            <div class="d-flex justify-center custom-input">
                                                <p>Price</p>
                                                <v-text-field
                                                        flat
                                                        dense
                                                        solo
                                                        hide-details
                                                ></v-text-field>
                                                <p style="border-left: 1px solid #ced4da; border-right: none">$</p>
                                            </div>
                                            <div class="d-flex justify-center custom-input">
                                                <p>Total</p>
                                                <v-text-field
                                                        flat
                                                        dense
                                                        solo
                                                        hide-details
                                                ></v-text-field>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <v-btn color="error" small  class="pa-5">Sell Coin</v-btn>
                                        </div>
                                    </form>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mdiBitcoin, mdiEthereum, mdiLitecoin, mdiArrowUp, mdiArrowDown,mdiArrowRight, mdiCircle, mdiWallet, mdiArrowDownCircleOutline, mdiArrowUpCircleOutline, mdiAccount} from '@mdi/js'
    
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
]

    export default {
        name: "CryptoDashboard",
        data: () => ({
            items: [
                { title: 'Action' },
                { title: 'Another action' },
                { title: 'Something else here' }
            ],
            month: [
                'March',
                'February',
                'January',
                'December'
            ],
            payment: [
                'Credit / Debit Card',
                'Paypal'
            ],
            currency: [
                'BTC',
                'ETH',
                'LTC'
            ],
            icons: {
                mdiBitcoin,
                mdiEthereum,
                mdiLitecoin,
                mdiArrowUp,
                mdiArrowDown,
                mdiArrowRight,
                mdiCircle,
                mdiWallet,
                mdiArrowDownCircleOutline,
                mdiArrowUpCircleOutline,
                mdiAccount
            },

            chart:{
                showLabels: false,
                lineWidth: 2,
                labelSize: 7,
                radius: 10,
                padding: 8,
                lineCap: 'round',
                gradient: gradients[5],
                value: [0, 2, 5, 9, 5, 10, 3, 5, -4, -10, 1, 8, 2, 9, 0],
                gradientDirection: 'top',
                gradients,
                fill: false,
                type: 'trend',
                autoLineWidth: false,
            },
            tab: 0,
            tab3: 0,
            tableheader: [
                { text: "icon", value: "icon" },
                { text: "Buy BTC", value: "buy" },
                { text: "0.016 BTC", value: "valute" },
                { text: "$125.20", value: "sum" },
            ],
            allData: [
                { icon: "", buy: "Buy BTC", date: "14 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "16 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Sell BTC",date: "17 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "18 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "19 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Sell BTC", date: "20 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "20 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Sell BTC", date: "21 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Sell BTC", date: "22 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "22 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
            ],
            buyData: [
                { icon: "", buy: "Buy BTC", date: "14 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "15 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "16 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "16 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "17 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "18 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "19 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Buy BTC", date: "20 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
            ],
            sellData: [
                { icon: "", buy: "Sell BTC", date: "14 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Sell BTC", date: "16 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Sell BTC", date: "16 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Sell BTC", date: "20 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
                { icon: "", buy: "Sell BTC", date: "21 Mar, 2020", valute: "0.016 BTC", sum: "$125.20"  },
            ],
            listItems: [
                {icon: "", title: "Donec vitae sapien ut", about: "If several languages coalesce, the grammar of the resulting language", date: "12 Mar, 2020", userName: "Joseph"},
                {icon: "", title: "Cras ultricies mi eu turpis", about: "To an English person, it will seem like simplified English, as a skeptical cambridge", date: "13 Mar, 2020", userName: "Jerry"},
                {icon: "", title: "Duis arcu tortor suscipit", about: "It va esser tam simplic quam occidental in fact, it va esser occidental.", date: "14 Mar, 2020", userName: "Calvin"},
                {icon: "", title: "Donec vitae sapien ut", about: "If several languages coalesce, the grammar of the resulting language", date: "12 Mar, 2020", userName: "Joseph"},
            ],
            model: 1
        }),
    };
</script>

<style type="text/css" scoped>
    body{
        color: #495057;
    }
    .card-menu-btn{
        background-color: transparent;
        box-shadow: none;
        padding: 0;
    }
    .card-menu-btn::before{
        content: "";
        display: none;
    }
    .text-muted{
        color: #74788d!important;
    }
    .balance-value{
        font-size: 19.5px;
        color: #495057;
        margin: 0 0 8px;
        font-weight: 500;
    }
    .background-circle{
        padding: 3px;
        border-radius: 1000px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .coin-icons{
        width: 18px;
        height: auto;
    }
    .custom-btn{
        text-transform: capitalize;
        font-size: .8125rem;
        line-height: 1.5;
        border: 1px solid transparent;
        background-color: transparent;
    }
    .right-title{
        font-size: 1.015625rem;
        margin-top: 0;
        margin-bottom: .5rem;
        font-weight: 500;
        line-height: 1.2;
        color: #556ee6;
    }
    p, span{
        color: #495057;
        font-size: .8125rem;
        font-weight: 400;
        line-height: 1.5;
    }
    ul.right-top-list{
        list-style-type: none;
    }
    ul.right-top-list li{
        color: #74788d;
        font-size: .8125rem;
        font-weight: 400;
        line-height: 1.5;
    }
    ul.right-top-list li::before {
        content: "\2022";
        color: #556ee6;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
        font-size: 15px;
    }
    .dashboard-info{
        color: #495057;
        font-size: 13px;
    }
    .dashboard-info span{
        color: #74788d;
    }
    h5{
        margin-bottom: .5rem;
        font-weight: 500;
        line-height: 1.2;
        font-size: 1.015625rem;
    }
    .month-select{
        height: calc(1.5em + .5rem + 2px);
        font-size: .7109375rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        vertical-align: middle;
    }
    .month-select::placeholder{
        font-size: .7109375rem;
    }
    .card-title {
        font-size: 15px;
        margin: 0 0 7px 0;
        font-weight: 600;
    }
    .font-size-14{
        font-size: 14px !important;
    }
    .table{
        overflow-y: auto;
    }
    .table::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(83, 81, 81, 0.3);
        background-color: #F5F5F5;
        border-radius: 1000px;
    }

    .table::-webkit-scrollbar
    {
        width: 5px;
        background-color: #F5F5F5;
    }

    .table::-webkit-scrollbar-thumb
    {
        background-color: #c4c4c4;
        border-radius: 10px;
    }
    .title-label{
        display: inline-block;
        margin-bottom: .5rem;
        font-weight: 500;
        color: #495057;
        font-size: 13px;
    }
    .custom-input{
        border: 1px solid #ced4da;
        border-radius: 4px;
        width: 100%;
        height: auto;
        margin-bottom: 15px;
    }
    .custom-input p{
        font-size: .8125rem;
        font-weight: 400;
        line-height: 1.5;
        color: #495057;
        padding: .47rem .75rem;
        background-color: #eff2f7;
        border-right: 1px solid #ced4da;
        margin: 0;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        cursor: default;
    }
    .input-inside-select{
        border-right: 1px solid #ced4da;
        border-radius: 0;
    }
    .table-data{
        line-height: 1.2;
    }
    .tab-active{
        color: #fff;
        background-color: #556ee6;
        border-bottom: 0;
        border-radius: 4px;
        padding: .5rem 1rem;
        width: auto;
        min-width: auto;
    }
</style>