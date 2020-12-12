<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-row no-gutters class="pa-5">
            <v-col cols="auto">
                <v-img
                    src="@/assets/redeem-voucher-code.png"
                    width="80"
                    height="80"
                ></v-img>
            </v-col>

            <v-col cols="6" class="ml-5">
                <h4 v-text="translations.title[lang]"></h4>
                <div
                    style="font-size: 0.875rem"
                    class="font-weight-medium mt-2"
                    v-text="translations.info[lang]"
                ></div>

                <v-row no-gutters align="center" class="mt-5">
                    <v-col cols="7">
                        <b-text-field
                            v-model="voucher"
                            :label="translations.voucherCode[lang]"
                            no-top-margin
                        ></b-text-field>
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
                </v-row>
            </v-col>
        </v-row>

        <v-row
            no-gutters
            style="font-size: 0.875rem"
            class="font-weight-medium mt-10 ml-5"
        >
            <v-col cols="auto">
                <v-icon v-text="icons.mdiInformationOutline"></v-icon>
            </v-col>
            <v-col cols="7" class="ml-3">
                {{ translations.info2[lang] }}
            </v-col>
        </v-row>
    </v-tab-item>
</template>

<script>
import { mdiArrowRight, mdiInformationOutline } from "@mdi/js";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import translations from "@/utils/translations/storePanel/redeemVoucher";

export default {
    name: "RedeemVoucherCode",

    mixins: [translations],

    data: () => ({
        icons: { mdiArrowRight, mdiInformationOutline },
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
