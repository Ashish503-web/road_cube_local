<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-toolbar flat height="90">
            <v-btn
                color="secondary"
                class="text-capitalize px-5"
                depressed
                v-text="translations.generalLimits[lang]"
                @click="openGeneralModal()"
            ></v-btn>

            <v-spacer></v-spacer>

            <v-col cols="12" sm="4" class="pa-0">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="dailyLimits"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
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

            <template v-slot:item.online_limits="{ item }">
                <v-btn
                    color="secondary"
                    class="px-7"
                    small
                    depressed
                    @click="openModal(item,'online')"
                >
                    {{
                        item.daily_limits.online.amount
                            ? new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "EUR",
                                  minimumFractionDigits: 2,
                              }).format(item.daily_limits.online.amount)
                            : item.daily_limits.online.points
                    }}
                </v-btn>
            </template>

            <template v-slot:item.offline_limits="{ item }">
                <v-btn
                    color="secondary"
                    class="px-7"
                    small
                    depressed
                    @click="openModal(item,'offline')"
                >
                    {{
                        item.daily_limits.offline.amount
                            ? new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "EUR",
                                  minimumFractionDigits: 2,
                              }).format(item.daily_limits.offline.amount)
                            : item.daily_limits.offline.points
                    }}
                </v-btn>
            </template>
        </v-data-table>

        <v-dialog v-model="updateDialog" max-width="600" scrollable>
            <LimitsForm :mode="mode" :updateStatus="updateStatus" @cancel="this.setDialog(false)" />
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import LimitsForm from "@/components/loyaltyPanel/stores/LimitsForm.vue";
import translations from "@/utils/translations/loyaltyPanel/stores/dailyTransactionLimits";

export default {
    name: "DailyTransactionLimits",

    components: { LimitsForm },

    mixins: [translations],

    data() {
        return {
            page: +this.$route.query.page,
            mode: 0,
            updateStatus: ''
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("loyaltyPanel/stores/dailyLimits", ["dailyLimits","updateDialog"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.name[this.lang],
                    value: `app_name`,
                    width: "34%",
                },
                {
                    text: this.translations.onlineTransactions[this.lang],
                    value: "online_limits",
                    width: "33%",
                },
                {
                    text: this.translations.offlineTransactions[this.lang],
                    value: "offline_limits",
                    width: "33%",
                },
            ];
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
        ...mapActions("loyaltyPanel/stores/dailyLimits", ["getItems"]),
        ...mapMutations("loyaltyPanel/stores/dailyLimits", ["setItem","setDialog"]),

        openModal(item,status){
            this.mode = 2;
            this.setDialog(true);
            this.setItem(item)
            this.updateStatus = status
        },

        openGeneralModal(item,status){
            this.mode = 1;
            this.setDialog(true);
        }
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
            this.$router.push({
                query: {
                    page: 1,
                    ...this.$route.query,
                },
            });
        }
    },

    mounted() {
        this.getItems(this.query);
    },
};
</script>

<style>
.v-data-footer {
    padding: 12px 0;
}
</style>
