<template>
    <v-tab-item>
        <v-toolbar flat height="80">
            <v-btn
                color="secondary"
                class="text-capitalize"
                depressed
                @click="open(1, {})"
                >add product</v-btn
            >
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="products"
            :footer-props="{ itemsPerPageOptions: [12], showCurrentPage: true }"
            :page.sync="page"
            :items-per-page.sync="perPage"
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

            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="open(2, item)"
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
                                    product = item;
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
            <ProductForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="600">
            <b-card
                type="delete"
                title="Delete Product"
                submit-text="delete"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove(product.product_id)"
            >
                <p>
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary">{{
                        product.name
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
import ProductForm from "@/components/storePanel/products/ProductForm.vue";

export default {
    name: "ProductsTab",
    components: { ProductForm },
    data() {
        return {
            icons: { mdiPencilOutline, mdiClose },
            headers: [
                { text: "Product Name", value: "name" },
                { text: "Product Description", value: "description" },
                { text: "Selling Price", value: "retail_price" },
                { text: "Coupon", value: "coupon" },
                { text: "Actions", value: "actions" }
            ],
            page: +this.$route.query.page,
            perPage: +this.$route.query.perPage,
            mode: 0
        };
    },

    computed: {
        ...mapState("storePanel/products", [
            "loading",
            "errorMessage",
            "products",
            "serverItemsLength"
        ]),

        dialog: {
            get() {
                return this.$store.state.storePanel.products.dialog;
            },

            set(val) {
                this.setDialog(val);
            }
        },

        deleteDialog: {
            get() {
                return this.$store.state.storePanel.products.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        },

        showImageUpload: {
            get() {
                return this.$store.state.storePanel.products.showImageUpload;
            },

            set(val) {
                this.setShowImageUpload(val);
            }
        },

        showWeekdays: {
            get() {
                return this.$store.state.storePanel.products.showWeekdays;
            },

            set(val) {
                this.setShowWeekdays(val);
            }
        },

        product: {
            get() {
                return this.$store.state.storePanel.products.product;
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
        ...mapMutations("storePanel/products", [
            "setDialog",
            "setDeleteDialog",
            "setResetValidation",
            "setShowImageUpload",
            "setShowWeekdays",
            "setItem"
        ]),
        ...mapActions("storePanel/products", ["getItems", "remove"]),

        open(mode, item) {
            this.mode = mode;
            this.product = item;
            if (this.product.image) this.showImageUpload = true;
            else this.showImageUpload = false;
            if (this.product.availability_days.length) this.showWeekdays = true;
            else this.showWeekdays = false;
            this.setResetValidation(true);
            this.dialog = true;
        }
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
