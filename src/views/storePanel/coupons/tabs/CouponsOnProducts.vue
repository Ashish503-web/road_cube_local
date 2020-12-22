<template>
    <v-tab-item :value="$route.fullPath" class="pa-3">
        <v-row no-gutters align="center" class="pa-5 pt-0">
            <v-col cols="auto">
                <v-img
                    src="@/assets/coupon-on-products.png"
                    width="60"
                    height="60"
                ></v-img>
            </v-col>

            <v-col class="pl-2">
                <h4 v-text="translations.title[lang]"></h4>
                <div
                    style="font-size: 0.875rem"
                    class="font-weight-medium"
                    v-text="translations.info[lang]"
                ></div>
            </v-col>
        </v-row>

        <v-toolbar flat>
            <v-btn
                :color="permissions.create ? 'secondary' : 'grey'"
                class="text-capitalize px-5"
                depressed
                v-text="translations.addAction[lang]"
                @click="
                    permissions.create ? open(1, {}) : setPermissionDialog(true)
                "
            ></v-btn>

            <v-spacer></v-spacer>

            <v-col cols="4" class="pa-0">
                <b-search-field></b-search-field>
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
                <span v-else v-text="translations.noData[lang]"></span>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            :color="
                                permissions.update ? 'yellow darken-3' : 'grey'
                            "
                            icon
                            v-on="on"
                            @click="
                                permissions.update
                                    ? open(2, item)
                                    : setPermissionDialog(true)
                            "
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="translations.update[lang]"
                    ></span>
                </v-tooltip>

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            :color="permissions.delete ? 'red' : 'grey'"
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    if (permissions.delete) {
                                        couponOnProduct = item;
                                        deleteDialog = true;
                                    } else {
                                        setPermissionDialog(true);
                                    }
                                }
                            "
                        >
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="translations.delete[lang]"
                    ></span>
                </v-tooltip>
            </template>

            <template v-slot:item.social>
                <v-btn
                    color="blue darken-1"
                    class="text-capitalize"
                    depressed
                    dark
                    small
                >
                    <v-icon class="mr-1" v-text="icons.mdiFacebook"></v-icon>

                    <ShareNetwork
                        network="facebook"
                        url="https://news.vuejs.org/issues/180"
                        title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                        description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                        quote="The hot reload is so fast it\'s near instant. - Evan You"
                        hashtags="vuejs,vite"
                        style="color: white; text-decoration: none; font-size: 0.875rem"
                    >
                        {{ translations.share[lang] }}
                    </ShareNetwork>
                </v-btn>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500">
            <CouponOnProductForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                :title="translations.deleteAction[lang]"
                :submit-text="{ el: '', en: 'delete', it: '' }"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <div class="subtitle-1 font-weight-medium py-3 px-2">
                    {{ translations.areYouSure[lang] }}
                    <span class="font-weight-bold text--primary">{{
                        couponOnProduct.code
                    }}</span
                    >?
                </div>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import couponsOnProducts from "@/store/modules/storePanel/coupons/couponsOnProducts";

import { mdiPencilOutline, mdiClose, mdiFacebook } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import CouponOnProductForm from "@/components/storePanel/coupons/CouponOnProductForm.vue";
import translations from "@/utils/translations/storePanel/coupons/couponsOnProducts";

export default {
    name: "CouponsOnProducts",

    components: { CouponOnProductForm },

    mixins: [translations],

    data() {
        return {
            icons: {
                mdiPencilOutline,
                mdiClose,
                mdiFacebook
            },
            page: +this.$route.query.page,
            mode: 0
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/couponsOnProducts", ["couponsOnProducts"]),

        lang() {
            return this.$route.params.lang;
        },

        permissions() {
            return this.$store.state.permissions.coupons
                ? this.$store.state.permissions.coupons.product
                : {};
        },

        headers() {
            return [
                {
                    text: this.translations.type[this.lang],
                    value: "product_coupon_type"
                },
                {
                    text: this.translations.productForSale[this.lang],
                    value: `product_buy.name[${this.lang}]`
                },
                {
                    text: this.translations.productForGift[this.lang],
                    value: `product_free.name[${this.lang}]`
                },
                {
                    text: this.translations.quantity[this.lang],
                    value: "available"
                },
                {
                    text: this.translations.actions[this.lang],
                    value: "actions"
                },
                { text: this.translations.social[this.lang], value: "social" }
            ];
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            }
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        },

        couponOnProduct: {
            get() {
                return this.$store.state.storePanel.couponsOnProducts
                    .couponOnProduct;
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
        ...mapMutations([
            "setDialog",
            "setDeleteDialog",
            "setResetSuccess",
            "setResetValidation",
            "setPermissionDialog"
        ]),
        ...mapMutations("storePanel/couponsOnProducts", ["setItem"]),
        ...mapActions("storePanel/couponsOnProducts", ["getItems", "remove"]),

        open(mode, item) {
            this.mode = mode;
            if (mode === 2) {
                item.action = item.product_coupon_type;
                if (item.action === "1p1") {
                    item.product_buy_id = item.product_buy.product_id;
                }
                item.product_free_id = item.product_free.product_id;
                item.maximum = item.available;
            }
            this.couponOnProduct = item;
            setTimeout(() => this.setResetSuccess(true), 300);
            this.setResetValidation(true);
            this.dialog = true;
        }
    },

    watch: {
        ["permissions.read"](val) {
            if (!val) {
                this.$router.replace(
                    `/${this.lang}/storePanel/forbidden-gateway`
                );
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
        if (!this.$store.state.storePanel.couponsOnProducts) {
            this.$store.registerModule(
                ["storePanel", "couponsOnProducts"],
                couponsOnProducts
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
