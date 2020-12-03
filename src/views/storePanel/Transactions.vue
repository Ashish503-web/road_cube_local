<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-row no-gutters align="center" class="pa-4">
                <v-col cols="auto">
                    <v-img
                        src="@/assets/transactions.png"
                        width="60"
                        height="60"
                    ></v-img>
                </v-col>

                <v-col cols="7" class="pl-3">
                    <h4 v-text="translations.title[lang]"></h4>
                    <div
                        style="font-size: 0.875rem"
                        class="font-weight-medium"
                        v-text="translations.info[lang]"
                    ></div>
                </v-col>

                <v-spacer></v-spacer>

                <v-col cols="auto" class="text-center pa-0">
                    <v-avatar
                        size="40"
                        style="cursor: pointer"
                        @click="settingsDialog = true"
                    >
                        <v-img src="@/assets/cog.png"></v-img>
                    </v-avatar>

                    <div
                        style="font-size: 0.875rem"
                        class="mt-1"
                        v-text="translations.settings[lang]"
                    ></div>
                </v-col>
            </v-row>

            <Filters />

            <v-data-table
                :headers="headers"
                :items="transactions"
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
                    <span v-else v-text="translations.noData[lang]"></span>
                </template>

                <template v-slot:item.watch="{ item }">
                    <div
                        class="d-flex align-center"
                        style="cursor: pointer"
                        @click="
                            () => {
                                transactionId = item.transaction_id;
                                transactionDialog = true;
                            }
                        "
                    >
                        <img src="@/assets/eye.png" alt="eye" width="24" />
                        <div class="ml-2 text-decoration-underline">
                            Show details
                        </div>
                    </div>
                </template>

                <template v-slot:item.transaction_status_name="{ item }">
                    <v-sheet
                        v-if="item.transaction_status_id === 3"
                        color="grey lighten-2"
                        class="green--text text--darken-2 subtitle-2 rounded"
                        style="padding: 6px 12px"
                        width="110"
                    >
                        <v-icon
                            color="green lighten-2"
                            v-text="icons.mdiCheckBold"
                        ></v-icon>
                        Verified
                    </v-sheet>
                    <v-sheet v-else>
                        <b-select
                            v-model="item.transaction_status_id"
                            :items="transactionStatuses"
                            :loading="item.loading"
                            item-text="name"
                            item-value="transaction_status_id"
                            class="mb-3"
                            @change="changeStatus(item)"
                        >
                            <template v-slot:prepend-inner>
                                <div
                                    v-if="item.transaction_status_id === 1"
                                    class="pt-1 mr-1"
                                >
                                    <img src="@/assets/clock.png" width="20" />
                                </div>
                                <div
                                    v-else-if="item.transaction_status_id === 2"
                                    class="pt-1 mr-1"
                                >
                                    <img src="@/assets/flag.png" width="20" />
                                </div>
                            </template>
                        </b-select>
                    </v-sheet>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-btn
                        v-if="
                            item.transaction_type_id === 2 ||
                                item.transaction_type_id === 11
                        "
                        color="grey lighten-2"
                        class="text-capitalize my-1 red--text"
                        width="83"
                        depressed
                        @click="myFunc(item)"
                        >Refund</v-btn
                    >
                </template>
            </v-data-table>

            <v-dialog v-model="settingsDialog" max-width="500">
                <SettingsPanel @cancel="settingsDialog = false" />
            </v-dialog>

            <v-dialog v-model="transactionDialog" max-width="600">
                <TransactionProfile
                    :transaction-id="transactionId"
                    @cancel="transactionDialog = false"
                />
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import { mdiCheckBold } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

import Filters from "@/components/storePanel/transactions/Filters.vue";
import SettingsPanel from "@/components/storePanel/transactions/SettingsPanel.vue";
import TransactionProfile from "@/components/storePanel/transactions/TransactionProfile.vue";
import translations from "@/utils/translations/storePanel/transactions";

export default {
    name: "Transactions",

    components: { Filters, SettingsPanel, TransactionProfile },

    mixins: [translations],

    data() {
        return {
            icons: { mdiCheckBold },
            page: +this.$route.query.page,
            settingsDialog: false,
            transactionDialog: false,
            transactionId: null
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/transactions", [
            "transactionStatuses",
            "transactions"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.user[this.lang],
                    value: "user_identity"
                },
                {
                    text: this.translations.amount[this.lang],
                    value: "total_price"
                },
                {
                    text: this.translations.points[this.lang],
                    value: "total_points"
                },
                {
                    text: this.translations.date[this.lang],
                    value: "created_at"
                },
                {
                    text: this.translations.watch[this.lang],
                    value: "watch"
                },
                {
                    text: this.translations.status[this.lang],
                    value: "transaction_status_name",
                    width: "20%"
                },
                {
                    text: this.translations.actions[this.lang],
                    value: "actions"
                }
            ];
        },

        transaction: {
            get() {
                return this.$store.state.storePanel.transactions.transaction;
            },

            set(val) {
                this.setItem(val);
            }
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                if (this.$route.query[key])
                    query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        }
    },

    methods: {
        ...mapMutations("storePanel/transactions", ["setItem"]),
        ...mapActions("storePanel/transactions", [
            "getItems",
            "changeStatus",
            "remove"
        ])
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
            this.$router.push({
                query: {
                    page: 1,
                    ...this.$route.query
                }
            });
        }
    },

    mounted() {
        this.getItems(this.query);
    }
};
</script>
