<template>
    <v-tab-item :value="$route.path">
        <v-card tile flat>
            <v-row no-gutters class="mt-5">
                <v-col
                    cols="12"
                    sm="6"
                    class="px-3 mx-auto mx-sm-0 text-center text-sm-left"
                >
                    <v-card-title>
                        <v-col class="pa-0">Coupons with transactions</v-col>
                        <v-col cols="auto" class="pa-0"></v-col>
                    </v-card-title>
                    <v-card-subtitle>
                        <p class="ma-0">
                            Reward every x transactions with a coupon.
                        </p>
                        <p>
                            Consumers who meet the conditions automatically
                            receive the coupon.
                        </p>
                    </v-card-subtitle>
                    <v-img
                        src="@/assets/serial_shopping.jpg"
                        width="280"
                        class="mx-auto mx-sm-0"
                    ></v-img>
                </v-col>

                <v-col cols="12" sm="6" class="px-3 pt-6">
                    <v-text-field
                        label="Reward user after"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                    <v-text-field
                        label="Minimum transaction limit in euro"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                    <v-text-field
                        label="Maximum time between visits: (Days)"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>

                    <v-card outlined class="pa-3">
                        <v-row no-gutters align="center">
                            <v-col cols="auto">
                                <v-img
                                    src="@/assets/imageSerial.png"
                                    width="35"
                                ></v-img>
                            </v-col>
                            <v-col cols="auto" class="ml-2">sada</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="auto">1231 voucher</v-col>
                        </v-row>
                    </v-card>

                    <v-card-actions class="mt-12">
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red"
                            class="text-capitalize px-5"
                            depressed
                            dark
                            >delete</v-btn
                        >
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-tab-item>
</template>

<script>
export default {
    name: "CouponsWithTransactions"
};
</script>
