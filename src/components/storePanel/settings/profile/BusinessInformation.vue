<template>
    <b-standard-card title="Business Information">
        <v-row no-gutters justify="space-around" class="pt-6 pb-4">
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.name"
                    label="Business Name"


                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.address"
                    label="Business Address"

                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-select
                    v-model="businessInformation.store_category_id"
                    label="Basic Business Category"
                    :items="categories"
                ></b-select>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.activity"
                    label="Business Activity"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-autocomplete
                    v-model="businessInformation.country_id"
                    label="Country"
                    :items="countries"
                ></b-autocomplete>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.primary_phone"
                    type="number"
                    label="Business Telephone Number"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.secondary_phone"
                    type="number"
                    label="Business Telephone Number 2"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.owner_primary_phone"
                    type="number"
                    label="Owner's Mobile Phone"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.owner_fullname"
                    label="Owner's Fullname"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.owner_email"
                    type="email"
                    label="Email"
                ></b-text-field>
            </v-col>

            <v-col cols="11" class="mt-3">
                <a href="#" class="subtitle-1">View on Google Maps</a>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
// import { mapMutations, mapActions } from "vuex";

export default {
    name: "BusinessInformation",

    data: () => ({
        categories: [{ text: "Category", value: 1 }],
        countries: [{ text: "Country", value: 1 }],
        businessInformation: {},
    }),

    computed: {
        // loading() {
        //     return this.$store.state.storePanel.settings.profile.loading
        //         .businessInformation;
        // },
        // errorMessage() {
        //     return this.$store.state.storePanel.settings.profile.errorMessage
        //         .businessInformation;
        // },
        // businessInformation: {
        //     get() {
        //         return this.$store.state.storePanel.settings.profile
        //             .businessInformation;
        //     },
        //     set(val) {
        //         this.updateItem(val);
        //     },
        // },
    },

    methods: {
        // ...mapMutations("storePanel/settings/profile/businessInformation", [
        //     "updateItem",
        // ]),
        // ...mapActions("storePanel/settings/profile/businessInformation", [
        //     "update",
        // ]),
    },
};
</script>
