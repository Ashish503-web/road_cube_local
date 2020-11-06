<template>
    <v-container fluid class="b-container">
        <v-sheet class="pa-3">
            <v-toolbar flat height="80">
                <v-spacer class="d-none d-sm-block"></v-spacer>

                <div 
                class="text-center"
                style="cursor: pointer"
                @click="settingsDialog = true">
                    <v-icon
                    color="secondary"
                    v-text="icons.mdiCog"
                    x-large
                    ></v-icon>
                    <p>Settings</p>
                </div>
                
                <!-- {{ translations.mobilePayments[lang] }}
                <v-switch
                    v-model="online_payments"
                    color="secondary"
                    class="ml-3 mt-0 pt-0"
                    hide-details
                    :loading="mobileLoading"
                    @change="updateMobilePayments({ online_payments })"
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
                                <v-list-item-icon class="mr-3">
                                    <v-icon
                                        color="secondary"
                                        v-text="icons.mdiPrinter"
                                    ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                    v-text="translations.fundClosure[lang]"
                                ></v-list-item-title>
                            </v-list-item>

                            <v-list-item @click="downloadAllTransactions">
                                <v-list-item-icon class="mr-3">
                                    <v-icon
                                        color="secondary"
                                        v-text="icons.mdiOpenInNew"
                                    ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                    v-text="translations.download[lang]"
                                ></v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-menu> -->
            </v-toolbar>

            <v-row class="pr-4 py-3" no-gutters>
                <v-menu
                    v-model="menu.status"
                    max-height="300"
                    offset-y
                    :close-on-content-click="false"
                    nudge-bottom="2"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="secondary"
                            class="text-capitalize"
                            text
                            v-on="on"
                        >
                            {{ translations.filterStatus[lang] }}
                            <v-icon
                                v-text="
                                    menu.status
                                        ? icons.mdiChevronUp
                                        : icons.mdiChevronDown
                                "
                            ></v-icon>
                        </v-btn>
                    </template>

                    <v-list dense>
                        <v-list-item
                            v-for="status in transactionStatuses"
                            :key="status.name"
                            class="pl-3"
                            :class="{ 'b-list-active': status.selected }"
                            @click="statusSelect(status)"
                        >
                            <v-list-item-icon class="mr-2">
                                <v-icon
                                    :color="status.selected ? 'secondary' : ''"
                                    v-text="
                                        status.selected
                                            ? icons.mdiCheckBoxOutline
                                            : icons.mdiCheckboxBlankOutline
                                    "
                                ></v-icon>
                            </v-list-item-icon>

                            <v-list-item-title
                                v-text="status.name"
                            ></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-menu
                    v-model="menu.type"
                    max-height="300"
                    offset-y
                    :close-on-content-click="false"
                    nudge-bottom="2"
                >
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="secondary"
                            class="text-capitalize"
                            text
                            v-on="on"
                        >
                            {{ translations.filterType[lang] }}
                            <v-icon
                                v-text="
                                    menu.type
                                        ? icons.mdiChevronUp
                                        : icons.mdiChevronDown
                                "
                            ></v-icon>
                        </v-btn>
                    </template>

                    <v-list dense>
                        <v-list-item
                            v-for="type in transactionTypes"
                            :key="type.name"
                            class="pl-3"
                            :class="{ 'b-list-active': type.selected }"
                            @click="typeSelect(type)"
                        >
                            <v-list-item-icon class="mr-2">
                                <v-icon
                                    :color="type.selected ? 'secondary' : ''"
                                    v-text="
                                        type.selected
                                            ? icons.mdiCheckBoxOutline
                                            : icons.mdiCheckboxBlankOutline
                                    "
                                ></v-icon>
                            </v-list-item-icon>
                            <v-list-item-title
                                v-text="type.name"
                            ></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-spacer></v-spacer>

                <v-col cols="4">
                    <b-search-field></b-search-field>
                </v-col>
            </v-row>

            <v-row v-if="selectedStatuses.length > 0" no-gutters class="px-2 py-2">
                <v-col cols="12">
                    <v-chip
                        v-for="(status, i) in selectedStatuses"
                        :key="status.name"
                        color="secondary"
                        class="ml-2 mb-1 font-weight-medium"
                        close
                        @click:close="deleteStatus(status, i)"
                        >{{ status.name }}</v-chip
                    >
                </v-col>
            </v-row>

            <v-row v-if="selectedTypes.length > 0" no-gutters class="px-2 py-2">
                <v-col cols="12">
                    <v-chip
                        v-for="(type, i) in selectedTypes"
                        :key="type.name"
                        color="secondary"
                        class="ml-2 mb-1 font-weight-medium"
                        close
                        @click:close="deleteType(type, i)"
                        >{{ type.name }}</v-chip
                    >
                </v-col>
            </v-row>

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

                <template v-slot:item.transaction_status_name="{ item }">
                    <v-sheet>
                        <b-select
                            v-model="item.transaction_status_id"
                            :items="transactionStatuses"
                            :loading="item.loading"
                            item-text="name"
                            item-value="transaction_status_id"
                            class="mb-3"
                            :prependInnerIcon="item.transaction_status_id == '1' ? 'mdiTimelapse' : item.transaction_status_id == 2 ? 'mdiFlagOutline' : 'mdiCheck'"
                            @change="changeStatus(item)"
                        ></b-select>
                    </v-sheet>
                </template>

                <template v-slot:item.watch="{ item }">
                    <div
                        class="d-flex align-center"
                        style="cursor: pointer"
                        @click="
                            () => {
                                transactionId = item.transaction_id;
                                dialog = true;
                            }
                        "
                    >
                        <v-icon v-text="icons.mdiEye"></v-icon>
                        <p class="ml-2 mb-0 text-decoration-underline">Show details</p>
                    </div>
                </template>

                <template v-slot:item.actions="{ item }">
                    <v-btn
                        color="grey lighten-2"
                        class="text-capitalize my-1"
                        width="83"
                        depressed
                        @click="myFunc(item)"
                        >Refund</v-btn
                    >
                </template>
            </v-data-table>

            <v-dialog v-model="dialog" max-width="600">
                <transaction-profile
                    :transaction-id="transactionId"
                    @cancel="dialog = false"
                ></transaction-profile>
            </v-dialog>

            <v-dialog v-model="settingsDialog" max-width="600">
                <v-card>
                    <v-card-title class="flex justify-center">
                        Settings Panel
                    </v-card-title>
                    <v-divider class="mb-3"></v-divider>
                    <v-card-text>
                        <v-row justify="space-around" no-gutters>
                            <v-col cols="2" class="d-flex">
                                <v-row justify="center" align="center" no-gutters>
                                    <v-icon
                                    color="secondary"
                                    v-text="icons.mdiCellphoneIphone"
                                    x-large
                                    ></v-icon>
                                </v-row>
                            </v-col>
                            <v-col cols="5">
                                <p class="font-weight-black">Mobile Payments</p>
                                <p>Impress your clients with mobile payments to your store</p>
                            </v-col>
                            <v-col cols="5" class="d-flex">
                                <v-row justify="center" align="center" no-gutters>
                                    <v-switch
                                        v-model="online_payments"
                                        :label="online_payments ? 'On' : 'Off'"
                                        color="secondary"
                                        class="ml-3 mt-0 pt-0"
                                        hide-details
                                        :loading="mobileLoading"
                                        @change="updateMobilePayments({ online_payments })"
                                    ></v-switch>
                                </v-row>
                            </v-col>
                        </v-row>

                        <v-row justify="space-around" class="mt-5" no-gutters>
                            <v-col cols="6" class="d-flex justify-center">
                                <p 
                                class="text-decoration-underline font-weight-medium"
                                style="cursor: pointer"
                                @click="downloadAllTransactions" >
                                    {{ translations.download[lang] }}
                                </p>
                            </v-col>

                            <v-col cols="6" class="d-flex justify-center">
                                <p 
                                class="text-decoration-underline font-weight-medium"
                                style="cursor: pointer">
                                    {{ translations.fundClosure[lang] }}
                                </p>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    
                </v-card>
            </v-dialog>
        </v-sheet>
    </v-container>
