<template>
    <b-standard-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
        :disabled="!formValid"
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
                    :success="success.name"
                    :error-messages="error.name"
                    @focus="error.name = ''"
                    @blur="validateName"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.primary_phone"
                    v-mask="'##########'"
                    type="number"
                    :label="translations.telephone[lang]"
                    :success="success.primaryPhone"
                    :error-messages="error.primaryPhone"
                    @focus="error.primaryPhone = ''"
                    @blur="validatePrimaryPhone"
                ></b-text-field>

                <b-select
                    v-model="businessInformation.country_id"
                    :items="countries"
                    item-text="name"
                    item-value="country_id"
                    :label="translations.country[lang]"
                    :success="success.country"
                    :error-messages="error.country"
                    @focus="error.country = ''"
                    @blur="validateCountry"
                ></b-select>

                <b-text-field
                    v-model="businessInformation.secondary_phone"
                    v-mask="'##########'"
                    type="number"
                    :label="translations.telephone2[lang]"
                    :success="success.secondaryPhone"
                    :error-messages="error.secondaryPhone"
                    @focus="error.secondaryPhone = ''"
                    @blur="validateSecondaryPhone"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.full_name"
                    :label="translations.fullname[lang]"
                    :success="success.fullname"
                    :error-messages="error.fullname"
                    @focus="error.fullname = ''"
                    @blur="validateFullname"
                ></b-text-field>
            </v-col>

            <v-col cols="12" sm="5">
                <Places
                    v-model="businessInformation.address"
                    :label="translations.address[lang]"
                    outlined
                    dense
                    hide-details="auto"
                    :success="success.address"
                    :error-messages="error.address"
                    @focus="error.address = ''"
                    @blur="validateAddress"
                />

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
                    :success="success.activity"
                    :error-messages="error.activity"
                    @focus="error.activity = ''"
                    @blur="validateActivity"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.mobile"
                    v-mask="'##########'"
                    type="number"
                    :label="translations.ownersPhone[lang]"
                    :success="success.mobile"
                    :error-messages="error.mobile"
                    @focus="error.mobile = ''"
                    @blur="validateMobile"
                ></b-text-field>

                <b-text-field
                    v-model="businessInformation.email"
                    type="email"
                    :label="translations.email[lang]"
                    :success="success.email"
                    :error-messages="error.email"
                    @focus="error.email = ''"
                    @blur="validateEmail"
                ></b-text-field>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

import Places from "@/components/general/Places.vue";
import translations from "@/utils/translations/storePanel/settings/profile/businessInformation";
import validators from "@/utils/validators/storePanel/businessInformation";

export default {
    name: "BusinessInformation",

    components: { Places },

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
            return this.$store.state.storePanel.profile.loading
                .businessInformation;
        },

        errorMessage() {
            return this.$store.state.storePanel.profile.errorMessage
                .businessInformation;
        },

        resetSuccess() {
            return this.$store.state.storePanel.profile.resetSuccess
                .businessInformation;
        },

        countries() {
            return this.$store.state.storePanel.profile.countries;
        }
    },

    methods: {
        ...mapMutations("storePanel/profile", ["setResetSuccess"]),
        ...mapActions("storePanel/profile", [
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

                this.setResetSuccess({
                    value: true,
                    type: "businessInformation"
                });
            }
        }
    },

    mounted() {
        this.getCountries();
    }
};
</script>
