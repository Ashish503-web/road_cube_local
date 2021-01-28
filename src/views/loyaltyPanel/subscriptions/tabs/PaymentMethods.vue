<template>
    <v-tab-item :value="$route.path" class="pa-3">
        <v-toolbar flat height="90">
            <v-btn color="secondary" class="text-capitalize" depressed
            @click="open(1,{})"
                >Add payment method
            </v-btn>
        </v-toolbar>

        <v-data-table
            :headers="headers"
            :items="companyPaymentMethods"
            disable-sort
            hide-default-footer
            class="b-outlined"
        >
            <template v-slot:item.system_payment_method.image="{ item }">
                    <img
                        :src="'https://www.roadcube.com/images/payments/' + item.system_payment_method.image"
                        alt=""
                        width="70"
                        height="30"
                        class="mt-2"
                    />
            </template>

            <template v-slot:item.actions="{ item }">
                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    paymentMethodAdditionalInfo = item;
                                    infoDialog = true;
                                }
                            "
                        >
                            <v-icon v-text="icons.mdiEye"></v-icon>
                        </v-btn>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="translations.showAdditionalInfo[lang]"
                    ></span>
                </v-tooltip>

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="yellow darken-3"
                            icon
                            v-on="on"
                            @click="open(2,item)"
                        >
                            <v-icon v-text="icons.mdiPencilOutline"></v-icon>
                        </v-btn>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="translations.update[lang]"
                    ></span>
                </v-tooltip>

                <v-tooltip color="secondary" top>
                    <template v-slot:activator="{ on }">
                        <v-btn
                            color="red"
                            icon
                            v-on="on"
                            @click="
                                () => {
                                    deleteDialog = true;
                                }
                            "
                        >
                            <v-icon v-text="icons.mdiClose"></v-icon>
                        </v-btn>
                    </template>

                    <span
                        class="font-weight-bold"
                        v-text="translations.delete[lang]"
                    ></span>
                </v-tooltip>
            </template>
        </v-data-table>

        <v-dialog v-model="infoDialog" max-width="500">
            <AdditionalInfo @cancel="infoDialog = false" />
        </v-dialog>

        <v-dialog v-model="dialog" max-width="600">
            <PaymentMethodForm :mode="mode" @cancel="dialog = false" />
        </v-dialog>

        <v-dialog v-model="deleteDialog" max-width="500">
            <b-card
                type="delete"
                title="Delete Payment Method"
                :loading="loading"
                :error-message="errorMessage"
                :submit-text="{ el: '', en: 'delete', it: '' }"
                @cancel="deleteDialog = false"
                @submit="removePaymentMethod"
            >
                <div class="subtitle-1 font-weight-medium pl-2">
                    Are you sure you want to delete
                    <span class="font-weight-bold text--primary">Payment Method</span>?
                </div>
            </b-card>
        </v-dialog>
        
        <!-- <v-row class="mb-6" no-gutters>
            <v-col cols="12" lg="2" md="3" sm="6" class="border_top_payment mr-5" v-for="(item,index) in companyPaymentMethods" :key="index">
                <v-card class="pa-2 grey lighten-5 text-center" outlined tile>
                    <v-icon
                        v-text="icons.mdiOfficeBuildingOutline"
                        size="14"
                        color="#eaedf1"
                        style="cursor: pointer"
                        class="mr-sm-5 build_icon"
                    ></v-icon>
                    <v-icon
                        v-text="icons.mdiClose"
                        size="14"
                        color="#eaedf1"
                        class="mr-sm-5 close_icon"
                    ></v-icon>
                    <img
                        :src="'https://www.roadcube.com/images/payments/' + item.system_payment_method.image"
                        alt=""
                        width="120"
                        height="50"
                    />
                    <v-card-subtitle>{{ item.system_payment_method.name[lang] }}</v-card-subtitle>
                    <v-card-text>
                        <div class="text-decoration-underline">{{ item.system_payment_method.description[lang] }}</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row> -->
    </v-tab-item>
</template>

<script>
import { mdiOfficeBuildingOutline, mdiClose, mdiPencilOutline, mdiEye } from "@mdi/js";
import { mapState, mapMutations, mapActions } from "vuex";
import translations from "@/utils/translations/loyaltyPanel/subscriptions/paymentMethods";
import AdditionalInfo from "@/components/loyaltyPanel/subscriptions/AdditionalInfo.vue";
import PaymentMethodForm from "@/components/loyaltyPanel/subscriptions/PaymentMethodForm.vue";
import validators from "@/utils/validators/loyaltyPanel/subscriptions";

export default {
    name: "Pending",

    mixins: [translations,validators],

    components: { AdditionalInfo, PaymentMethodForm },

    data: () => ({
        icons: {
            mdiOfficeBuildingOutline,
            mdiClose,
            mdiPencilOutline,
            mdiEye
        },
        infoDialog: false,
        mode: 1
    }),

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("loyaltyPanel/subscriptions", [
            "companyPaymentMethods"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        paymentMethodAdditionalInfo: {
            get(){
                return this.$store.state.loyaltyPanel.subscriptions.paymentMethodAdditionalInfo;
            },
            set(val){
                this.setPaymentMethodAdditionalInfo(val)
            }
        },

        paymentMethod: {
            get(){
                return this.$store.state.loyaltyPanel.subscriptions.paymentMethod;
            },
            set(val){
                this.setPaymentMethod(val)
            }
        },

        dialog: {
            get() {
                return this.$store.state.dialog;
            },

            set(val) {
                this.setDialog(val);
            },
        },

        deleteDialog: {
            get() {
                return this.$store.state.deleteDialog;
            },

            set(val) {
                this.setDeleteDialog(val);
            },
        },

        headers() {
            return [
                {
                    text: this.translations.image[this.lang],
                    value: `system_payment_method.image`,
                },
                { 
                    text: this.translations.name[this.lang],
                    value: `system_payment_method.name[${this.lang}]` 
                },
                {
                    text: this.translations.description[this.lang],
                    value: `system_payment_method.description[${this.lang}]`,
                },
                { 
                    text: this.translations.actions[this.lang], 
                    value: "actions" 
                }
            ];
        },
    },

    methods: {
        ...mapMutations([
            "setDialog",
            "setDeleteDialog",
            "setResetSuccess",
            "setResetValidation",
        ]),
        ...mapMutations("loyaltyPanel/subscriptions", [
            "setPaymentMethodAdditionalInfo",
            "setPaymentMethod"
        ]),
        ...mapActions("loyaltyPanel/subscriptions", [
            "getCompanyPaymentMethods",
            "removePaymentMethod",
            "getPaymentMethodProfile"
        ]),

        open(mode, item) {
            this.mode = mode;
            if(mode == 1){
                this.paymentMethod = {};
            }else{
                this.getPaymentMethodProfile(item.system_payment_method_id)
            }
            
            setTimeout(() => this.setResetSuccess(true), 300);
            this.setResetValidation(true);
            this.dialog = true;
        },
    },

    mounted(){
        this.getCompanyPaymentMethods()
    }
};
</script>
<style scoped>
.border_top_payments_title {
    border-top: 2px solid #018f6742;
}

.border_top_payment {
    border-top: 3px solid #ffee05;
}

.build_icon {
    position: absolute;
    left: 0;
    top: 0;
    color: black !important;
}
.close_icon {
    position: absolute;
    right: -15px;
    top: 0;
    color: black !important;
}
</style>
