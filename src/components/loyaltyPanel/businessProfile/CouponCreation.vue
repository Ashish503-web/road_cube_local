<template>
    <b-standard-card
        :title="translations.title[lang]"
        :submit-text="{ el: '', en: 'save', it: '' }"
        height="auto"
        class="mt-5"
        :loading="loading"
        :error-message="errorMessage"
        @submit="updateCouponCreation({ type: 'coupon_creation_type_id', item:coupon_value})"
    >

        <v-row no-gutters>
            <v-col>
                <img
                    src="https://www.roadcube.com/images/roadcube_qr.png"
                    width="100%"
                />
            </v-col>

            <v-col>
                <img
                    src="https://www.roadcube.com/images/roadcube_qr.png"
                    width="100%"
                />
            </v-col>

            <v-col>
                <img
                    src="https://www.roadcube.com/images/roadcube_barcode2.png"
                    width="100%"
                />
            </v-col>
        </v-row>

        <v-radio-group class="mt-0 pt-0" hide-details v-model="coupon_value" column>
            <v-row no-gutters class="font-weight-medium">
                <v-col cols="4">
                    <v-radio color="secondary" class="justify-center" value="1">
                    </v-radio>
                    <h4
                        class="subtitle-1 font-weight-bold text-center"
                        v-text="translations.numericQrCode[lang]"
                    ></h4>
                </v-col>
                <v-col cols="4">
                    <v-radio
                        color="secondary"
                        class="justify-center"
                        value="2"

                    ></v-radio>
                    <h4
                        class="subtitle-1 font-weight-bold text-center"
                        v-text="translations.alphanumericQrCode[lang]"
                    ></h4>
                </v-col>
                <v-col cols="4">
                    <v-radio
                        color="secondary"
                        class="justify-center"
                        value="3"
                    ></v-radio>
                    <h4
                        class="subtitle-1 font-weight-bold text-center"
                        v-text="translations.numericBarcode[lang]"
                    ></h4>
                </v-col>
            </v-row>
        </v-radio-group>
    </b-standard-card>
</template>

<script>
import translations from "@/utils/translations/loyaltyPanel/businessProfile/couponCreation";
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
    name: "CouponCreation",

    mixins: [translations],
    data() {
        return {
            coupon_value: null,
        }
    },

    computed: {

        lang() {
            return this.$route.params.lang;
        },
        loading() {
            return this.$store.state.loyaltyPanel.businessProfile.loading.coupon_creation_type_id;
        },

        errorMessage() {
            return this.$store.state.loyaltyPanel.businessProfile.errorMessage
                .coupon_creation_type_id;
        },
        resetSuccess() {
            return this.$store.state.loyaltyPanel.businessProfile.resetSuccess
                .coupon_creation_type_id;
        },

    },
    watch:{
        ["$store.state.loyaltyPanel.businessProfile.businessProfileData"]: {

            handler(val) {
                this.coupon_value = val.coupon_creation_type_id.toString();
            }
        },
    },
    methods:{
        ...mapMutations("loyaltyPanel/businessProfile", ["setUserPoints"]),
        ...mapActions("loyaltyPanel/businessProfile", [
            "getBussinessProfile",
            "updateCouponCreation"
        ]),
        getCouponValue(){
            let couponValue = this.$store.state.loyaltyPanel.businessProfile.couponValues;
            this.coupon_value = couponValue.toString();


        },
    },
    mounted() {
        this.getCouponValue();
    }

};
</script>
