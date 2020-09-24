<template>
    <v-card class="mt-12 rounded-lg" outlined>
        <v-card-title class="grey lighten-3">Business Information</v-card-title>
        <v-container class="pt-5">
            <v-row no-gutters justify="space-around">
                <v-col cols="5">
                    <v-text-field
                        label="Business Name"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-text-field
                        label="Business Address"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-select
                        menu-props="offsetY"
                        label="Basic Business Category"
                        color="secondary"
                        outlined
                        dense
                    ></v-select>
                </v-col>
                <v-col cols="5">
                    <v-text-field
                        label="Business Activity"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-autocomplete
                        label="Country"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-autocomplete>
                </v-col>
                <v-col cols="5">
                    <v-text-field
                        type="number"
                        label="Business Telephone Number"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-text-field
                        type="number"
                        label="Business Telephone Number 2"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-text-field
                        type="number"
                        label="Owner's Mobile Phone"
                        color="secondary"
                        outlined
                        dense
                        clearable
                    ></v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-text-field
                        label="Owner's Fullname"
                        color="secondary"
                        outlined
                        dense
                        clearable
                        hide-details
                    ></v-text-field>
                </v-col>
                <v-col cols="5">
                    <v-text-field
                        type="email"
                        label="Email"
                        color="secondary"
                        outlined
                        dense
                        clearable
                        hide-details
                    ></v-text-field>
                </v-col>
            </v-row>
        </v-container>

        <a href="#" class="ml-12">View on Google Maps</a>

        <v-card-actions class="pl-4 mt-2">
            <v-btn color="secondary" class="text-capitalize" depressed
                >update logo</v-btn
            >
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "BusinessInformation"
};
</script>
