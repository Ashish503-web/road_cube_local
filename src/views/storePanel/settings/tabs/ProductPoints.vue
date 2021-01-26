<template>
    <v-tab-item v-if="permission" :value="$route.fullPath" class="pa-3">
        <v-row no-gutters align="center" class="pa-5 pt-0">
            <v-col cols="auto">
                <v-img
                    src="@/assets/product-points.png"
                    width="60"
                    height="60"
                ></v-img>
            </v-col>

            <v-col cols="9" class="pl-5">
                <h4 v-text="translations.title[lang]"></h4>
                <div
                    style="font-size: 0.875rem"
                    class="font-weight-medium mt-1"
                    v-text="translations.info[lang]"
                ></div>
            </v-col>
        </v-row>

        <v-data-table
            :headers="headers"
            :items="productPoints"
            :footer-props="{
                itemsPerPageOptions: [12],
                showCurrentPage: true
            }"
            :page.sync="page"
            :server-items-length="serverItemsLength"
            class="b-outlined mt-5"
        >
            <template v-slot:no-data>
                <v-progress-circular
                    v-if="loading"
                    color="secondary"
                    indeterminate
                ></v-progress-circular>
                <span v-else v-text="translations.noData[lang]"></span>
            </template>

            <template v-slot:item.reward_points="{ item }">
                <v-sheet>
                    <b-text-field
                        v-model="item.reward_points"
                        type="number"
                        class="mb-3"
                    ></b-text-field>
                </v-sheet>
            </template>

            <template v-slot:item.reward_type_id="{ item }">
                <v-sheet>
                    <b-select
                        v-model="item.reward_type_id"
                        :items="rewardTypes"
                        :disabled="item.group_product"
                        class="mb-3"
                    ></b-select>
                </v-sheet>
            </template>

            <template v-slot:item.reward_points_shared="{ item }">
                <v-checkbox
                    v-model="item.reward_points_shared"
                    color="secondary"
                    class="mt-0 pt-0"
                    hide-details
                >
                    <template v-slot:label>
                        <h4
                            class="subtitle-2"
                            v-text="translations.subsidizedPoints[lang]"
                        ></h4>
                    </template>
                </v-checkbox>
            </template>

            <template v-slot:item.save="{ item }">
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    :loading="item.loading"
                    :disabled="item.group_product"
                    @click="update(item)"
                >
                    {{ translations.change[lang] }}
                </v-btn>
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import productPoints from "@/store/modules/storePanel/settings/productPoints";

import { mapState, mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/productPoints";

export default {
    name: "ProductPoints",

    mixins: [translations],

    data() {
        return {
            page: +this.$route.query.page
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/productPoints", ["productPoints"]),

        lang() {
            return this.$route.params.lang;
        },

        permission() {
            return this.$store.state.permissions.settings
                ? this.$store.state.permissions.settings.product_points
                : null;
        },

        headers() {
            return [
                {
                    text: this.translations.productName[this.lang],
                    value: `name[${this.lang}]`,
                    width: "20%"
                },
                {
                    text: this.translations.points[this.lang],
                    value: "reward_points",
                    width: "15%"
                },
                {
                    text: this.translations.type[this.lang],
                    value: "reward_type_id",
                    width: "30%"
                },
                {
                    text: this.translations.pointSubsidy[this.lang],
                    value: "reward_points_shared"
                },
                {
                    text: this.translations.action[this.lang],
                    value: "save",
                    width: "10%"
                }
            ];
        },

        rewardTypes() {
            return [
                { text: this.translations.perTransaction[this.lang], value: 1 },
                { text: this.translations.perEuro[this.lang], value: 2 },
                { text: this.translations.piece[this.lang], value: 3 },
                { text: this.translations.liters[this.lang], value: 4 }
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
        ...mapActions("storePanel/productPoints", ["getItems", "update"])
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
            }
        },

        $route(val) {
            if (!val.query.page) {
                this.$router.replace({
                    query: {
                        page: 1,
                        ...this.$route.query
                    }
                });
            }
            this.getItems(this.query);
        },

        page(page) {
            this.$router.replace({ query: { ...this.$route.query, page } });
        }
    },

    beforeCreate() {
        if (!this.$store.state.storePanel.productPoints) {
            this.$store.registerModule(
                ["storePanel", "productPoints"],
                productPoints
            );
        }

        if (!this.$route.query.page) {
            this.$router.replace({
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
