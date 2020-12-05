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
            :items="paymentProcessings"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            disable-sort
            hide-default-footer
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

            <template v-slot:item.bank_provider="{ item }">
                <img
                    :src="item.bank_provider.logo"
                    width="100"
                    class="mr-2"
                    style="vertical-align: middle"
                />
                <span v-text="item.bank_provider.name[lang]"></span>
            </template>

            <template v-slot:item.bank_clearer="{ item }">
                <img
                    :src="item.bank_clearer.logo"
                    width="100"
                    class="mr-2"
                    style="vertical-align: middle"
                />
                <span
                    style="text-decoration: underline; cursor: pointer"
                    v-text="item.bank_clearer.name[lang]"
                    @click="open(item)"
                ></span>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500">
            <b-card
                title="Choose Bank Provider"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="dialog = false"
                @submit="update"
            >
                <v-radio-group
                    v-model="paymentProcessing.bank_clearer.bank_provider_id"
                    class="mt-0 pt-0"
                    hide-details
                >
                    <v-radio
                        v-for="provider in storeBankProviders"
                        :key="provider.store_bank_provider_id"
                        color="secondary"
                        class="b-outlined pa-3"
                        :value="provider.bank_provider_id"
                    >
                        <template v-slot:label>
                            <img :src="provider.logo" width="60" class="mr-3" />
                            <h4
                                class="text--primary subtitle-2"
                                v-text="provider.name[lang]"
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
                    value: "bank_provider",
                },
                {
                    text: "Process payment with:",
                    value: "bank_clearer",
                },
            ],
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapState("storePanel/settings/paymentProcessing", [
            "storeBankProviders",
            "paymentProcessings",
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
            },
        },

        paymentProcessing: {
            get() {
                return this.$store.state.storePanel.settings.paymentProcessing
                    .paymentProcessing;
            },

            set(val) {
                this.setItem(val);
            },
        },
    },

    methods: {
        ...mapMutations(["setDialog"]),
        ...mapMutations("storePanel/settings/paymentProcessing", ["setItem"]),
        ...mapActions("storePanel/settings/paymentProcessing", [
            "getStoreBankProviders",
            "getItems",
            "update",
        ]),

        open(item) {
            this.paymentProcessing = item;
            this.dialog = true;
        },
    },

    watch: {
        $route(val) {
            if (!val.query.page) {
                this.$router.push({
                    query: {
                        page: 1,
                        ...this.$route.query,
                    },
                });
            }
            this.getItems(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        },
    },

    beforeCreate() {
        if (!this.$route.query.page) {
            this.$router.replace({
                query: {
                    page: 1,
                    ...this.$route.query,
                },
            });
        }
    },

    mounted() {
        this.getItems();
        this.getStoreBankProviders();
    },
};
</script>

<style scoped>
.b-outlined-bottom:last-child {
    border-bottom: none;
}
</style>
