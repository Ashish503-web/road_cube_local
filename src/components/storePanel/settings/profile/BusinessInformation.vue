<template>
    <b-standard-card
        title="Business Information"
        :loading="loading"
        :error-message="errorMessage"
        @submit="
            updateBusinessInformation({
                type: 'businessInformation',
                item: businessInformation
            })
        "
    >
        <v-row no-gutters justify="space-around" class="pt-6 pb-4">
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.name"
                    label="Business Name"
                ></b-text-field>

                <b-select
                    v-model="businessInformation.store_category_id"
                    :items="storeCategories"
                    item-text="name.en"
                    item-value="store_category_id"
                    label="Basic Business Category"
                ></b-select>

                <b-select
                    v-model="businessInformation.country_id"
                    :items="countries"
                    item-text="name"
                    item-value="country_id"
                    label="Country"
                ></b-select>

                <b-text-field
                    v-model="businessInformation.secondary_phone"
                    type="number"
                    label="Business Telephone Number 2"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.full_name"
                    label="Owner's Fullname"
                ></b-text-field>
            </v-col>

            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.address"
                    label="Business Address"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.activity"
                    label="Business Activity"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.primary_phone"
                    type="number"
                    label="Business Telephone Number"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.mobile"
                    type="number"
                    label="Owner's Mobile Phone"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.email"
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
import { mapActions } from "vuex";

export default {
    name: "BusinessInformation",

    data: () => ({
        businessInformation: {}
    }),

    computed: {
        loading() {
            return this.$store.state.storePanel.settings.profile.loading
                .businessInformation;
        },

        errorMessage() {
            return this.$store.state.storePanel.settings.profile.errorMessage
                .businessInformation;
        },

        storeCategories() {
            return this.$store.state.storePanel.settings.profile
                .storeCategories;
        },

        countries() {
            return this.$store.state.storePanel.settings.profile.countries;
        }
    },

    methods: {
        ...mapActions("storePanel/settings/profile", [
            "getStoreCategories",
            "getCountries",
            "updateBusinessInformation"
        ])
    },

    watch: {
        ["$store.state.storePanel.store"]: {
            immediate: true,
            handler(val) {
                this.businessInformation = {
                    name: val.name,

                    address: val.address,

                    store_category_id: val.category.store_category_id,

                    activity: val.billing_details.activity,

                    country_id: val.country.country_id,

                    primary_phone: val.primary_phone,

                    secondary_phone: val.secondary_phone,

                    mobile: val.billing_details.mobile,

                    full_name: val.billing_details.full_name,

                    email: val.email
                };
            }
        }
    },

    mounted() {
        this.getStoreCategories();
        this.getCountries();
    }
};
</script>
