<template>
    <v-tab-item :value="$route.path" class="pt-5">
        <v-window v-model="step">
            <v-window-item :value="1">
                <v-card outlined width="500" class="mx-auto">
                    <v-card-title class="justify-space-between grey lighten-3">
                        Plan
                        <v-icon
                            color="secondary"
                            x-large
                            v-text="icons.mdiCashMultiple"
                        ></v-icon>
                    </v-card-title>

                    <v-divider></v-divider>

                    <v-card-text>
                        <v-row no-gutters class="b-outlined">
                            <v-col cols="6">
                                <v-card-title class="justify-center"
                                    >Type</v-card-title
                                >
                                <v-divider></v-divider>
                                <v-card-text class="text-center"
                                    >Monthly Amount</v-card-text
                                >
                            </v-col>
                            <v-col cols="6">
                                <v-card-title class="justify-center"
                                    >Amount</v-card-title
                                >
                                <v-divider></v-divider>
                                <v-card-text class="text-center"
                                    >50000€</v-card-text
                                >
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions class="px-4">
                        Pay with Debit/Credit Card
                        <v-spacer></v-spacer>
                        <v-btn
                            color="secondary"
                            class="text-capitalize"
                            width="120"
                            depressed
                            @click="step++"
                            >payment</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-window-item>

            <v-window-item :value="2">
                <v-tooltip top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="secondary"
                            outlined
                            icon
                            v-on="on"
                            @click="step--"
                        >
                            <v-icon v-text="icons.mdiArrowLeft"></v-icon>
                        </v-btn>
                    </template>

                    <span>Back</span>
                </v-tooltip>

                <v-card class="mx-auto" outlined width="90%">
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

                            <v-row no-gutters justify="space-between">
                                <v-col
                                    cols="6"
                                    class="text-caption text--secondary"
                                >
                                    Merchant:
                                    <br />Merchant site:
                                </v-col>
                                <v-col
                                    cols="6"
                                    class="text-caption text--secondary"
                                >
                                    www.roadcube.com
                                    <br />http://www.roadcube.com
                                </v-col>
                            </v-row>

                            <v-row no-gutters align="center">
                                <v-col
                                    cols="6"
                                    class="text-caption text--secondary"
                                    >This is recurring payment:</v-col
                                >

                                <v-col
                                    cols="6"
                                    class="text-caption text--secondary"
                                >
                                    Reccuring on every 28 days
                                    <br />Reccuring ends on 16/ 09/ 2024
                                </v-col>
                            </v-row>

                            <v-card outlined class="mt-3 mx-7 rounded py-3">
                                <h4 class="subtitle-2 text-center">
                                    Order Amount:
                                </h4>
                                <v-card-title
                                    class="text--secondary justify-center py-0"
                                    >62,000.00 €</v-card-title
                                >
                            </v-card>

                            <v-row no-gutters justify="center" class="mt-3">
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
                                <v-card-title class="font-weight-regular">
                                    Enter Your Card Details:
                                </v-card-title>

                                <v-card-text clas>
                                    <v-text-field
                                        v-model="cardNumber"
                                        v-mask="'####-####-####-####-###'"
                                        label="Card Number"
                                        color="secondary"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>

                                    <v-row
                                        no-gutters
                                        justify="space-between"
                                        align="center"
                                    >
                                        <v-col cols="4" class="pr-1">
                                            <v-select
                                                :items="months"
                                                menu-props="offsetY"
                                                label="Month"
                                                color="secondary"
                                                outlined
                                                dense
                                            ></v-select>
                                        </v-col>

                                        <v-col cols="4" class="px-1">
                                            <v-select
                                                :items="years"
                                                menu-props="offsetY"
                                                label="Year"
                                                color="secondary"
                                                outlined
                                                dense
                                            ></v-select>
                                        </v-col>

                                        <v-col cols="4" class="pl-1">
                                            <v-text-field
                                                v-model="cvv"
                                                v-mask="'####'"
                                                label="CVV"
                                                color="secondary"
                                                outlined
                                                dense
                                                clearable
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-text-field
                                        label="Name on Card"
                                        color="secondary"
                                        outlined
                                        dense
                                        clearable
                                    ></v-text-field>

                                    <v-btn
                                        color="grey lighten-2"
                                        depressed
                                        width="45%"
                                        class="mx-2"
                                        >cancel</v-btn
                                    >
                                    <v-btn
                                        color="secondary"
                                        width="45%"
                                        depressed
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
</template>

<script>
import { mdiCashMultiple, mdiArrowLeft } from "@mdi/js";

export default {
    name: "PaymentMethods",

    data: () => ({
        icons: { mdiCashMultiple, mdiArrowLeft },
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
.b-outlined {
    border: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
