<template>
    <section>
        <v-row no-gutters justify="space-between" class="pa-5">
            <v-col cols="auto">
                <v-toolbar-title>Plan</v-toolbar-title>
            </v-col>

            <v-col cols="auto">
                <v-card>
                    <v-row no-gutters>
                        <v-col cols="6">
                            <v-card-title class="justify-center">
                                Type
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text class="text-center">
                                Monthly Amount
                            </v-card-text>
                        </v-col>
                        <v-col cols="6">
                            <v-card-title class="justify-center">
                                Amount
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text class="text-center">
                                50000€
                            </v-card-text>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>

            <v-col cols="auto"
                ><v-icon x-large v-text="icons.mdiCashMultiple"></v-icon
            ></v-col>
        </v-row>

        <v-sheet color="#eaedf1" class="pa-5">
            <v-tabs v-model="tab">
                <v-tab class="text-capitalize">detailed information</v-tab>
                <v-tab class="text-capitalize">payment</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item class="pa-10">
                    <v-sheet class="border-red pa-3">
                        <v-card-title class="text-h4 red--text">
                            The date for the next payment has passed
                        </v-card-title>
                        <h4 class="pl-5 red--text">
                            Please update your subscription
                        </h4>

                        <v-card-title
                            class="text-h4 red--text font-weight-light"
                            >Cost: 62.000,00 €</v-card-title
                        >
                    </v-sheet>

                    <v-card-title
                        class="text-h4 font-weight-light justify-center mt-10"
                        >Transaction History</v-card-title
                    >

                    <v-toolbar flat>
                        <v-spacer></v-spacer>
                        <v-col cols="5">
                            <v-text-field
                                label="Search"
                                rounded
                                outlined
                                dense
                                clearable
                                hide-details
                                :append-icon="icons.mdiMagnify"
                            ></v-text-field>
                        </v-col>
                    </v-toolbar>
                    <v-data-table
                        :headers="headers"
                        :items="transactions"
                        :footer-props="{ itemsPerPageOptions }"
                    ></v-data-table>
                </v-tab-item>

                <v-tab-item class="pa-5">
                    <v-window v-model="step">
                        <v-window-item :value="1">
                            <v-card outlined>
                                <v-card-title class="text-h5 font-weight-light">
                                    Pay with Debit/Credit Card
                                </v-card-title>
                            </v-card>

                            <v-btn
                                color="primary"
                                class="text-capitalize mt-5"
                                width="120"
                                rounded
                                @click="step++"
                                >payment</v-btn
                            >
                        </v-window-item>

                        <v-window-item :value="2">
                            <v-btn icon large @click="step--">
                                <v-icon v-text="icons.mdiArrowLeft"></v-icon>
                            </v-btn>

                            <v-card class="rounded-lg elevation-5 mt-5">
                                <v-row no-gutters>
                                    <v-col cols="5" class="grey lighten-3 pa-3">
                                        <v-img
                                            src="@/assets/cardlink_image.png"
                                            width="100%"
                                        ></v-img>

                                        <v-card-title
                                            class="justify-center font-weight-regular text--secondary text-h5"
                                            >Transaction Details</v-card-title
                                        >

                                        <v-row
                                            no-gutters
                                            justify="space-between"
                                        >
                                            <v-col
                                                cols="6"
                                                class="text-caption text--secondary"
                                            >
                                                Merchant: <br />
                                                Merchant site:
                                            </v-col>
                                            <v-col
                                                cols="6"
                                                class="text-caption text--secondary"
                                            >
                                                www.roadcube.com <br />
                                                http://www.roadcube.com
                                            </v-col>
                                        </v-row>

                                        <v-row no-gutters align="center">
                                            <v-col
                                                cols="6"
                                                class="text-caption text--secondary"
                                            >
                                                This is recurring payment:
                                            </v-col>

                                            <v-col
                                                cols="6"
                                                class="text-caption text--secondary"
                                            >
                                                Reccuring on every 28 days
                                                <br />
                                                Reccuring ends on 16/ 09/ 2024
                                            </v-col>
                                        </v-row>

                                        <v-card
                                            outlined
                                            class="mt-3 mx-7 rounded py-3"
                                        >
                                            <h4 class="subtitle-2 text-center">
                                                Order Amount:
                                            </h4>
                                            <v-card-title
                                                class="text--secondary justify-center py-0"
                                                >62,000.00 €</v-card-title
                                            >
                                        </v-card>

                                        <v-row
                                            no-gutters
                                            justify="center"
                                            class="mt-3"
                                        >
                                            <v-col cols="2" class="mr-1">
                                                <v-img
                                                    src="@/assets/visa_verified.png"
                                                ></v-img>
                                            </v-col>
                                            <v-col cols="3">
                                                <v-img
                                                    src="@/assets/mastercard_securecode.png"
                                                ></v-img>
                                            </v-col>
                                        </v-row>
                                    </v-col>

                                    <v-col cols="7" class="grey lighten-5 pa-3">
                                        <v-card
                                            color="grey lighten-5"
                                            tile
                                            flat
                                            class="mx-10"
                                        >
                                            <v-card-title
                                                class="font-weight-regular"
                                                >Enter Your Card
                                                Details:</v-card-title
                                            >

                                            <v-card-text clas>
                                                <v-text-field
                                                    v-model="cardNumber"
                                                    v-mask="
                                                        '####-####-####-####-###'
                                                    "
                                                    label="Card Number"
                                                    rounded
                                                    outlined
                                                    dense
                                                    clearable
                                                ></v-text-field>

                                                <v-row
                                                    no-gutters
                                                    justify="space-between"
                                                    align="center"
                                                >
                                                    <v-col
                                                        cols="4"
                                                        class="pr-1"
                                                    >
                                                        <v-select
                                                            class="d-inline-block"
                                                            :items="months"
                                                            menu-props="offsetY"
                                                            label="Month"
                                                            outlined
                                                            dense
                                                        ></v-select>
                                                    </v-col>

                                                    <v-col
                                                        cols="4"
                                                        class="px-1"
                                                    >
                                                        <v-select
                                                            :items="years"
                                                            menu-props="offsetY"
                                                            label="Year"
                                                            outlined
                                                            dense
                                                        ></v-select>
                                                    </v-col>

                                                    <v-col
                                                        cols="4"
                                                        class="pl-1"
                                                    >
                                                        <v-text-field
                                                            v-model="cvv"
                                                            v-mask="'####'"
                                                            label="CVV"
                                                            outlined
                                                            dense
                                                            clearable
                                                        ></v-text-field>
                                                    </v-col>
                                                </v-row>

                                                <v-text-field
                                                    label="Name on Card"
                                                    rounded
                                                    outlined
                                                    dense
                                                    clearable
                                                ></v-text-field>

                                                <v-btn
                                                    color="grey lighten-2"
                                                    depressed
                                                    width="45%"
                                                    rounded
                                                    class="mx-2"
                                                    >cancel</v-btn
                                                >
                                                <v-btn
                                                    color="primary"
                                                    width="45%"
                                                    rounded
                                                    class="mx-2"
                                                    >payment</v-btn
                                                >
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-tab-item>
            </v-tabs-items>
        </v-sheet>
    </section>
</template>

<script>
import { mdiCashMultiple, mdiMagnify, mdiArrowLeft } from "@mdi/js";

export default {
    name: "Subscription",

    data: () => ({
        icons: {
            mdiCashMultiple,
            mdiMagnify,
            mdiArrowLeft
        },
        tab: 0,
        itemsPerPageOptions: [10, 25, 50, 100],
        headers: [
            { text: "Date", value: "date" },
            { text: "Description", value: "description" },
            { text: "Payment Through", value: "paymentThrough" },
            { text: "Amount", value: "amount" }
        ],
        transactions: [
            {
                date: "19-05-2020",
                description: "Payment: Online",
                paymentThrough: "Card: **********3434",
                amount: "37,20 €"
            }
        ],
        step: 1,
        cardNumber: "",
        months: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12"
        ],
        cvv: ""
    }),

    computed: {
        years() {
            let arr = [];
            let year = new Date().getFullYear();

            arr.push(year);

            for (let i = 0; i < 29; i++) {
                arr.push(++arr[arr.length - 1]);
            }

            return arr;
        }
    }
};
</script>

<style scoped>
.border-red {
    border: 1px solid red;
}
</style>
