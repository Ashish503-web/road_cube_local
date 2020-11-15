<template>
    <b-card
        :title="title"
        :icon="icon"
        @cancel="$emit('cancel')"
        @submit="$emit('submit')"
    >
        <v-row no-gutters>
            <v-col cols="6" class="pr-2">
                <b-select :items="packages" label="Select Package"></b-select>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-select
                    :items="giftCategories"
                    label="Choose Gift Category"
                ></b-select>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field label="Name of Shop" class="mt-3"></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-text-field
                    label="Name of Shop (in app)"
                    class="mt-3"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pr-2">
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
                    type="email"
                    label="Email of Shop"
                    class="mt-3"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-text-field
                    type="password"
                    label="Password of Shop"
                    class="mt-3"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-autocomplete
                    label="Address of Shop"
                    class="mt-3"
                ></b-autocomplete>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-text-field label="T.K" class="mt-3"></b-text-field>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    type="number"
                    label="Number of Shop"
                    class="mt-3"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-text-field label="ID" class="mt-3"></b-text-field>
            </v-col>

            <v-col cols="6" class="pr-2">
                <b-text-field
                    type="number"
                    label="Longitude(x)"
                    class="mt-3"
                ></b-text-field>
            </v-col>

            <v-col cols="6" class="pl-2">
                <b-text-field
                    type="number"
                    label="Latitude(y)"
                    class="mt-3"
                ></b-text-field>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "StoreForm",
    props: {
        mode: {
            type: Number
        }
    },
    data: () => ({
        packages: ["Επιλέξτε..", "Single", "Brand", "Intro"],
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
        title() {
            return this.mode === 1 ? "New Shop" : "Update Shop";
        },

        icon() {
            return this.mode === 1 ? "mdiPlus" : "mdiPencilOutline";
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/branches", []),

        addRegion() {
            this.regions.push(this.region);
            this.region = "";
        },

        myFunc() {
            alert(5);
        }
    }
};
</script>
