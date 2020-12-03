<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-toolbar flat height="90">
            <ExportLinks />

            <v-spacer></v-spacer>

            <v-col cols="12" sm="4" class="pa-0">
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
import ExportLinks from "@/components/general/ExportLinks.vue";
import translations from "@/utils/translations/storePanel/history";

export default {
    name: "MonthlyPoints",

    components: { ExportLinks },

    mixins: [translations],

    data() {
        return {
            page: +this.$route.query.page
        };
    },

    computed: {
        ...mapState(["loading", "serverItemsLength"]),
        ...mapState("storePanel/history", ["monthlyPoints"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                { text: this.translations.date[this.lang], value: "date" },
                { text: this.translations.funded[this.lang], value: "funded" },
                {
                    text: this.translations.nonFunded[this.lang],
                    value: "non_funded"
                },
                {
                    text: this.translations.totalPoints[this.lang],
                    value: "total_points"
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
