<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-toolbar flat height="90">
            <v-spacer></v-spacer>
            <v-col cols="4" class="pa-0">
                <b-search-field
                    :selectedSearchType="selectedSearchType"
                    :searchTypes="searchTypes"
                ></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="items"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            :server-items-length="serverItemsLength"
            disable-sort
            class="b-outlined"
        ></v-data-table>
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import translations from "@/utils/translations/loyaltyPanel/stores/financialData";

export default {
    name: "FinancialData",

    mixins: [translations],

    data() {
        return {
            searchTypes: [
                "All Fields",
                "Name",
                "Name of Shop(in app)",
                "Customer",
                "Transaction",
                "Total",
                "Points",
            ],
            selectedSearchType: "All Fields",
            items: [
                {
                    name: "Vasilis",
                    name_of_shop: "katerina1",
                    customer: "20",
                    transaction: "34",
                    total: "1905.18",
                    points: "3836",
                },
                {
                    name: "Vasilis",
                    name_of_shop: "katerina1",
                    customer: "20",
                    transaction: "34",
                    total: "1905.18",
                    points: "3836",
                },
                {
                    name: "Vasilis",
                    name_of_shop: "katerina1",
                    customer: "20",
                    transaction: "34",
                    total: "1905.18",
                    points: "3836",
                },
            ],
            page: +this.$route.query.page,
            mode: 0,
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.name[this.lang],
                    value: "name",
                },
                {
                    text: this.translations.storeName[this.lang],
                    value: "name_of_shop",
                },
                {
                    text: this.translations.customer[this.lang],
                    value: "customer",
                },
                {
                    text: this.translations.transaction[this.lang],
                    value: "transaction",
                },
                { text: this.translations.total[this.lang], value: "total" },
                { text: this.translations.points[this.lang], value: "points" },
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
        ...mapActions("loyaltyPanel/stores/storesTab", ["getFinancialData"]),
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
        this.getFinancialData(this.query);
    },
};
</script>
