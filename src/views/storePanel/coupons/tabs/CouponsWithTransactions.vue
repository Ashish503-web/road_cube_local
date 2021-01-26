<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-row no-gutters align="center" class="pt-4 pb-5 px-10">
            <v-col cols="auto">
                <v-img src="@/assets/people.png" width="60" height="60"></v-img>
            </v-col>

            <v-col cols="6" class="ml-5 pl-3">
                <h4 class="subtitle-2" v-text="translations.title[lang]"></h4>
                <div
                    style="font-size: 0.875rem"
                    class="text--secondary"
                    v-text="translations.info[lang]"
                ></div>
            </v-col>
        </v-row>

        <v-row v-if="loading" no-gutters class="mt-5 px-8">
            <v-col cols="6" class="pr-8">
                <v-skeleton-loader type="heading"></v-skeleton-loader>
                <v-skeleton-loader
                    type="image"
                    class="mt-3"
                ></v-skeleton-loader>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-skeleton-loader type="button"></v-skeleton-loader>
                </v-card-actions>
            </v-col>

            <v-col cols="6" class="pl-8">
                <v-skeleton-loader type="heading"></v-skeleton-loader>
                <v-skeleton-loader
                    type="image"
                    class="mt-3"
                ></v-skeleton-loader>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-skeleton-loader type="button"></v-skeleton-loader>
                </v-card-actions>
            </v-col>
        </v-row>

        <template v-else>
            <CouponWithTransaction v-if="couponWithTransaction.coupon_id" />

            <v-row
                v-else
                no-gutters
                class="mt-5 px-8"
                style="position: relative"
            >
                <v-col cols="6" class="pr-8">
                    <v-card outlined>
                        <v-card-title
                            class="subtitle-1 font-weight-bold"
                            v-text="translations.firstCardTitle[lang]"
                        ></v-card-title>
                        <v-card-subtitle
                            class="pb-0"
                            v-text="translations.firstCardSubtitle[lang]"
                        ></v-card-subtitle>

                        <v-card-text>
                            <b-text-field
                                v-model="couponWithTransaction.goal_sequence"
                                :label="translations.numberOfVisits[lang]"
                                type="number"
                            ></b-text-field>

                            <b-text-field
                                v-model="
                                    couponWithTransaction.goal_minimum_amount
                                "
                                type="number"
                                :label="translations.minTransaction[lang]"
                            ></b-text-field>

                            <b-text-field
                                v-model="couponWithTransaction.goal_max_days"
                                type="number"
                                :label="translations.maxDays[lang]"
                            ></b-text-field>
                        </v-card-text>
                    </v-card>
                </v-col>

                <v-icon
                    class="b-floating-arrow"
                    x-large
                    v-text="icons.mdiArrowRight"
                ></v-icon>

                <v-col cols="6" class="pl-8">
                    <v-card outlined>
                        <v-card-title
                            class="subtitle-1 font-weight-bold"
                            v-text="translations.secondCardTitle[lang]"
                        ></v-card-title>
                        <v-card-subtitle
                            class="pb-0"
                            v-text="translations.secondCardSubtitle[lang]"
                        ></v-card-subtitle>

                        <v-card-text>
                            <b-text-field
                                v-model="couponWithTransaction.gift_title"
                                :label="translations.giftTitle[lang]"
                            ></b-text-field>

                            <b-textarea
                                v-model="couponWithTransaction.gift_description"
                                :label="translations.giftDescription[lang]"
                            ></b-textarea>

                            <b-text-field
                                v-model="couponWithTransaction.maximum"
                                type="number"
                                :label="translations.maximum[lang]"
                            ></b-text-field>

                            <b-select
                                v-model="couponWithTransaction.gift_category_id"
                                :items="giftCategories"
                                :item-text="`name[${lang}]`"
                                item-value="gift_category_id"
                                :label="translations.selectCategory[lang]"
                            ></b-select>

                            <v-row no-gutters>
                                <v-col cols="5" class="pa-5">
                                    <v-img
                                        :src="couponWithTransaction.image"
                                    ></v-img>
                                </v-col>
                                <v-col cols="7">
                                    <v-file-input
                                        :label="translations.uploadCoupon[lang]"
                                        color="secondary"
                                        class="mt-5"
                                        outlined
                                        dense
                                        hide-details
                                        @change="onFileSelected"
                                    ></v-file-input>
                                </v-col>
                            </v-row>

                            <div class="text-right mt-4">
                                <v-btn
                                    :color="
                                        permissions.create
                                            ? 'secondary'
                                            : 'grey'
                                    "
                                    class="text-capitalize px-5"
                                    depressed
                                    v-text="translations.create[lang]"
                                    @click="
                                        () => {
                                            if (permissions.create) {
                                                create(imageFile);
                                                imageFile = null;
                                            } else {
                                                setPermissionDialog(true);
                                            }
                                        }
                                    "
                                ></v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </template>
    </v-tab-item>
</template>

<script>
import couponsWithTransactions from "@/store/modules/storePanel/coupons/couponsWithTransactions";

import { mdiArrowRight } from "@mdi/js";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

import CouponWithTransaction from "@/components/storePanel/coupons/CouponWithTransaction.vue";
import translations from "@/utils/translations/storePanel/coupons/couponsWithTransactions";

export default {
    name: "CouponsWithTransactions",

    components: { CouponWithTransaction },

    mixins: [translations],

    data() {
        return {
            icons: { mdiArrowRight },
            imageFile: null,
        };
    },

    computed: {
        ...mapState(["loading"]),
        ...mapState("storePanel/couponsWithTransactions", [
            "couponWithTransaction",
            "giftCategories",
        ]),

        lang() {
            return this.$route.params.lang;
        },

        permissions() {
            return this.$store.state.permissions.coupons
                ? this.$store.state.permissions.coupons.goal
                : {};
        },
    },

    methods: {
        ...mapMutations(["setPermissionDialog"]),
        ...mapActions("storePanel/couponsWithTransactions", [
            "getItem",
            "getGiftCategories",
            "create",
        ]),

        onFileSelected(event) {
            if (event) {
                this.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = (e) =>
                    (this.couponWithTransaction.image = e.target.result);
            }
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

        loading(val) {
            if (!val) setTimeout(() => this.$clearFocus(), 1000);
        },
    },

    beforeCreate() {
        if (!this.$store.state.storePanel.couponsWithTransactions) {
            this.$store.registerModule(
                ["storePanel", "couponsWithTransactions"],
                couponsWithTransactions
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
        this.getItem();
        this.getGiftCategories();
    },
};
</script>

<style scoped>
.b-floating-arrow {
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translateX(-50%);
}
</style>
