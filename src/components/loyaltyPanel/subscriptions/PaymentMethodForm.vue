<template>
    <b-card
        :title="title"
        :loading="loading"
        :error-message="errorMessage"
        :disabled="mode === 1 ? !formValid : false"
        @cancel="$emit('cancel')"
        @submit="mode === 1 ? createPaymentMethod() : updatePaymentMethod()"
    >

    <v-row no-gutters>
        <v-col cols="12" class="pl-2">
            <b-select
                v-model="paymentMethod.system_payment_method_id"
                :items="systemPaymentMethods"
                :item-text="`name[${lang}]`"
                item-value="system_payment_method_id"
                label="System Payment Method"
                no-top-margin
                :success="success.system_payment_method"
                :error-messages="error.system_payment_method"
                @focus="error.system_payment_method = ''"
                @blur="validateSystemPaymentMethod"
            ></b-select>
        </v-col>

        <v-col cols="12" class="pl-2 mt-4">
            <h3 
                class="subtitle-1 font-weight-bold"
                v-text="translations.credentials[lang]"
            ></h3>
        </v-col>

        <v-col cols="6" class="pl-2">
            <b-text-field
                v-model="paymentMethod.credentials.name"
                label="Name"
                :success="success.name"
                :error-messages="error.name"
                @focus="error.name = ''"
                @blur="validateName"
            ></b-text-field>
        </v-col>

        <v-col cols="6" class="pl-2">
            <b-text-field
                v-model="paymentMethod.credentials.iban"
                label="Iban"
                :success="success.iban"
                :error-messages="error.iban"
                @focus="error.iban = ''"
                @blur="validateIban"
            ></b-text-field>
        </v-col>


    </v-row>
        
    </b-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import validators from "@/utils/validators/loyaltyPanel/subscriptions";
import translations from "@/utils/translations/loyaltyPanel/subscriptions/paymentMethods";

export default {
    name: "StoreForm",

    mixins: [validators,translations],

    props: {
        mode: Number,
    },

    data: () => ({
        
    }),

    computed: {
        ...mapState([
            "loading",
            "errorMessage",
            "resetSuccess",
            "resetValidation",
        ]),
        ...mapState("loyaltyPanel/subscriptions", [
            "systemPaymentMethods"
        ]),

        lang() {
            return this.$route.params.lang;
        },

        title() {
            return this.mode === 1 ? "New Payment Method" : "Update Payment Method";
        },

        paymentMethod: {
            get(){
                return this.$store.state.loyaltyPanel.subscriptions.paymentMethod;
            },
            set(){
                this.setPaymentMethod()
            }
        },
    },

    methods: {
        ...mapActions("loyaltyPanel/subscriptions", [
            "getSystemPaymentMethods",
            "createPaymentMethod",
            "updatePaymentMethod"
        ]),
        ...mapMutations("loyaltyPanel/subscriptions", [
            "setPaymentMethod"
        ]),
        
    },

    watch: {
        
    },

    mounted() {
        this.getSystemPaymentMethods()
    },
};
</script>
