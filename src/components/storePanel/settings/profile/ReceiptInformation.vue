<template>
    <v-card class="mt-12" outlined>
        <v-card-title class="grey lighten-3">Receipt Information</v-card-title>

        <v-card-text class="pt-4 pb-0">
            <v-row no-gutters>
                <v-col cols="6" class="pr-2">
                    <v-text-field
                        label="Business Telephone Number"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="pl-2">
                    <v-text-field
                        label="Tax Id"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="pr-2">
                    <v-text-field
                        label="Business Address"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="pl-2">
                    <v-text-field
                        label="Business Name"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-card-text>

        <v-card-actions class="pl-4" style="margin-top: 65px">
            <v-btn color="secondary" class="text-capitalize" depressed
                >update details</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "ReceiptInformation"
};
</script>
