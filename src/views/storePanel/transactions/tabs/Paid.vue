<template>
    <v-tab-item :value="$route.path">
        <v-card-title class="justify-end">
            <v-col cols="12" md="4">
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
        </v-card-title>

        <v-data-table
            :headers="headers"
            :items="transactions"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            :items-per-page.sync="perPage"
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
        </v-data-table>
    </v-tab-item>
</template>

<script>
import { mdiMagnify } from "@mdi/js";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
    name: "Paid",

    data() {
        return {
            icons: { mdiMagnify },
            headers: [
                { text: "User", value: "user_id" },
                { text: "Amount", value: "total_price" },
                { text: "Points", value: "total_points" },
                { text: "Product", value: "product_name" },
                { text: "Date", value: "date" },
                { text: "Information", value: "information" }
            ],
            page: +this.$route.query.page,
            perPage: +this.$route.query.perPage
        };
    },

    computed: {
        ...mapState("storePanel/transactions", [
            "loading",
            "transactions",
            "serverItemsLength"
        ]),

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        }
    },

    methods: {
        ...mapActions("storePanel/transactions", ["getItems"])
    },

    watch: {
        $route() {
            this.getItems(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        },

        perPage(perPage) {
            this.$router.push({ query: { ...this.$route.query, perPage } });
        }
    },

    beforeCreate() {
        if (!this.$route.query.perPage) {
            this.$router.push({
                query: {
                    perPage: 12,
                    ...this.$route.query
                }
            });
        }

        if (!this.$route.query.page) {
            this.$router.push({
                query: {
                    page: 1,
                    ...this.$route.query
                }
            });
        }

        if (!this.$route.query["transaction-status-id"]) {
            this.$router.push({
                query: {
                    "transaction-status-id": 2,
                    ...this.$route.query
                }
            });
        }

        if (!this.$route.query["transaction-type"]) {
            this.$router.push({
                query: {
                    "transaction-type": 2,
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
