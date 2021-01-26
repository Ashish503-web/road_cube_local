<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-toolbar flat height="90">
            <ExportLinks />

            <v-spacer></v-spacer>

            <v-col cols="12" sm="4">
                <v-menu
                    :close-on-content-click="false"
                    offset-y
                    max-width="290px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                            :label="translations.range[lang]"
                            color="secondary"
                            rounded
                            outlined
                            dense
                            clearable
                            hide-details
                            :prepend-inner-icon="icons.mdiCalendarSearch"
                            v-on="on"
                        ></v-text-field>
                    </template>

                    <v-date-picker
                        v-model="range"
                        color="secondary"
                        range
                    ></v-date-picker>
                </v-menu>
            </v-col>

            <v-col cols="12" sm="4">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="items"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            class="b-outlined"
        ></v-data-table>
    </v-tab-item>
</template>

<script>
import { mdiCalendarSearch } from "@mdi/js";

import ExportLinks from "@/components/general/ExportLinks.vue";
import translations from "@/utils/translations/loyaltyPanel/branchDebt/redemptionInvoice";

export default {
    name: "BranchDebt",

    components: { ExportLinks },

    mixins: [translations],

    data() {
        return {
            icons: { mdiCalendarSearch },
            range: [],
            items: [
                {
                    date: "14.09.2020",
                    name_of_shop: "Bill",
                    points: "Moskovyan 14",
                    redeemed_coupons: "Phone",
                },
            ],
            page: +this.$route.query.page,
        };
    },

    computed: {
        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                { text: this.translations.date[this.lang], value: "date" },
                {
                    text: this.translations.nameOfStore[this.lang],
                    value: "name_of_shop",
                },
                { text: this.translations.points[this.lang], value: "points" },
                {
                    text: this.translations.redeemedCoupons[this.lang],
                    value: "redeemed_coupons",
                },
            ];
        },
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

        search(val, oldVal) {
            if (val != oldVal) {
                if (val == null) {
                    this.getItems(this.query);
                } else {
                    this.debouncedSearch();
                }
            }
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
};
</script>
