<template>
    <v-tab-item :value="$route.path">
        <v-card tile flat>
            <v-row no-gutters class="">
                <v-col cols="12" sm="6" class="ml-0 ml-md-12 mt-5">
                    <v-card-title>Coupons with visits</v-card-title>
                    <v-card-subtitle>
                        Reward those who enter your store with a coupon. It only
                        applies to users with an application and is recognized
                        by GPS.
                    </v-card-subtitle>
                    <v-img
                        class="mx-auto mx-sm-0"
                        src="@/assets/checkin_image.jpg"
                        width="280"
                    ></v-img>
                </v-col>

                <v-col cols="12" sm="5" class="mt-10">
                    <v-card outlined class="pb-10">
                        <v-card-title class="justify-center subtitle-2"
                            >Gift Card</v-card-title
                        >

                        <v-card-text>
                            Set a voucher that the customer will win at checkin
                            <v-row
                                no-gutters
                                align="center"
                                class="dashed pa-3 my-4"
                            >
                                <v-col cols="7">
                                    <img
                                        src="@/assets/store-logo.png"
                                        width="35"
                                        style="vertical-align: middle"
                                        class="mr-1 "
                                    />
                                    Coffee
                                </v-col>
                                <v-col cols="5">10 voucher</v-col>
                            </v-row>

                            <v-checkbox color="secondary">
                                <template v-slot:label>
                                    <v-card-text class="pa-0">
                                        Reward with presence in the store
                                    </v-card-text>
                                </template>
                            </v-checkbox>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary" class="text-capitalize" depressed
                    >accept</v-btn
                >
                <v-btn color="red" class="text-capitalize" depressed dark
                    >delete</v-btn
                >
            </v-card-actions>
        </v-card>
    </v-tab-item>
</template>

<script>
export default {
    name: "CouponsWithVisits",

    data: () => ({})
};
</script>
