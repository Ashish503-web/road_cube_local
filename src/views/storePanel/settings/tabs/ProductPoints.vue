<template>
    <v-tab-item :value="$route.path" class="pt-5">
        <v-data-table
            :headers="headers"
            :items="productPoints"
            :footer-props="{
                itemsPerPageOptions: [12],
                showCurrentPage: true,
            }"
            :page.sync="page"
            :server-items-length="serverItemsLength"
            loader-height="2"
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
                        :items="
                            item.group_product
                                ? groupRewardTypes
                                : productRewardTypes
                        "
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
                        <h4 class="subtitle-2">Subsidized Points</h4>
                    </template>
                </v-checkbox>
            </template>

            <template v-slot:item.save="{ item }">
                <v-btn
                    color="secondary"
                    class="text-capitalize"
                    depressed
                    @click="update(item)"
                    >change</v-btn
                >
            </template>
        </v-data-table>
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "ProductPoints",

    data() {
        return {
            groupRewardTypes: [
                { text: "Per Transaction", value: 1 },
                { text: "Per Euro", value: 4 },
            ],
            productRewardTypes: [
                { text: "Per Transaction", value: 1 },
                { text: "Piece", value: 2 },
                { text: "Liters", value: 3 },
                { text: "Per Euro", value: 4 },
            ],
            lang: "el",
            page: +this.$route.query.page,
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/settings/productPoints", ["productPoints"]),

        headers() {
            return [
                {
                    text: "Product Name",
                    value: `name[${this.lang}]`,
                    width: "20%",
                },
                { text: "Points", value: "reward_points", width: "15%" },
                { text: "Type", value: "reward_type_id", width: "30%" },
                {
                    text: "Point Subsidy",
                    value: "reward_points_shared",
                },
                { text: "Save", value: "save", width: "10%" },
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
        ...mapActions("storePanel/settings/productPoints", [
            "getItems",
            "update",
        ]),
    },

    watch: {
        $route: {
            immediate: true,
            handler(val) {
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
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
        },

        perPage(perPage) {
            this.$router.push({ query: { ...this.$route.query, perPage } });
        },
    },
};
</script>

<style>
.v-data-footer {
    padding: 12px 0;
}
</style>
