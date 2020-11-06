<template>
    <b-standard-card
        :title="translations.title[lang]"
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
                    :label="translations.name[lang]"
                    no-top-margin
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.primary_phone"
                    type="number"
                    :label="translations.telephone[lang]"
                ></b-text-field>

                <b-select
                    v-model="businessInformation.country_id"
                    :items="countries"
                    item-text="name"
                    item-value="country_id"
                    :label="translations.country[lang]"
                ></b-select>

                <b-text-field
                    v-model="businessInformation.secondary_phone"
                    type="number"
                    :label="translations.telephone2[lang]"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.full_name"
                    :label="translations.fullname[lang]"
                ></b-text-field>
            </v-col>

            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.address"
                    :label="translations.address[lang]"
                    no-top-margin
                ></b-text-field>

                <v-btn
                    :href="
                        `http://maps.google.com/?q=${businessInformation.address}`
                    "
                    target="_blank"
                    class="text-capitalize mt-3"
                    block
                    outlined
                    >{{ translations.googleMaps[lang] }}</v-btn
                >

                <b-text-field
                    v-model="businessInformation.activity"
                    :label="translations.activity[lang]"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.mobile"
                    type="number"
                    :label="translations.ownersPhone[lang]"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.email"
                    type="email"
                    :label="translations.email[lang]"
                ></b-text-field>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/businessInformation";

export default {
    name: "BusinessInformation",

    mixins: [translations],

    data: () => ({
        businessInformation: {}
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

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
