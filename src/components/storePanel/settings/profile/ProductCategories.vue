<template>
    <b-standard-card
        title="Product categories"
        :loading="loading"
        :error-message="errorMessage"
    >
        <v-form @submit.prevent="create">
            <v-row no-gutters justify="space-between" align="center">
                <v-col class="pr-2">
                    <b-text-field
                        v-model="productCategory.name[lang]"
                        label="Category Name"
                        no-top-margin
                    >
                        <template v-slot:append>
                            <b-lang-menu
                                v-model="lang"
                                type="inner"
                            ></b-lang-menu>
                        </template>
                    </b-text-field>
                </v-col>
                <v-col cols="auto">
                    <v-btn
                        type="submit"
                        color="secondary"
                        class="text-capitalize px-5"
                        depressed
                        :loading="loading"
                        >add</v-btn
                    >
                </v-col>
            </v-row>
        </v-form>

        <v-sheet outlined class="mt-3">
            <v-row no-gutters>
                <v-col class="subtitle-2 text--secondary pa-3">
                    Category Name</v-col
                >
                <v-col cols="auto" class="subtitle-2 text--secondary py-3 px-6">
                    Actions
                </v-col>
            </v-row>
            <v-row
                v-for="category in productCategories"
                :key="category.product_category_id"
                no-gutters
                align="center"
                class="b-border-top"
            >
                <v-col class="pa-3" v-text="category.name[lang]"></v-col>
                <v-col cols="auto" class="px-3">
                    <v-tooltip color="secondary" top>
                        <template v-slot:activator="{ on }">
                            <v-btn
                                color="yellow darken-3"
                                icon
                                v-on="on"
                                @click="
                                    () => {
                                        category.expanded = true;
                                        selectedProductCategory = category;
                                    }
                                "
                            >
                                <v-icon
                                    v-text="icons.mdiPencilOutline"
                                ></v-icon>
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
                                @click="remove(category.product_category_id)"
                            >
                                <v-icon v-text="icons.mdiClose"></v-icon>
                            </v-btn>
                        </template>

                        <span class="font-weight-bold">Delete</span>
                    </v-tooltip>
                </v-col>
                <v-col v-if="category.expanded" cols="12">
                    <v-card flat class="pa-3">
                        <b-text-field
                            v-model="selectedProductCategory.name[selectedLang]"
                            label="Category Name"
                            no-top-margin
                        >
                            <template v-slot:append>
                                <b-lang-menu
                                    v-model="selectedLang"
                                    type="inner"
                                ></b-lang-menu>
                            </template>
                        </b-text-field>

                        <v-card-actions class="pa-0 pt-3">
                            <v-spacer></v-spacer>
                            <v-btn
                                class="text-capitalize"
                                height="32"
                                text
                                @click="
                                    () => {
                                        category.expanded = false;
                                        selectedProductCategory = {};
                                    }
                                "
                                >cancel</v-btn
                            >
                            <v-btn
                                type="submit"
                                color="secondary"
                                class="text-capitalize"
                                height="32"
                                depressed
                                :loading="selectedProductCategory.loading"
                                @click="update"
                                >save</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-sheet>
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
            selectedLang: "el",
            page: +this.$route.query.page
        };
    },

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

        selectedProductCategory: {
            get() {
                return this.$store.state.storePanel.settings.productCategories
                    .selectedProductCategory;
            },

            set(val) {
                this.setSelectedItem(val);
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
        ...mapMutations("storePanel/settings/productCategories", [
            "setItem",
            "setSelectedItem"
        ]),
        ...mapActions("storePanel/settings/productCategories", [
            "getItems",
            "create",
            "update",
            "remove"
        ])
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
        },

        perPage(perPage) {
            this.$router.push({ query: { ...this.$route.query, perPage } });
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

<style scoped>
.b-border-top {
    border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
