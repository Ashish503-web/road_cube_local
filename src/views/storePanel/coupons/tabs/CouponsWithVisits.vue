<template>
    <v-tab-item :value="$route.path">
        <v-row no-gutters justify="center">
            <v-col cols="10">
                <v-card-title>Coupons with visits</v-card-title>
                <v-card-subtitle class="subtitle-2">
                    Reward those who enter your store with a coupon. It only
                    applies to users with an application and is recognized by
                    GPS.
                </v-card-subtitle>

                <v-row
                    no-gutters
                    align="center"
                    justify="center"
                    class="py-5 px-3"
                >
                    <v-col cols="12" sm="6">
                        <v-img
                            class="mx-auto mx-sm-0"
                            src="@/assets/checkin_image.jpg"
                            width="280"
                            height="280"
                        ></v-img>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <v-skeleton-loader :loading="loading" type="image">
                            <v-card outlined class="pb-8">
                                <v-card-title class="justify-center"
                                    >Gift Card</v-card-title
                                >
                                <v-card-subtitle class="text-center subtitle-2"
                                    >Set a voucher that the customer will win at
                                    checkin</v-card-subtitle
                                >

                                <v-card-text class="pt-4">
                                    <v-row
                                        no-gutters
                                        justify="center"
                                        align="center"
                                    >
                                        <template
                                            v-if="couponWithVisit.coupon_id"
                                        >
                                            <v-col
                                                cols="6"
                                                class="subtitle-2 text-center"
                                            >
                                                <img
                                                    :src="couponWithVisit.image"
                                                    width="35"
                                                    style="
                                                        vertical-align: middle;
                                                    "
                                                    class="mr-1"
                                                />
                                                {{ couponWithVisit.gift_title }}
                                            </v-col>
                                            <v-col
                                                cols="6"
                                                class="subtitle-2 text-center"
                                            >
                                                10 voucher
                                            </v-col>
                                        </template>

                                        <v-col
                                            v-else
                                            cols="6"
                                            class="subtitle-1 text-center font-weight-bold"
                                        >
                                            No giftware
                                        </v-col>

                                        <v-col cols="auto">
                                            <v-checkbox
                                                color="secondary"
                                                hide-details="auto"
                                                class="mt-3 pt-0"
                                            >
                                                <template v-slot:label>
                                                    <h4 class="subtitle-2">
                                                        Reward with presence in
                                                        the store
                                                    </h4>
                                                </template>
                                            </v-checkbox>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-skeleton-loader>
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-skeleton-loader :loading="loading" type="button">
                        <v-btn
                            v-if="couponWithVisit.coupon_id"
                            color="red"
                            class="text-capitalize px-5"
                            depressed
                            dark
                            style="font-size: 1rem"
                            @click="deleteDialog = true"
                            >delete</v-btn
                        >
                        <v-btn
                            v-else
                            color="secondary"
                            class="text-capitalize px-5"
                            depressed
                            style="font-size: 1rem"
                            @click="dialog = true"
                            >create</v-btn
                        >
                    </v-skeleton-loader>
                </v-card-actions>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" max-width="600">
            <CouponWithVisitForm @cancel="dialog = false" />
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
                    Are you sure you want to delete coupon
                    <span class="font-weight-bold text--primary">{{
                        couponWithVisit.code
                    }}</span
                    >?
                </p>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import CouponWithVisitForm from "@/components/storePanel/coupons/CouponWithVisitForm.vue";

export default {
    name: "CouponsWithVisits",

    components: { CouponWithVisitForm },

    data() {
        return {
            page: +this.$route.query.page,
            mode: 0,
        };
    },

    computed: {
        ...mapState(["loading", "errorMessage"]),
        ...mapState("storePanel/coupons/couponsWithVisits", [
            "couponWithVisit",
        ]),

        lang() {
            return this.$route.params.lang;
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
        ]),
        ...mapMutations("storePanel/coupons/couponsWithVisits", ["setItem"]),
        ...mapActions("storePanel/coupons/couponsWithVisits", [
            "getItems",
            "remove",
        ]),
    },

    watch: {
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
.v-skeleton-loader__button {
    width: 90px;
}
</style>
