<template>
    <div style="background-color: #eaedf1">
        <v-card flat color="white" class="px-5 py-8 rounded-0">
            <v-row>
                <v-col cols="11">
                    <v-text-field
                        type="date"
                        flat
                        dense
                        solo
                        hide-details
                        outlined
                        rounded
                        height="34px"
                        color="grey lighten"
                        class="grey lighten "
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col align="right" cols="11" class="pb-0">
                    <v-btn rounded outlined class="search-btn">Search </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="pt-0 pb-10">
                    <h3 class="text-h5 font-weight-light ">
                        Points from Stores
                    </h3>
                </v-col>
            </v-row>
        </v-card>
        <v-card flat color="transparent" class="rounded-0 pa-5">
            <v-card-title class="font-weight-light body-2 px-0">
                <a href="#" style="color: #1bbae1" class="text-decoration-none"
                    >Export to Excel</a
                >/<a
                    href="#"
                    class="text-decoration-none"
                    style="color: #1bbae1"
                    >Export to CSV</a
                >
            </v-card-title>
            <v-card class="rounded-0 table-wrapper" flat>
                <v-card-title class="font-weight-medium body-1 table-title"
                    >Due Branch</v-card-title
                >
                <v-tabs
                    v-model="tab"
                    hide-slider
                    active-class="tab-active"
                    class="tab-wrapper"
                    background-color="transparent"
                >
                    <v-tab class="text-capitalize ml-1 body-2"
                        >Monthly invoicing</v-tab
                    >
                    <v-tab class="text-capitalize ml-2 body-2"
                        >Redemption invoice</v-tab
                    >
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <monthly-invoicing></monthly-invoicing>
                    </v-tab-item>
                    <v-tab-item>
                        <redemption-invoice></redemption-invoice>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </v-card>
    </div>
</template>

<script>
import { mdiCalendar, mdiMagnify } from "@mdi/js";
import MonthlyInvoicing from './components/MonthlyInvoicing'
import RedemptionInvoice from './components/RedemptionInvoice'
export default {
    name: "BranchDebt",
    data: () => ({
        icons: {
            mdiCalendar,
            mdiMagnify
        },
        tableheader: [
            { text: "Date", value: "date" },
            { text: "Name", value: "name" },
            { text: "Street address", value: "street_address" },
            { text: "Product", value: "product" },
            { text: "Product Code", value: "product_code" },
            { text: "Bank", value: "bank" },
            { text: "With subsidy", value: "with_subsidy" },
            { text: "Without subsidy", value: "without_subsidy" },
            { text: "Payment", value: "payment" }
        ],
        tablebody: [
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            },
            {
                date: "14.09.2020",
                name: "Bill",
                street_address: "Moskovyan 14",
                product: "Phone",
                product_code: "12345",
                bank: "HSBC",
                with_subsidy: "yes",
                without_subsidy: "no",
                payment: "USD"
            }
        ],
        tableheader2: [
            { text: "Date", value: "date" },
            { text: "Name of Shop", value: "name_of_shop" },
            { text: "Points", value: "points" },
            { text: "Redeemed Coupons", value: "redeemed_coupons" }
        ],
        tablebody2: [
            {
                date: "14.09.2020",
                name_of_shop: "Bill",
                points: "Moskovyan 14",
                redeemed_coupons: "Phone"
            }
        ],
        search: "",
        tab: 0,
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        perPage: [10, 20, 30]
    }),
    components:{
        'monthly-invoicing':MonthlyInvoicing,
        'redemption-invoice':RedemptionInvoice
    }
};
</script>

<style type="text/css" scoped>
.search-btn {
    display: inline-block;
    background-color: #f1f3f6;
    border-color: #dbe1e8;
    color: #394263;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    text-shadow: 0 1px 0 #fff;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
        0 1px 1px rgba(0, 0, 0, 0.075);
    text-transform: capitalize;
}
.table-wrapper {
    background-color: #f9fafc;
    border-bottom: 1px solid #eaedf1;
}
.table-title {
    padding-bottom: 2em;
    padding-top: 1.5em;
    border-bottom: 1px solid #eaedf1;
    margin-bottom: 2px;
}
.tab-wrapper {
    margin-top: 10px;
    margin-bottom: -1px;
    color: aqua;
}
.tab-active {
    z-index: 1;
    background-color: #fff;
    border: 1px solid #eaedf1;
    border-bottom: 1px solid transparent;
    color: #000;
}
.table-search {
    background-color: #f9fafc;
    border: 1px solid #eaedf1;
}
.pagination {
    background-color: #f9fafc;
    border: 1px solid #eaedf1;
}
.branch-table {
    border: 1px solid #eaedf1;
    border-bottom: none;
    border-top: none;
}
</style>
