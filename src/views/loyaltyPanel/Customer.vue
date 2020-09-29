<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-tabs
                v-model="tab"
                color="secondary"
                :vertical="$vuetify.breakpoint.mdAndDown"
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab"
                    v-text="tab"
                    class="text-capitalize"
                >
                </v-tab>

                <v-btn
                    color="secondary"
                    text
                    tile
                    @click="
                        () => {
                            mode = 1;
                            tabDialog = true;
                        }
                    "
                >
                    <v-icon v-text="icons.mdiPlus"></v-icon>
                </v-btn>
            </v-tabs>

            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-toolbar flat height="80">
                        <v-btn
                            color="secondary"
                            class="text-capitalize"
                            depressed
                            @click="
                                () => {
                                    mode = 1;
                                    customerDialog = true;
                                }
                            "
                            >add new customer</v-btn
                        >

                        <v-spacer></v-spacer>

                        <v-col cols="4">
                            <v-text-field
                                label="Search"
                                color="secondary"
                                rounded
                                outlined
                                dense
                                clearable
                                hide-details
                                :prepend-inner-icon="icons.mdiMagnify"
                            ></v-text-field>
                        </v-col>
                    </v-toolbar>

                    <v-data-table
                        :headers="headers"
                        :items="items"
                        :footer-props="{ itemsPerPageOptions }"
                        class="b-outlined"
                    ></v-data-table>
                </v-tab-item>
            </v-tabs-items>

            <TabDialog />
            <CustomerDialog />
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPlus, mdiMagnify } from "@mdi/js";
import { mapMutations } from "vuex";
import TabDialog from "@/components/loyaltyPanel/customer/TabDialog.vue";
import CustomerDialog from "@/components/loyaltyPanel/customer/CustomerDialog.vue";

export default {
    name: "Customer",
    components: { TabDialog, CustomerDialog },
    data: () => ({
        icons: {
            mdiPlus,
            mdiMagnify
        },
        tab: 0,
        tabs: ["All"],
        headers: [
            { text: "Member Cards", value: "memberCards" },
            { text: "Transactions", value: "transactions" },
            { text: "Total", value: "total" },
            { text: "Redeemed", value: "redeemed" },
            { text: "Available", value: "available" },
            { text: "User Tab", value: "userTab" },
            { text: "Actions", value: "actions" }
        ],
        items: [],
        itemsPerPageOptions: [10, 25, 50, 100]
    }),

    computed: {
        mode: {
            get() {
                return this.$store.state.loyaltyPanel.customer.mode;
            },

            set(val) {
                this.setMode(val);
            }
        },

        tabDialog: {
            get() {
                return this.$store.state.loyaltyPanel.customer.tabDialog;
            },

            set(val) {
                this.setTabDialog(val);
            }
        },

        customerDialog: {
            get() {
                return this.$store.state.loyaltyPanel.customer.customerDialog;
            },

            set(val) {
                this.setCustomerDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/customer", [
            "setMode",
            "setTabDialog",
            "setCustomerDialog"
        ])
    }
};
</script>
