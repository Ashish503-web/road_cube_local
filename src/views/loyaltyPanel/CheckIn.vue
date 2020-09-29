<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-alert type="info">
                With this link, you are rewarding the presence of the customer
                in your store controlled by GPS. Every user can make 1 checkin a
                day. When a customer makes a checkin he will earn points that
                are defined by your registration pack and additionally if you
                want a voucher
            </v-alert>

            <v-container>
                <v-row justify="space-around">
                    <v-col cols="5">
                        <v-card class="px-5" outlined>
                            <v-card-title
                                class="subtitle-1 secondary--text font-weight-medium justify-center"
                                >Points</v-card-title
                            >
                            <v-card-text>
                                When the customer comes to the store he will be
                                rewarded with:
                                <v-card outlined class="my-5 pa-5 text-center">
                                    <span
                                        class="subtitle-1 secondary--text font-weight-medium"
                                        >14 KAT</span
                                    >
                                    <span
                                        class="text-h5 secondary--text font-weight-bold"
                                        >/ Checkin</span
                                    >
                                </v-card>

                                <v-alert type="info" dense class="subtitle-2">
                                    To increase your points you need to get a
                                    larger package.
                                </v-alert>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="5">
                        <v-card class="px-5" outlined>
                            <v-card-title
                                class="subtitle-1 secondary--text font-weight-medium justify-center"
                                >Gift Card</v-card-title
                            >

                            <v-card-text class="pb-6">
                                Set a voucher that the customer will win at
                                checkin
                                <v-sheet
                                    class="b-dashed text-center text--secondary font-italic py-2 my-5"
                                >
                                    <img
                                        src="@/assets/logo.png"
                                        width="30"
                                        style="vertical-align: middle"
                                    />
                                    Test </v-sheet
                                >Number of active Voucher codes: 100
                                <v-row
                                    class="mt-5"
                                    no-gutters
                                    justify="space-between"
                                >
                                    <v-btn color="red" depressed small dark>
                                        <v-icon
                                            size="20"
                                            v-text="icons.mdiClose"
                                        ></v-icon
                                        >delete
                                    </v-btn>

                                    <v-btn
                                        color="blue darken-1"
                                        depressed
                                        dark
                                        small
                                    >
                                        <v-icon
                                            size="20"
                                            class="mr-1"
                                            v-text="icons.mdiFacebook"
                                        ></v-icon
                                        >Share 0
                                    </v-btn>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiClose, mdiFacebook } from "@mdi/js";

export default {
    name: "CheckIn",

    data: () => ({
        icons: {
            mdiClose,
            mdiFacebook
        }
    })
};
</script>

<style scoped>
.b-dashed {
    border: 1px dashed grey;
}
</style>
