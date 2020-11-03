<template>
    <b-card
        title="New Coupon With Visit"
        :loading="loading"
        :error-message="errorMessage"
        :reset-validation="resetValidation"
        @cancel="$emit('cancel')"
        @submit="
            () => {
                create(imageFile);
                imageFile = null;
            }
        "
    >
        <b-select
            v-model="couponWithVisit.gift_category_id"
            :items="giftCategories"
            :item-text="`name[${lang}]`"
            item-value="gift_category_id"
            label="Gift Category"
            no-top-margin
        ></b-select>

        <b-text-field
            v-model="couponWithVisit.gift_title"
            label="Title"
        ></b-text-field>

        <b-textarea
            v-model="couponWithVisit.gift_description"
            label="Description"
        ></b-textarea>

        <b-text-field
            v-model="couponWithVisit.maximum"
            type="number"
            label="Quantity"
        ></b-text-field>

        <v-row no-gutters>
            <v-col cols="6" class="pa-5">
                <v-img :src="couponWithVisit.image"></v-img>
            </v-col>
            <v-col cols="6">
                <v-file-input
                    label="Upload Voucher Image"
                    color="secondary"
                    class="mt-5"
                    outlined
                    dense
                    hide-details
                    @change="onFileSelected"
                ></v-file-input>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "CouponWithVisitForm",

    data() {
        return {
            lang: "el",
            imageFile: null,
        };
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("storePanel/coupons/couponsWithVisits", ["giftCategories"]),

        couponWithVisit() {
            return this.$store.state.storePanel.coupons.couponsWithVisits
                .couponWithVisit;
        },
    },

    methods: {
        ...mapActions("storePanel/coupons/couponsWithVisits", [
            "getGiftCategories",
            "create",
        ]),

        onFileSelected(event) {
            if (event) {
                this.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = (e) =>
                    (this.couponWithVisit.image = e.target.result);
            }
        },
    },

    watch: {
        resetSuccess(val) {
            if (val) {
                this.success = {
                    name: false,
                    description: false,
                    sellingPrice: false,
                    wholesalePrice: false,
                    deliveryCost: false,
                    shippingCost: false,
                    category: false,
                };
            }
        },
    },

    mounted() {
        this.getGiftCategories();
    },
};
</script>
