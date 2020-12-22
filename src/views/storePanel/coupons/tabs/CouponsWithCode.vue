<template>
    <v-tab-item :value="$route.fullPath" class="pa-3">
        <!-- <div
            ref="fbButton"
            style="visibility: hidden"
            class="fb-share-button"
            data-href="https://developers.facebook.com/docs/plugins/"
            data-layout="button_count"
            data-size="large"
        >
            <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                class="fb-xfbml-parse-ignore"
                >Share</a
            >
        </div> -->
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
                :color="permissions.create ? 'secondary' : 'grey'"
                class="text-capitalize px-5"
                depressed
                v-text="translations.create[lang]"
                @click="
                    permissions.create ? open(1, {}) : setPermissionDialog(true)
                "
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
                            :color="
                                permissions.delete ? 'yellow darken-3' : 'grey'
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
                                        couponWithCode = item;
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

        <v-dialog v-model="dialog" max-width="550">
            <CouponWithCodeForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                :title="translations.deleteCode[lang]"
                :submit-text="{ el: '', en: 'delete', it: '' }"
                :loading="loading"
                :error-message="errorMessage"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <div class="subtitle-1 font-weight-medium py-3 px-2">
                    {{ translations.areYouSure[lang] }}
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
import couponsWithCode from "@/store/modules/storePanel/coupons/couponsWithCode";

import { mdiPencilOutline, mdiClose, mdiFacebook } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import CouponWithCodeForm from "@/components/storePanel/coupons/CouponWithCodeForm.vue";
import translations from "@/utils/translations/storePanel/coupons/couponsWithCode";

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
        ...mapState("storePanel/couponsWithCode", ["couponsWithCode"]),

        lang() {
            return this.$route.params.lang;
        },

        permissions() {
            return this.$store.state.permissions.coupons
                ? this.$store.state.permissions.coupons.voucher
                : {};
        },

        headers() {
            return [
                { text: this.translations.code[this.lang], value: "code" },
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
                return this.$store.state.storePanel.couponsWithCode
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
            "setResetValidation",
            "setPermissionDialog"
        ]),
        ...mapMutations("storePanel/couponsWithCode", [
            "setShowImageUpload",
            "setItem"
        ]),
        ...mapActions("storePanel/couponsWithCode", ["getItems", "remove"]),

        open(mode, item) {
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
        if (!this.$store.state.storePanel.couponsWithCode) {
            this.$store.registerModule(
                ["storePanel", "couponsWithCode"],
                couponsWithCode
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
