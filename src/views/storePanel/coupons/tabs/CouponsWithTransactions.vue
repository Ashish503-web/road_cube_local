<template>
    <v-tab-item :value="$route.path">
        <v-card tile flat>
            <v-row no-gutters class="mt-5">
                <v-col
                    cols="12"
                    sm="6"
                    class="px-3 mx-auto mx-sm-0 text-center text-sm-left"
                >
                    <v-card-title>
                        <v-col class="pa-0">Coupons with transactions</v-col>
                        <v-col cols="auto" class="pa-0"></v-col>
                    </v-card-title>
                    <v-card-subtitle>
                        <p class="ma-0">
                            Reward every x transactions with a coupon.
                        </p>
                        <p>
                            Consumers who meet the conditions automatically
                            receive the coupon.
                        </p>
                    </v-card-subtitle>
                    <v-img
                        src="@/assets/serial_shopping.jpg"
                        width="280"
                        class="mx-auto mx-sm-0"
                    ></v-img>
                </v-col>

                <v-col cols="12" sm="6" class="px-3 pt-6">
                    <v-text-field
                        v-model="sequence"
                        label="Reward user after"
                        color="secondary"
                        outlined
                        dense
                        disabled
                    ></v-text-field>
                    <v-text-field
                        v-model="minimum_amount"
                        label="Minimum transaction limit in euro"
                        color="secondary"
                        outlined
                        dense
                        disabled
                    ></v-text-field>
                    <v-text-field
                        v-model="max_days"
                        label="Maximum time between visits: (Days)"
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
                            <v-col cols="auto" class="ml-2">{{ gift_title }}</v-col>
                            <v-spacer></v-spacer>
                            <v-col cols="auto">{{ code }}</v-col>
                        </v-row>
                    </v-card>

                    <v-card-actions class="mt-12">
                        <v-spacer></v-spacer>
                        <v-btn
                            color="red"
                            class="text-capitalize px-5"
                            depressed
                            dark
                            @click="deleteCoupon()"
                            >delete</v-btn
                        >
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-tab-item>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
    name: "CouponsWithTransactions",

    data() {
        return {
            sequence: "",
            minimum_amount: "",
            max_days: "",
            code: "",
            gift_title: "",
            coupon_id: ""
        };
    },

    computed: {
        ...mapGetters("storePanel/coupons/couponsWithTransactions", ["coupon"]),
    },

    watch: {
        coupon: function(val){
            this.coupon_id = val.coupon_id
            this.sequence = val.goal_sequence
            this.minimum_amount = val.goal_minimum_amount
            this.max_days = val.goal_max_days
            this.code = val.code
            this.gift_title = val.gift_title
        }
    },

    methods: {
        ...mapActions("storePanel/coupons/couponsWithTransactions", [
            "getCoupon",
            "remove"
        ]),

        deleteCoupon(){
            this.remove(this.coupon_id)
        }
    },

    mounted(){
        this.getCoupon()
    }
};
</script>
