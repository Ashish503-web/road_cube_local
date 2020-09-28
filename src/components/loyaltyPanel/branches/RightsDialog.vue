<template>
    <v-dialog v-model="rightsDialog" max-width="500" scrollable>
        <v-card>
            <v-card-title class="grey lighten-3">
                Branch Management
                <v-spacer></v-spacer>
                <v-icon
                    color="secondary"
                    large
                    v-text="icons.mdiAccountTie"
                ></v-icon>
            </v-card-title>

            <v-divider></v-divider>

            <v-card-text class="pt-5">
                <h4 class="subtitle-2 secondary--text mb-3">
                    Select Companies which you want to be able to Add / Delete
                </h4>

                <v-row no-gutters class="b-outlined pa-3">
                    <v-col cols="2">
                        <v-checkbox
                            v-model="all"
                            color="secondary"
                            class="mt-0 pt-0"
                            hide-details
                        ></v-checkbox>
                    </v-col>
                    <v-col class="subtitle-2">All</v-col>
                </v-row>

                <v-row
                    v-for="company in companies"
                    :key="company.name"
                    no-gutters
                    class="b-outlined pa-3"
                >
                    <v-col cols="2">
                        <v-checkbox
                            v-model="company.add"
                            color="secondary"
                            class="mt-0 pt-0"
                            hide-details
                        ></v-checkbox>
                    </v-col>
                    <v-col class="subtitle-2" v-text="company.name"></v-col>
                </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn text @click="rightsDialog = false">cancel</v-btn>
                <v-btn color="secondary" class="px-5" depressed>
                    save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import { mdiAccountTie } from "@mdi/js";
import { mapMutations } from "vuex";

export default {
    name: "RightsDialog",

    data: () => ({
        icons: { mdiAccountTie },
        all: false,
        companies: [
            { add: false, name: "Test Redeem" },
            { add: true, name: "Test Mail" },
            { add: false, name: "Test Istvan" }
        ]
    }),

    computed: {
        rightsDialog: {
            get() {
                return this.$store.state.loyaltyPanel.branches.rightsDialog;
            },

            set(val) {
                this.setRightsDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/branches", ["setRightsDialog"]),

        addRegion() {
            this.regions.push(this.region);
            this.region = "";
        }
    },

    watch: {
        all(val) {
            if (val) this.companies.forEach(c => (c.add = true));
            else this.companies.forEach(c => (c.add = false));
        }
    }
};
</script>