</template>

<script>
import {
    mdiCellphoneIphone,
    mdiFormatListCheckbox,
    mdiPrinter,
    mdiOpenInNew,
    mdiChevronUp,
    mdiChevronDown,
    mdiCheckboxBlankOutline,
    mdiCheckBoxOutline,
    mdiTextBoxSearchOutline,
    mdiCog,
    mdiEye
} from "@mdi/js";

import TransactionProfile from "./TransactionProfile.vue";
import translations from "@/utils/translations/storePanel/transactions";
import { mapState, mapMutations, mapActions } from "vuex";
import axios from "axios";

export default {
    name: "Transactions",

    components: { TransactionProfile },

    mixins: [translations],

    data() {
        return {
            icons: {
                mdiCellphoneIphone,
                mdiFormatListCheckbox,
                mdiPrinter,
                mdiOpenInNew,
                mdiChevronUp,
                mdiChevronDown,
                mdiCheckboxBlankOutline,
                mdiCheckBoxOutline,
                mdiTextBoxSearchOutline,
                mdiCog,
                mdiEye
            },
            online_payments: null,
            menu: {
                status: false,
                type: false
            },
            page: +this.$route.query.page,
            selectedStatuses: [],
            selectedTypes: [],
            dialog: false,
            transactionId: null,
            settingsDialog: false
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/transactions", [
            "mobileLoading",
            "transactionStatuses",
            "transactionTypes",
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
                    width: "25%"
                },
                {
                    text: this.translations.actions[this.lang],
                    value: "actions"
                }
            ];
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                if (this.$route.query[key])
                    query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        },

        transaction: {
            get() {
                return this.$store.state.storePanel.transactions.transaction;
            },

            set(val) {
                this.setItem(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel", ["setMobilePayments"]),
        ...mapMutations("storePanel/transactions", ["setItem"]),
        ...mapActions("storePanel/transactions", [
            "getTransactionStatuses",
            "getTransactionTypes",
            "getItems",
            "changeStatus",
            "updateMobilePayments",
            "remove"
        ]),

        statusSelect(item) {
            item.selected = !item.selected;

            let index = this.selectedStatuses.findIndex(
                s => s.name === item.name
            );

            if (index === -1) {
                this.selectedStatuses.push(item);
            } else {
                this.selectedStatuses.splice(index, 1);
            }
        },

        deleteStatus(item, index) {
            this.selectedStatuses.splice(index, 1);
            this.transactionStatuses.find(
                s => s.name === item.name
            ).selected = false;
        },

        typeSelect(item) {
            item.selected = !item.selected;

            let index = this.selectedTypes.findIndex(t => t.name === item.name);

            if (index === -1) {
                this.selectedTypes.push(item);
            } else {
                this.selectedTypes.splice(index, 1);
            }
        },

        deleteType(item, index) {
            this.selectedTypes.splice(index, 1);
            this.transactionTypes.find(
                t => t.name === item.name
            ).selected = false;
        },

        getStoreId() {
            return localStorage.getItem("storeId");
        },

        async downloadAllTransactions() {
            try {
                axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
                    "accessToken"
                )}`;

                // axios
                //     .get(
                //         `https://api.roadcube.tk/v1/stores/${localStorage.getItem(
                //             "storeId"
                //         )}/transactions/excel/generate`
                //     )
                //     .then(res => {
                //         console.log(res);
                //     });

                axios
                    .get(
                        `https://api.roadcube.tk/v1/stores/${localStorage.getItem(
                            "storeId"
                        )}/transactions/excel/status`
                    )
                    .then(res => console.log(res));

                // axios
                //     .get(
                //         `https://api.roadcube.tk/v1/stores/${localStorage.getItem(
                //             "storeId"
                //         )}/transactions/excel/download`,
                //         {
                //             responseType: "blob"
                //         }
                //     )
                //     .then(res => {
                //         console.log(res);
                //         const blob = res.data;
                //         const fileName = res.headers("fileName");
                //         const link = document.createElement("a");
                //         link.href = window.URL.createObjectURL(blob);
                //         link.download = fileName;
                //         link.click();
                //     });
            } catch (ex) {
                console.error(ex.response.data.message);
            }
        }

        // fundClosure() {
        //     axios.get(
        //         "https://api.roadcube.test/v1/stores/{{store_id}}/transactions/fund/close"
        //     );
        //     axios.get(
        //         "https://api.roadcube.test/v1/stores/{{store_id}}/transactions/fund/close)"
        //     );
        // }
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
        },

        ["$store.state.storePanel.store"]: {
            immediate: true,
            handler(val) {
                this.online_payments = val.flags.reward.online_payments;
            }
        },

        transactionStatuses(val) {
            if (val.length) {
                if (this.$route.query["transaction-status-id"]) {
                    let statuses = this.$route.query[
                        "transaction-status-id"
                    ].split(",");

                    statuses.forEach(s => {
                        let status = val.find(
                            t => t.transaction_status_id === +s
                        );

                        status.selected = true;

                        this.selectedStatuses.push(status);
                    });
                }
            }
        },

        transactionTypes(val) {
            if (val.length) {
                if (this.$route.query["transaction-type"]) {
                    let types = this.$route.query["transaction-type"].split(
                        ","
                    );

                    types.forEach(t => {
                        let type = val.find(s => s.transaction_type_id === +t);

                        type.selected = true;

                        this.selectedTypes.push(type);
                    });
                }
            }
        },

        selectedStatuses(val) {
            let str = "";

            if (val.length) {
                val.forEach(s => (str += `,${s.transaction_status_id}`));
                str = str.slice(1);
            } else {
                str = undefined;
            }

            if (str !== this.$route.query["transaction-status-id"]) {
                this.$router.push({
                    query: {
                        ...this.$route.query,
                        "transaction-status-id": str
                    }
                });
            }
        },

        selectedTypes(val) {
            let str = "";

            if (val.length) {
                val.forEach(t => (str += `,${t.transaction_type_id}`));
                str = str.slice(1);
            } else {
                str = undefined;
            }

            if (str !== this.$route.query["transaction-type"]) {
                this.$router.push({
                    query: { ...this.$route.query, "transaction-type": str }
                });
            }
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
        this.getTransactionStatuses();
        this.getTransactionTypes();
    }
};
</script>

<style>
.v-data-footer {
    padding: 12px 0;
}
</style>

<style scoped>
.b-list-active {
    background-color: rgba(42, 48, 66, 0.12);
    color: rgb(42, 48, 66);
}
</style>
