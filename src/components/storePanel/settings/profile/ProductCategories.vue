<template>
    <b-standard-card
        title="Product categories"
        :loading="loading"
        :error-message="errorMessage"
    >
        <v-form @submit.prevent="create">
            <v-row no-gutters justify="space-between" align="center">
                <v-col cols="6">
                    <b-text-field
                        v-model="productCategory.name[lang]"
                        label="Category Name"
                        no-top-margin
                    ></b-text-field>
                </v-col>
                <v-col cols="4" class="text-center">
                    <b-lang-menu v-model="lang"></b-lang-menu>
                </v-col>
                <v-col cols="auto">
                    <v-btn
                        type="submit"
                        color="secondary"
                        class="text-capitalize px-5"
                        depressed
                        :loading="loading"
                        >save</v-btn
                    >
                </v-col>
            </v-row>
        </v-form>

        <v-data-table
            :headers="headers"
            :items="productCategories"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            :items-per-page.sync="perPage"
            :server-items-length="serverItemsLength"
            class="b-outlined mt-3"
        >
            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn color="yellow darken-3" icon v-on="on">
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold">Update</span>
                </v-tooltip>

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="red"
                            icon
                            v-on="on"
                            @click="remove(item.product_category_id)"
                        >
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold">Delete</span>
                </v-tooltip>
            </template>
        </v-data-table>

        <!-- <v-row class="mt-2">
            <v-col
                v-for="category in productCategories"
                :key="category.name[lang]"
                cols="auto"
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
                    {{ category.name[lang] }}
                    <v-avatar
                        color="red"
                        size="20"
                        class="category-remove rounded-circle"
                        @click="remove(category.product_category_id)"
                    >
                        <v-icon x-small dark v-text="icons.mdiClose"></v-icon>
                    </v-avatar>
                </v-card>
            </v-col>
        </v-row> -->
    </b-standard-card>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "ProductCategories",

    data() {
        return {
            icons: { mdiPencilOutline, mdiClose },
            lang: "el",
            updateMode: false,
            page: +this.$route.query.page,
            perPage: +this.$route.query.perPage
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/settings/productCategories", [
            "productCategories"
        ]),

        headers() {
            return [
                { text: "Category Name", value: `name[${this.lang}]` },
                { text: "Actions", value: "actions" }
            ];
        },

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
