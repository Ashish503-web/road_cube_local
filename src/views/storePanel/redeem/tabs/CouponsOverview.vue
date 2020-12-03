<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-toolbar flat height="90">
            <ExportLinks />

            <v-spacer></v-spacer>

            <v-col cols="12" sm="4">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="coupons"
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
                <span v-else v-text="translations.noData[lang]"></span>
            </template>

            <template v-slot:item.edit="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="myFunc(item)"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold">Update</span>
                </v-tooltip>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import { mdiPencilOutline } from "@mdi/js";

import { mapState, mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/couponsOverview";
import ExportLinks from "@/components/general/ExportLinks.vue";

export default {
    name: "CouponsOverview",

    components: { ExportLinks },

    mixins: [translations],

    data() {
        return {
            icons: { mdiPencilOutline },
            page: +this.$route.query.page
        };
    },

    computed: {
        ...mapState(["loading", "serverItemsLength"]),
        ...mapState("storePanel/redeem/couponsOverview", ["coupons"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                {
                    text: this.translations.promoType[this.lang],
                    value: "promo_type_name"
                },
                { text: this.translations.code[this.lang], value: "code" },
                {
                    text: this.translations.available[this.lang],
                    value: "available"
                },
                { text: this.translations.points[this.lang], value: "points" },
                {
                    text: this.translations.totalRedeemed[this.lang],
                    value: "total_redeemed"
                },
                {
                    text: this.translations.date[this.lang],
                    value: "created_at"
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
        ...mapActions("storePanel/redeem/couponsOverview", ["getItems"])
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
