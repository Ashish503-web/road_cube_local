<template>
    <v-tab-item :value="$route.path">
        <v-row
            no-gutters
            justify="space-between"
            align="center"
            class="py-8 px-5"
        >
            <v-col cols="auto">
                <v-btn
                    color="secondary"
                    class="text-capitalize px-5"
                    depressed
                    @click="open(1, {})"
                    >add coupon</v-btn
                >
            </v-col>

            <v-col cols="auto">
                <v-alert type="info" dense class="mb-0 font-weight-medium">
                    You can either share the coupon codes on facebook or give
                    them to users with an application.
                </v-alert>
            </v-col>
        </v-row>

        <v-toolbar flat>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="4">
                <v-text-field
                    label="Search"
                    color="secondary"
                    rounded
                    outlined
                    dense
                    clearable
                    :prepend-inner-icon="icons.mdiMagnify"
                ></v-text-field>
            </v-col>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="couponsWithCode"
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
                                    couponWithCode = item;
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
            <CouponWithCodeForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                title="Delete Coupon"
                submit-text="delete"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <p>
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary">{{
                        couponWithCode.code
                    }}</span
                    >?
                </p>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiClose, mdiMagnify, mdiPencilOutline, mdiFacebook } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import CouponWithCodeForm from "@/components/storePanel/coupons/CouponWithCodeForm.vue";

export default {
    name: "CouponsWithCode",

    components: { CouponWithCodeForm },

    data() {
        return {
            icons: {
                mdiMagnify,
                mdiPencilOutline,
                mdiClose,
                mdiFacebook,
            },
            headers: [
                { text: "Code", value: "code" },
                { text: "Voucher", value: "voucher" },
                { text: "Points", value: "points" },
                { text: "Acquired", value: "total_claimed" },
                { text: "Redeemed", value: "total_redeemed" },
                { text: "Available", value: "available" },
                { text: "Actions", value: "actions" },
                { text: "Social Media", value: "social" },
            ],
            lang: "el",
            page: +this.$route.query.page,
            mode: 0,
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/coupons/couponsWithCode", ["couponsWithCode"]),

        query() {
            let query = "?";

            for (let key in this.$route.query) {
                query += `${key}=${this.$route.query[key]}&`;
            }

            return query.slice(0, query.length - 1);
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

        couponWithCode: {
            get() {
                return this.$store.state.storePanel.coupons.couponsWithCode
                    .couponWithCode;
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
        ...mapMutations("storePanel/coupons/couponsWithCode", [
            "setShowImageUpload",
            "setItem",
        ]),
        ...mapActions("storePanel/coupons/couponsWithCode", [
            "getItems",
            "remove",
        ]),

        open(mode, item) {
            console.log(item);
            this.mode = mode;
            this.couponWithCode = item;
            if (this.couponWithCode.image) this.setShowImageUpload(true);
            else this.setShowImageUpload(false);
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
