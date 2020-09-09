<template>
    <v-container class="px-4">
        <v-sheet height="calc(100vh - 88px)" class color="#eaedf1">
            <v-row no-gutters class="pa-5 fill-height" justify="center">
                <v-col cols="12">
                    <v-card tile flat height="100%">
                        <v-row no-gutters justify="center">
                            <v-col cols="5">
                                <v-card-title class="text-h5 font-weight-bold pl-0 mt-5">
                                    <v-icon
                                        class="text--primary ml-n1 mr-3"
                                        large
                                        v-text="icons.mdiPlusThick"
                                    ></v-icon>New Transaction
                                </v-card-title>

                                <v-text-field
                                    label="User"
                                    class="rounded-0 mt-12"
                                    outlined
                                    dense
                                    clearable
                                ></v-text-field>

                                <v-text-field
                                    type="number"
                                    label="Amount"
                                    class="rounded-0 mt-5"
                                    outlined
                                    dense
                                    clearable
                                    :append-icon="icons.mdiCurrencyEur"
                                ></v-text-field>

                                <v-text-field
                                    type="number"
                                    label="Receipt Number"
                                    class="rounded-0 mt-5"
                                    outlined
                                    dense
                                    clearable
                                ></v-text-field>

                                <v-btn color="primary" class="mt-12" block large>load points</v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPlusThick, mdiCurrencyEur } from "@mdi/js";

export default {
    name: "NewTransaction",

    data: () => ({
        icons: {
            mdiPlusThick,
            mdiCurrencyEur,
        },
    }),
};
</script>