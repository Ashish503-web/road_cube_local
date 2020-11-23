<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-row no-gutters align="center" class="pa-4 pt-1 pb-8">
            <v-col cols="auto">
                <v-img
                    src="@/assets/credit-card.png"
                    width="60"
                    height="60"
                ></v-img>
            </v-col>

            <v-col cols="7" class="pl-3">
                <h4>Payments Processing</h4>
                <div style="font-size: 0.875rem" class="font-weight-medium">
                    Select with which payment provider you will process your
                    transactions based on the card issuer of your clients
                </div>
            </v-col>
        </v-row>

        <v-data-table
            :headers="headers"
            :items="allBankProviders"
            :footer-props="{
                itemsPerPageOptions: [12],
                showCurrentPage: true
            }"
            :page.sync="page"
            :server-items-length="serverItemsLength"
            disable-sort
            class="b-outlined"
        >
            <template v-slot:no-data>
                <v-progress-circular
                    v-if="loading"
                    color="secondary"
                    indeterminate
                ></v-progress-circular>
                <span v-else>No data available</span>
            </template>

            <template v-slot:item.bank="{ item }">
                <img
                    :src="item.logo"
                    width="30"
                    height="30"
                    class="mr-2"
                    style="vertical-align: middle"
                />
                <span style="text-decoration: underline; cursor: pointer">
                    {{ item.name[lang] }}
                </span>
            </template>

            <template v-slot:item.provider="{ item }">
                <img
                    :src="item.bankProvider.logo"
                    width="30"
                    height="30"
                    class="mr-2"
                    style="vertical-align: middle"
                />
                <span
                    style="text-decoration: underline; cursor: pointer"
                    @click="open(item)"
                    >{{ item.bankProvider.name[lang] }}</span
                >
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500">
            <b-card
                title="Choose Bank Provider"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="dialog = false"
                @submit="create"
            >
                <v-radio-group
                    v-model="paymentProcessing.store_bank_clearer_id"
                    class="mt-0 pt-0"
                    hide-details
                >
                    <v-radio
                        v-for="provider in storeBankProviders"
                        :key="provider.store_bank_provider_id"
                        color="secondary"
                        class="b-outlined pa-3"
                        :value="provider.store_bank_provider_id"
                    >
                        <template v-slot:label>
                            <img
                                :src="provider.bank_provider.logo"
                                width="40"
                                height="40"
                                class="mr-3"
                            />
                            <h4
                                class="text--primary subtitle-2"
                                v-text="provider.bank_provider.name[lang]"
                            ></h4>
                        </template>
                    </v-radio>
                </v-radio-group>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiMenuUp, mdiMenuDown } from "@mdi/js";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
    name: "PaymentProcessing",

    data() {
        return {
            icons: { mdiMenuUp, mdiMenuDown },
            page: +this.$route.query.page,
            headers: [
                {
                    text: "When user card is issued by:",
                    value: "bank"
                },
                {
                    text: "Process payment with:",
                    value: "provider"
                }
            ]
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/settings/paymentProcessing", [
            "allBankProviders",
            "storeBankProviders"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            }
        },

        paymentProcessing: {
            get() {
                return this.$store.state.storePanel.settings.paymentProcessing
                    .paymentProcessing;
            },

            set(val) {
                this.setItem(val);
            }
        }
    },

    methods: {
        ...mapMutations(["setDialog"]),
        ...mapMutations("storePanel/settings/paymentProcessing", ["setItem"]),
        ...mapActions("storePanel/settings/paymentProcessing", [
            "getAllBankProviders",
            "getStoreBankProviders",
            "getItems",
            "create"
        ]),

        open(item) {
            this.paymentProcessing = item;
            this.dialog = true;
        }
    },

    watch: {
        $route(val) {
            if (!val.query.page) {
                this.$router.push({
                    query: {
                        page: 1,
                        ...this.$route.query
                    }
                });
            }
            this.getItems(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        }
    },

    beforeCreate() {
        if (!this.$route.query.page) {
            this.$router.replace({
                query: {
                    page: 1,
                    ...this.$route.query
                }
            });
        }
    },

    mounted() {
        this.getAllBankProviders();
        this.getItems();
    }
};
</script>

<style scoped>
.b-outlined-bottom:last-child {
    border-bottom: none;
}
</style>
