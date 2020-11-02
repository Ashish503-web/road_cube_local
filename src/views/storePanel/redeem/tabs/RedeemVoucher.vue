<template>
    <v-tab-item :value="$route.path">
        <v-card-text v-text="translations.info[lang]"></v-card-text>
        <v-card-title class="subtitle-1 font-weight-medium">
            <v-col cols="auto" v-text="translations.couponCode[lang]"></v-col>
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
            <v-btn
                color="secondary"
                class="text-capitalize ml-3"
                depressed
                @click="sendRequest()"
            >
                <v-icon
                    class="mr-2"
                    size="20"
                    v-text="icons.mdiArrowRight"
                ></v-icon>
                {{ translations.validation[lang] }}
            </v-btn>
        </v-card-title>
    </v-tab-item>
</template>

<script>
import { mdiArrowRight } from "@mdi/js";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import translations from "@/utils/translations/storePanel/redeemVoucher";

export default {
    name: "RedeemVoucher",

    mixins: [translations],

    data: () => ({
        icons: { mdiArrowRight },
        voucher: ""
    }),

    computed: {
        lang() {
            return this.$route.params.lang;
        }
    },

    methods: {
        ...mapActions("storePanel/redeem/redeemVoucher", ["create"]),

        sendRequest() {
            if (this.voucher != "") {
                let formData = {
                    voucher: this.voucher
                };
                this.create(formData);
            }
        }
    }
};
</script>
