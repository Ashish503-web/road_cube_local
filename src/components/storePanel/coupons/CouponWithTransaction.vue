<template>
    <v-row no-gutters class="mt-5 px-8">
        <v-col cols="6" class="pr-8">
            <v-card outlined>
                <v-card-title
                    class="subtitle-1 font-weight-bold"
                    v-text="translations.yourSettings[lang]"
                ></v-card-title>

                <v-list subheader dense>
                    <v-list-item
                        v-for="setting in settings"
                        :key="setting.text['en']"
                    >
                        <v-list-item-icon class="mr-3">
                            <v-icon
                                class="text--primary"
                                v-text="setting.icon"
                            ></v-icon>
                        </v-list-item-icon>
                        <v-list-item-title
                            style="white-space: normal"
                            v-text="setting.text[lang]"
                        ></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card>

            <v-card outlined class="mt-5">
                <v-card-title
                    class="subtitle-1 font-weight-bold"
                    v-text="translations.reward[lang]"
                ></v-card-title>

                <v-row no-gutters align="center" class="pa-4 pt-0 subtitle-2">
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
                    :color="permissions.delete ? 'red accent-4' : 'grey'"
                    class="text-capitalize white--text px-10"
                    style="font-size: 0.9rem"
                    depressed
                    v-text="translations.delete[lang]"
                    @click="
                        () => {
                            if (permissions.delete) {
                                deleteDialog = true;
                            } else {
                                setPermissionDialog(true);
                            }
                        }
                    "
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
                    <v-data-table
                        v-if="users.length"
                        :headers="headers"
                        :items="users"
                        :footer-props="{
                            itemsPerPageOptions: [5],
                            showCurrentPage: true,
                        }"
                        :page.sync="page"
                        :server-items-length="serverItemsLength"
                        disable-sort
                        class="b-outlined"
                    >
                        <template v-slot:item.totalVisits="{ item }">
                            {{ item.goal_counter }} /
                            {{ item.goal_sequence }}
                        </template>
                    </v-data-table>

                    <span v-else v-text="translations.noCustomers[lang]"></span>
                </div>
            </v-card>
        </v-col>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                :title="translations.deleteCoupon[lang]"
                :loading="loading"
                :error-message="errorMessage"
                :submit-text="{ el: '', en: 'delete', it: '' }"
                @cancel="deleteDialog = false"
                @submit="remove"
            >
                <div
                    class="subtitle-1 font-weight-medium py-3 px-2"
                    v-text="translations.areYouSure[lang]"
                ></div>
            </b-card>
        </v-dialog>
    </v-row>
</template>

<script>
import { mdiStoreOutline, mdiCashMultiple, mdiClockOutline } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/coupons/couponsWithTransactions/couponWithTransaction";

export default {
    name: "CouponWithTransaction",

    mixins: [translations],

    data() {
        return {
            page: 1,
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage", "serverItemsLength"]),
        ...mapState("storePanel/coupons/couponsWithTransactions", [
            "couponWithTransaction",
            "users",
        ]),

        lang() {
            return this.$route.params.lang;
        },

        permissions() {
            return this.$store.state.permissions.coupons
                ? this.$store.state.permissions.coupons.goal
                : {};
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            },
        },

        settings() {
            return [
                {
                    icon: mdiStoreOutline,
                    text: {
                        el: ``,
                        en: `Customer must come ${this.couponWithTransaction.goal_sequence} times to your store`,
                        it: ``,
                    },
                },
                {
                    icon: mdiCashMultiple,
                    text: {
                        el: ``,
                        en: `
                            Customer must spend at least ${this.couponWithTransaction.goal_minimum_amount}
                            euros in each visit
                        `,
                        it: ``,
                    },
                },
                {
                    icon: mdiClockOutline,
                    text: {
                        el: ``,
                        en: `
                            Each customer visit should not be later than
                            ${this.couponWithTransaction.goal_max_days} days from the last visit
                        `,
                        it: ``,
                    },
                },
            ];
        },

        headers() {
            return [
                { text: this.translations.user[this.lang], value: "mobile" },
                {
                    text: this.translations.totalVisits[this.lang],
                    value: "totalVisits",
                    align: "center",
                },
                {
                    text: this.translations.goalStatus[this.lang],
                    value: "status",
                    align: "center",
                },
            ];
        },
    },

    methods: {
        ...mapMutations(["setDeleteDialog", "setPermissionDialog"]),
        ...mapActions("storePanel/coupons/couponsWithTransactions", [
            "getItemUsers",
            "remove",
        ]),
    },

    watch: {
        page(page) {
            this.getItemUsers({
                id: this.couponWithTransaction.coupon_id,
                query: `?page=${page}`,
            });
        },
    },
};
</script>
