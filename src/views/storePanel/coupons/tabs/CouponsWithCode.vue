<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-row no-gutters align="center" class="pa-5 pt-0">
            <v-col cols="auto">
                <v-img
                    src="@/assets/coupon-with-code.png"
                    width="60"
                    height="60"
                ></v-img>
            </v-col>

            <v-col class="pl-3">
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
                color="secondary"
                class="text-capitalize px-5"
                depressed
                v-text="translations.create[lang]"
                @click="open(1, {})"
            ></v-btn>

            <v-spacer></v-spacer>

            <v-col cols="12" sm="4" class="pa-0 pr-1">
                <b-search-field></b-search-field>
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
                <span v-else v-text="translations.noData[lang]"></span>
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

                    <span
                        class="font-weight-bold"
                        v-text="translations.update[lang]"
                    ></span>
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

                    <span
                        class="font-weight-bold"
                        v-text="translations.delete[lang]"
                    ></span>
                </v-tooltip>
            </template>

            <template v-slot:item.social>
                <v-btn color="blue darken-1" depressed dark small>
                    <v-icon class="mr-1" v-text="icons.mdiFacebook"></v-icon>
                    {{ translations.share[lang] }} 0
                </v-btn>
            </template>
        </v-data-table>

        <v-dialog v-model="dialog" max-width="550">
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
                <div class="subtitle-1 font-weight-medium py-3">
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary">{{
                        couponWithCode.code
                    }}</span
                    >?
                </div>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mdiPencilOutline, mdiClose, mdiFacebook } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import CouponWithCodeForm from "@/components/storePanel/coupons/CouponWithCodeForm.vue";
import translations from "@/utils/translations/storePanel/couponsWithCode";

export default {
    name: "CouponsWithCode",

    components: { CouponWithCodeForm },

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
        ...mapState("storePanel/coupons/couponsWithCode", ["couponsWithCode"]),

        lang() {
            return this.$route.params.lang;
        },

        headers() {
            return [
                { text: this.translations.code[this.lang], value: "code" },
                {
                    text: this.translations.voucher[this.lang],
                    value: "voucher"
                },
                { text: this.translations.points[this.lang], value: "points" },
                {
                    text: this.translations.acquired[this.lang],
                    value: "total_claimed"
                },
                {
                    text: this.translations.redeemed[this.lang],
                    value: "total_redeemed"
                },
                {
                    text: this.translations.available[this.lang],
                    value: "available"
                },
                {
                    text: this.translations.actions[this.lang],
                    value: "actions"
                },
                { text: this.translations.social[this.lang], value: "social" }
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

        couponWithCode: {
            get() {
                return this.$store.state.storePanel.coupons.couponsWithCode
                    .couponWithCode;
            },

            set(val) {
                this.setItem(val);
            }
        }
    },

    methods: {
        ...mapMutations([
            "setDialog",
            "setDeleteDialog",
            "setResetSuccess",
            "setResetValidation"
        ]),
        ...mapMutations("storePanel/coupons/couponsWithCode", [
            "setShowImageUpload",
            "setItem"
        ]),
        ...mapActions("storePanel/coupons/couponsWithCode", [
            "getItems",
            "remove"
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
        }
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
                        ...this.$route.query
                    }
                });
            }

            this.getItems(this.query);
        },

        page(page) {
            this.$router.push({ query: { ...this.$route.query, page } });
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
