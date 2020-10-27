<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :reset-validation="resetValidation"
        @cancel="$emit('cancel')"
        @submit="mode === 1 ? create(imageFile) : update(imageFile)"
    >
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
            v-model="couponWithCode.maximum"
            type="number"
            label="Vouchers Ammount"
        ></b-text-field>

        <v-checkbox
            v-model="checkbox"
            color="secondary"
            class="mt-3 pt-0"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4 class="subtitle-2">
                    Fill in the following Voucher form if you want to create and
                    link a coupon to the PromoCode.
                </h4>
            </template>
        </v-checkbox>

        <v-card v-if="checkbox" flat>
            <b-text-field
                v-model="couponWithCode.gift_title"
                label="Title"
            ></b-text-field>

            <b-textarea
                v-model="couponWithCode.gift_description"
                label="Description"
            ></b-textarea>

            <v-checkbox
                v-model="checkbox2"
                color="secondary"
                class="mt-3 pt-0"
                hide-details="auto"
            >
                <template v-slot:label>
                    <h4 class="subtitle-2">
                        I want an image to be displayed in voucher
                    </h4>
                </template>
            </v-checkbox>

            <v-card v-if="checkbox2" outlined class="mt-3 pa-5">
                <v-card-title class="subtitle-1 font-weight-medium pa-0"
                    >Product Image (optional)</v-card-title
                >
                <v-row no-gutters>
                    <v-col cols="6" class="pr-2">
                        <v-img :src="couponWithCode.image"></v-img>
                    </v-col>
                    <v-col cols="6" class="pl-2">
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
            lang: "el",
            checkbox: false,
            checkbox2: false
        };
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation"
        ]),

        title() {
            return this.mode === 1 ? "New Coupon" : "Update Coupon";
        },

        couponWithCode() {
            return this.$store.state.storePanel.coupons.couponsWithCode
                .couponWithCode;
        }
    },

    methods: {
        ...mapActions("storePanel/coupons/couponsWithCode", [
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
    }
};
</script>
