<template>
    <v-tab-item :value="$route.path">
        <v-card-text>
            When the customer wins a discount or a gift our system will generate
            a voucher which will have a code. This voucher will be sended in the
            user account. Type the voucher code below
        </v-card-text>
        <v-card-title class="subtitle-1 font-weight-medium">
            <v-col cols="auto">Coupon Code</v-col>
            <v-col cols="auto">
                <v-text-field
                    color="secondary"
                    outlined
                    dense
                    clearable
                    hide-details
                    v-model="voucher"
                ></v-text-field>
            </v-col>
            <v-btn color="secondary" class="text-capitalize ml-3" depressed @click="sendRequest()">
                <v-icon
                    class="mr-2"
                    size="20"
                    v-text="icons.mdiArrowRight"
                ></v-icon
                >validation
            </v-btn>
        </v-card-title>
    </v-tab-item>
</template>

<script>
import { mdiArrowRight } from "@mdi/js";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
    name: "RedeemVoucher",

    data: () => ({
        icons: { mdiArrowRight },
        voucher: ""
    }),

    methods: {
        ...mapActions("storePanel/redeem/redeemVoucher", [
            "create"
        ]),

        sendRequest(){
            if(this.voucher != ""){
                let formData = {
                    "voucher": this.voucher
                }
                this.create(formData)
            }
        }
    }
};
</script>
