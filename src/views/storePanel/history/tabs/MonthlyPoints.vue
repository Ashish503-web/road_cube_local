<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="80">
            <v-col cols="12" sm="6">
                <a class="export-link" href @click.prevent
                    >Export to CSV/Excel</a
                >
            </v-col>

            <v-spacer></v-spacer>

            <v-col cols="12" sm="4">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="monthlyPoints"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
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

            <template v-slot:item.edit="{ item }">
                <v-btn color="yellow darken-3" icon @click="myFunc(item)">
                    <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                </v-btn>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "MonthlyPoints",

    data() {
        return {
            headers: [
                { text: "Date", value: "date" },
                { text: "Funded", value: "funded" },
                { text: "Non Funded", value: "non_funded" },
                { text: "Total Points", value: "total_points" }
            ],
            lang: "el",
            page: +this.$route.query.page
        };
    },

    computed: {
        ...mapState(["loading", "serverItemsLength"]),
        ...mapState("storePanel/history", ["monthlyPoints"]),

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        }
    },

    methods: {
        ...mapActions("storePanel/history", ["getMonthlyPoints"])
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

            this.getMonthlyPoints(this.query);
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
        this.getMonthlyPoints(this.query);
    }
};
</script>
