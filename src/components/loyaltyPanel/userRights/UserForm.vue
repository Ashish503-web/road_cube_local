<template>
    <b-card :title="title" @cancel="$emit('cancel')">
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
                <v-radio-group v-model="selectedRights" hide-details multiple>
                    <v-row no-gutters>
                        <v-col
                            cols="12"
                            sm="6"
                            class="pr-0 pr-sm-2 mb-2 mb-sm-0"
                        >
                            <v-radio
                                v-for="right in leftRights"
                                :key="right"
                                color="secondary"
                                class="mb-0"
                                hide-details
                            >
                                <template v-slot:label>
                                    <h4 class="subtitle-2" v-text="right"></h4>
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
                                    <h4 class="subtitle-2" v-text="right"></h4>
                                </template>
                            </v-radio>
                        </v-col>
                    </v-row>
                </v-radio-group>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
export default {
    name: "TabDialog",

    props: {
        mode: Number
    },

    data: () => ({
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
        }
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
