<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="mode === 1 ? create() : update()"
    >
        <v-row no-gutters>
            <v-col cols="6" class="pr-2">
                <b-select
                    v-model="store.store_subscription_plan_id"
                    :items="subscriptionPlans"
                    item-text="plan_name"
                    item-value="store_subscription_plan_id"
                    label="Select Package"
                    no-top-margin
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
                ></b-select>
            </v-col>

            <!-- <v-col cols="6" class="pl-2">
                <b-select
                    :items="giftCategories"
                    label="Choose Gift Category"
                ></b-select>
            </v-col> -->

            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="store.name"
                    label="Name of Store"
                    class="mt-3"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="store.address"
                    label="Address of Store"
                    class="mt-3"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="store.zip"
                    v-mask="'#####'"
                    label="Zip Code"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="store.vat_number"
                    v-mask="'#########'"
                    label="Vat Number"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    v-model="store.email"
                    type="email"
                    label="Email of Store"
                    class="mt-3"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-text-field
                    v-model="store.primary_phone"
                    v-mask="'##########'"
                    label="Primary Phone"
                ></b-text-field>
            </v-col>

            <!-- <v-col cols="6" class="pr-2">
                <b-select
                    :items="regions"
                    label="Select Region"
                    class="mt-3"
                ></b-select>
            </v-col>

            <v-col cols="6" class="pl-2">
                <v-form @submit.prevent="addRegion">
                    <v-row no-gutters>
                        <v-col cols="9">
                            <b-text-field
                                v-model="region"
                                label="Add Region"
                                class="mt-3"
                                prepend-inner-icon="mdiPlus"
                            ></b-text-field>
                        </v-col>

                        <v-col cols="3" class="pl-1">
                            <v-btn
                                type="submit"
                                color="secondary"
                                class="text-capitalize mt-3"
                                height="40"
                                depressed
                                >add</v-btn
                            >
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    type="number"
                    label="Number of Store"
                    class="mt-3"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-text-field label="ID" class="mt-3"></b-text-field>
            </v-col> -->

            <v-col cols="12">
                <v-checkbox
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details="auto"
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
                    color="secondary"
                    class="mt-3 pt-0"
                    hide-details="auto"
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
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "StoreForm",

    props: {
        mode: {
            type: Number
        }
    },

    data: () => ({
        giftCategories: [
            "Auto - Moto",
            "Entertainment",
            "Sports, Fitness",
            "Travel, Leisure",
            "Food, Drink",
            "For the House",
            "Clothing, Footwear, Accessories",
            "Health, Care, Beauty",
            "Department Stores",
            "Others",
            "Technology"
        ],
        region: "",
        regions: ["Region 1", "Region 2", "Region 3"],
        test: ""
    }),

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation"
        ]),
        ...mapState("loyaltyPanel/stores/storesTab", [
            "subscriptionPlans",
            "countries"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1 ? "New Shop" : "Update Shop";
        },

        store() {
            return this.$store.state.loyaltyPanel.stores.storesTab.store;
        }
    },

    methods: {
        ...mapActions("loyaltyPanel/stores/storesTab", [
            "getSubscriptionPlans",
            "getCountries",
            "getItem",
            "create",
            "update"
        ])

        // addRegion() {
        //     this.regions.push(this.region);
        //     this.region = "";
        // }
    },

    mounted() {
        if (this.mode === 2) this.getItem(this.store.store_id);
        this.getSubscriptionPlans();
        this.getCountries();
    }
};
</script>
