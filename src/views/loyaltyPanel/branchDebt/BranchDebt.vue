<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                    v-model="tab"
                    color="secondary"
                    :vertical="$vuetify.breakpoint.smAndDown"
            >
                <v-tab class="text-capitalize d-flex justify-sm-start justify-center px-3">Monthly invoicing</v-tab>
                <v-tab class="text-capitalize d-flex justify-sm-start justify-center px-3">Redemption invoice</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <MonthlyInvoicing/>
                <RedemptionInvoice/>
            </v-tabs-items>
        </v-sheet>
    </v-container>
</template>

<script>
    import MonthlyInvoicing from "./tabs/MonthlyInvoicing";
    import RedemptionInvoice from "./tabs/RedemptionInvoice";

    export default {
        name: "BranchDebt",
        components: {
            MonthlyInvoicing,
            RedemptionInvoice
        },
        data: () => ({
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
        })
    };
</script>

<style scoped>
</style>
