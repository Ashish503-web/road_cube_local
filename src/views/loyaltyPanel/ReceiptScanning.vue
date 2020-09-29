<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-alert type="info">
                When the customer scans a receipt with them Your details will
                then be rewarded with points or with a further coupon if you
                specify it below. Each customer can only scan 1 receipt every
                day.
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
                                <v-text-field
                                    class="mt-3"
                                    color="secondary"
                                    outlined
                                    dense
                                    clearable
                                    :append-icon="icons.mdiCurrencyEur"
                                ></v-text-field>

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
                                >Voucher</v-card-title
                            >

                            <v-card-text class="pb-6">
                                <v-sheet
                                    class="b-dashed text-center text--secondary font-italic py-2 mb-5"
                                    >No giftware</v-sheet
                                >Number of active Voucher codes:
                                <v-btn
                                    color="secondary"
                                    class="text-capitalize mt-5"
                                    depressed
                                    @click="dialog = true"
                                    >create new voucher</v-btn
                                >
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <v-dialog v-model="dialog" max-width="40%" scrollable>
                <v-card>
                    <v-card-title class="grey lighten-3">
                        <v-icon
                            v-text="icons.mdiAutoFix"
                            color="secondary"
                            large
                            class="mr-3"
                        ></v-icon
                        >New Voucher
                        <v-spacer></v-spacer>
                        <v-icon
                            color="secondary"
                            large
                            v-text="icons.mdiPlus"
                        ></v-icon>
                    </v-card-title>

                    <v-card-text class="pt-7">
                        <v-text-field
                            label="Title"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-textarea
                            label="Description"
                            rounded
                            outlined
                            clearable
                        ></v-textarea>

                        <v-text-field
                            type="number"
                            label="Number of Vouchers"
                            rounded
                            outlined
                            dense
                            clearable
                        ></v-text-field>

                        <v-file-input
                            label="Upload Voucher Image"
                            rounded
                            outlined
                            dense
                        ></v-file-input>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="dialog = false">cancel</v-btn>
                        <v-btn color="primary" width="80">save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiCurrencyEur, mdiPlus, mdiAutoFix } from "@mdi/js";

export default {
    name: "ReceiptScanning",

    data: () => ({
        icons: {
            mdiCurrencyEur,
            mdiPlus,
            mdiAutoFix
        },
        dialog: false
    })
};
</script>

<style scoped>
.b-dashed {
    border: 1px dashed grey;
}
</style>
