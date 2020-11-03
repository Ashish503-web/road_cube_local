<template>
    <v-tab-item :value="$route.path">
        <v-toolbar flat height="100">
            <v-btn
                color="secondary"
                class="text-capitalize px-5"
                depressed
                @click="open(1, {})"
                >add action</v-btn
            >

            <v-spacer></v-spacer>

            <v-col cols="4">
                <v-text-field
                    label="Search"
                    color="secondary"
                    rounded
                    outlined
                    dense
                    clearable
                    hide-details
                    :prepend-inner-icon="icons.mdiMagnify"
                ></v-text-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="couponsOnProducts"
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
                                    couponOnProduct = item;
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

            <template v-slot:item.social>
                <v-btn color="blue darken-1" depressed dark small>
                    <v-icon class="mr-1" v-text="icons.mdiFacebook"></v-icon
                    >Share 0
                </v-btn>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500">
            <CouponOnProductForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                title="Delete Product"
                submit-text="delete"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <p>
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary">{{
                        couponOnProduct.code
                    }}</span
                    >?
                </p>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiMagnify, mdiPencilOutline, mdiClose, mdiFacebook } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import CouponOnProductForm from "@/components/storePanel/coupons/CouponOnProductForm.vue";

export default {
    name: "CouponsOnProducts",

    components: { CouponOnProductForm },

    data() {
        return {
            icons: {
                mdiClose,
                mdiMagnify,
                mdiPencilOutline,
                mdiFacebook,
            },
            page: +this.$route.query.page,
            mode: 0,
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/coupons/couponsOnProducts", [
            "couponsOnProducts",
        ]),

        lang() {
            return this.$route.params.lang;
        },

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
        },

        headers() {
            return [
                { text: "Type", value: "code" },
                {
                    text: "Product For Sale",
                    value: `product_buy_name[${this.lang}]`,
                },
                {
                    text: "Product For Gift",
                    value: `product_free_name[${this.lang}]`,
                },
                { text: "Quantity", value: "available" },
                { text: "Actions", value: "actions" },
                { text: "Social Media", value: "social" },
            ];
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            },
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            },
        },

        couponOnProduct: {
            get() {
                return this.$store.state.storePanel.coupons.couponsOnProducts
                    .couponOnProduct;
            },

            set(val) {
                this.setItem(val);
            },
        },
    },

    methods: {
        ...mapMutations([
            "setDialog",
            "setDeleteDialog",
            "setResetSuccess",
            "setResetValidation",
        ]),
        ...mapMutations("storePanel/coupons/couponsOnProducts", ["setItem"]),
        ...mapActions("storePanel/coupons/couponsOnProducts", [
            "getItems",
            "remove",
        ]),

        open(mode, item) {
            this.mode = mode;
            this.couponOnProduct = item;
            setTimeout(() => this.setResetSuccess(true), 300);
            this.setResetValidation(true);
            this.dialog = true;
        },
    },

    watch: {
        dialog(val) {
            if (!val) {
                this.setResetSuccess(false);
                this.setResetValidation(false);
            }
        },

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

    mounted() {
        this.getItems(this.query);
    },
};
</script>

<style>
.v-data-footer {
    padding: 12px 0;
}
</style>
