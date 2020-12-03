<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :reset-validation="resetValidation"
        @cancel="$emit('cancel')"
        @submit="mode === 1 ? create(imageFile) : update(imageFile)"
    >
        <b-select
            v-model="couponWithCode.gift_category_id"
            :items="giftCategories"
            :item-text="`name[${lang}]`"
            item-value="gift_category_id"
            label="Gift Category"
            no-top-margin
        ></b-select>

        <b-text-field
            v-model="couponWithCode.code"
            label="Coupon Code (e.g. Maroudas Optika)"
            hint="* This is the code that you can share in posters, documents and internet. We suggest you to type something similar to your company name."
            persistent-hint
        ></b-text-field>

        <b-text-field
            v-model="couponWithCode.points"
            type="number"
            label="Moves (RoadCube Points)"
        ></b-text-field>

        <b-text-field
            v-if="mode === 1"
            v-model="couponWithCode.maximum"
            type="number"
            label="Vouchers Ammount"
        ></b-text-field>

        <b-text-field
            v-model="couponWithCode.gift_title"
            label="Gift Title"
        ></b-text-field>

        <b-textarea
            v-model="couponWithCode.gift_description"
            label="Gift Description"
        ></b-textarea>

        <v-checkbox
            v-model="showImageUpload"
            color="secondary"
            class="pt-0 mt-3"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4 class="secondary--text">
                    I want the product to be displayed with an image in the
                    application
                </h4>
            </template>
        </v-checkbox>

        <v-card v-if="showImageUpload" outlined class="mt-3">
            <v-card-title class="subtitle-1 font-weight-medium">
                Product Image (optional)
            </v-card-title>
            <v-row no-gutters justify="space-between" class="pa-5">
                <v-col cols="6">
                    <v-img :src="couponWithCode.image"></v-img>
                </v-col>
                <v-col cols="5" class="mr-3">
                    <v-file-input
                        color="secondary"
                        outlined
                        dense
                        hide-details
                        @change="onFileSelected"
                    ></v-file-input>
                </v-col>
            </v-row>
        </v-card>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    name: "CouponWithCodeForm",

    props: {
        mode: Number
    },

    data() {
        return {
            imageFile: null
        };
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation"
        ]),
        ...mapState("storePanel/coupons/couponsWithCode", [
            "giftCategories",
            "couponWithCode"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1
                ? "New Coupon With Code"
                : "Update Coupon With Code";
        },

        showImageUpload: {
            get() {
                return this.$store.state.storePanel.coupons.couponsWithCode
                    .showImageUpload;
            },

            set(val) {
                this.setShowImageUpload(val);
            }
        }
    },

    methods: {
        ...mapMutations("storePanel/coupons/couponsWithCode", [
            "setShowImageUpload"
        ]),
        ...mapActions("storePanel/coupons/couponsWithCode", [
            "getGiftCategories",
            "create",
            "update"
        ]),

        onFileSelected(event) {
            if (event) {
                this.imageFile = event;
                const reader = new FileReader();
                reader.readAsDataURL(this.imageFile);
                reader.onload = e =>
                    (this.couponWithCode.image = e.target.result);
            }
        }
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
                    category: false
                };
            }
        }
    },

    mounted() {
        this.getGiftCategories();
    }
};
</script>
