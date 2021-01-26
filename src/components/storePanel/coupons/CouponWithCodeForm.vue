<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :disabled="!formValid"
        @cancel="$emit('cancel')"
        @submit="mode === 1 ? create(imageFile) : update(imageFile)"
    >
        <b-select
            v-model="couponWithCode.gift_category_id"
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

        <b-text-field
            v-model="couponWithCode.code"
            :label="translations.couponCode[lang]"
            :hint="translations.couponCodeHint[lang]"
            persistent-hint
            :success="success.code"
            :error-messages="error.code"
            @focus="error.code = ''"
            @blur="validateCode"
        ></b-text-field>

        <b-text-field
            v-model="couponWithCode.points"
            type="number"
            :label="translations.moves[lang]"
            :success="success.points"
            :error-messages="error.points"
            @focus="error.points = ''"
            @blur="validatePoints"
        ></b-text-field>

        <b-text-field
            v-if="mode === 1"
            v-model="couponWithCode.maximum"
            type="number"
            :label="translations.totalCoupons[lang]"
            :success="success.totalCoupons"
            :error-messages="error.totalCoupons"
            @focus="error.totalCoupons = ''"
            @blur="validateTotalCoupons"
        ></b-text-field>

        <b-text-field
            v-model="couponWithCode.gift_title"
            :label="translations.giftTitle[lang]"
            :success="success.giftTitle"
            :error-messages="error.giftTitle"
            @focus="error.giftTitle = ''"
            @blur="validateGiftTitle"
        ></b-text-field>

        <b-textarea
            v-model="couponWithCode.gift_description"
            :label="translations.giftDescription[lang]"
            :success="success.giftDescription"
            :error-messages="error.giftDescription"
            @focus="error.giftDescription = ''"
            @blur="validateGiftDescription"
        ></b-textarea>

        <v-checkbox
            v-model="showImageUpload"
            color="secondary"
            class="pt-0 mt-3"
            hide-details="auto"
        >
            <template v-slot:label>
                <h4
                    class="secondary--text"
                    v-text="translations.imageCheckbox[lang]"
                ></h4>
            </template>
        </v-checkbox>

        <v-card v-if="showImageUpload" outlined class="mt-3">
            <v-card-title
                class="subtitle-1 font-weight-medium"
                v-text="translations.imageTitle[lang]"
            ></v-card-title>
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
import translations from "@/utils/translations/storePanel/coupons/couponsWithCode/couponWithCodeForm";
import validators from "@/utils/validators/storePanel/couponWithCode";

export default {
    name: "CouponWithCodeForm",

    props: {
        mode: Number
    },

    mixins: [translations, validators],

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
        ...mapState("storePanel/couponsWithCode", [
            "giftCategories",
            "couponWithCode"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1
                ? this.translations.newCoupon[this.lang]
                : this.translations.updateCoupon[this.lang];
        },

        showImageUpload: {
            get() {
                return this.$store.state.storePanel.couponsWithCode
                    .showImageUpload;
            },

            set(val) {
                this.setShowImageUpload(val);
            }
        }
    },

    methods: {
        ...mapMutations(["setResetSuccess", "setResetValidation"]),
        ...mapMutations("storePanel/couponsWithCode", ["setShowImageUpload"]),
        ...mapActions("storePanel/couponsWithCode", [
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

    mounted() {
        this.getGiftCategories();
    }
};
</script>
