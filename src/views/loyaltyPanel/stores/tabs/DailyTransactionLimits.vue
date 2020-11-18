<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="90">
            <v-btn
                color="secondary"
                class="text-capitalize px-5"
                depressed
                v-text="translations.generalLimits[lang]"
                @click="
                    () => {
                        mode = 1;
                        limitsDialog = true;
                    }
                "
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
                    @click="
                        () => {
                            mode = 2;
                            limitsDialog = true;
                        }
                    "
                >
                    {{
                        item.daily_limits.online.amount
                            ? new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "EUR",
                                  minimumFractionDigits: 2
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
                    @click="
                        () => {
                            mode = 2;
                            limitsDialog = true;
                        }
                    "
                >
                    {{
                        item.daily_limits.offline.amount
                            ? new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "EUR",
                                  minimumFractionDigits: 2
                              }).format(item.daily_limits.offline.amount)
                            : item.daily_limits.offline.points
                    }}
                </v-btn>
            </template>
        </v-data-table>

        <v-dialog v-model="limitsDialog" max-width="600" scrollable>
            <LimitsForm :mode="mode" @cancel="limitsDialog = false" />
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
            items: [
                {
                    name: "Vasilis"
                },
                {
                    name: "Vasilis"
                },
                {
                    name: "Vasilis"
                }
            ],
            page: +this.$route.query.page,
            mode: 0,
            limitsDialog: false
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("loyaltyPanel/stores/dailyLimits", ["dailyLimits"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.name[this.lang],
                    value: `app_name[${this.lang}]`,
                    width: "34%"
                },
                {
                    text: this.translations.onlineTransactions[this.lang],
                    value: "online_limits",
                    width: "33%"
                },
                {
                    text: this.translations.offlineTransactions[this.lang],
                    value: "offline_limits",
                    width: "33%"
                }
            ];
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        }
    },

    methods: {
        ...mapActions("loyaltyPanel/stores/dailyLimits", ["getItems"])
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

<style>
.v-data-footer {
    padding: 12px 0;
}
</style>
