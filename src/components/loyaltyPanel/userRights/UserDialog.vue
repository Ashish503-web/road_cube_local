<template>
    <v-dialog v-model="userDialog" max-width="600" scrollable>
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
                <v-row no-gutters>
                    <v-col cols="12" sm="6" class="pr-0 pr-sm-2 mb-2 mb-sm-0">
                        <v-text-field
                            label="Username"
                            color="secondary"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" class="pl-0 pl-sm-2">
                        <v-text-field
                            label="Password"
                            color="secondary"
                            outlined
                            dense
                            clearable
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col cols="12" class="mt-3 mb-1 subtitle-2">
                        Rights
                        <v-radio-group
                            v-model="selectedRights"
                            hide-details
                            multiple
                        >
                            <v-row no-gutters>
                                <v-col cols="12" sm="6" class="pr-0 pr-sm-2 mb-2 mb-sm-0">
                                    <v-radio
                                        v-for="right in leftRights"
                                        :key="right"
                                        color="secondary"
                                        class="mb-0"
                                        hide-details
                                    >
                                        <template v-slot:label>
                                            <h4
                                                class="subtitle-2"
                                                v-text="right"
                                            ></h4>
                                        </template>
                                    </v-radio>
                                </v-col>

                                <v-col cols="12" sm="6" class="pl-0 pl-sm-2">
                                    <v-radio
                                        v-for="right in rightRights"
                                        :key="right"
                                        color="secondary"
                                        class="mb-0"
                                        hide-details
                                    >
                                        <template v-slot:label>
                                            <h4
                                                class="subtitle-2"
                                                v-text="right"
                                            ></h4>
                                        </template>
                                    </v-radio>
                                </v-col>
                            </v-row>
                        </v-radio-group>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="userDialog = false">cancel</v-btn>
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
    name: "TabDialog",

    data: () => ({
        icons: { mdiPlus, mdiPencilOutline },
        leftRights: [
            "Dashboard",
            "branches",
            "Collaborators",
            "Customer",
            "Business Profile",
            "Category Management",
            "Catalog Management",
            "1+1 / Sampling",
            "Check In",
            "Contest & Survey",
            "Multiple Coupons",
            "New Campaign"
        ],
        rightRights: [
            "Branch Dept",
            "Subscriptions",
            "Products",
            "User Rights",
            "Business Statistics",
            "Gift Status",
            "Supplier Management",
            "Receipt Scanning",
            "Serial Shopping",
            "Roadcodes",
            "View Campaigns"
        ],
        selectedRights: []
    }),

    computed: {
        title() {
            return this.mode === 1 ? "New User" : "Update User";
        },

        mode: {
            get() {
                return this.$store.state.loyaltyPanel.userRights.mode;
            },

            set(val) {
                this.setMode(val);
            }
        },

        userDialog: {
            get() {
                return this.$store.state.loyaltyPanel.userRights.userDialog;
            },

            set(val) {
                this.setUserDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/userRights", ["setMode", "setUserDialog"])
    }
};
</script>

<style>
.not-allowed input {
    cursor: not-allowed;
}

.not-allowed .v-input--selection-controls__ripple {
    cursor: not-allowed;
}
</style>
