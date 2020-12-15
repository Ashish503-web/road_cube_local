<template>
    <v-tab-item :value="$route.fullPath" class="pa-3">
        <v-row no-gutters align="center" class="pa-5 pt-0">
            <v-col cols="auto">
                <v-img
                    src="@/assets/coupon-with-discount.png"
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
                v-text="translations.addDiscountCoupons[lang]"
                @click="permissions.create ? open() : setPermissionDialog(true)"
            ></v-btn>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="couponsWithDiscount"
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
                            :color="permissions.delete ? 'red' : 'grey'"
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    if (permissions.delete) {
                                        couponWithDiscount = item;
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
        </v-data-table>

        <v-dialog v-model="dialog" max-width="500">
            <CouponWithDiscountForm @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                :title="translations.deleteDiscount[lang]"
                :submit-text="{ el: '', en: 'delete', it: '' }"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <div class="subtitle-1 font-weight-medium py-3 px-2">
                    {{ translations.areYouSure[lang] }}
                    <span class="font-weight-bold text--primary">{{
                        couponWithDiscount.discount_product_name[lang]
                    }}</span>
                    discount?
                </div>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import couponsWithDiscount from "@/store/modules/storePanel/coupons/couponsWithDiscount";

import { mdiPlus, mdiClose } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import CouponWithDiscountForm from "@/components/storePanel/coupons/CouponWithDiscountForm.vue";
import translations from "@/utils/translations/storePanel/coupons/couponsWithDiscount";

export default {
    name: "CouponsWithDiscount",

    components: { CouponWithDiscountForm },

    mixins: [translations],

    data() {
        return {
            icons: {
                mdiPlus,
                mdiClose,
            },
            page: +this.$route.query.page,
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/couponsWithDiscount", ["couponsWithDiscount"]),

        lang() {
            return this.$route.params.lang;
        },

        permissions() {
            return this.$store.state.permissions.coupons
                ? this.$store.state.permissions.coupons.discount
                : {};
        },

        headers() {
            return [
                {
                    text: this.translations.product[this.lang],
                    value: `discount_product_name[${this.lang}]`,
                },
                {
                    text: this.translations.discount[this.lang],
                    value: "total_discount",
                },
                { text: this.translations.points[this.lang], value: "points" },
                {
                    text: this.translations.date[this.lang],
                    value: "created_at",
                },
                {
                    text: this.translations.actions[this.lang],
                    value: "actions",
                },
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

        couponWithDiscount: {
            get() {
                return this.$store.state.storePanel.couponsWithDiscount
                    .couponWithDiscount;
            },

            set(val) {
                this.setItem(val);
            },
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
        ...mapMutations([
            "setDialog",
            "setDeleteDialog",
            "setResetSuccess",
            "setResetValidation",
            "setPermissionDialog",
        ]),
        ...mapMutations("storePanel/couponsWithDiscount", ["setItem"]),
        ...mapActions("storePanel/couponsWithDiscount", ["getItems", "remove"]),

        open(item) {
            this.couponWithDiscount = item;
            setTimeout(() => this.setResetSuccess(true), 300);
            this.setResetValidation(true);
            this.dialog = true;
        },
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
                        ...this.$route.query,
                    },
                });
            }
            this.getItems(this.query);
        },

        page(page) {
            this.$router.replace({ query: { ...this.$route.query, page } });
        },
    },

    beforeCreate() {
        if (!this.$store.state.storePanel.couponsWithDiscount) {
            this.$store.registerModule(
                ["storePanel", "couponsWithDiscount"],
                couponsWithDiscount
            );
        }

        if (!this.$route.query.page) {
            this.$router.replace({
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
