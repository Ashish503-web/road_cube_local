<template>
    <v-tab-item>
        <v-toolbar flat height="80" class="pt-2">
            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                @click="
                    () => {
                        productGroup = {};
                        mode = 1;
                        dialog = true;
                    }
                "
                >add product group</v-btn
            >
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="productGroups"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            :items-per-page.sync="perPage"
            :server-items-length="serverItemsLength"
            class="b-outlined"
        >
            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    productGroup = item;
                                    mode = 2;
                                    dialog = true;
                                }
                            "
                        >
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
                            @click="
                                () => {
                                    productGroup = item;
                                    deleteDialog = true;
                                }
                            "
                        >
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span class="font-weight-bold">Delete</span>
                </v-tooltip>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="600">
            <ProductGroupForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="600">
            <b-card
                type="delete"
                title="Delete Product"
                icon="mdiDelete"
                submit-text="delete"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove(productGroup.product_id)"
            >
                <p>
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary">{{
                        productGroup.name
                    }}</span
                    >?
                </p>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiPencilOutline, mdiClose } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import ProductGroupForm from "@/components/storePanel/products/ProductGroupForm.vue";

export default {
    name: "ProductGroups",
    components: { ProductGroupForm },

    data() {
        return {
            icons: { mdiPencilOutline, mdiClose },
            headers: [
                { text: "Product Name", value: "name" },
                { text: "Product Description", value: "description" },
                { text: "Coupon", value: "coupon" },
                { text: "Actions", value: "actions" }
            ],
            page: +this.$route.query.page,
            perPage: +this.$route.query.perPage,
            mode: 0
        };
    },

    computed: {
        ...mapState("storePanel/productGroups", [
            "loading",
            "errorMessage",
            "productGroups",
            "serverItemsLength"
        ]),

        dialog: {
            get() {
                return this.$store.state.storePanel.productGroups.dialog;
            },

            set(val) {
                this.setDialog(val);
            }
        },

        deleteDialog: {
            get() {
                return this.$store.state.storePanel.productGroups.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        },

        productGroup: {
            get() {
                return this.$store.state.storePanel.productGroups.productGroup;
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
        ...mapMutations("storePanel/productGroups", [
            "setDialog",
            "setDeleteDialog",
            "setItem"
        ]),
        ...mapActions("storePanel/productGroups", ["getItems", "remove"])
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
                    perPage: 12,
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

<style>
.v-data-footer {
    padding: 12px 0;
}
</style>
