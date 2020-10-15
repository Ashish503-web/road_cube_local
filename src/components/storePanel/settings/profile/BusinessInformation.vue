<template>
    <b-standard-card
        title="Business Information"
        :loading="loading"
        :error-message="errorMessage"
        @submit="
            updateBusinessInformation({
                type: 'businessInformation',
                item: {
                    name,
                    address,
                    store_category_id: category,
                    activity,
                    country_id: country,
                    primary_phone: primaryPhone,
                    secondary_phone: secondaryPhone,
                    mobile,
                    full_name: fullname,
                    email
                }
            })
        "
    >
        <v-row no-gutters justify="space-around" class="pt-6 pb-4">
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="name"
                    label="Business Name"
                ></b-text-field>

                <b-select
                    v-model="category"
                    :items="storeCategories"
                    item-text="name.en"
                    item-value="store_category_id"
                    label="Basic Business Category"
                ></b-select>

                <b-select
                    v-model="country"
                    :items="countries"
                    item-text="name"
                    item-value="country_id"
                    label="Country"
                ></b-select>

                <b-text-field
                    v-model="secondaryPhone"
                    type="number"
                    label="Business Telephone Number 2"
                ></b-text-field>

                <b-text-field
                    v-model="fullname"
                    label="Owner's Fullname"
                ></b-text-field>
            </v-col>

            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="address"
                    label="Business Address"
                ></b-text-field>

                <b-text-field
                    v-model="activity"
                    label="Business Activity"
                ></b-text-field>

                <b-text-field
                    v-model="primaryPhone"
                    type="number"
                    label="Business Telephone Number"
                ></b-text-field>

                <b-text-field
                    v-model="mobile"
                    type="number"
                    label="Owner's Mobile Phone"
                ></b-text-field>

                <b-text-field
                    v-model="email"
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
import { mapMutations, mapActions } from "vuex";

export default {
    name: "BusinessInformation",

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
        },

        name: {
            get() {
                return this.$store.state.storePanel.store.name;
            },

            set(val) {
                this.setName(val);
            }
        },

        address: {
            get() {
                return this.$store.state.storePanel.store.address;
            },

            set(val) {
                this.setAddress(val);
            }
        },

        category: {
            get() {
                return this.$store.state.storePanel.store.category
                    .store_category_id;
            },

            set(val) {
                this.setCategory(val);
            }
        },

        activity: {
            get() {
                return this.$store.state.storePanel.store.billing_details
                    .activity;
            },

            set(val) {
                this.setActivity(val);
            }
        },

        country: {
            get() {
                return this.$store.state.storePanel.store.country.country_id;
            },

            set(val) {
                this.setCountry(val);
            }
        },

        primaryPhone: {
            get() {
                return this.$store.state.storePanel.store.primary_phone;
            },

            set(val) {
                this.setPrimaryPhone(val);
            }
        },

        secondaryPhone: {
            get() {
                return this.$store.state.storePanel.store.secondary_phone;
            },

            set(val) {
                this.setSecondaryPhone(val);
            }
        },

        mobile: {
            get() {
                return this.$store.state.storePanel.store.billing_details
                    .mobile;
            },

            set(val) {
                this.setMobile(val);
            }
        },

        fullname: {
            get() {
                return this.$store.state.storePanel.store.billing_details
                    .full_name;
            },

            set(val) {
                this.setFullname(val);
            }
        },

        email: {
            get() {
                return this.$store.state.storePanel.store.email;
            },

            set(val) {
                this.setEmail(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel", [
            "setName",
            "setAddress",
            "setCategory",
            "setActivity",
            "setCountry",
            "setPrimaryPhone",
            "setSecondaryPhone",
            "setMobile",
            "setFullname",
            "setEmail"
        ]),
        ...mapActions("storePanel/settings/profile", [
            "getStoreCategories",
            "getCountries",
            "updateBusinessInformation"
        ])
    },

    mounted() {
        this.getStoreCategories();
        this.getCountries();
    }
};
</script>
