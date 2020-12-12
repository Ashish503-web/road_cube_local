<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :disabled="!formValid"
        @cancel="$emit('cancel')"
        @submit="mode === 1 ? create() : update()"
    >
        <b-select
            v-model="couponOnProduct.gift_category_id"
            :items="giftCategories"
            :item-text="`name[${lang}]`"
            item-value="gift_category_id"
            :label="translations.giftCategory[lang]"
            no-top-margin
            :success="success.giftCategory"
            :error-messages="error.giftCategory"
            @focus="error.giftCategory = ''"
            @blur="validateGiftCategory"
        ></b-select>

        <v-radio-group
            v-model="couponOnProduct.action"
            class="mt-3 pa-5 b-outlined rounded"
            hide-details="auto"
            :readonly="mode === 2"
            :class="{ 'not-allowed': mode === 2 }"
        >
            <v-row no-gutters>
                <v-col
                    v-for="type in actionTypes"
                    :key="type.text['en']"
                    cols="6"
                >
                    <v-radio color="secondary" :value="type.value">
                        <template v-slot:label>
                            <h4
                                class="subtitle-2"
                                v-text="type.text[lang]"
                            ></h4>
                        </template>
                    </v-radio>
                </v-col>
            </v-row>
        </v-radio-group>

        <div
            class="subtitle-2 text--secondary mt-3"
            v-text="translations.info[lang]"
        ></div>

        <v-row v-if="couponOnProduct.action === '1p1'" no-gutters>
            <v-col cols="6" class="pr-2">
                <b-select
                    v-model="couponOnProduct.product_buy_id"
                    :items="products"
                    :item-text="`name[${lang}]`"
                    item-value="product_id"
                    :label="translations.productForSale[lang]"
                    :success="success.saleProduct"
                    :error-messages="error.saleProduct"
                    @focus="error.saleProduct = ''"
                    @blur="validateSaleProduct"
                ></b-select>
            </v-col>
            <v-col cols="6" class="pl-2">
                <b-select
                    v-model="couponOnProduct.product_free_id"
                    :items="products"
                    :item-text="`name[${lang}]`"
                    item-value="product_id"
                    :label="translations.productForGift[lang]"
                    :success="success.giftProduct"
                    :error-messages="error.giftProduct"
                    @focus="error.giftProduct = ''"
                    @blur="validateGiftProduct"
                ></b-select>
            </v-col>
        </v-row>

        <b-select
            v-else
            v-model="couponOnProduct.product_free_id"
            :items="products"
            :item-text="`name[${lang}]`"
            item-value="product_id"
            :label="translations.productForGift[lang]"
            :success="success.giftProduct"
            :error-messages="error.giftProduct"
            @focus="error.giftProduct = ''"
            @blur="validateGiftProduct"
        ></b-select>

        <b-text-field
            v-model="couponOnProduct.maximum"
            :label="translations.totalCoupons[lang]"
            type="number"
            :success="success.totalCoupons"
            :error-messages="error.totalCoupons"
            @focus="error.totalCoupons = ''"
            @blur="validateTotalCoupons"
        ></b-text-field>
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/coupons/couponsOnProducts/couponOnProduct";
import validators from "@/utils/validators/storePanel/couponOnProduct";

export default {
    name: "CouponOnProductForm",

    props: {
        mode: Number,
    },

    mixins: [translations, validators],

    data() {
        return {
            actionTypes: [
                { text: { el: "", en: "Action 1+1", it: "" }, value: "1p1" },
                { text: { el: "", en: "Sampling", it: "" }, value: "sample" },
            ],
        };
    },

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("storePanel/coupons/couponsOnProducts", [
            "giftCategories",
            "products",
        ]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1
                ? this.translations.newAction[this.lang]
                : this.translations.updateAction[this.lang];
        },

        couponOnProduct() {
            return this.$store.state.storePanel.coupons.couponsOnProducts
                .couponOnProduct;
        },
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapActions("storePanel/coupons/couponsOnProducts", [
            "getGiftCategories",
            "getProducts",
            "create",
            "update",
        ]),
    },

    mounted() {
        this.getGiftCategories();
        this.getProducts();
    },
};
</script>

<style>
.not-allowed input {
    cursor: not-allowed;
}

.not-allowed .v-input--selection-controls__ripple {
    cursor: not-allowed;
}
</style>
