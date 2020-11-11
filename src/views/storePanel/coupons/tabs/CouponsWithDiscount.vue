<template>
    <v-tab-item :value="$route.path">
        <v-row no-gutters align="center" class="pt-7 pb-5 px-5">
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

        <v-btn
            color="secondary"
            class="text-capitalize px-5 ml-5 mt-4 mb-7"
            depressed
            v-text="translations.addDiscountCoupons[lang]"
            @click="open"
        ></v-btn>

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
                            color="red"
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    couponWithDiscount = item;
                                    deleteDialog = true;
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
                title="Delete Product"
                submit-text="delete"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <div class="subtitle-1 font-weight-medium">
                    Are you sure you want to delete
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
import { mdiPlus, mdiClose } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import CouponWithDiscountForm from "@/components/storePanel/coupons/CouponWithDiscountForm.vue";
import translations from "@/utils/translations/storePanel/couponsWithDiscount";

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
        ...mapState("storePanel/coupons/couponsWithDiscount", [
            "couponsWithDiscount",
        ]),

        lang() {
            return this.$route.params.lang;
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

        couponWithDiscount: {
            get() {
                return this.$store.state.storePanel.coupons.couponsWithDiscount
                    .couponWithDiscount;
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
        ...mapMutations("storePanel/coupons/couponsWithDiscount", ["setItem"]),
        ...mapActions("storePanel/coupons/couponsWithDiscount", [
            "getItems",
            "remove",
        ]),

        open(item) {
            this.couponWithDiscount = item;
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
