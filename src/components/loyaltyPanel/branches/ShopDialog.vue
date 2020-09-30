<template>
    <v-dialog v-model="shopDialog" max-width="600" scrollable>
        <v-card>
            <v-card-title class="secondary white--text">
                {{ title }}
                <v-spacer></v-spacer>
                <v-icon
                    dark
                    large
                    v-text="mode === 1 ? icons.mdiPlus : icons.mdiPencilOutline"
                ></v-icon>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="pt-5">
                <v-form>
                    <v-row no-gutters>
                        <v-col cols="6" class="pr-2">
                            <v-select
                                :items="packages"
                                menu-props="offsetY"
                                label="Select Package"
                                color="secondary"
                                item-color="secondary"
                                outlined
                                dense
                                hide-details
                            ></v-select>
                        </v-col>
                        <v-col cols="6" class="pl-2">
                            <v-select
                                :items="giftCategories"
                                menu-props="offsetY"
                                label="Choose Gift Category"
                                color="secondary"
                                item-color="secondary"
                                outlined
                                dense
                                hide-details
                            ></v-select>
                        </v-col>

                        <v-col cols="6" class="pr-2">
                            <v-text-field
                                label="Name of Shop"
                                color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" class="pl-2">
                            <v-text-field
                                label="Name of Shop (in app)"
                                color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>

                        <v-col cols="6" class="pr-2">
                            <v-select
                                :items="regions"
                                menu-props="offsetY"
                                label="Select Region"
                                color="secondary"
                                item-color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                hide-details
                            ></v-select>
                        </v-col>
                        <v-col cols="6" class="pl-2">
                            <v-form @submit.prevent="addRegion">
                                <v-row no-gutters>
                                    <v-col cols="9">
                                        <v-text-field
                                            v-model="region"
                                            label="Add Region"
                                            color="secondary"
                                            class="mt-3"
                                            outlined
                                            dense
                                            clearable
                                            hide-details
                                            :prepend-inner-icon="icons.mdiPlus"
                                        ></v-text-field>
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
                            <v-text-field
                                type="email"
                                label="Email of Shop"
                                color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" class="pl-2">
                            <v-text-field
                                type="password"
                                label="Password of Shop"
                                color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>

                        <v-col cols="6" class="pr-2">
                            <v-autocomplete
                                label="Address of Shop"
                                color="secondary"
                                item-color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                clearable
                                open-on-clear
                                hide-details
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="6" class="pl-2">
                            <v-text-field
                                label="T.K"
                                color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>

                        <v-col cols="6" class="pr-2">
                            <v-text-field
                                type="number"
                                label="Number of Shop"
                                color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" class="pl-2">
                            <v-text-field
                                label="ID"
                                color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>

                        <v-col cols="6" class="pr-2">
                            <v-text-field
                                type="number"
                                label="Longitude(x)"
                                color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" class="pl-2">
                            <v-text-field
                                type="number"
                                label="Latitude(y)"
                                color="secondary"
                                class="mt-3"
                                outlined
                                dense
                                clearable
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="shopDialog = false">cancel</v-btn>
                <v-btn color="secondary" class="px-5" depressed>
                    save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mdiPlus, mdiPencilOutline } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "ShopDialog",

    data: () => ({
        icons: { mdiPlus, mdiPencilOutline },
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
        regions: ["Region 1", "Region 2", "Region 3"]
    }),

    computed: {
        title() {
            return this.mode === 1 ? "New Shop" : "Update Shop";
        },

        mode() {
            return this.$store.state.loyaltyPanel.branches.mode;
        },

        shopDialog: {
            get() {
                return this.$store.state.loyaltyPanel.branches.shopDialog;
            },

            set(val) {
                this.setShopDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/branches", ["setShopDialog"]),

        addRegion() {
            this.regions.push(this.region);
            this.region = "";
        }
    }
};
</script>
