<template>
    <v-row
        v-if="generalCouponClaims.length"
        no-gutters
        class="px-10 pt-5 pb-7 b-bottom-outlined"
    >
        <v-col
            cols="12"
            class="subtitle-1 font-weight-bold pb-5"
            v-text="translations.generalCoupons[lang]"
        ></v-col>

        <v-col
            v-for="coupon in generalCouponClaims"
            :key="coupon.coupon_id"
            cols="4"
        >
            <div
                class="b-coupon"
                :class="{ 'b-coupon--active': coupon.selected }"
                v-text="coupon.gift_title"
                @click="couponSelect(coupon)"
            ></div>
        </v-col>
    </v-row>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "GeneralCoupons",

    data: () => ({
        translations: {
            generalCoupons: {
                el: "",
                en: "General Coupons:",
                it: "",
            },
        },
    }),

    computed: {
        ...mapState("storePanel/transactions", [
            "generalCouponClaims",
            "transaction",
        ]),

        lang() {
            return this.$route.params.lang;
        },
    },

    methods: {
        couponSelect(coupon) {
            coupon.selected = !coupon.selected;

            let index = this.transaction.general_coupon_claims_for_use.findIndex(
                (c) => c.coupon_id === coupon.coupon_id
            );

            if (index === -1) {
                this.transaction.general_coupon_claims_for_use.push(coupon);
            } else {
                this.transaction.general_coupon_claims_for_use.splice(index, 1);
            }
        },
    },
};
</script>

<style scoped>
.b-coupon {
    display: flex;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    height: 40px;
    justify-content: center;
    align-items: center;
}

.b-coupon--active {
    border: 2px solid #4caf50;
}
</style>