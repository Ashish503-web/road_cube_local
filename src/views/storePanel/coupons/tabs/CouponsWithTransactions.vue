<template>
    <v-tab-item :value="$route.path">
        <v-card tile flat>
            <v-row no-gutters class="mt-5">
                <v-col
                    cols="12"
                    sm="6"
                    class="px-3 mx-auto mx-sm-0 text-center text-sm-left"
                >
                    <v-card-title v-text="translations.title[lang]">
                    </v-card-title>
                    <v-card-subtitle>
                        <p
                            class="ma-0"
                            v-text="translations.subtitle1[lang]"
                        ></p>
                        <p v-text="translations.subtitle2[lang]"></p>
                    </v-card-subtitle>
                    <v-img
                        src="@/assets/serial_shopping.jpg"
                        width="280"
                        class="mx-auto mx-sm-0"
                    ></v-img>
                </v-col>

                <v-col v-if="!showAddCoupon" cols="12" sm="6" class="px-3 pt-6">
                    <v-text-field
                        v-model="sequence"
                        :label="translations.rewardAfter[lang]"
                        color="secondary"
                        outlined
                        dense
                        disabled
                    ></v-text-field>
                    <v-text-field
                        v-model="minimum_amount"
                        :label="translations.minTransaction[lang]"
                        color="secondary"
                        outlined
                        dense
                        disabled
                    ></v-text-field>
                    <v-text-field
                        v-model="max_days"
                        :label="translations.maxTime[lang]"
                        color="secondary"
                        outlined
                        dense
                        disabled
                    ></v-text-field>

                    <v-card outlined class="pa-3">
                        <v-row no-gutters align="center">
                            <v-col cols="auto">
                                <v-img
                                    src="@/assets/imageSerial.png"
                                    width="35"
                                ></v-img>
                            </v-col>
                            <v-col cols="auto" class="ml-2">{{
                                gift_title
                            }}</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="auto">{{ code }}</v-col>
                        </v-row>
                    </v-card>

                    <div class="text-right mt-12">
                        <v-btn
                            color="red"
                            class="text-capitalize px-5"
                            depressed
                            dark
                            style="font-size: 1rem"
                            v-text="translations.delete[lang]"
                            @click="deleteDialog = true"
                        ></v-btn>
                    </div>
                </v-col>

                <v-col v-if="showAddCoupon" cols="12" sm="6" class="px-3 pt-6">
                    <b-select
                        v-model="formData.gift_category_id"
                        :items="giftCategories"
                        :item-text="`name[${lang}]`"
                        item-value="gift_category_id"
                        :label="translations.selectCategory[lang]"
                        no-top-margin
                    ></b-select>

                    <b-text-field
                        v-model="formData.goal_sequence"
                        type="number"
                        :label="translations.rewardAfter[lang]"
                    ></b-text-field>

                    <b-text-field
                        v-model="formData.goal_minimum_amount"
                        type="number"
                        :label="translations.minTransaction[lang]"
                    ></b-text-field>

                    <b-text-field
                        v-model="formData.goal_max_days"
                        type="number"
                        :label="translations.maxTime[lang]"
                    ></b-text-field>

                    <b-text-field
                        v-model="formData.gift_title"
                        :label="translations.giftTitle[lang]"
                    ></b-text-field>

                    <b-textarea
                        v-model="formData.gift_description"
                        :label="translations.giftDescription[lang]"
                    ></b-textarea>

                    <b-text-field
                        v-model="formData.maximum"
                        type="number"
                        :label="translations.maximum[lang]"
                    ></b-text-field>

                    <div class="text-right mt-3">
                        <v-btn
                            color="secondary"
                            class="text-capitalize px-5"
                            depressed
                            style="font-size: 1rem"
                            v-text="translations.create[lang]"
                            @click="createCoupon"
                        ></v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-card>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                title="Delete Product"
                submit-text="delete"
                @cancel="deleteDialog = false"
                @submit="deleteCoupon"
            >
                <p>Are you sure?</p>
            </b-card>
        </v-dialog>
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import translations from "@/utils/translations/storePanel/couponsWithTransactions";

export default {
    name: "CouponsWithTransactions",

    mixins: [translations],

    data() {
        return {
            showAddCoupon: true,
            sequence: "",
            minimum_amount: "",
            max_days: "",
            code: "",
            gift_title: "",
            coupon_id: "",
            formData: {
                gift_category_id: "",
                goal_sequence: "",
                goal_minimum_amount: "",
                goal_max_days: "",
                gift_title: "",
                gift_description: "",
                maximum: ""
            },
            deleteDialog: false
        };
    },

    computed: {
        ...mapGetters("storePanel/coupons/couponsWithTransactions", [
            "coupon",
            "giftCategories"
        ]),

        lang() {
            return this.$route.params.lang;
        }
    },

    watch: {
        coupon: function(val) {
            if (val != undefined) {
                this.showAddCoupon = false;
                this.coupon_id = val.coupon_id;
                this.sequence = val.goal_sequence;
                this.minimum_amount = val.goal_minimum_amount;
                this.max_days = val.goal_max_days;
                this.code = val.code;
                this.gift_title = val.gift_title;
            } else {
                this.showAddCoupon = true;
                this.formData.gift_category_id = "";
                this.formData.goal_sequence = "";
                this.formData.goal_minimum_amount = "";
                this.formData.goal_max_days = "";
                this.formData.gift_title = "";
                this.formData.gift_description = "";
                this.formData.maximum = "";
            }
        }
    },

    methods: {
        ...mapActions("storePanel/coupons/couponsWithTransactions", [
            "getCoupon",
            "getGiftCategories",
            "create",
            "remove"
        ]),

        createCoupon() {
            this.create(this.formData);
        },

        deleteCoupon() {
            this.remove(this.coupon_id);
            this.deleteDialog = false;
        }
    },

    mounted() {
        this.getCoupon();
        this.getGiftCategories();
    }
};
</script>
