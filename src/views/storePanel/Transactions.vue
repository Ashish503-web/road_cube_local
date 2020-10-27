<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-spacer class="d-none d-sm-block"></v-spacer>

                <v-icon
                    color="secondary"
                    v-text="icons.mdiCellphoneIphone"
                ></v-icon>
                Mobile Payments
                <v-switch
                    color="secondary"
                    class="ml-3 mt-0 pt-0"
                    hide-details
                ></v-switch>

                <v-menu offset-y left>
                    <template v-slot:activator="{ on }">
                        <v-btn color="secondary" text v-on="on">
                            <v-icon
                                v-text="icons.mdiFormatListCheckbox"
                            ></v-icon>
                        </v-btn>
                    </template>

                    <v-list dense>
                        <v-list-item-group>
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon
                                        color="secondary"
                                        v-text="icons.mdiPrinter"
                                    ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                    >Fund Closure</v-list-item-title
                                >
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon
                                        color="secondary"
                                        v-text="icons.mdiOpenInNew"
                                    ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                    >Download All
                                    Transactions</v-list-item-title
                                >
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu>
            </v-toolbar>

            <v-row class="px-4 py-3" no-gutters>
                <v-col cols="3">
                    <b-select
                        v-model="transactionStatus"
                        :items="transactionStatuses"
                        item-text="name"
                        item-value="transaction_status_id"
                        label="Filter by Status"
                        no-top-margin
                        multiple
                        rounded
                    ></b-select>
                </v-col>

                <v-col cols="3" class="ml-3">
                    <b-select
                        v-model="transactionType"
                        :items="transactionTypes"
                        item-text="name"
                        item-value="transaction_type_id"
                        label="Filter by Type"
                        no-top-margin
                        multiple
                        rounded
                    ></b-select>
                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="4">
                    <b-search-field></b-search-field>
                </v-col>
            </v-row>

            <v-data-table
                :headers="headers"
                :items="transactions"
                :footer-props="{
                    itemsPerPageOptions: [12],
                    showCurrentPage: true,
                }"
                :page.sync="page"
                :server-items-length="serverItemsLength"
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

                <template v-slot:item.actions="{ item }">
                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="yellow darken-3"
                                icon
                                v-on="on"
                                @click="open(2, item)"
                            >
                                <v-icon
                                    v-text="icons.mdiPencilOutline"
                                ></v-icon>
                            </v-btn>
                        </template>

                        <span class="font-weight-bold">Update</span>
                    </v-tooltip>

                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="red"
                                icon
                                v-on="on"
                                @click="
                                    () => {
                                        product = item;
                                        deleteDialog = true;
                                    }
                                "
                            >
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span class="font-weight-bold">Delete</span>
                    </v-tooltip>
                </template>
            </v-data-table>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiCellphoneIphone,
    mdiFormatListCheckbox,
    mdiPrinter,
    mdiOpenInNew,
    mdiPencilOutline,
    mdiClose,
} from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "Transactions",

    data() {
        return {
            icons: {
                mdiCellphoneIphone,
                mdiFormatListCheckbox,
                mdiPrinter,
                mdiOpenInNew,
                mdiPencilOutline,
                mdiClose,
            },
            headers: [
                { text: "User", value: "user" },
                { text: "Amount", value: "amount" },
                { text: "Product", value: "product" },
                { text: "Address", value: "address" },
                { text: "Information", value: "information" },
                { text: "Actions", value: "actions" },
            ],
            lang: "el",
            page: +this.$route.query.page,
            transactionStatus: JSON.parse(
                this.$route.query["transaction-status-id[]"]
            ),
            transactionType: JSON.parse(
                this.$route.query["transaction-type[]"]
            ),
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/transactions", [
            "transactionStatuses",
            "transactionTypes",
            "transactions",
        ]),

        // headers() {
        //     return [
        //         { text: "Product Name", value: `name[${this.lang}]` },
        //         {
        //             text: "Product Description",
        //             value: `description[${this.lang}]`
        //         },
        //         { text: "Selling Price", value: "retail_price" },
        //         { text: "Coupon", value: "coupon" },
        //         { text: "Actions", value: "actions" }
        //     ];
        // },

        transaction: {
            get() {
                return this.$store.state.storePanel.transactions.transaction;
            },

            set(val) {
                this.setItem(val);
            },
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        },
    },

    methods: {
        ...mapMutations("storePanel/transactions", ["setItem"]),
        ...mapActions("storePanel/transactions", [
            "getTransactionStatuses",
            "getTransactionTypes",
            "getItems",
            "remove",
        ]),
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

            if (!val.query["transaction-status-id[]"]) {
                this.$router.push({
                    query: {
                        ...this.$route.query,
                        "transaction-status-id[]": JSON.stringify([1]),
                    },
                });
            }

            if (!val.query["transaction-type[]"]) {
                this.$router.push({
                    query: {
                        ...this.$route.query,
                        "transaction-type[]": JSON.stringify([1]),
                    },
                });
            }

            this.getItems(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        },

        transactionStatus(status) {
            this.$router.push({
                query: {
                    ...this.$route.query,
                    "transaction-status-id[]": JSON.stringify(status),
                },
            });
        },

        transactionType(type) {
            this.$router.push({
                query: {
                    ...this.$route.query,
                    "transaction-type[]": JSON.stringify(type),
                },
            });
        },
    },

    beforeCreate() {
        if (!this.$route.query.page) {
            this.$router.push({
                query: {
                    page: 1,
                    ...this.$route.query,
                },
            });
        }

        if (this.$route.query["transaction-status-id[]"]) {
            if (
                !JSON.parse(this.$route.query["transaction-status-id[]"]).length
            ) {
                this.$router.push({
                    query: {
                        ...this.$route.query,
                        "transaction-status-id[]": JSON.stringify([1]),
                    },
                });
            }
        } else {
            this.$router.push({
                query: {
                    ...this.$route.query,
                    "transaction-status-id[]": JSON.stringify([1]),
                },
            });
        }

        if (this.$route.query["transaction-type[]"]) {
            if (!JSON.parse(this.$route.query["transaction-type[]"]).length) {
                this.$router.push({
                    query: {
                        ...this.$route.query,
                        "transaction-type[]": JSON.stringify([1]),
                    },
                });
            }
        } else {
            this.$router.push({
                query: {
                    ...this.$route.query,
                    "transaction-type[]": JSON.stringify([1]),
                },
            });
        }
    },

    mounted() {
        this.getItems(this.query);
        this.getTransactionStatuses();
        this.getTransactionTypes();
    },
};
</script>

<style>
.v-data-footer {
    padding: 12px 0;
}
</style>
