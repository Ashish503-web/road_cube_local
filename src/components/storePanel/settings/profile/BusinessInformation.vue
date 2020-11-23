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
                    :validate-on-blur="false"
                    :success="success.name"
                    :rules="rules.name"
                    @cancel-success="success.name = false"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.primary_phone"
                    v-mask="'##########'"
                    type="number"
                    :label="translations.telephone[lang]"
                    :validate-on-blur="false"
                    :success="success.primaryPhone"
                    :rules="rules.primaryPhone"
                    @cancel-success="success.primaryPhone = false"
                ></b-text-field>

                <b-select
                    v-model="businessInformation.country_id"
                    :items="countries"
                    item-text="name"
                    item-value="country_id"
                    :label="translations.country[lang]"
                    :success="success.country"
                    :rules="rules.country"
                ></b-select>

                <b-text-field
                    v-model="businessInformation.secondary_phone"
                    v-mask="'##########'"
                    type="number"
                    :label="translations.telephone2[lang]"
                    :validate-on-blur="false"
                    :success="success.secondaryPhone"
                    :rules="rules.secondaryPhone"
                    @cancel-success="success.secondaryPhone = false"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.full_name"
                    :label="translations.fullname[lang]"
                    :validate-on-blur="false"
                    :success="success.fullname"
                    :rules="rules.fullname"
                    @cancel-success="success.fullname = false"
                ></b-text-field>
            </v-col>

            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="businessInformation.address"
                    :label="translations.address[lang]"
                    no-top-margin
                    :validate-on-blur="false"
                    :success="success.address"
                    :rules="rules.address"
                    @cancel-success="success.address = false"
                ></b-text-field>

                <v-btn
                    :href="
                        `http://maps.google.com/?q=${businessInformation.address}`
                    "
                    target="_blank"
                    class="text-capitalize mt-3"
                    height="40"
                    block
                    outlined
                >
                    <img
                        src="@/assets/google-maps.png"
                        alt="google maps"
                        width="30"
                        height="30"
                    />
                    {{ translations.googleMaps[lang] }}
                </v-btn>

                <b-text-field
                    v-model="businessInformation.activity"
                    :label="translations.activity[lang]"
                    :validate-on-blur="false"
                    :success="success.activity"
                    :rules="rules.activity"
                    @cancel-success="success.activity = false"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.mobile"
                    v-mask="'##########'"
                    type="number"
                    :label="translations.ownersPhone[lang]"
                    :validate-on-blur="false"
                    :success="success.mobile"
                    :rules="rules.mobile"
                    @cancel-success="success.mobile = false"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.email"
                    type="email"
                    :label="translations.email[lang]"
                    :validate-on-blur="false"
                    :success="success.email"
                    :rules="rules.email"
                    @cancel-success="success.email = false"
                ></b-text-field>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/profile/businessInformation";
import validators from "./businessInformationValidators";

export default {
    name: "BusinessInformation",

    mixins: [translations, validators],

    data: () => ({
        businessInformation: {},
        validate: false
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

        countries() {
            return this.$store.state.storePanel.settings.profile.countries;
        }
    },

    methods: {
        ...mapActions("storePanel/settings/profile", [
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

                setTimeout(() => {
                    this.success = {
                        name: false,
                        primaryPhone: false,
                        country: false,
                        secondaryPhone: false,
                        fullname: false,
                        address: false,
                        activity: false,
                        mobile: false,
                        email: false
                    };
                }, 300);
            }
        }
    },

    mounted() {
        this.getCountries();
    }
};
</script>
