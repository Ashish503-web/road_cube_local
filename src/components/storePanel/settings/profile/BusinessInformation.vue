<template>
    <b-standard-card title="Business Information">
        <v-row no-gutters justify="space-around" class="pt-6 pb-4">
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="name"
                    label="Business Name"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="address"
                    label="Business Address"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-select
                    v-model="category"
                    :items="storeCategories"
                    item-text="name.en"
                    item-value="store_category_id"
                    label="Basic Business Category"
                ></b-select>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="activity"
                    label="Business Activity"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-select
                    v-model="country"
                    :items="countries"
                    item-text="name"
                    item-value="country_id"
                    label="Country"
                ></b-select>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="primaryPhone"
                    type="number"
                    label="Business Telephone Number"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="secondaryPhone"
                    type="number"
                    label="Business Telephone Number 2"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="ownerPrimaryPhone"
                    type="number"
                    label="Owner's Mobile Phone"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="ownerFullname"
                    label="Owner's Fullname"
                ></b-text-field>
            </v-col>
            <v-col cols="12" sm="5">
                <b-text-field
                    v-model="ownerEmail"
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

    data: () => ({
        countries: [
            {
                name: "Greece",
                country_id: 1
            },
            {
                name: "USA",
                country_id: 2
            },
            {
                name: "Italy",
                country_id: 3
            }
        ],
        activity: "",
        ownerPrimaryPhone: "",
        ownerFullname: "",
        ownerEmail: ""
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

        resetSuccess() {
            return this.$store.state.storePanel.settings.profile.resetSuccess
                .businessInformation;
        },

        storeCategories() {
            return this.$store.state.storePanel.settings.profile
                .storeCategories;
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
                return this.$store.state.storePanel.store.category;
            },

            set(val) {
                this.setCategory(val);
            }
        },

        country: {
            get() {
                return this.$store.state.storePanel.store.country;
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
        }
    },

    methods: {
        ...mapMutations("storePanel", [
            "setName",
            "setAddress",
            "setCategory",
            "setCountry",
            "setPrimaryPhone",
            "setSecondaryPhone"
        ]),
        ...mapActions("storePanel/settings/profile", [
            "getStoreCategories",
            "updateBusinessInformation"
        ])
    },

    mounted() {
        this.getStoreCategories();
    },

    watch: {
        resetSuccess(val) {
            if (val) {
                this.success = {
                    name: false,
                    description: false,
                    sellingPrice: false,
                    wholesalePrice: false,
                    deliveryCost: false,
                    shippingCost: false,
                    category: false
                };
            }
        }
    }
};
</script>
