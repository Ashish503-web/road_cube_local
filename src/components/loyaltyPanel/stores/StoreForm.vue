<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :disabled="mode === 1 ? !formValid : false"
        @cancel="$emit('cancel')"
        @submit="mode === 1 ? create(newStoreManager) : update()"
    >
        <v-row no-gutters>
            <v-col cols="6" class="pr-2">
                <b-select
                    v-model="store.store_subscription_plan_id"
                    :items="subscriptionPlans"
                    :item-text="`plan_name[${lang}]`"
                    item-value="store_subscription_plan_id"
                    label="Select Package"
                    no-top-margin
                    :success="success.subscriptionPlan"
                    :error-messages="error.subscriptionPlan"
                    @focus="error.subscriptionPlan = ''"
                    @blur="validateSubscriptionPlan"
                ></b-select>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-select
                    v-model="store.country_id"
                    :items="countries"
                    item-text="name"
                    item-value="country_id"
                    label="Country"
                    no-top-margin
                    :success="success.country"
                    :error-messages="error.country"
                    @focus="error.country = ''"
                    @blur="validateCountry"
                ></b-select>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="store.name"
                    label="Store Name"
                    :success="success.name"
                    :error-messages="error.name"
                    @focus="error.name = ''"
                    @blur="validateName"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <Places
                    :initial-address="store.address"
                    label="Address"
                    class="mt-3"
                    outlined
                    dense
                    hide-details="auto"
                    :success="success.address"
                    :error-messages="error.address"
                    @focus="error.address = ''"
                    @blur="validateAddress"
                    @newAddress="setAddressDetails"
                />
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="store.vat_number"
                    v-mask="'#########'"
                    label="Vat Number"
                    :success="success.vatNumber"
                    :error-messages="error.vatNumber"
                    @focus="error.vatNumber = ''"
                    @blur="validateVatNumber"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="store.email"
                    type="email"
                    label="Email of Store"
                    :success="success.email"
                    :error-messages="error.email"
                    @focus="error.email = ''"
                    @blur="validateEmail"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="store.primary_phone"
                    v-mask="'##########'"
                    label="Primary Phone"
                    :success="success.primaryPhone"
                    :error-messages="error.primaryPhone"
                    @focus="error.primaryPhone = ''"
                    @blur="validatePrimaryPhone"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-select
                    v-model="store.store_company_network_region_id"
                    :items="networkRegions"
                    item-text="name"
                    item-value="store_company_network_region_id"
                    label="Network region"
                ></b-select>
            </v-col>

            <v-col cols="12">
                <v-checkbox
                    v-model="newStoreManager"
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details="auto"
                >
                    <template v-slot:label>
                        <h4 class="secondary--text">Add new store manager</h4>
                    </template>
                </v-checkbox>
            </v-col>

            <template v-if="newStoreManager">
                <v-col cols="6" class="pr-2">
                    <b-text-field
                        v-model="userDetails.full_name"
                        label="Full Name"
                        :success="success.fullname"
                        :error-messages="error.fullname"
                        @focus="error.fullname = ''"
                        @blur="validateFullname"
                    ></b-text-field>
                </v-col>

                <v-col cols="6" class="pl-2">
                    <b-text-field
                        v-model="userDetails.mobile"
                        v-mask="'##########'"
                        label="Mobile"
                        :success="success.mobile"
                        :error-messages="error.mobile"
                        @focus="error.mobile = ''"
                        @blur="validateMobile"
                    ></b-text-field>
                </v-col>
            </template>
        </v-row>

        <v-checkbox
            v-model="userDetails.tos"
            color="secondary"
            class="mt-3 pt-0"
            hide-details="auto"
            :success="success.tos"
            :error-messages="error.tos"
        >
            <template v-slot:label>
                I accept
                <router-link
                    class="blue--text mx-1"
                    :to="`/${lang}/terms-of-service`"
                >
                    Terms of Services
                </router-link>
                and
                <router-link
                    class="blue--text ml-1"
                    :to="`/${lang}/privacy-policy`"
                >
                    Privacy Policy</router-link
                >
            </template>
        </v-checkbox>

        <v-checkbox
            v-model="userDetails.marketing"
            color="secondary"
            class="mt-3 pt-0"
            hide-details="auto"
            :success="success.marketing"
            :error-messages="error.marketing"
        >
            <template v-slot:label>
                I accept
                <router-link
                    class="blue--text ml-1"
                    :to="`/${lang}/direct-marketing`"
                >
                    Direct Marketing
                </router-link>
            </template>
        </v-checkbox>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import Places from "@/components/general/Places.vue";
import validators from "@/utils/validators/loyaltyPanel/store";

export default {
    name: "StoreForm",

    components: { Places },

    mixins: [validators],

    props: {
        mode: Number,
    },

    data: () => ({
        isAddress: false,
        newStoreManager: false,
    }),

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("loyaltyPanel/stores/storesTab", [
            "subscriptionPlans",
            "countries",
            "networkRegions",
            "store",
            "userDetails",
        ]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1 ? "New Shop" : "Update Shop";
        },
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapActions("loyaltyPanel/stores/storesTab", [
            "getSubscriptionPlans",
            "getCountries",
            "getNetworkRegions",
            "getItem",
            "create",
            "update",
        ]),

        setAddressDetails(place) {
            this.isAddress = place.isAddress;
            this.store.address = place.address;
            this.store.zip = place.zip;
            this.store.lat = place.lat;
            this.store.lon = place.lon;
        },
    },

    watch: {
        store(val){
            console.log(val,'val;111')
        }
    },

    mounted() {
        this.getSubscriptionPlans();
        this.getCountries();
        this.getNetworkRegions()
        if (this.mode === 2) this.isAddress = true;
    },
};
</script>
