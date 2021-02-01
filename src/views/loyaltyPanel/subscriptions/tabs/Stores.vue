<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-toolbar flat height="90">
            <v-spacer></v-spacer>

            <v-col cols="12" sm="4" class="pa-0">
                <b-search-field
                    v-model="search"
                ></b-search-field>
            </v-col>
        </v-toolbar>

        <v-sheet outlined style="overflow: auto">
            <v-sheet width="1550">
                <v-data-table
                    :headers="headers"
                    :items="storeSubscriptions"
                    :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
                    :page.sync="page"
                    :server-items-length="serverItemsLength"
                    class="b-bottom-outlined"
                >
                
                <template v-slot:item.store_subscription_plan.active="{ item }">
                    <v-icon
                        v-if="item.store_subscription_plan.active"
                        color="green"
                        v-text="icons.mdiCheckCircleOutline"
                    ></v-icon>
                    <v-icon
                        v-else
                        color="red"
                        v-text="icons.mdiMinusCircleOutline"
                    ></v-icon>
                </template>

                </v-data-table>
            </v-sheet>
        </v-sheet>
    </v-tab-item>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/subscriptions/stores";
import { mdiCheckCircleOutline, mdiMinusCircleOutline } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import debounce from "lodash/debounce";

export default {
    name: "Pending",

    mixins: [translations],

    data() {
        return{
            icons: {mdiCheckCircleOutline,mdiMinusCircleOutline},
            page: +this.$route.query.page,
            search: ""
        }
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("loyaltyPanel/subscriptions/storeSubscriptions", [
            "storeSubscriptions"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        },

        headers() {
            return [
                { 
                    text: this.translations.name[this.lang], 
                    value: `store_subscription_plan.plan_name[${this.lang}]` 
                },
                {
                    text: this.translations.storeName[this.lang],
                    value: `store.app_name`,
                },
                { 
                    text: this.translations.description[this.lang], 
                    value: `store_subscription_plan.plan_description[${this.lang}]` 
                },
                { 
                    text: this.translations.active[this.lang], 
                    value: `store_subscription_plan.active`
                },
                {
                    text: this.translations.type[this.lang],
                    value: `store_subscription_plan.plan_type[${this.lang}]`,
                },
                {
                    text: this.translations.price[this.lang],
                    value: `store_subscription_plan.plan_price`,
                },
                {
                    text: this.translations.currency[this.lang],
                    value: `store_subscription_plan.currency`,
                },
                {
                    text: this.translations.vat[this.lang],
                    value: `store_subscription_plan.vat`,
                },
                {
                    text: this.translations.paymentMethod[this.lang],
                    value: `store_payment_method.store_payment_method[${this.lang}]`,
                }
            ];
        },
  
    },

    methods: {
        ...mapActions("loyaltyPanel/subscriptions/storeSubscriptions", [
            "getStoreSubscriptions",
        ]),

        handleSearch() {
            this.getStoreSubscriptions(`?q=${this.search}`);
        }
    },

    mounted(){
        this.getStoreSubscriptions(this.query)
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

    created() {
        this.debouncedSearch = debounce(this.handleSearch, 500);
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
            this.getStoreSubscriptions(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        },

        search(val) {
            if (val == null) {
                this.getStoreSubscriptions(this.query);
            } else {
                this.debouncedSearch();
            }
        }
    }


};
</script>
