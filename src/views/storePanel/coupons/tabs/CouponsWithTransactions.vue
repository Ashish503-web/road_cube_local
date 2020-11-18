<template>
    <v-tab-item :value="$route.path">
        <v-row no-gutters align="center" class="pt-7 pb-5 px-10">
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
            <v-row
                v-if="couponWithTransaction.coupon_id"
                no-gutters
                class="mt-5 px-8"
            >
                <v-col cols="6" class="pr-8">
                    <v-card outlined>
                        <v-card-title
                            class="subtitle-1 font-weight-bold"
                            v-text="translations.yourSettings[lang]"
                        ></v-card-title>

                        <v-list subheader dense>
                            <v-list-item
                                v-for="setting in settings"
                                :key="setting.text"
                            >
                                <v-list-item-icon class="mr-3">
                                    <v-icon
                                        class="text--primary"
                                        v-text="setting.icon"
                                    ></v-icon>
                                </v-list-item-icon>
                                <v-list-item-title
                                    style="white-space: normal"
                                    v-text="setting.text"
                                ></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card>

                    <v-card outlined class="mt-5">
                        <v-card-title
                            class="subtitle-1 font-weight-bold"
                            v-text="translations.reward[lang]"
                        ></v-card-title>

                        <v-row
                            no-gutters
                            align="center"
                            class="pa-4 pt-0 subtitle-2"
                        >
                            <v-col cols="auto">
                                <v-img
                                    :src="couponWithTransaction.image"
                                    width="60"
                                    height="50"
                                    contain
                                ></v-img>
                            </v-col>

                            <v-col class="pl-3"
                                >{{ couponWithTransaction.gift_title }}
                            </v-col>

                            <v-col cols="2" class="text-center">{{
                                couponWithTransaction.maximum || "- left"
                            }}</v-col>
                        </v-row>
                    </v-card>

                    <div class="text-right mt-4">
                        <v-btn
                            color="red accent-4"
                            class="text-capitalize white--text px-10"
                            style="font-size: 0.9rem"
                            depressed
                            v-text="translations.delete[lang]"
                            @click="deleteDialog = true"
                        ></v-btn>
                    </div>
                </v-col>

                <v-col cols="6" class="pl-8">
                    <v-card flat>
                        <v-card-title
                            class="subtitle-1 font-weight-bold pa-0"
                            v-text="translations.customersFollowing[lang]"
                        ></v-card-title>
                        <hr />

                        <div class="mt-4" style="font-size: 0.875rem">
                            No customers are following right now
                        </div>
                    </v-card>
                </v-col>
            </v-row>

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
                                    color="secondary"
                                    class="text-capitalize px-5"
                                    depressed
                                    v-text="translations.create[lang]"
                                    @click="
                                        () => {
                                            create(imageFile);
                                            imageFile = null;
                                        }
                                    "
                                ></v-btn>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </template>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                title="Delete Coupon With Transaction"
                :loading="loading"
                :error-message="errorMessage"
                submit-text="delete"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <div class="subtitle-1 font-weight-medium pl-2">
                    Are you sure?
                </div>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import {
    mdiStoreOutline,
    mdiCashMultiple,
    mdiClockOutline,
    mdiArrowRight
} from "@mdi/js";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import translations from "@/utils/translations/storePanel/couponsWithTransactions";

export default {
    name: "CouponsWithTransactions",

    mixins: [translations],

    data: () => ({
        icons: { mdiArrowRight },
        imageFile: null
    }),

    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapState("storePanel/coupons/couponsWithTransactions", [
            "couponWithTransaction",
            "giftCategories"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            }
        },

        settings() {
            return [
                {
                    icon: mdiStoreOutline,
                    text: `Customer must come ${this.couponWithTransaction.goal_sequence} times to your store`
                },
                {
                    icon: mdiCashMultiple,
                    text: `Customer must spend at least ${this.couponWithTransaction.goal_minimum_amount} 
                            euros in each visit`
                },
                {
                    icon: mdiClockOutline,
                    text: `Each customer visit should not be later than 
                    ${this.couponWithTransaction.goal_max_days} days from the last visit`
                }
            ];
        }
    },

    methods: {
        ...mapMutations(["setDeleteDialog"]),
        ...mapActions("storePanel/coupons/couponsWithTransactions", [
            "getItem",
            "getGiftCategories",
            "create",
            "remove"
        ]),

        onFileSelected(event) {
            if (event) {
                this.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = e =>
                    (this.couponWithTransaction.image = e.target.result);
            }
        }
    },

    mounted() {
        this.getItem();
        this.getGiftCategories();
    }
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
