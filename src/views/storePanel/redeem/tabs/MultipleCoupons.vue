<template>
    <v-tab-item :value="$route.fullPath" class="pa-3">
        <v-toolbar flat height="90">
            <v-spacer></v-spacer>

            <v-col cols="12" sm="4">
                <b-search-field></b-search-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="multipleCoupons"
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
        </v-data-table>
    </v-tab-item>
</template>

<script>
import multipleCoupons from "@/store/modules/storePanel/redeem/multipleCoupons";

import { mapState, mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/couponsOverview";

export default {
    name: "MultipleCoupons",

    mixins: [translations],

    data() {
        return {
            page: +this.$route.query.page,
        };
    },

    computed: {
        ...mapState(["loading", "serverItemsLength"]),
        ...mapState("storePanel/multipleCoupons", ["multipleCoupons"]),

        lang() {
            return this.$route.params.lang;
        },

        permission() {
            return this.$store.state.permissions.redemption
                ? this.$store.state.permissions.redemption.multiple_coupons
                : null;
        },

        headers() {
            return [
                {
                    text: this.translations.promoType[this.lang],
                    value: "promo_type_name",
                },
                { text: this.translations.code[this.lang], value: "code" },
                {
                    text: this.translations.available[this.lang],
                    value: "available",
                },
                { text: this.translations.points[this.lang], value: "points" },
                {
                    text: this.translations.totalRedeemed[this.lang],
                    value: "total_redeemed",
                },
                {
                    text: this.translations.date[this.lang],
                    value: "created_at",
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
        ...mapActions("storePanel/multipleCoupons", ["getItems"]),
    },

    watch: {
        permission: {
            immediate: true,
            handler(val) {
                if (!val) {
                    this.$router.replace(
                        `/${this.lang}/storePanel/forbidden-gateway`
                    );
                }
            },
        },

        $route(val) {
            if (!val.query.page) {
                this.$router.replace({
                    query: {
                        page: 1,
                        ...this.$route.query,
                    },
                });
            }
            this.getItems(this.query);
        },

        page(page) {
            this.$router.replace({ query: { ...this.$route.query, page } });
        },
    },

    beforeCreate() {
        if (!this.$store.state.storePanel.multipleCoupons) {
            this.$store.registerModule(
                ["storePanel", "multipleCoupons"],
                multipleCoupons
            );
        }

        if (!this.$route.query.page) {
            this.$router.replace({
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
