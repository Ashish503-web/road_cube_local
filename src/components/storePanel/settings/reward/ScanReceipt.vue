<template>
    <b-card
        :title="translations.title[lang]"
        :loading="loading"
        :error-message="errorMessage"
        @cancel="$emit('cancel')"
        @submit="
            updateReward({
                item: billingDetails,
                url: 'billing-details/receipt-information',
                commitText: 'storePanel/setScanReceipt',
                successText: 'scan receipt info'
            })
        "
    >
        <v-row no-gutters>
            <v-col cols="1" sm="auto">
                <v-icon
                    color="secondary"
                    v-text="icons.mdiInformation"
                ></v-icon>
            </v-col>
            <v-col cols="11" class="pl-1">
                {{ translations.info[lang] }}
            </v-col>

            <v-col cols="12" sm="6" class="pr-0 pr-sm-1">
                <b-text-field
                    v-model="billingDetails.receipt_phone"
                    type="number"
                    :label="translations.telephone[lang]"
                ></b-text-field>
            </v-col>

            <v-col cols="12" sm="6" class="pl-0 pl-sm-1">
                <b-text-field
                    v-model="billingDetails.receipt_vat_number"
                    type="number"
                    :label="translations.vatNumber[lang]"
                ></b-text-field>
            </v-col>

            <v-col cols="12" sm="6" class="pr-0 pr-sm-1">
                <b-text-field
                    v-model="billingDetails.receipt_address"
                    :label="translations.address[lang]"
                ></b-text-field>
            </v-col>

            <v-col cols="12" sm="6" class="pl-0 pl-sm-1">
                <b-text-field
                    v-model="billingDetails.receipt_comp_name"
                    :label="translations.name[lang]"
                ></b-text-field>
            </v-col>
        </v-row>
    </b-card>
</template>

<script>
import { mdiInformation } from "@mdi/js";
import { mapState, mapActions } from "vuex";
import translations from "@/utils/translations/storePanel/settings/reward/scanReceipt";

export default {
    name: "ScanReceipt",

    mixins: [translations],

    data: () => ({
        icons: { mdiInformation },
        billingDetails: {}
    }),

    computed: {
        ...mapState(["loading", "errorMessage"]),

        lang() {
            return this.$route.params.lang;
        }
    },

    methods: {
        ...mapActions("storePanel/settings/reward", ["updateReward"])
    },

    watch: {
        ["$store.state.storePanel.store.billing_details"]: {
            immediate: true,
            handler(val) {
                this.billingDetails = {
                    receipt_phone: val.receipt_phone,
                    receipt_vat_number: val.receipt_vat_number,
                    receipt_address: val.receipt_address,
                    receipt_comp_name: val.receipt_comp_name
                };
            }
        }
    },

    mounted() {
        this.$clearFocus();
    }
};
</script>
