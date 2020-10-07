<template>
    <b-standard-card title="Product categories" :error-message="errorMessage">
        <v-form @submit.prevent>
            <v-row no-gutters align="center">
                <v-tabs v-model="tab" color="secondary" class="mb-3">
                    <v-tab class="text-capitalize">Greek</v-tab>
                    <v-tab class="text-capitalize">English</v-tab>
                    <v-tab class="text-capitalize">Italian</v-tab>
                </v-tabs>

                <v-col>
                    <v-tabs-items v-model="tab">
                        <v-tab-item>
                            <b-text-field
                                v-model="productCategory.name[langs[tab]]"
                                label="Enter Category Name in Greek"
                                no-top-margin
                            ></b-text-field>
                        </v-tab-item>

                        <v-tab-item>
                            <b-text-field
                                v-model="productCategory.name[langs[tab]]"
                                label="Enter Category Name in English"
                                no-top-margin
                            ></b-text-field>
                        </v-tab-item>

                        <v-tab-item>
                            <b-text-field
                                v-model="productCategory.name[langs[tab]]"
                                label="Enter Category Name in Italian"
                                no-top-margin
                            ></b-text-field>
                        </v-tab-item>
                    </v-tabs-items>
                </v-col>
                <v-col cols="auto" class="ml-3">
                    <v-btn
                        type="submit"
                        color="secondary"
                        class="text-capitalize px-5"
                        depressed
                        :loading="loading"
                        @click="create"
                        >add</v-btn
                    >
                </v-col>
            </v-row>
        </v-form>

        <v-row>
            <v-col
                v-for="category in productCategories"
                :key="category.name[langs[tab]]"
                cols="4"
            >
                <v-card
                    outlined
                    width="300"
                    class="subtitle-2 py-3 px-3 relative"
                >
                    <v-badge
                        class="category-number"
                        content="5"
                        color="secondary"
                    ></v-badge>
                    {{ category.name[langs[tab]] }}
                    <v-avatar
                        color="red"
                        size="20"
                        class="category-remove rounded-circle"
                        @click="remove(category)"
                    >
                        <v-icon
                            x-small
                            dark
                            v-text="icons.mdiCloseThick"
                        ></v-icon>
                    </v-avatar>
                </v-card>
            </v-col>
        </v-row>
    </b-standard-card>
</template>

<script>
import { mdiCloseThick } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "ProductCategories",

    data: () => ({
        icons: {
            mdiCloseThick
        },
        tab: 0,
        langs: ["el", "en", "it"]
    }),

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/settings/productCategories", [
            "productCategories"
        ]),

        productCategory: {
            get() {
                return this.$store.state.storePanel.settings.productCategories
                    .productCategory;
            },

            set(val) {
                this.setItem(val);
            }
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
        ...mapMutations("storePanel/settings/productCategories", ["setItem"]),
        ...mapActions("storePanel/settings/productCategories", [
            "getItems",
            "create",
            "update",
            "remove"
        ])
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
                    perPage: 10,
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
    },

    mounted() {
        this.getItems(this.query);
    }
};
</script>

<style scoped>
.category-number {
    position: absolute;
    top: 7px;
    left: -5px;
}

.category-remove {
    position: absolute;
    top: -9px;
    right: -9px;
    cursor: pointer;
}
</style>
