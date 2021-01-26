<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-row no-gutters align="center" class="pa-5 pt-0">
                <v-col cols="auto">
                    <v-img
                        src="@/assets/customers.png"
                        width="60"
                        height="60"
                    ></v-img>
                </v-col>

                <v-col cols="9" class="pl-5">
                    <h4 v-text="translations.title[lang]"></h4>
                    <div
                        style="font-size: 0.875rem"
                        class="font-weight-medium mt-1"
                        v-text="translations.info[lang]"
                    ></div>
                </v-col>
            </v-row>

            <v-tabs
                v-model="tab"
                color="secondary"
                :vertical="$vuetify.breakpoint.mdAndDown"
            >
                <v-tab
                    v-for="tab in tabs"
                    :key="tab"
                    v-text="tab"
                    class="text-capitalize d-flex justify-lg-center justify-start px-3"
                >
                </v-tab>

                <v-btn
                    class="text-capitalize px-5"
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
                    <v-toolbar flat height="90">
                        <v-btn
                            color="secondary"
                            class="text-capitalize px-5"
                            depressed
                            v-text="translations.addNewCustomer[lang]"
                            @click="
                                () => {
                                    mode = 1;
                                    customerDialog = true;
                                }
                            "
                        ></v-btn>

                        <v-spacer></v-spacer>

                        <v-col cols="12" sm="4" class="pa-0">
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
                        :footer-props="{
                            itemsPerPageOptions: [12],
                            showCurrentPage: true
                        }"
                        class="b-outlined"
                    ></v-data-table>
                </v-tab-item>
            </v-tabs-items>

            <!-- <TabDialog />
            <CustomerDialog /> -->
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiPlus, mdiMagnify } from "@mdi/js";
import { mapMutations, mapActions } from "vuex";

// import TabDialog from "@/components/loyaltyPanel/customer/TabDialog.vue";
// import CustomerDialog from "@/components/loyaltyPanel/customer/CustomerDialog.vue";
import translations from "@/utils/translations/loyaltyPanel/customers";

export default {
    name: "Customer",

    // components: { TabDialog, CustomerDialog },

    mixins: [translations],

    data: () => ({
        icons: {
            mdiPlus,
            mdiMagnify
        },
        tab: 0,
        tabs: ["All"],
        items: []
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.memberCards[this.lang],
                    value: "memberCards"
                },
                {
                    text: this.translations.transactions[this.lang],
                    value: "transactions"
                },
                { text: this.translations.total[this.lang], value: "total" },
                {
                    text: this.translations.redeemed[this.lang],
                    value: "redeemed"
                },
                {
                    text: this.translations.available[this.lang],
                    value: "available"
                },
                {
                    text: this.translations.userTab[this.lang],
                    value: "userTab"
                },
                { text: this.translations.actions[this.lang], value: "actions" }
            ];
        },

        mode: {
            get() {
                return this.$store.state.loyaltyPanel.customers.mode;
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
                return this.$store.state.loyaltyPanel.customers.customerDialog;
            },

            set(val) {
                this.setCustomerDialog(val);
            }
        }
    },

    methods: {
        ...mapMutations("loyaltyPanel/customers", [
            "setMode",
            "setTabDialog",
            "setCustomerDialog"
        ]),
        ...mapActions("loyaltyPanel/customers", ["getCustomers"])
    },

    mounted() {
        this.getCustomers();
    }
};
</script>
